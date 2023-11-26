module.exports = {
  siteMetadata: {
    title: 'victoria-rushton',
    description: 'Victoria designs typefaces and lettering.',
    image: '',
    siteUrl: 'https://victoriarushton.com/'
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: 'hBGJYw7pEwG4qZn7cYJon0dHshXjrq3tmHxZd-fFNUc',
        spaceId: '6l1e28rigfdw'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components'
  ]
};
