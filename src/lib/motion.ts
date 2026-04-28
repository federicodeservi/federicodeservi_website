/**
 * Motion guards. Single source of truth for prefers-reduced-motion checks
 * and viewport gates used by interactive components.
 */

export const reducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const isDesktop = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(hover: hover) and (min-width: 901px)').matches;
};

export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;
