// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Registry } from '@polkadot/types/types';
import type { CodecRegistry } from '@polkadot/types-codec/types';
import type { TypeDef } from '@polkadot/types-create/types';

import Handlebars from 'handlebars';

import { getTypeDef, paramsNotation, TypeDefInfo } from '@polkadot/types-create';
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

function extractImports ({ imports, types }: This): string[] {
  return [
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
  ]
    .filter(({ types }) => types.length)
    .sort(({ file }, b) => file.localeCompare(b.file))
    .map(({ file, types }) => `import type { ${types.sort().join(', ')} } from '${file}';`);
}

Handlebars.registerPartial({
  header: Handlebars.compile(readTemplate('header'))
});

Handlebars.registerHelper({
  importsAll () {
    return extractImports(this as unknown as This)
      .join('\n');
  },
  importsPackage () {
    return extractImports(this as unknown as This)
      .filter((l) => !l.includes("from '."))
      .join('\n  ');
  },
  importsRelative () {
    return extractImports(this as unknown as This)
      .filter((l) => l.includes("from '."))
      .join('\n');
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
export function exportInterface (lookupIndex = -1, name = '', base: string, body = ''): string {
  // * @description extends [[${base}]]
  const doc = `/** @name ${name}${lookupIndex !== -1 ? ` (${lookupIndex})` : ''} */\n`;

  return `${doc}export interface ${name} extends ${base} {${body.length ? '\n' : ''}${body}}`;
}

// helper to create an `export type <Name> = <Base>`
// but since we don't want type alias (TS doesn't preserve names) we use
// interface here.
/** @internal */
export function exportType (lookupIndex = -1, name = '', base: string): string {
  return exportInterface(lookupIndex, name, base);
}

function singleParamNotation (registry: CodecRegistry, wrapper: string, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean): string {
  const sub = (typeDef.sub as TypeDef);

  setImports(definitions, imports, [wrapper, sub.lookupName]);

  return paramsNotation(wrapper, sub.lookupName || formatType(registry, definitions, sub.type, imports, withShortcut));
}

function dualParamsNotation (registry: CodecRegistry, wrapper: string, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean): string {
  const [a, b] = (typeDef.sub as TypeDef[]);

  setImports(definitions, imports, [wrapper, a.lookupName, b.lookupName]);

  return paramsNotation(wrapper, [
    a.lookupName || formatType(registry, definitions, a.type, imports, withShortcut),
    b.lookupName || formatType(registry, definitions, b.type, imports, withShortcut)
  ]);
}

const formatters: Record<TypeDefInfo, (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => string> = {
  [TypeDefInfo.Compact]: (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return singleParamNotation(registry, 'Compact', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.DoNotConstruct]: (registry: CodecRegistry, { lookupName }: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    setImports(definitions, imports, ['DoNotConstruct']);

    return 'DoNotConstruct';
  },

  [TypeDefInfo.Enum]: (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    if (typeDef.lookupName) {
      return typeDef.lookupName;
    }

    throw new Error(`TypeDefInfo.Enum: Not implemented on ${stringify(typeDef)}`);
  },

  [TypeDefInfo.Int]: (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    throw new Error(`TypeDefInfo.Int: Not implemented on ${stringify(typeDef)}`);
  },

  [TypeDefInfo.UInt]: (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    throw new Error(`TypeDefInfo.UInt: Not implemented on ${stringify(typeDef)}`);
  },

  [TypeDefInfo.Null]: (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    setImports(definitions, imports, ['Null']);

    return 'Null';
  },

  [TypeDefInfo.Option]: (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return singleParamNotation(registry, 'Option', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.Plain]: (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    setImports(definitions, imports, [typeDef.type]);

    return typeDef.type;
  },

  [TypeDefInfo.Range]: (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    throw new Error(`TypeDefInfo.Range: Not implemented on ${stringify(typeDef)}`);
  },

  [TypeDefInfo.Set]: (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    throw new Error(`TypeDefInfo.Set: Not implemented on ${stringify(typeDef)}`);
  },

  [TypeDefInfo.Si]: (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return formatType(registry, definitions, (registry as Registry).lookup.getTypeDef(typeDef.type), imports, withShortcut);
  },

  [TypeDefInfo.Struct]: (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    if (typeDef.lookupName) {
      return typeDef.lookupName;
    }

    const sub = typeDef.sub as TypeDef[];

    setImports(definitions, imports, ['Struct', ...sub.map(({ lookupName }) => lookupName)]);

    return `{${withShortcut ? ' ' : '\n'}${
      sub.map(({ lookupName, name, type }, index) => [
        name || `unknown${index}`,
        lookupName || formatType(registry, definitions, type, imports, withShortcut)
      ]).map(([k, t]) => `${withShortcut ? '' : '    readonly '}${k}: ${t};`).join(withShortcut ? ' ' : '\n')
    }${withShortcut ? ' ' : '\n  '}} & Struct`;
  },

  [TypeDefInfo.Tuple]: (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    const sub = typeDef.sub as TypeDef[];

    setImports(definitions, imports, ['ITuple', ...sub.map(({ lookupName }) => lookupName)]);

    // `(a,b)` gets transformed into `ITuple<[a, b]>`
    return paramsNotation('ITuple', `[${
      sub.map(({ lookupName, type }) =>
        lookupName || formatType(registry, definitions, type, imports, withShortcut)
      ).join(', ')
    }]`);
  },

  [TypeDefInfo.Vec]: (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return singleParamNotation(registry, 'Vec', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.VecFixed]: (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    const sub = (typeDef.sub as TypeDef);

    if (sub.type === 'u8') {
      setImports(definitions, imports, ['U8aFixed']);

      return 'U8aFixed';
    }

    return singleParamNotation(registry, 'Vec', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.BTreeMap]: (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return dualParamsNotation(registry, 'BTreeMap', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.BTreeSet]: (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return singleParamNotation(registry, 'BTreeSet', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.HashMap]: (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return dualParamsNotation(registry, 'HashMap', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.Linkage]: (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return singleParamNotation(registry, 'Linkage', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.Result]: (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return dualParamsNotation(registry, 'Result', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.WrapperOpaque]: (registry: CodecRegistry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return singleParamNotation(registry, 'WrapperOpaque', typeDef, definitions, imports, withShortcut);
  }
};

/**
 * Correctly format a given type
 */
/** @internal */
// eslint-disable-next-line @typescript-eslint/ban-types
export function formatType (registry: CodecRegistry, definitions: Record<string, ModuleTypes>, type: string | String | TypeDef, imports: TypeImports, withShortcut = false): string {
  let typeDef: TypeDef;

  if (isString(type)) {
    const _type = type.toString();

    // If type is "unorthodox" (i.e. `{ something: any }` for an Enum input or `[a | b | c, d | e | f]` for a Tuple's similar types),
    // we return it as-is
    if (withShortcut && /(^{.+:.+})|^\([^,]+\)|^\(.+\)\[\]|^\[.+\]/.exec(_type) && !/\[\w+;\w+\]/.exec(_type)) {
      return _type;
    }

    typeDef = getTypeDef(type);
  } else {
    typeDef = type;
  }

  setImports(definitions, imports, [typeDef.lookupName || typeDef.type]);

  return formatters[typeDef.info](registry, typeDef, definitions, imports, withShortcut);
}
