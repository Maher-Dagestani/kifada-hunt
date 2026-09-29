// KIFADA — Netlify Edge Function.
//
// NO PASSWORD GATE: the site is served directly to every visitor.
// The earlier gate needed a self-fetch of the site to hand back the content after a
// correct password; that fetch is blocked by site-level settings (Netlify password
// protection / country restrictions), which returned "gate error" for every attempt.
// Removed entirely — nothing is fetched, nothing can be intercepted.
//
// What is left:
//   1. AI crawler user agents get a hard 403.
//   2. A per-IP rate limit (declared in `config` below).
//
// Environment variables: none required.

const BOTS = [
  "claudebot", "claude-searchbot", "claude-user", "claude-code",
  "gptbot", "oai-searchbot", "chatgpt-user",
  "perplexitybot", "google-extended", "ccbot", "bytespider",
  "meta-externalagent", "amazonbot", "applebot-extended",
  "cohere-ai", "diffbot", "facebookbot", "youbot",
];

export default async (request, context) => {
  const url = new URL(request.url);
  const ua = (request.headers.get("user-agent") || "").toLowerCase();

  // robots.txt must stay readable so compliant crawlers see the block rules.
  if (url.pathname === "/robots.txt") return context.next();

  // AI crawlers: hard 403.
  if (BOTS.some((bot) => ua.includes(bot))) {
    return new Response("403 — automated agents are not welcome.", {
      status: 403,
      headers: { "X-Robots-Tag": "noindex, nofollow" },
    });
  }

  // Everyone else: the site, as-is.
  return context.next();
};

export const config = {
  path: "/*",
  rateLimit: {
    windowLimit: 120,
    windowSize: 60,
    aggregateBy: ["ip"],
  },
};
