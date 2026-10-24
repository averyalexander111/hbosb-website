import React, { useEffect, useRef } from "react";

/**
 * Decorative connected network for the homepage hero.
 * Lightweight SVG + SMIL signals. Signals are paused via SVGSVGElement.pauseAnimations()
 * when the user pauses, when the hero is offscreen, or never rendered under reduced motion.
 */

type Node = { id: string; x: number; y: number; r: number; secondary?: boolean };

const NODES: Node[] = [
  { id: "A", x: 120, y: 140, r: 3 },
  { id: "B", x: 300, y: 90, r: 3.5 },
  { id: "C", x: 500, y: 150, r: 3.5 },
  { id: "D", x: 560, y: 320, r: 3 },
  { id: "E", x: 470, y: 470, r: 3.5 },
  { id: "F", x: 280, y: 520, r: 3, secondary: true },
  { id: "G", x: 110, y: 400, r: 3, secondary: true },
  { id: "I", x: 200, y: 270, r: 2.5, secondary: true },
  { id: "J", x: 430, y: 300, r: 3.5 },
  { id: "H", x: 320, y: 300, r: 5.5 },
];

const pos = Object.fromEntries(NODES.map((n) => [n.id, n]));

const EDGES: [string, string, boolean?][] = [
  ["A", "B"],
  ["B", "C"],
  ["C", "D"],
  ["D", "E"],
  ["E", "F", true],
  ["F", "G", true],
  ["G", "I", true],
  ["I", "A", true],
  ["I", "H", true],
  ["H", "J"],
  ["J", "C"],
  ["J", "E"],
  ["B", "H"],
  ["H", "F", true],
  ["J", "D"],
];

// Each signal travels from one node to another once per cycle; the target node glows on arrival.
const SIGNALS: { from: string; to: string; begin: number; secondary?: boolean }[] = [
  { from: "B", to: "H", begin: 0 },
  { from: "D", to: "J", begin: 2.6, secondary: true },
  { from: "G", to: "I", begin: 5.2, secondary: true },
];
const CYCLE = 7.8;

const PRIMARY = "hsl(var(--primary))";
const SIGNAL = "hsl(var(--signal))";

interface HeroNetworkProps {
  animate: boolean;
  paused: boolean;
}

const HeroNetwork = ({ animate, paused }: HeroNetworkProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const visibleRef = useRef(true);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || !animate) return;
    const apply = () => {
      if (paused || !visibleRef.current) svg.pauseAnimations();
      else svg.unpauseAnimations();
    };
    apply();
    const io = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting;
      apply();
    });
    io.observe(svg);
    return () => io.disconnect();
  }, [animate, paused]);

  const hide = (secondary?: boolean) => (secondary ? "max-md:hidden" : undefined);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <svg
        ref={svgRef}
        focusable="false"
        viewBox="0 0 600 600"
        className="absolute top-1/2 -translate-y-1/2 right-[-38%] w-[115%] max-w-none opacity-50 md:right-[-12%] md:w-[85%] md:opacity-60 lg:right-[1%] lg:w-[46%] lg:max-w-[720px] lg:opacity-100"
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

        {/* Soft hub glow */}
        <circle cx={pos.H.x} cy={pos.H.y} r="120" fill="url(#hn-hub)" />

        {/* Connections */}
        <g stroke={PRIMARY} strokeWidth="1" strokeLinecap="round">
          {EDGES.map(([a, b, secondary]) => (
            <line
              key={a + b}
              className={hide(secondary)}
              x1={pos[a].x}
              y1={pos[a].y}
              x2={pos[b].x}
              y2={pos[b].y}
              strokeOpacity="0.38"
            />
          ))}
        </g>

        {/* Hub ring (static) */}
        <circle cx={pos.H.x} cy={pos.H.y} r="15" fill="none" stroke={SIGNAL} strokeOpacity="0.35" strokeWidth="1" />

        {/* Nodes */}
        {NODES.map((n) => (
          <g key={n.id} className={hide(n.secondary)}>
            <circle cx={n.x} cy={n.y} r={n.r * 4} fill="url(#hn-halo)" opacity="0.7" />
            <circle cx={n.x} cy={n.y} r={n.r} fill={n.id === "H" ? SIGNAL : PRIMARY} fillOpacity="0.95" />
          </g>
        ))}

        {/* Signals */}
        {animate &&
          SIGNALS.map((s) => {
            const a = pos[s.from];
            const b = pos[s.to];
            const begin = `${s.begin}s`;
            const dur = `${CYCLE}s`;
            return (
              <g key={s.from + s.to} className={hide(s.secondary)}>
                <circle r="2.6" fill={SIGNAL} opacity="0">
                  <animateMotion
                    path={`M${a.x},${a.y} L${b.x},${b.y}`}
                    dur={dur}
                    begin={begin}
                    repeatCount="indefinite"
                    keyPoints="0;1;1"
                    keyTimes="0;0.4;1"
                    calcMode="linear"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;0.9;0.9;0;0"
                    keyTimes="0;0.06;0.36;0.42;1"
                    dur={dur}
                    begin={begin}
                    repeatCount="indefinite"
                  />
                </circle>
                {/* Arrival glow on the target node */}
                <circle cx={b.x} cy={b.y} r={b.r * 4.5} fill="url(#hn-halo)" opacity="0">
                  <animate
                    attributeName="opacity"
                    values="0;0;0.9;0;0"
                    keyTimes="0;0.38;0.44;0.62;1"
                    dur={dur}
                    begin={begin}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
      </svg>

      {/* Readability mask: strong behind text on small screens, light on desktop */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/55 to-transparent lg:from-navy/40 lg:via-transparent" />
    </div>
  );
};

export default HeroNetwork;
