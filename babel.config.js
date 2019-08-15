module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow', 'stage-2'],
  plugins: [
    '@babel/plugin-syntax-class-properties',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import'
  ]
}