# Architecture rules

- Honor system reduced-motion preferences through the app-level MotionConfig and global CSS; separately guard JavaScript-driven continuous effects because CSS and MotionConfig cannot stop third-party animation engines.
- Keep hero decoration in one SVG animation loop with DOM-only frame updates, a retained logical clock, and scoped pointer listeners; suspend it when paused, offscreen, hidden, or reduced motion is requested to avoid background work and resume jumps.