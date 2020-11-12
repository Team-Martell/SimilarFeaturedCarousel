
module.exports = {
  entry: `${__dirname}/client/src/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public/dist`
  },
  module: {
    rules: [
      {
        test:/\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  watch: true
}