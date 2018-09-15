module.exports = {
  name: 'Polkadot JS API',
  mode: 'file',
  exclude: ['test', '**/*spec.ts'],
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true,
  hideGenerator: true,
  includes: './docs/guides',
  includeDeclarations: true,
  out: 'docs/api',
  module: 'commonjs',
  stripInternal: 'true',
  theme: 'markdown',
  ignoreCompilerErrors: true,
  moduleResolution: 'node',
  suppressExcessPropertyErrors: true,
  suppressImplicitAnyIndexErrors: true
}
