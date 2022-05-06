import type { GatsbyConfig } from "gatsby"
import path from "path"

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Title`,
    description: `ここに説明が入ります`,
    siteUrl: process.env.GATSBY_SITE_URL,
    lang: `ja`,
    locale: `ja_JP`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`src/images`),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Title`,
        short_name: `Title`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#6297b1`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
  ],
}

export default config

// yarn add @fortawesome/fontawesome-svg-core@latest @fortawesome/free-brands-svg-icons@latest @fortawesome/free-regular-svg-icons@latest @fortawesome/free-solid-svg-icons@latest @fortawesome/react-fontawesome@latest babel-plugin-styled-components@latest gatsby@latest gatsby-plugin-image@latest gatsby-plugin-manifest@latest gatsby-plugin-react-helmet@latest gatsby-plugin-remove-serviceworker@latest gatsby-plugin-sharp@latest gatsby-plugin-sitemap@latest gatsby-plugin-styled-components@latest gatsby-source-filesystem@latest gatsby-transformer-sharp@latest react@latest react-dom@latest react-helmet@latest styled-components@latest @types/node@latest @types/react@latest @types/react-dom@latest @types/react-helmet@latest @types/styled-components@latest prettier@latest typescript@latest
