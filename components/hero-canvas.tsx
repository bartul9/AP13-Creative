"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Animated particle-wave field rendered with three.js.
 * Echoes the AP13 "Be creative" brand mark: a flowing grid of cyan points
 * drifting like a digital ocean, with subtle cursor parallax and depth fade.
 */
export function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      54,
      mount.clientWidth / mount.clientHeight,
      0.1,
      200
    );
    camera.position.set(0, 14, 30);
    camera.lookAt(0, -2, -6);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.75);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ---- build the point grid -------------------------------------------
    const isSmall = mount.clientWidth < 760;
    const COLS = isSmall ? 64 : 112;
    const ROWS = isSmall ? 64 : 112;
    const SPREAD_X = 70;
    const SPREAD_Z = 70;

    const count = COLS * ROWS;
    const positions = new Float32Array(count * 3);
    const aRandom = new Float32Array(count);

    let i = 0;
    for (let x = 0; x < COLS; x++) {
      for (let z = 0; z < ROWS; z++) {
        const px = (x / (COLS - 1) - 0.5) * SPREAD_X;
        const pz = (z / (ROWS - 1) - 0.5) * SPREAD_Z;
        positions[i * 3] = px;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = pz;
        aRandom[i] = Math.random();
        i++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    geometry.setAttribute("aRandom", new THREE.BufferAttribute(aRandom, 1));

    const uniforms = {
      uTime: { value: 0 },
      uSize: { value: isSmall ? 40 : 50 },
      uPixelRatio: { value: pixelRatio },
      uColorA: { value: new THREE.Color(0x22e0f2) }, // cyan
      uColorB: { value: new THREE.Color(0x3f7bff) }, // blue
      uColorC: { value: new THREE.Color(0x8df3ff) }, // soft cyan highlight
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `
        uniform float uTime;
        uniform float uSize;
        uniform float uPixelRatio;
        attribute float aRandom;
        varying float vGlow;
        varying float vMix;

        varying float vTwinkle;

        void main() {
          vec3 pos = position;

          // layered traveling waves -> flowing digital ocean
          float w1 = sin(pos.x * 0.16 + uTime * 1.05) * 2.3;
          float w2 = cos(pos.z * 0.20 + uTime * 0.85) * 2.0;
          float w3 = sin((pos.x + pos.z) * 0.12 + uTime * 1.35) * 1.5;
          // a radial ripple emanating from the centre for extra life
          float r = length(pos.xz);
          float ripple = sin(r * 0.32 - uTime * 1.6) * 0.9;
          float h = w1 + w2 + w3 + ripple;
          pos.y = h;

          // radial falloff so the field dissolves into the dark at edges
          float dist = r / 40.0;
          float edge = smoothstep(1.05, 0.18, dist);

          // brighter crests
          vGlow = clamp((h + 4.5) / 8.5, 0.0, 1.0) * edge;
          vMix = clamp((pos.x + 35.0) / 70.0, 0.0, 1.0);
          // per-point shimmer so the field feels electric
          vTwinkle = 0.62 + 0.38 * sin(uTime * 2.4 + aRandom * 28.0);

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          // depth fade (far points dimmer + smaller)
          float depth = clamp((mvPosition.z + 42.0) / 52.0, 0.0, 1.0);
          vGlow *= mix(0.22, 1.0, depth);

          gl_PointSize = uSize * uPixelRatio * (0.5 + aRandom * 0.8) * (0.45 + edge) / -mvPosition.z;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        uniform vec3 uColorC;
        varying float vGlow;
        varying float vMix;
        varying float vTwinkle;

        void main() {
          // soft round point with a hot core
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float alpha = smoothstep(0.5, 0.0, d);
          float core = smoothstep(0.28, 0.0, d);

          vec3 col = mix(uColorB, uColorA, vMix);
          col = mix(col, uColorC, vGlow * 0.75 + core * 0.35);

          float a = alpha * (0.16 + vGlow * 1.15) * vTwinkle;
          gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
        }
      `,
    });

    const points = new THREE.Points(geometry, material);
    points.position.y = -3;
    scene.add(points);

    // ---- interaction -----------------------------------------------------
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const onPointerMove = (e: PointerEvent) => {
      const r = mount.getBoundingClientRect();
      target.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      target.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointerMove);

    // ---- resize ----------------------------------------------------------
    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(mount);

    // ---- loop ------------------------------------------------------------
    const clock = new THREE.Clock();
    let frameId = 0;
    let running = true;

    // cap to ~30fps — plenty for a slow drift, far gentler on the CPU/GPU
    const frameInterval = 1 / 30;
    let lastRender = 0;

    const renderFrame = () => {
      const t = clock.getElapsedTime();
      uniforms.uTime.value = t;

      current.x += (target.x - current.x) * 0.04;
      current.y += (target.y - current.y) * 0.04;

      // slow autonomous drift + mouse parallax — never fully still
      points.rotation.z = current.x * 0.12 + Math.sin(t * 0.15) * 0.04;
      camera.position.x = current.x * 4 + Math.sin(t * 0.18) * 1.6;
      camera.position.y = 14 - current.y * 3 + Math.cos(t * 0.22) * 0.8;
      camera.lookAt(0, -2, -6);

      renderer.render(scene, camera);
    };

    const animate = () => {
      if (!running) return;
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      if (elapsed - lastRender < frameInterval) return;
      lastRender = elapsed;
      renderFrame();
    };

    if (prefersReduced) {
      // single static frame, no animation loop
      uniforms.uTime.value = 2.0;
      renderer.render(scene, camera);
    } else {
      animate();
    }

    // pause when tab not visible
    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(frameId);
      } else if (!prefersReduced) {
        running = true;
        clock.start();
        animate();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    // ---- cleanup ---------------------------------------------------------
    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 h-full w-full" />;
}

export default HeroCanvas;
