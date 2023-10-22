const myCustomQueries = {
  xs: "(max-width: 320px)",
  mobile: "(max-width: 768px)",
  md: "(max-width: 1025px)",
  l: "(max-width: 1536px)",
  xl: "(min-width: 1536px)",
  portrait: "(orientation: portrait)",
  tablet: "(max-width: 1149px)",
  custom: "(min-width: 1150px)",
  customLarge: "(min-width: 2550px)"
}

const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Tech importance`,
    description: `Tech importance`,
    author: `@cristianafmb`,
    siteUrl: `https://computer-science.cris-portfolio.pt/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem-with-queue`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem-with-queue`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
        ignore: [`**/\.*`]
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-offline',
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`pt`, `en`],
        defaultLanguage: `pt`,
        siteUrl: `https://computer-science.cris-portfolio.pt/`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/:lang?/blog/:uid",
            getLanguageFromPath: true,
          },
        ],
      },
    },
  ],
}
