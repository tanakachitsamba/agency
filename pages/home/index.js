import { h } from 'preact'
import styled, { css, keyframes } from 'styled-components'

import Landing from './landing'
import Approach from './approach'

const Home = styled.div`
    width: 100%;
    height: 100%;
    background-attachment: fixed;
`
export default () => (
    <Home>
        <Landing />
        <Approach />
    </Home>
)
