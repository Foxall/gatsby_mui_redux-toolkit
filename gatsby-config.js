module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        pathToCreateStoreModule: './src/state/configStore',
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
          ignoreFunction: true,
        },
        windowKey: '__PRELOADED_STATE__',
      },
    },
  ],
};