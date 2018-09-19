module.exports = {
  name: 'Polkadot JS API',
  exclude: [],
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true,
  hideGenerator: true,
  includes: './docs/guides',
  includeDeclarations: true,
  out: 'docs',
  module: 'commonjs',
  moduleResolution: 'node',
  mdEngine: 'gitbook',
  stripInternal: 'true',
  theme: 'markdown'
};
