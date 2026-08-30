function stripTrailingSlash(value: string): string {
  return value.replace(/\/$/, "");
}

function withHttps(host: string): string {
  if (host.startsWith("http://") || host.startsWith("https://")) {
    return stripTrailingSlash(host);
  }
  return `https://${stripTrailingSlash(host)}`;
}

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return withHttps(explicit);

  if (process.env.VERCEL_ENV === "production" && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return withHttps(process.env.VERCEL_PROJECT_PRODUCTION_URL);
  }

  if (process.env.VERCEL_URL) {
    return withHttps(process.env.VERCEL_URL);
  }

  return "http://localhost:3000";
}

export const site = {
  name: "Nikhil Kadapala",
  url: resolveSiteUrl(),
  description:
    "Researcher and builder working on agent evaluations, memory, and knowledge systems.",
} as const;

export function absoluteUrl(path = ""): string {
  const normalized = path.replace(/^\/+/, "");
  return normalized ? `${site.url}/${normalized}` : site.url;
}
