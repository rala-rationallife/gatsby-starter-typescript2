import * as React from "react"
import { Layout } from "../components/layout2"
import { Seo } from "../components/seo2"

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo />
      <div>ページが見つかりませんでした</div>
    </Layout>
  )
}

export default NotFoundPage
