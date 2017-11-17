var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  // other options...
module: {
  rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: ExtractTextPlugin.extract({
            use: 'css-loader',
            fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
          })
        }
      }
    }
  ]
},
plugins: [
  new ExtractTextPlugin("../src/assets/style.css")
]
}
