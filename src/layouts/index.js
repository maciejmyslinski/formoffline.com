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
    color: rgba(0, 0, 0, .87);
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
      <script id="mcjs">
        !function(c,h,i,m,p){
          ((m = c.createElement(h)),
          (p = c.getElementsByTagName(h)[0]),
          (m.async = 1),
          (m.src = i),
          p.parentNode.insertBefore(m, p))
        }(document,"script","https://chimpstatic.com/mcjs-connected/js/users/2650d6b046101d75b4da2718e/bce654a8f187fc58824a49c90.js");
      </script>
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
