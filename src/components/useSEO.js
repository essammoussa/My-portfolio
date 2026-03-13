import { useEffect } from "react";

const DEFAULT_SEO = {
  siteName: "Essam Moussa",
  siteUrl: "https://my-portfolio-essam.vercel.app",
  defaultTitle: "Essam Moussa | Fullstack Developer",
  defaultDescription:
    "Welcome to Essam Moussa's portfolio — fullstack developer building modern, accessible web experiences.",
};

export function useSEO({ title, description, canonical, noIndex = false } = {}) {
  const fullTitle = title
    ? `${title} | ${DEFAULT_SEO.siteName}`
    : DEFAULT_SEO.defaultTitle;

  const metaDescription = description || DEFAULT_SEO.defaultDescription;
  const canonicalUrl = canonical
    ? `${DEFAULT_SEO.siteUrl}${canonical}`
    : DEFAULT_SEO.siteUrl;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrValue] = selector.replace(/[\[\]"]/g, "").split("=");
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // Meta description
    setMeta('meta[name="description"]', "content", metaDescription);

    // Canonical tag
    setLink("canonical", canonicalUrl);

    // Robots
    setMeta(
      'meta[name="robots"]',
      "content",
      noIndex ? "noindex,nofollow" : "index,follow"
    );

    return () => {
      document.title = DEFAULT_SEO.defaultTitle;
    };
  }, [fullTitle, metaDescription, canonicalUrl, noIndex]);
}