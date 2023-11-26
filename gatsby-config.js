module.exports = {
  siteMetadata: {
    title: 'victoria-rushton',
    description: 'Victoria designs typefaces and lettering.',
    image:
      'https://images.ctfassets.net/6l1e28rigfdw/7vjxcGYV1MEG0Oztauw0lV/0d41829ba60fb76627c5a2871409c3e2/Screenshot_2023-11-25_at_11.48.02_PM.png',
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
