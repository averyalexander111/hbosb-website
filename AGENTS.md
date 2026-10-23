# Architecture rules

- Honor system reduced-motion preferences through the app-level MotionConfig and global CSS; separately guard JavaScript-driven continuous effects because CSS and MotionConfig cannot stop third-party animation engines.