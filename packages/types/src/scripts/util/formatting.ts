// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef, TypeDefInfo, TypeDefExtVecFixed } from '../../codec/types';

import { getTypeDef } from '../../codec/create';
import { paramsNotation } from '../../codec/utils';
import { setImports, TypeImports } from './imports';

export const HEADER = '// Auto-generated via `yarn build:interfaces`, do not edit\n/* eslint-disable @typescript-eslint/no-empty-interface */\n\n';
export const FOOTER = '\n';

// creates the import lines
/** @internal */
export function createImportCode (header: string, checks: { file: string; types: string[] }[]): string {
  return checks.reduce((result, { file, types }): string => {
    if (types.length) {
      result += `import { ${types.sort().join(', ')} } from '${file}';\n`;
    }

    return result;
  }, header) + '\n';
}

// helper to generate a `export interface <Name> extends <Base> {<Body>}
/** @internal */
export function exportInterface (name = '', base: string, body = ''): string {
  return `/** ${base} */\nexport interface ${name} extends ${base} {${body.length ? '\n' : ''}${body}}`;
}

// helper to create an `export type <Name> = <Base>`
// but since we don't want type alias (TS doesn't preserve names) we use
// interface here.
/** @internal */
export function exportType (name = '', base: string): string {
  return exportInterface(name, base);
}

/**
 * Given the inner `K` & `V`, return a `BTreeMap<K, V>`  string
 */
/** @internal */
function formatBTreeMap (key: string, val: string): string {
  return `BTreeMap<${key}, ${val}>`;
}

/**
 * Given the inner `V`, return a `BTreeSet<V>`  string
 */
/** @internal */
function formatBTreeSet (val: string): string {
  return `BTreeSet<${val}>`;
}

/**
 * Given the inner `T`, return a `Compact<T>` string
 */
/** @internal */
function formatCompact (inner: string): string {
  return paramsNotation('Compact', inner);
}

/**
 * Given the inner `O` & `E`, return a `Result<O, E>`  string
 */
/** @internal */
function formatResult (innerOk: string, innerError: string): string {
  return `Result<${innerOk}, ${innerError}>`;
}

/**
 * Given the inner `T`, return a `Option<T>` string
 */
/** @internal */
function formatOption (inner: string): string {
  return paramsNotation('Option', inner);
}

/**
 * Given the inners `T[]`, return a `ITuple<...T>` string
 */
/** @internal */
function formatTuple (inners: string[]): string {
  return paramsNotation('ITuple', `[${inners.join(', ')}]`);
}

/**
 * Given the inner `T`, return a `Vec<T>` string
 */
/** @internal */
function formatVec (inner: string): string {
  return paramsNotation('Vec', inner);
}

/**
 * Correctly format a given type
 */
/** @internal */
export function formatType (definitions: object, type: string | TypeDef, imports: TypeImports): string {
  let typeDef: TypeDef;
  if (typeof type === 'string') {
    typeDef = getTypeDef(type);
  } else {
    typeDef = type;
  }

  setImports(definitions, imports, [typeDef.type]);

  switch (typeDef.info) {
    case TypeDefInfo.Compact: {
      setImports(definitions, imports, ['Compact']);
      return formatCompact(formatType(definitions, (typeDef.sub as TypeDef).type, imports));
    }
    case TypeDefInfo.Option: {
      setImports(definitions, imports, ['Option']);
      return formatOption(formatType(definitions, (typeDef.sub as TypeDef).type, imports));
    }
    case TypeDefInfo.Plain: {
      return typeDef.type;
    }
    case TypeDefInfo.Vec: {
      setImports(definitions, imports, ['Vec']);
      return formatVec(formatType(definitions, (typeDef.sub as TypeDef).type, imports));
    }
    case TypeDefInfo.Tuple: {
      setImports(definitions, imports, ['ITuple']);

      // `(a,b)` gets transformed into `ITuple<[a, b]>`
      return formatTuple(
        ((typeDef.sub as TypeDef[])
          .map((sub): string => formatType(definitions, sub.type, imports)))
      );
    }
    case TypeDefInfo.VecFixed: {
      if ((typeDef.ext as TypeDefExtVecFixed).type === 'u8') {
        setImports(definitions, imports, ['Raw']);

        // `[u8, 32]` gets transformed into Raw
        return 'Raw';
      }
      setImports(definitions, imports, ['Vec']);
      return formatVec(formatType(definitions, (typeDef.ext as TypeDefExtVecFixed).type, imports));
    }
    case TypeDefInfo.BTreeMap: {
      setImports(definitions, imports, ['BTreeMap']);
      const [keyDef, valDef] = (typeDef.sub as TypeDef[]);
      return formatBTreeMap(formatType(definitions, keyDef.type, imports), formatType(definitions, valDef.type, imports));
    }
    case TypeDefInfo.BTreeSet: {
      setImports(definitions, imports, ['BTreeSet']);
      const valDef = typeDef.sub as TypeDef;
      return formatBTreeSet(formatType(definitions, valDef.type, imports));
    }
    case TypeDefInfo.Result: {
      setImports(definitions, imports, ['Result']);
      const [okDef, errorDef] = (typeDef.sub as TypeDef[]);
      return formatResult(formatType(definitions, okDef.type, imports), formatType(definitions, errorDef.type, imports));
    }
    default: {
      throw new Error(`Cannot format ${type}.`);
    }
  }
}

/**
 * Indent a string with `n` spaces before.
 */
/** @internal */
export function indent (n: number, char = ' '): (str: string) => string {
  return function (str: string): string {
    return `${char.repeat(n)}${str}`;
  };
}
