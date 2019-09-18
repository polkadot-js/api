// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export const HEADER = '// Auto-generated via `yarn build:interfaces`, do not edit\n/* eslint-disable @typescript-eslint/no-empty-interface */\n\n';
export const FOOTER = '\n';

// creates the import lines
export function createImportCode (header: string, checks: { file: string; types: string[] }[]): string {
  return checks.reduce((result, { file, types }): string => {
    if (types.length) {
      result += `import { ${types.sort().join(', ')} } from '${file}';\n`;
    }

    return result;
  }, header) + '\n';
}

// helper to generate a `export interface <Name> extends <Base> {<Body>}
export function exportInterface (name = '', base: string, body = ''): string {
  return `/** ${base} */\nexport interface ${name} extends ${base} {${body.length ? '\n' : ''}${body}}`;
}

// helper to create an `export <Name> = <Base>`
export function exportType (name = '', base: string): string {
  return `/** ${base} */\nexport type ${name} = ${base};`;
}

/**
 * Given the innerType `T`, return a `Compact<T>` string
 */
export function formatCompact (innerType: string): string {
  return `Compact<${innerType}>`;
}

/**
 * Given the innerType `T`, return a `Option<T>` string
 */
export function formatOption (innerType: string): string {
  return `Option<${innerType}>`;
}

/**
 * Given the innerTypes `T[]`, return a `[...T] & Codec` string
 */
export function formatTuple (innerTypes: string[]): string {
  return `[${innerTypes.join(', ')}] & Codec`;
}

/**
 * Given the innerType `T`, return a `Vec<T>` string
 */
export function formatVec (innerType: string): string {
  return `Vec<${innerType}>`;
}

/**
 * Indent a string with `n` spaces before.
 */
export function indent (n: number, char = ''): (str: string) => string {
  return function (str: string): string {
    return `${char.repeat(n)}${str}`;
  };
}
