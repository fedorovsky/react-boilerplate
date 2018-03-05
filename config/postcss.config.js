module.exports = () => ({
  plugins: [
    require('postcss-smart-import'),
    require('postcss-cssnext')({
      features: {
        autoprefixer: true,
        customProperties: {
          variables: {
            mainColor: 'violet',
          },
        },
        customMedia: {
          extensions: {
            v_small:   "(min-width: 30rem)",
            v_medium:  "(min-width: 48rem)"
          }
        }
      },
    }),
    require('postcss-nested'),
    require('postcss-flexbugs-fixes'),
  ],
});
