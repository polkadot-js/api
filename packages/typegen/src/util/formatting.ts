// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef, TypeDefInfo } from '@polkadot/types/create/types';

import { getTypeDef } from '@polkadot/types/create';
import { paramsNotation } from '@polkadot/types/codec/utils';

import { setImports, TypeImports } from './imports';

export const HEADER = (type: 'chain' | 'defs'): string => `// Auto-generated via \`yarn polkadot-types-from-${type}\`, do not edit\n/* eslint-disable */\n\n`;
export const FOOTER = '\n';

const TYPES_NON_PRIMITIVE = ['Metadata'];

// creates the import lines
/** @internal */
export function createImportCode (header: string, imports: TypeImports, checks: { file: string; types: string[] }[]): string {
  return [
    {
      file: '@polkadot/types/types',
      types: Object.keys(imports.typesTypes)
    },
    {
      file: '@polkadot/types/codec',
      types: Object
        .keys(imports.codecTypes)
        .filter((name): boolean => name !== 'Tuple')
    },
    {
      file: '@polkadot/types/extrinsic',
      types: Object.keys(imports.extrinsicTypes)
    },
    {
      file: '@polkadot/types/generic',
      types: Object.keys(imports.genericTypes)
    },
    {
      file: '@polkadot/types/primitive',
      types: Object
        .keys(imports.primitiveTypes)
        .filter((name): boolean => !TYPES_NON_PRIMITIVE.includes(name))
    },
    {
      file: '@polkadot/types',
      types: Object
        .keys(imports.primitiveTypes)
        .filter((name): boolean => TYPES_NON_PRIMITIVE.includes(name))
    },
    ...checks
  ].reduce((result, { file, types }): string => {
    return types.length
      ? `${result}import { ${types.sort().join(', ')} } from '${file}';\n`
      : result;
  }, header) + '\n';
}

// helper to generate a `export interface <Name> extends <Base> {<Body>}
/** @internal */
export function exportInterface (name = '', base: string, body = ''): string {
  // * @description extends [[${base}]]
  const doc = `/** @name ${name} */\n`;

  return `${doc}export interface ${name} extends ${base} {${body.length ? '\n' : ''}${body}}`;
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
 * Simple return
 */
/** @internal */
function formatDoNoConstruct (): string {
  return 'DoNotConstruct';
}

/**
 * Given the inner `K` & `V`, return a `BTreeMap<K, V>`  string
 */
/** @internal */
function formatHashMap (key: string, val: string): string {
  return `HashMap<${key}, ${val}>`;
}

/**
 * Given the inner `T`, return a `Vec<T>` string
 */
/** @internal */
function formatLinkage (inner: string): string {
  return paramsNotation('Linkage', inner);
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
    // If type is "unorthodox" (i.e. `{ something: any }` for an Enum input or `[a | b | c, d | e | f]` for a Tuple's similar types),
    // we return it as-is
    if (/(^{.+:.+})|^\([^,]+\)|^\(.+\)\[\]|^\[.+\]/.exec(type) && !/\[\w+;\w+\]/.exec(type)) {
      return type;
    }

    typeDef = getTypeDef(type);
  } else {
    typeDef = type;
  }

  setImports(definitions, imports, [typeDef.type]);

  // FIXME Swap to Record<TypeDefInfo, fn> to check all types
  switch (typeDef.info) {
    case TypeDefInfo.Compact: {
      setImports(definitions, imports, ['Compact']);

      return formatCompact(formatType(definitions, (typeDef.sub as TypeDef).type, imports));
    }

    case TypeDefInfo.DoNotConstruct: {
      setImports(definitions, imports, ['DoNotConstruct']);

      return formatDoNoConstruct();
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
      const type = (typeDef.sub as TypeDef).type;

      if (type === 'u8') {
        setImports(definitions, imports, ['U8aFixed']);

        return 'U8aFixed';
      }

      setImports(definitions, imports, ['Vec']);

      return formatVec(formatType(definitions, type, imports));
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

    case TypeDefInfo.HashMap: {
      setImports(definitions, imports, ['HashMap']);

      const [keyDef, valDef] = (typeDef.sub as TypeDef[]);

      return formatHashMap(formatType(definitions, keyDef.type, imports), formatType(definitions, valDef.type, imports));
    }

    case TypeDefInfo.Linkage: {
      const type = (typeDef.sub as TypeDef).type;

      setImports(definitions, imports, ['Linkage']);

      return formatLinkage(formatType(definitions, type, imports));
    }

    case TypeDefInfo.Result: {
      setImports(definitions, imports, ['Result']);

      const [okDef, errorDef] = (typeDef.sub as TypeDef[]);

      return formatResult(formatType(definitions, okDef.type, imports), formatType(definitions, errorDef.type, imports));
    }

    default: {
      throw new Error(`Cannot format ${JSON.stringify(type)}`);
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
