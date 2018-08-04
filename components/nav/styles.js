import styled from 'styled-components'
import * as Icon from 'react-feather'

export const Nav = styled.nav``

export const Menu = styled(Icon.Menu)`
    float: right;
    color: white;
    width: 30px;
    height: 30px;
`
export const Logo = styled.div`
    font-family: 'GFS Didot', serif;
    float: left;
    font-weight: 600
    font-size: 1.8em;
    letter-spacing: 0.4em;
    color: white;
    font-style: italic;
`

export const NavContainer = styled.div`
    * {
        padding: 30px;
    }
`
