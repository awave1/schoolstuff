module.exports = {
  pathPrefix: '/notes',
  siteMetadata: {
    title: 'notes',
    description: 'Collection of my university notes.',
    author: 'Artem Golovin',
    social: {
      twitter: 'awaveawave',
    },
    siteUrl: 'https://awave1.github.io/notes',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/Layout'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/Typography',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      strategy: 'img',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-draw',
            options: {
              mermaid: {
                theme: 'forest',
              },
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '>',
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-katex',
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/content/`,
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'awave notes',
        short_name: 'notes',
        start_url: '/notes',
        background_color: '#212121',
        theme_color: '#212121',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
