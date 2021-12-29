const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, args) => {
  return {
    mode: args.mode,
    entry: './src/index.tsx',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader'
        }
      ]
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, '/src')
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public')
      },
      port: 3000
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html')
      })
    ]
  }
}