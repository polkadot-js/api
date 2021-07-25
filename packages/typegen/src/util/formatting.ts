// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-unused-vars */

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

const formatters: Record<TypeDefInfo, (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports) => string> = {
  [TypeDefInfo.Compact]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports) => {
    setImports(definitions, imports, ['Compact']);

    const sub = typeDef.sub as TypeDef;

    return paramsNotation('Compact', formatType(registry, definitions, sub.lookupName || sub.type, imports));
  },
  [TypeDefInfo.DoNotConstruct]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports) => {
    setImports(definitions, imports, ['DoNotConstruct']);

    return 'DoNotConstruct';
  },
  [TypeDefInfo.Enum]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports) => {
    setImports(definitions, imports, ['Enum']);

    return '{ /** TODO generate fields **/ } & Enum';
  },
  [TypeDefInfo.Int]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports) => {
    throw new Error(`TypeDefInfo.Int: Not implemented on ${stringify(typeDef)}`);
  },
  [TypeDefInfo.UInt]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports) => {
    throw new Error(`TypeDefInfo.UInt: Not implemented on ${stringify(typeDef)}`);
  },
  [TypeDefInfo.Null]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports) => {
    setImports(definitions, imports, ['Null']);

    return 'Null';
  },
  [TypeDefInfo.Option]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports) => {
    setImports(definitions, imports, ['Option']);

    const sub = (typeDef.sub as TypeDef);

    return paramsNotation('Option', formatType(registry, definitions, sub.lookupName || sub.type, imports));
  },
  [TypeDefInfo.Plain]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports) => {
    return typeDef.type;
  },
  [TypeDefInfo.Set]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports) => {
    throw new Error(`TypeDefInfo.Set: Not implemented on ${stringify(typeDef)}`);
  },
  [TypeDefInfo.Si]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports) => {
    return formatType(registry, definitions, registry.lookup.getTypeDef(typeDef.type), imports);
  },
  [TypeDefInfo.Struct]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports) => {
    setImports(definitions, imports, ['Struct']);

    return `{ ${
      ((typeDef.sub as TypeDef[]).map(({ lookupName, name, type }, index) => [
        name || `unknown${index}`,
        formatType(registry, definitions, lookupName || type, imports)
      ])).map(([k, t]) => `${k}: ${t};`).join(' ')
    } } & Struct`;
  },
  [TypeDefInfo.Tuple]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports) => {
    setImports(definitions, imports, ['ITuple']);

    // `(a,b)` gets transformed into `ITuple<[a, b]>`
    return paramsNotation('ITuple', `[${
      ((typeDef.sub as TypeDef[]).map(({ lookupName, type }) =>
        formatType(registry, definitions, lookupName || type, imports))
      ).join(', ')
    }]`);
  },
  [TypeDefInfo.Vec]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports) => {
    setImports(definitions, imports, ['Vec']);

    const sub = (typeDef.sub as TypeDef);

    return paramsNotation('Vec', formatType(registry, definitions, sub.lookupName || sub.type, imports));
  },
  [TypeDefInfo.VecFixed]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports) => {
    const sub = (typeDef.sub as TypeDef);

    if (sub.type === 'u8') {
      setImports(definitions, imports, ['U8aFixed']);

      return 'U8aFixed';
    }

    setImports(definitions, imports, ['Vec']);

    return paramsNotation('Vec', formatType(registry, definitions, sub.lookupName || sub.type, imports));
  },
  [TypeDefInfo.BTreeMap]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports) => {
    setImports(definitions, imports, ['BTreeMap']);

    const [keyDef, valDef] = (typeDef.sub as TypeDef[]);

    return `BTreeMap<${formatType(registry, definitions, keyDef.lookupName || keyDef.type, imports)}, ${formatType(registry, definitions, valDef.lookupName || valDef.type, imports)}>`;
  },
  [TypeDefInfo.BTreeSet]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports) => {
    setImports(definitions, imports, ['BTreeSet']);

    const valDef = typeDef.sub as TypeDef;

    return `BTreeSet<${formatType(registry, definitions, valDef.lookupName || valDef.type, imports)}>`;
  },
  [TypeDefInfo.HashMap]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports) => {
    setImports(definitions, imports, ['HashMap']);

    const [keyDef, valDef] = (typeDef.sub as TypeDef[]);

    return `HashMap<${formatType(registry, definitions, keyDef.lookupName || keyDef.type, imports)}, ${formatType(registry, definitions, valDef.lookupName || valDef.type, imports)}>`;
  },
  [TypeDefInfo.Linkage]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports) => {
    setImports(definitions, imports, ['Linkage']);

    const sub = (typeDef.sub as TypeDef);

    return paramsNotation('Linkage', formatType(registry, definitions, sub.lookupName || sub.type, imports));
  },
  [TypeDefInfo.Result]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports) => {
    setImports(definitions, imports, ['Result']);

    const [okDef, errDef] = (typeDef.sub as TypeDef[]);

    return `Result<${formatType(registry, definitions, okDef.lookupName || okDef.type, imports)}, ${formatType(registry, definitions, errDef.lookupName || errDef.type, imports)}>`;
  }
};

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

  return formatters[typeDef.info](registry, typeDef, definitions, imports);
}
