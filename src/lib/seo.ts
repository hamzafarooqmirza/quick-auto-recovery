export const SITE_URL = "https://quick-auto-recovery.vercel.app";

export function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

export function pageMeta({ title, description, path, image }: { title: string; description: string; path: string; image?: string }) {
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: absoluteUrl(path) },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (image) {
    meta.push({ property: "og:image", content: absoluteUrl(image) });
    meta.push({ name: "twitter:image", content: absoluteUrl(image) });
  }
  return meta;
}