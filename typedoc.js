module.exports = {
  name: 'Polkadot JS API',
  exclude: [],
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true,
  hideGenerator: true,
  includeDeclarations: true,
  out: 'docs',
  module: 'commonjs',
  moduleResolution: 'node',
  mdEngine: 'gitbook',
  stripInternal: 'true',
  theme: 'markdown'
};
