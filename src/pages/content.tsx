import * as React from "react"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import { graphql, PageProps } from "gatsby"
import { Entry } from "../components/entry"
import { Plans } from "../components/plans"

type QueryType = {
  service: {
    gatsbyImageData: IGatsbyImageData
    width: number
    height: number
    url: string
  }
}

const Content = ({ data, location }: PageProps<QueryType>) => {
  return (
    <Layout>
      <Seo
        pagetitle="サービス案内"
        pagepath={location.pathname}
        blogimg={data.service.url}
        pageimgw={data.service.width}
        pageimgh={data.service.height}
      />

      <Entry
        image={data.service.gatsbyImageData}
        alt=""
        title="サービス案内"
        subTitle="Services"
      >
        <p>
          身近にあふれるたくさんの文具や事務用品。こうしたステーショナリーは仕事に欠かせないものであるのと同時に、毎日を楽しくしてくれるものであり、クリエイティブを刺激してくれるものでもあります。
        </p>
        <p>
          そして、デジタル化が進んだ現在では、スマートフォンやパソコンの中で便利な道具が必要とされるようになっています。
        </p>
        <p>
          Boadsではサブスクリプションの形式で、さまざまな道具の提供、販売、貸し出しなどのサービスを展開しています。
        </p>
        <p>
          主要都市にある工房スペースでは、最新の3Dプリンターやレーザーカッター、旋盤などの各種工具などもご利用いただけます。
        </p>
        <p>
          もちろん、オンライン上の便利な制作・管理ツールも取り揃えていますので、どんどん活用してください。
        </p>
      </Entry>

      <Plans />
    </Layout>
  )
}

export default Content

export const query = graphql`
  query {
    service: contentfulAsset(title: { eq: "service" }) {
      gatsbyImageData(layout: FULL_WIDTH)
      width
      height
      url
    }
  }
`
