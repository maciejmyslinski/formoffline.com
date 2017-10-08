import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { injectGlobal } from 'styled-components'
import Helmet from 'react-helmet'

import 'normalize.css/normalize.css'
import config from '../../gatsby-config'

injectGlobal`
  html {
    box-sizing: border-box;
  }

  html, body {
    -webkit-font-smoothing: antialiased;
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
    >
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,500"
        rel="stylesheet"
      />
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
