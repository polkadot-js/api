module.exports = {
  exclude: '**/*+(index|e2e|spec|types).ts',
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true,
  excludeProtected: true,
  hideGenerator: true,
  includeDeclarations: false,
  module: 'commonjs',
  moduleResolution: 'node',
  name: 'Polkadot JS API',
  out: 'docs',
  stripInternal: 'true',
  theme: 'markdown'
};
