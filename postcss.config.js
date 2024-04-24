module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-nested': {},
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'nesting-rules': true,
      },
    },


  },
};
