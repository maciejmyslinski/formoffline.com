module.exports = {
  siteMetadata: {
    title: `Form Offline - Offline data collection app for Google Forms™`,
    description: '',
    keywords: '',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-107751978-1',
      },
    },
  ],
}
