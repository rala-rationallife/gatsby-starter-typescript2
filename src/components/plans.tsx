import * as React from "react"
import styled from "styled-components"
import { Heading } from "./parts/heading"
import { Plan } from "./parts/plan"

const StyledPlans = styled.section`
  padding-block: var(--v-space);
  background-color: #e9e5e9;
`

const StyledContainer = styled.div`
  display: grid;
  gap: 27px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  & .btn {
    width: auto;
  }
`

export const Plans: React.FC = () => {
  return (
    <StyledPlans>
      <div className="w-container">
        <Heading title="Service Plans" subTitle="サービスプラン" />

        <StyledContainer>
          <Plan
            planTitle="Free"
            planDesc="便利なオンラインツールを今すぐご利用いただけるプランです。"
            price="無料"
            url="/"
            accent={false}
          />
          <Plan
            planTitle="Standard"
            planDesc="厳選した最新ステーショナリーグッズを毎月お届けするスタンダードプランです。"
            price="980円/月"
            url="/"
            accent={true}
          />
          <Plan
            planTitle="Pro"
            planDesc="プロフェッショナルなツールの貸し出し、工房の利用など、さまざまなご要望にお応えするプランです。"
            price="2,800円/月"
            url="/"
            accent={true}
          />
        </StyledContainer>
      </div>
    </StyledPlans>
  )
}
