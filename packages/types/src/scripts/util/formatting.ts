// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef, TypeDefInfo } from '../../codec/types';

import { getTypeDef } from '../../codec/create';
import { setImports, TypeImports } from './imports';

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

// helper to create an `export type <Name> = <Base>`
// but since we don't want type alias (TS doesn't preserve names) we use
// interface here.
export function exportType (name = '', base: string): string {
  return exportInterface(name, base);
}

/**
 * Given the inner `T`, return a `Compact<T>` string
 */
export function formatCompact (inner: string): string {
  return `Compact<${inner}>`;
}

/**
 * Given the inner `O` & `E`, return a `Result<O, E>`  string
 */
export function formatResult (innerOk: string, innerError: string): string {
  return `Result<${innerOk}, ${innerError}>`;
}

/**
 * Given the inner `T`, return a `Option<T>` string
 */
export function formatOption (inner: string): string {
  return `Option<${inner}>`;
}

/**
 * Given the inners `T[]`, return a `ITuple<...T>` string
 */
export function formatTuple (inners: string[]): string {
  return `ITuple<[${inners.join(', ')}]>`;
}

/**
 * Given the inner `T`, return a `Vec<T>` string
 */
export function formatVec (inner: string): string {
  return `Vec<${inner}>`;
}

/**
 * Correctly format a given type
 */
export function formatType (type: string, imports: TypeImports): string {
  const typeDef = getTypeDef(type);

  switch (typeDef.info) {
    case TypeDefInfo.Compact: {
      return formatCompact(formatType((typeDef.sub as TypeDef).type, imports));
    }
    case TypeDefInfo.Option: {
      return formatOption(formatType((typeDef.sub as TypeDef).type, imports));
    }
    case TypeDefInfo.Plain: {
      return type;
    }
    case TypeDefInfo.Vec: {
      return formatVec(formatType((typeDef.sub as TypeDef).type, imports));
    }
    case TypeDefInfo.Tuple: {
      setImports(imports, ['ITuple']);

      // `(a,b)` gets transformed into `ITuple<[a, b]>`
      return formatTuple(
        ((typeDef.sub as TypeDef[])
          .map((sub): string => formatType(sub.type, imports)))
      );
    }
    case TypeDefInfo.VecFixed: {
      setImports(imports, ['U8a']);

      // `[u8, 32]` gets transformed into U8a
      return 'U8a';
    }
    default: {
      throw new Error(`Cannot format ${type}.`);
    }
  }
}

/**
 * Indent a string with `n` spaces before.
 */
export function indent (n: number, char = ' '): (str: string) => string {
  return function (str: string): string {
    return `${char.repeat(n)}${str}`;
  };
}
