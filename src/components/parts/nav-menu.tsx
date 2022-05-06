import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useOpen } from "../layout"

type IsOpenType = {
  isOpen: boolean
}

const StyledNavMenu = styled.nav<IsOpenType>`
  @media (max-width: 767px) {
    position: fixed;
    inset: 0 -100% 0 100%;
    z-index: 100;
    background-color: #4e483ae6;
    transition: transform 0.3s;
    transform: ${props =>
      props.isOpen ? "translate(-100%, 0)" : "translate(0, 0)"};
  }

  @media (min-width: 768px) {
    transform: translate(0, 0);
  }

  & ul {
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      gap: 40px;
      color: #ffffff;
    }

    @media (min-width: 768px) {
      display: flex;
      gap: 40px;
      color: #707070;
    }
  }
`

export const NavMenu: React.FC = () => {
  const { open } = useOpen()

  const { handleClick } = useOpen()

  return (
    <StyledNavMenu isOpen={open}>
      <ul>
        <li>
          <Link to="/" onClick={handleClick}>
            ホーム
          </Link>
        </li>
        <li>
          <Link to="/content/" onClick={handleClick}>
            サービス案内
          </Link>
        </li>
        <li>
          <Link to="/" onClick={handleClick}>
            お問い合わせ
          </Link>
        </li>
      </ul>
    </StyledNavMenu>
  )
}
