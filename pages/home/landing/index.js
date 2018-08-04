import { h } from 'preact'
import styled, { css, keyframes } from 'styled-components'

import { Home, Landing, LandingContent, Heading, LetsWorkLink } from './styles'

import Nav from '../../../components/nav'

export default () => (
    <Landing>
        <Nav />
        <LandingContent>
            <Heading>We make apps, websites and consult on strategy.</Heading>
            <LetsWorkLink>learn more</LetsWorkLink>
        </LandingContent>
    </Landing>
)
