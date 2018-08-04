import { h } from 'preact'
import styled, { css } from 'styled-components'

const media = {
    mobile: (...args) => css`
        @media (max-width: 400px) {
            ${css(...args)};
        }
    `,
}

const Approach = styled.section`
    height: 40em;
    background-color: white;
`
const Container = styled.div`
    width: 70%;
    margin: auto;
    padding-top: 6em;
`

const Parent = styled.div`
    display: flex;
`

const FlexChild = styled.div`
    ${({ flex }) => flex && `flex: ${flex};`};
`

export const Heading = styled.h1`
    font-family: 'GFS Didot', serif;
    color: black;
    font-size: 1.7em;
    text-align: center;
    letter-spacing: 0.15em;
    width: 80%;
    margin: auto;
    font-weight: 500;
    text-align: left;
    line-height: 2em;
    font-style: italic;

    ${media.mobile`
      padding-top: 6em; 
      font-size: 1.4em;
      width: 70%;
    `};
`

const ServiceContainer = styled.div`
    font-weight: 500;
    line-height: 2.5em;
    font-family: 'GFS Didot', serif;
    letter-spacing: 0.2em;
    padding-top: 0.8em;
`

const ServiceTitle = styled.div`
    font-size: 2em;
    letter-spacing: 0.3em;
`

const ServiceList = styled.ul`
    list-style-type: none;
    > * {
        font-size: 1.2em;
        font-style: italic;
        letter-spacing: 0.3em;
        line-height: 3.3em;
    }
`

const OurApproach = styled.div`
    margin: auto;
    width: 88%;

    padding-top: 1em;
    font-size: 1.8em;
    letter-spacing: 0.2em;
    font-family: 'GFS Didot', serif;
    font-style: italic;
    text-decoration: underline;
`

export default () => (
    <Approach>
        <Container>
            <Parent>
                <FlexChild flex="2 0 0">
                    <Heading>
                        We are a full-service agency that is passionate about digital products. We
                        provide elegant solutions to difficult technical problems, whilst
                        building engaging customer experiences and helping businesses reach their
                        goals.
                    </Heading>
                </FlexChild>
                <FlexChild flex="1 0 0">
                    <ServiceContainer>
                        <ServiceTitle>Our Services</ServiceTitle>
                        <ServiceList>
                            <li>Development</li>
                            <li>Design</li>
                            <li>Branding</li>
                            <li>Marketing</li>
                            <li>Consultancy</li>
                        </ServiceList>
                    </ServiceContainer>
                </FlexChild>
            </Parent>
            <OurApproach>Our Approach</OurApproach>
        </Container>
    </Approach>
)
