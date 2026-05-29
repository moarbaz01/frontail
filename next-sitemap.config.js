/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://frontail.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  additionalPaths: async () => {
    const serviceSlugs = [
      'mvp-development',
      'web-saas-development',
      'mobile-app-development',
      'ui-ux-for-startups',
      'web3-development',
      'ai-development',
      'custom-tools-development',
    ];
    const blogSlugs = [
      'how-much-does-mvp-development-cost',
      'ai-automation-tools-for-startups',
    ];

    return [
      ...serviceSlugs.map((slug) => ({
        loc: `/services/${slug}`,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      })),
      ...blogSlugs.map((slug) => ({
        loc: `/blog/${slug}`,
        changefreq: 'monthly',
        priority: 0.75,
        lastmod: new Date().toISOString(),
      })),
    ];
  },
};
