import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { SnsLink } from "./parts/sns-link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const StyledFooter = styled.footer`
  padding-block: 70px;
  background-color: #ffffff;
  color: #707070;
  font-size: 13px;
`

const StyledContainer = styled.div`
  display: grid;
  gap: 50px;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    gap: 20px;
  }
`

const StyledSite = styled.div`
  @media (min-width: 768px) {
    margin-bottom: 20px;
    justify-self: start;
  }
`

const StyledSns = styled.ul`
  display: flex;
  gap: 24px;
  font-size: 24px;

  @media (min-width: 768px) {
    grid-column: 2;
    grid-row: 1 / 4;
    justify-self: end;
    align-self: center;
  }

  & a {
    display: grid;
    place-items: center;
    width: 36px;
    aspect-ratio: 1 / 1;
    background-color: #cccccc;
    color: #ffffff;
    clip-path: circle(50%);

    @supports not (aspect-ratio: 1 / 1) {
      height: 36px;
    }
  }
`

const StyledMenu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (min-width: 768px) {
    justify-self: start;
  }
`

const StyledCopy = styled.div`
  @media (min-width: 768px) {
    justify-self: start;
  }
`

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledContainer className="w-container">
        <StyledSite>
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="135" height="26">
              <g>
                <title>Boards</title>
              </g>
              <path
                d="M49.73 12.89a4.54 4.54 0 0 0 3-4.45c0-3.19-2.52-5-6.89-5h-8.46V23h9c4.9 0 7.36-1.9 7.36-5.24a4.67 4.67 0 0 0-4.01-4.87zM39.46 5.11h6.24c3.14 0 5 1.2 5 3.55s-1.82 3.56-5 3.56h-6.24zm6.91 16.18h-6.91v-7.36h6.91c3.45 0 5.32 1.12 5.32 3.67s-1.87 3.69-5.32 3.69zm68.01-10.22a6.45 6.45 0 0 0-5.6-2.91 7.12 7.12 0 0 0-7.33 7.48 7.14 7.14 0 0 0 6.78 7.49 5.09 5.09 0 0 0 .55 0 6.39 6.39 0 0 0 5.69-3.05V23h1.9V2.22h-2zm-1.44 8.63a5.53 5.53 0 0 1-9.49-3.6v-.46a5.39 5.39 0 0 1 5-5.73h.55a5.38 5.38 0 0 1 5.46 5.74 5.4 5.4 0 0 1-1.52 4.05zM64.62 8.16h-.53a7.25 7.25 0 0 0-7.5 7.48 7.5 7.5 0 1 0 15 0 7.23 7.23 0 0 0-6.97-7.48zm-.06 13.2a3.7 3.7 0 0 1-.47 0 5.39 5.39 0 0 1-5.5-5.28v-.46a5.39 5.39 0 0 1 5-5.73h.46a5.36 5.36 0 0 1 5.47 5.27 3.73 3.73 0 0 1 0 .47 5.36 5.36 0 0 1-4.96 5.73zm57.83-9.06c0-1.4 1.18-2.43 3.84-2.43a7.54 7.54 0 0 1 4.34 1.26l.86-1.6a9.88 9.88 0 0 0-5.2-1.37c-3.76 0-5.83 1.79-5.83 4.2 0 5.82 9.55 2.8 9.55 6.63 0 1.46-1.15 2.41-3.95 2.41a8.9 8.9 0 0 1-5.23-1.65l-.9 1.57a9.86 9.86 0 0 0 6 1.82c3.84 0 6.08-1.65 6.08-4.2-.01-5.66-9.56-2.66-9.56-6.64zM94 11.16V8.27h-1.9V23h2v-7.5c0-3.47 1.87-5.43 5-5.43h.47V8.16c-2.8 0-4.68 1.04-5.57 3zm-13.3-3h0a9.34 9.34 0 0 0-6 2l.9 1.48a7.47 7.47 0 0 1 4.9-1.74c2.74 0 4.17 1.37 4.17 3.89v.9H80c-4.23 0-5.68 1.9-5.68 4.17 0 2.54 2 4.28 5.37 4.28 2.44 0 4.17-.92 5.07-2.44V23h1.9v-9.13c0-3.81-2.15-5.71-5.96-5.71zm4 10.42a4.72 4.72 0 0 1-4.67 3h0c-2.35 0-3.72-1.06-3.72-2.77 0-1.51.92-2.63 3.78-2.63h4.62z"
                fill="#666"
              />
              <path
                d="M0 0h12v26H0zm14 0h12v12H14zm0 14h12v12H14z"
                fill="#b72661"
              />
            </svg>
          </Link>
        </StyledSite>
        <StyledSns>
          <li>
            <SnsLink url="/" sns="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </SnsLink>
          </li>
          <li>
            <SnsLink url="/" sns="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </SnsLink>
          </li>
          <li>
            <SnsLink url="/" sns="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </SnsLink>
          </li>
        </StyledSns>
        <StyledMenu>
          <li>
            <Link to="/">会社概要</Link>
          </li>
          <li>
            <Link to="/">特定商取引法</Link>
          </li>
          <li>
            <Link to="/">個人情報の取り扱い</Link>
          </li>
          <li>
            <Link to="/">サービス案内</Link>
          </li>
          <li>
            <Link to="/">お問い合わせ</Link>
          </li>
        </StyledMenu>
        <StyledCopy>@ Boards Production.</StyledCopy>
      </StyledContainer>
    </StyledFooter>
  )
}