module.exports = {
  name: 'Polkadot JS API',
  exclude: '**/*+(index|e2e|spec|types).ts',
  excludeExternals: true,
  excludeNotExported: true,
  excludeProtected: true,
  excludePrivate: true,
  hideGenerator: true,
  includeDeclarations: false,
  out: 'docs',
  module: 'commonjs',
  moduleResolution: 'node',
  stripInternal: 'true',
  theme: 'markdown'
};
