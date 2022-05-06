import * as React from "react"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo />
      <div>ページが見つかりませんでした</div>
    </Layout>
  )
}

export default NotFoundPage
