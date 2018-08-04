import styled, { css, keyframes } from 'styled-components'
import * as Icon from 'react-feather'

const media = {
    mobile: (...args) => css`
        @media (max-width: 400px) {
            ${css(...args)};
        }
    `,
}

export const Landing = styled.section`
    height: 50em;
    background-color: #1f41f2;

    ${media.mobile`
      height: 35em;
    `};
`

export const LandingContent = styled.div`
    padding-top: 10em;
`

export const Heading = styled.h1`
    color: white;
    font-size: 3.5em;
    text-align: center;
    letter-spacing: 0.15em;
    width: 50%;
    margin: auto;
    font-weight: 600;
    text-align: left;
    line-height: 1.8em;
    font-style: italic;

    ${media.mobile`
      padding-top: 6em; 
      font-size: 1.4em;
      width: 70%;
    `};
`

export const LetsWorkLink = styled(Heading)`
    font-family: 'GFS Didot', serif;
    text-decoration: underline;
    font-size: 1.5em;
    font-weight: 300;
    padding-top: 0.5em;

    ${media.mobile`
    font-size: 1.4em
      padding-top: 0.5em;
    `};
`
