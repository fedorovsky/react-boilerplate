module.exports = () => ({
  plugins: {
    'postcss-smart-import': {},
    'postcss-nested': {},
    'postcss-flexbugs-fixes': {},
    'postcss-cssnext': {
      features: {
        autoprefixer: true,
        customProperties: {
          variables: {
            mainColor: 'violet',
          },
        },
        customMedia: {
          extensions: {
            v_small: '(min-width: 30rem)',
            v_medium: '(min-width: 48rem)',
          },
        },
      },
    },
  },
});
