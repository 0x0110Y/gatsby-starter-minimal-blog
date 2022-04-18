module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://jlice.gatsbyjs.io`,//增加siteUrl
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/posts`,
        name: "posts",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `ja`, `ko`, `zh`, `tw`, `vi`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: false,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Jost:300,300i,400,400i,700"],
        },
      },
    },
  ],
};
