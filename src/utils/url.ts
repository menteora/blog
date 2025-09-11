export const BASE = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "/");

const EXTERNAL_RE = /^(?:[a-z]+:)?\/\//i;

export function withBase(path: string): string {
  if (!path) return BASE;
  if (path.startsWith("#") || path.startsWith("mailto:") || path.startsWith("tel:")) return path;
  if (EXTERNAL_RE.test(path)) return path;
  if (path.startsWith(BASE)) return path;
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return BASE + clean;
}

export function isExternal(href: string): boolean {
  return EXTERNAL_RE.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}

