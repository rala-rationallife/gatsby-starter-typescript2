import type { GatsbyConfig } from "gatsby"
import path from "path"

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Boards`,
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
        name: `RalaCode`,
        short_name: `RalaCode`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#6297b1`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        host: process.env.GATSBY_CONTENTFUL_HOST,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
  ],
}

export default config
