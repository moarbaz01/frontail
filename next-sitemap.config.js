/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://frontail.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  additionalPaths: async () => {
    const serviceIds = ['1', '2', '3', '4', '5', '6', '7'];

    return serviceIds.map((id) => ({
      loc: `/services/${id}`,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
};
