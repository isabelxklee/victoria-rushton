module.exports = {
  siteMetadata: {
    title: 'victoria-rushton',
    siteUrl: 'https://victoria-rushton.netlify.app'
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: 'hBGJYw7pEwG4qZn7cYJon0dHshXjrq3tmHxZd-fFNUc',
        spaceId: '6l1e28rigfdw'
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components'
  ]
};
