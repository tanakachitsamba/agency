import React from 'react'
import Link from 'next/link'
import Home from './home'

import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
    font-family: 'Work Sans';
    src: url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,300i,400,400i,600,600i,700,700i');
  }

    @font-face {
    font-family: 'GFS Didot';
    src: url('https://fonts.googleapis.com/css?family=GFS+Didot');
  }

  hmtl, body {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: 'Josefin Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #333333;
  }

  h1, h2, h3, h4, h5, h6 {
   font-family: 'Josefin Sans', sans-serif;
  }
`

export default () => <Home />
