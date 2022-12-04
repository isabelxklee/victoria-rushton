import {resolve as _resolve} from 'path'

export const entry = _resolve(__dirname, './src/index.js')
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
  ],
}
export const resolve = {
  extensions: ['*', '.js', '.jsx'],
}
export const output = {
  path: _resolve(__dirname, './dist'),
  filename: 'bundle.js',
}
export const devServer = {
  static: _resolve(__dirname, './dist'),
}
