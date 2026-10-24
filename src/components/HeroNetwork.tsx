import React, { useEffect, useRef } from "react";

type MeshNode = { x: number; y: number; r: number; mobile?: boolean; focal?: boolean };

// Intentionally staggered, sparse rows rather than a regular lattice.
const NODES: MeshNode[] = [
  { x: 120, y: 140, r: 2.5, mobile: true },
  { x: 214, y: 113, r: 2 },
  { x: 300, y: 90, r: 2.8, mobile: true },
  { x: 404, y: 112, r: 2 },
  { x: 500, y: 150, r: 2.8, mobile: true },
  { x: 151, y: 231, r: 2 },
  { x: 248, y: 208, r: 2.3 },
  { x: 352, y: 192, r: 2.2 },
  { x: 449, y: 245, r: 2.5 },
  { x: 548, y: 244, r: 2 },
  { x: 110, y: 400, r: 2.5 },
  { x: 200, y: 310, r: 2.2 },
  { x: 320, y: 300, r: 4.5, mobile: true, focal: true },
  { x: 430, y: 330, r: 2.8, mobile: true },
  { x: 560, y: 320, r: 2.5, mobile: true },
  { x: 190, y: 442, r: 2 },
  { x: 291, y: 413, r: 2.4 },
  { x: 387, y: 427, r: 2.1 },
  { x: 494, y: 411, r: 2.2 },
  { x: 280, y: 520, r: 2.5, mobile: true },
  { x: 385, y: 512, r: 2 },
  { x: 470, y: 470, r: 2.8, mobile: true },
  { x: 555, y: 503, r: 2 },
];

type Edge = { a: number; b: number; mobile: boolean };
const edgeMap = new Map<string, Edge>();
const connect = (indices: number[], neighbors: number, limit: number, mobile: boolean) => {
  indices.forEach((a) => {
    indices.filter((b) => a !== b)
      .map((b) => ({ b, distance: Math.hypot(NODES[a].x - NODES[b].x, NODES[a].y - NODES[b].y) }))
      .filter(({ distance }) => distance < limit)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, neighbors)
      .forEach(({ b }) => {
        const lo = Math.min(a, b), hi = Math.max(a, b);
        const key = `${lo}-${hi}`;
        const existing = edgeMap.get(key);
        edgeMap.set(key, { a: lo, b: hi, mobile: mobile || existing?.mobile || false });
      });
  });
};
connect(NODES.map((_, i) => i), 3, 155, false);
connect(NODES.flatMap((n, i) => n.mobile ? [i] : []), 2, 245, true);
const EDGES = [...edgeMap.values()];
// Every hop follows an existing edge. Five routes arrive at the focal node.
const SIGNALS = [
  { route: [2, 12], offset: 0, duration: 5.6, cycle: 9.2, mobile: true },
  { route: [21, 19, 12], offset: 2.5, duration: 6.6, cycle: 9.8, mobile: true },
  { route: [14, 13, 12], offset: 4.9, duration: 6.1, cycle: 9.5, mobile: false },
  { route: [3, 7, 12], offset: 7.4, duration: 6.4, cycle: 10.1, mobile: false },
  { route: [10, 11, 12], offset: 1.2, duration: 6.8, cycle: 10.3, mobile: false },
  { route: [4, 14, 21], offset: 6.2, duration: 6.3, cycle: 9.7, mobile: true },
  { route: [0, 6, 7], offset: 3.7, duration: 6, cycle: 9.4, mobile: false },
  { route: [17, 18, 22], offset: 8.3, duration: 6.5, cycle: 10, mobile: false },
];
const PRIMARY = "hsl(var(--primary))";
const SIGNAL = "hsl(var(--signal))";
const hide = (mobile?: boolean) => mobile ? undefined : "max-md:hidden";

interface HeroNetworkProps { animate: boolean; paused: boolean }

