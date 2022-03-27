import React from "react";

export default function useIntersectionObserver({
  root,
  target,
  threshold = 1.0,
  rootMargin = "0px",
  enabled = true,
  setPage,
}) {
  React.useEffect(() => {
    if (!enabled) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          return entry.isIntersecting && setPage((prev) => prev + 1);
        }),
      {
        root: root && root.current,
        rootMargin,
        threshold,
      }
    );

    const el = target && target.current;

    if (!el) {
      return;
    }

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [target.current, enabled]);
}
