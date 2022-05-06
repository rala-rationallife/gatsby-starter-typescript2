import * as React from "react"
import { Hero } from "../components/hero"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import { Concept } from "../components/concept"
import { Posts } from "../components/posts"

const IndexPage = () => {
  return (
    <Layout>
      <Seo />

      <Hero />

      <Concept />

      <Posts />
    </Layout>
  )
}

export default IndexPage