const HeroNetwork = ({ animate, paused }: HeroNetworkProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const clock = useRef(0);
  const pauseRef = useRef(paused);
  const syncRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    pauseRef.current = paused;
    syncRef.current?.();
  }, [paused]);

  useEffect(() => {
    const svg = svgRef.current;
    const section = svg?.closest("section");
    if (!svg || !section || !animate) {
      clock.current = 0;
      return;
    }
    const groups = Array.from(svg.querySelectorAll<SVGGElement>("[data-node]"));
    const lines = Array.from(svg.querySelectorAll<SVGLineElement>("[data-edge]"));
    const signals = Array.from(svg.querySelectorAll<SVGCircleElement>("[data-signal]"));
    const phone = window.matchMedia("(max-width: 767px)");
    const desktopPointer = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
    let visible = false, frame = 0, previous = 0;
    let amplitude = phone.matches ? 0.45 : desktopPointer.matches ? 1 : 0.65;
    let pointer: { x: number; y: number } | null = null;
    const emphasis = NODES.map(() => 0);
    const positions = NODES.map((n) => ({ x: n.x, y: n.y }));

    const render = (delta: number) => {
      const t = clock.current;
      const targetAmplitude = phone.matches ? 0.45 : desktopPointer.matches ? 1 : 0.65;
      const blend = 1 - Math.exp(-delta * 4);
      amplitude += (targetAmplitude - amplitude) * blend;
      NODES.forEach((n, i) => {
        const phase = i * 2.399;
        const period = 7 + (i % 6);
        const dx = (Math.sin(t * Math.PI * 2 / period + phase) - Math.sin(phase)) * 4 * amplitude;
        const dy = (Math.cos(t * Math.PI * 2 / (period + 0.7) + phase) - Math.cos(phase)) * 3.5 * amplitude;
        positions[i].x = n.x + dx;
        positions[i].y = n.y + dy;
        const distance = pointer && desktopPointer.matches ? Math.hypot(pointer.x - positions[i].x, pointer.y - positions[i].y) : 200;
        const target = Math.max(0, 1 - distance / 130) ** 2;
        emphasis[i] += (target - emphasis[i]) * blend;
        groups[i]?.setAttribute("transform", `translate(${dx.toFixed(3)} ${dy.toFixed(3)})`);
        groups[i]?.setAttribute("opacity", (0.78 + emphasis[i] * 0.22).toFixed(3));
      });
      EDGES.forEach((e, i) => {
        const a = positions[e.a], b = positions[e.b], line = lines[i];
        line?.setAttribute("x1", a.x.toFixed(3));
        line?.setAttribute("y1", a.y.toFixed(3));
        line?.setAttribute("x2", b.x.toFixed(3));
        line?.setAttribute("y2", b.y.toFixed(3));
        line?.setAttribute("stroke-opacity", (0.29 + Math.max(emphasis[e.a], emphasis[e.b]) * 0.22).toFixed(3));
      });
      SIGNALS.forEach((s, i) => {
        const elapsed = (t + s.offset) % s.cycle;
        const progress = Math.min(elapsed / s.duration, 1);
        const lengths = s.route.slice(1).map((node, hop) => {
          const a = positions[s.route[hop]], b = positions[node];
          return Math.hypot(b.x - a.x, b.y - a.y);
        });
        let distance = progress * lengths.reduce((sum, length) => sum + length, 0);
        let hop = 0;
        while (hop < lengths.length - 1 && distance > lengths[hop]) {
          distance -= lengths[hop];
          hop += 1;
        }
        const a = positions[s.route[hop]], b = positions[s.route[hop + 1]];
        const fraction = Math.min(distance / lengths[hop], 1);
        // Stay visible through the last segment and a 200ms arrival before fading.
        const smooth = (value: number) => value * value * (3 - 2 * value);
        const fadeIn = smooth(Math.min(elapsed / 0.3, 1));
        const fadeOut = smooth(Math.max(0, Math.min((elapsed - s.duration - 0.2) / 0.55, 1)));
        signals[i]?.setAttribute("cx", (a.x + (b.x - a.x) * fraction).toFixed(3));
        signals[i]?.setAttribute("cy", (a.y + (b.y - a.y) * fraction).toFixed(3));
        signals[i]?.setAttribute("opacity", (fadeIn * (1 - fadeOut) * 0.75).toFixed(3));
      });
      svg.dataset.time = t.toFixed(4);
    };
    const tick = (now: number) => {
      frame = 0;
      const delta = previous ? Math.min((now - previous) / 1000, 0.05) : 0;
      previous = now;
      clock.current += delta;
      render(delta);
      frame = requestAnimationFrame(tick);
    };
    const sync = () => {
      const running = visible && !document.hidden && !pauseRef.current;
      svg.dataset.running = String(running);
      if (!running) {
        cancelAnimationFrame(frame);
        frame = 0;
        previous = 0;
      } else if (!frame) {
        previous = 0;
        frame = requestAnimationFrame(tick);
      }
    };
    syncRef.current = sync;
    render(0);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(section);
    const move = (event: PointerEvent) => {
      if (!desktopPointer.matches || event.pointerType !== "mouse" || pauseRef.current || document.hidden || !visible) return;
      const matrix = svg.getScreenCTM();
      if (!matrix) return;
      const point = svg.createSVGPoint();
      point.x = event.clientX; point.y = event.clientY;
      const local = point.matrixTransform(matrix.inverse());
      pointer = { x: local.x, y: local.y };
    };
    const leave = () => { pointer = null; };
    const mediaChange = () => { pointer = null; };
    section.addEventListener("pointermove", move, { passive: true });
    section.addEventListener("pointerleave", leave);
    desktopPointer.addEventListener("change", mediaChange);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      section.removeEventListener("pointermove", move);
      section.removeEventListener("pointerleave", leave);
      desktopPointer.removeEventListener("change", mediaChange);
      document.removeEventListener("visibilitychange", sync);
      syncRef.current = null;
      groups.forEach((g) => { g.removeAttribute("transform"); g.setAttribute("opacity", "0.78"); });
      lines.forEach((line, i) => {
        const e = EDGES[i];
        line.setAttribute("x1", String(NODES[e.a].x)); line.setAttribute("y1", String(NODES[e.a].y));
        line.setAttribute("x2", String(NODES[e.b].x)); line.setAttribute("y2", String(NODES[e.b].y));
        line.setAttribute("stroke-opacity", "0.29");
      });
      svg.dataset.running = "false";
      svg.dataset.time = "0";
    };
  }, [animate]);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <svg
        ref={svgRef}
        focusable="false"
        viewBox="0 0 600 600"
        className="absolute top-1/2 -translate-y-1/2 right-[-50%] w-[125%] max-w-none opacity-80 md:right-[-12%] md:w-[85%] md:opacity-60 lg:right-[1%] lg:w-[46%] lg:max-w-[720px] lg:opacity-100"
      >
        <defs>
          <radialGradient id="hn-halo">
            <stop offset="0%" stopColor={SIGNAL} stopOpacity="0.55" />
            <stop offset="45%" stopColor={PRIMARY} stopOpacity="0.18" />
            <stop offset="100%" stopColor={PRIMARY} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hn-hub">
            <stop offset="0%" stopColor={PRIMARY} stopOpacity="0.28" />
            <stop offset="100%" stopColor={PRIMARY} stopOpacity="0" />
          </radialGradient>
        </defs>
        <g stroke={PRIMARY} strokeWidth="1" strokeLinecap="round">
          {EDGES.map((e) => (
            <line key={`${e.a}-${e.b}`} data-edge={`${e.a}-${e.b}`} className={hide(e.mobile)}
              x1={NODES[e.a].x} y1={NODES[e.a].y} x2={NODES[e.b].x} y2={NODES[e.b].y} strokeOpacity="0.29" />
          ))}
        </g>
        {NODES.map((n, i) => (
          <g key={i} data-node={i} className={hide(n.mobile)} opacity="0.78">
            {n.focal && <circle cx={n.x} cy={n.y} r="120" fill="url(#hn-hub)" />}
            {n.focal && <circle cx={n.x} cy={n.y} r="15" fill="none" stroke={SIGNAL} strokeOpacity="0.35" strokeWidth="1" />}
            <circle cx={n.x} cy={n.y} r={n.r * 4} fill="url(#hn-halo)" opacity="0.7" />
            <circle cx={n.x} cy={n.y} r={n.r} fill={n.focal || i === 8 ? SIGNAL : PRIMARY} fillOpacity="0.95" />
          </g>
        ))}
        {animate && SIGNALS.map((s, i) => (
          <circle key={i} data-signal={i} className={i >= 6 ? "max-lg:hidden" : hide(s.mobile)} r="2.3" fill={SIGNAL} opacity="0" />
        ))}
      </svg>
      {/* Preserve the existing text-protection mask at every breakpoint. */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/45 to-transparent lg:from-navy/40 lg:via-transparent" />
    </div>
  );
};

export default HeroNetwork;
