module.exports = {
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
}

// module.exports = {
//   customProperties: {
//     variables: {
//       buttonColor: "violet"
//     },
//   },
//   customMedia: {
//     extensions: {
//       v_small:   "(min-width: 30rem)",
//       v_medium:  "(min-width: 48rem)"
//     }
//   }
// }
