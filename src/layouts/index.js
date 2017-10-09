import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { injectGlobal } from 'styled-components'
import Helmet from 'react-helmet'
import WebFont from 'webfontloader'

import 'normalize.css/normalize.css'
import config from '../../gatsby-config'

WebFont.load({
  google: {
    families: ['Roboto:400,500'],
  },
})

injectGlobal`
  html {
    box-sizing: border-box;
  }

  html, body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    color: rgba(0, 0, 0, .87);
  }

  button {
    font-family: 'Roboto', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title={config.siteMetadata.title}
      meta={[
        { name: 'description', content: config.siteMetadata.title },
        { name: 'keywords', content: config.siteMetadata.keywords },
      ]}
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
