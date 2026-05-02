import { useEffect } from 'react';

/**
 * SEO component — updates document <head> metadata dynamically per page.
 * Usage: <SEO title="..." description="..." keywords="..." />
 */
const SEO = ({
  title = 'Inspire | Trusted Business Setup Partner in UAE',
  description = 'Inspire provides end-to-end business setup solutions in Dubai and the UAE. Company formation, government services, funding, marketing, and events.',
  keywords = 'business setup UAE, company formation Dubai, free zone company, mainland license, PRO services Dubai',
  canonical = 'https://www.alilhammanagement.com/',
  ogImage = '/og-image.jpg',
}) => {
  useEffect(() => {
    // Title
    document.title = title;

    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Standard meta
    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('robots', 'index, follow');
    setMeta('author', 'Al Ilham Management');

    // Open Graph
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', canonical, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:site_name', 'Inspire', true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);
  }, [title, description, keywords, canonical, ogImage]);

  return null;
};

export default SEO;
