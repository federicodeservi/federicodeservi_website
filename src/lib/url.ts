/**
 * Prefix internal links with the configured `base` so the site works
 * when deployed under a subpath like /federicodeservi_website/.
 *
 * Usage in templates:
 *   import { u } from '~/lib/url';
 *   <a href={u('/work')}>Work</a>
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const u = (path: string): string => {
  if (!path.startsWith('/')) return path;
  return `${BASE}${path}`;
};
