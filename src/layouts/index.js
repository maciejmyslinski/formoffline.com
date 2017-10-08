import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import 'normalize.css/normalize.css'
import config from '../../gatsby-config'

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
