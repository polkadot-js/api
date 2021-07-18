// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TypeDef } from '@polkadot/types/create/types';
import type { Registry } from '@polkadot/types/types';

import Handlebars from 'handlebars';

import { getTypeDef, paramsNotation } from '@polkadot/types/create';
import { TypeDefInfo } from '@polkadot/types/create/types';
import { isString, stringify } from '@polkadot/util';

import { readTemplate } from './file';
import { ModuleTypes, setImports, TypeImports } from './imports';

interface ImportDef {
  file: string;
  types: string[];
}

interface This {
  imports: TypeImports;
  types: ImportDef[];
}

const NO_CODEC = ['Tuple', 'VecFixed'];

export const HEADER = (type: 'chain' | 'defs'): string => `// Auto-generated via \`yarn polkadot-types-from-${type}\`, do not edit\n/* eslint-disable */\n\n`;

Handlebars.registerPartial({
  footer: Handlebars.compile(readTemplate('footer')),
  header: Handlebars.compile(readTemplate('header'))
});

Handlebars.registerHelper({
  imports () {
    const { imports, types } = this as unknown as This;
    const defs = [
      {
        file: '@polkadot/types',
        types: [
          ...Object.keys(imports.codecTypes).filter((name) => !NO_CODEC.includes(name)),
          ...Object.keys(imports.extrinsicTypes),
          ...Object.keys(imports.genericTypes),
          ...Object.keys(imports.metadataTypes),
          ...Object.keys(imports.primitiveTypes)
        ]
      },
      {
        file: '@polkadot/types/types',
        types: Object.keys(imports.typesTypes)
      },
      ...types
    ];

    return defs.reduce((result, { file, types }): string => {
      return types.length
        ? `${result}import type { ${types.sort().join(', ')} } from '${file}';\n`
        : result;
    }, '');
  },
  trim (options: { fn: (self: unknown) => string }) {
    return options.fn(this).trim();
  },
  upper (options: { fn: (self: unknown) => string }) {
    return options.fn(this).toUpperCase();
  }
});

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
 * Given the inner `T`, return a `Option<T>` string
 */
/** @internal */
function formatOption (inner: string): string {
  return paramsNotation('Option', inner);
}

/**
 * Given the inner `O` & `E`, return a `Result<O, E>`  string
 */
/** @internal */
function formatResult (innerOk: string, innerError: string): string {
  return `Result<${innerOk}, ${innerError}>`;
}

/**
 * Given the entries `[string, T][]`, return a `{ name: T; ... }` string
 */
/** @internal */
function formatStruct (inners: [string, string][]): string {
  return `{ ${inners.map(([k, t]) => `${k}: ${t};`).join(' ')} } & Struct`;
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
// eslint-disable-next-line @typescript-eslint/ban-types
export function formatType (registry: Registry, definitions: Record<string, ModuleTypes>, type: string | String | TypeDef, imports: TypeImports): string {
  let typeDef: TypeDef;

  if (isString(type)) {
    const _type = type.toString();

    // If type is "unorthodox" (i.e. `{ something: any }` for an Enum input or `[a | b | c, d | e | f]` for a Tuple's similar types),
    // we return it as-is
    if (/(^{.+:.+})|^\([^,]+\)|^\(.+\)\[\]|^\[.+\]/.exec(_type) && !/\[\w+;\w+\]/.exec(_type)) {
      return _type;
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

      return formatCompact(formatType(registry, definitions, (typeDef.sub as TypeDef).type, imports));
    }

    case TypeDefInfo.DoNotConstruct: {
      setImports(definitions, imports, ['DoNotConstruct']);

      return formatDoNoConstruct();
    }

    case TypeDefInfo.Option: {
      setImports(definitions, imports, ['Option']);

      return formatOption(formatType(registry, definitions, (typeDef.sub as TypeDef).type, imports));
    }

    case TypeDefInfo.Plain: {
      return typeDef.type;
    }

    case TypeDefInfo.Struct: {
      setImports(definitions, imports, ['Struct']);

      return formatStruct(
        ((typeDef.sub as TypeDef[]).map(({ name, type }, index) => [
          name || `unknown${index}`,
          formatType(registry, definitions, type, imports)
        ]))
      );
    }

    case TypeDefInfo.Si: {
      return formatType(registry, definitions, registry.lookup.getTypeDef(typeDef.type), imports);
    }

    case TypeDefInfo.Tuple: {
      setImports(definitions, imports, ['ITuple']);

      // `(a,b)` gets transformed into `ITuple<[a, b]>`
      return formatTuple(
        ((typeDef.sub as TypeDef[]).map(({ type }) =>
          formatType(registry, definitions, type, imports))
        )
      );
    }

    case TypeDefInfo.Vec: {
      setImports(definitions, imports, ['Vec']);

      return formatVec(formatType(registry, definitions, (typeDef.sub as TypeDef).type, imports));
    }

    case TypeDefInfo.VecFixed: {
      const type = (typeDef.sub as TypeDef).type;

      if (type === 'u8') {
        setImports(definitions, imports, ['U8aFixed']);

        return 'U8aFixed';
      }

      setImports(definitions, imports, ['Vec']);

      return formatVec(formatType(registry, definitions, type, imports));
    }

    case TypeDefInfo.BTreeMap: {
      setImports(definitions, imports, ['BTreeMap']);

      const [keyDef, valDef] = (typeDef.sub as TypeDef[]);

      return formatBTreeMap(
        formatType(registry, definitions, keyDef.type, imports),
        formatType(registry, definitions, valDef.type, imports)
      );
    }

    case TypeDefInfo.BTreeSet: {
      setImports(definitions, imports, ['BTreeSet']);

      const valDef = typeDef.sub as TypeDef;

      return formatBTreeSet(formatType(registry, definitions, valDef.type, imports));
    }

    case TypeDefInfo.HashMap: {
      setImports(definitions, imports, ['HashMap']);

      const [keyDef, valDef] = (typeDef.sub as TypeDef[]);

      return formatHashMap(
        formatType(registry, definitions, keyDef.type, imports),
        formatType(registry, definitions, valDef.type, imports)
      );
    }

    case TypeDefInfo.Linkage: {
      const type = (typeDef.sub as TypeDef).type;

      setImports(definitions, imports, ['Linkage']);

      return formatLinkage(formatType(registry, definitions, type, imports));
    }

    case TypeDefInfo.Result: {
      setImports(definitions, imports, ['Result']);

      const [okDef, errorDef] = (typeDef.sub as TypeDef[]);

      return formatResult(
        formatType(registry, definitions, okDef.type, imports),
        formatType(registry, definitions, errorDef.type, imports)
      );
    }

    default: {
      throw new Error(`Cannot format ${stringify(type)}`);
    }
  }
}
