import React, { lazy } from "react";

// If a stale build is cached, chunk URLs 404 - reload once to pick up the new build.
export function lazyWithReload<T extends { default: React.ComponentType<any> }>(
  factory: () => Promise<T>
) {
  return lazy(() =>
    factory().catch((error) => {
      const key = "chunk-reload";
      if (typeof sessionStorage !== "undefined" && !sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "1");
        window.location.reload();
        return new Promise<T>(() => {});
      }
      throw error;
    })
  );
}
