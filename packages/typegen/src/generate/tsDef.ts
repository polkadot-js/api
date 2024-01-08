// Copyright 2017-2024 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types/types';
import type { TypeDef } from '@polkadot/types-create/types';
import type { ModuleTypes } from '../util/imports.js';
import type { TypeImports } from '../util/index.js';

import Handlebars from 'handlebars';
import path from 'node:path';

import { TypeRegistry } from '@polkadot/types/create';
import * as defaultDefinitions from '@polkadot/types/interfaces/definitions';
import { getTypeDef, TypeDefInfo } from '@polkadot/types-create';
import { assert, isString, stringify, stringPascalCase } from '@polkadot/util';

import { createImports, exportInterface, formatType, readTemplate, setImports, writeFile } from '../util/index.js';

interface Imports extends TypeImports {
  interfaces: [string, string][];
}

const generateTsDefIndexTemplate = Handlebars.compile(readTemplate('tsDef/index'));
const generateTsDefModuleTypesTemplate = Handlebars.compile(readTemplate('tsDef/moduleTypes'));
const generateTsDefTypesTemplate = Handlebars.compile(readTemplate('tsDef/types'));

// helper to generate a `readonly <Name>: <Type>;` getter
/** @internal */
export function createGetter (definitions: Record<string, ModuleTypes>, name = '', type: string, imports: TypeImports): string {
  setImports(definitions, imports, [type]);

  return `  readonly ${name}: ${type};\n`;
}

/** @internal */
function errorUnhandled (_: Registry, _definitions: Record<string, ModuleTypes>, def: TypeDef, _imports: TypeImports): string {
  throw new Error(`Generate: ${def.name || ''}: Unhandled type ${TypeDefInfo[def.info]}`);
}

/** @internal */
function tsExport (registry: Registry, definitions: Record<string, ModuleTypes>, def: TypeDef, imports: TypeImports): string {
  return exportInterface(def.lookupIndex, def.name, formatType(registry, definitions, def, imports, false));
}

/** @internal */
function tsEnum (registry: Registry, definitions: Record<string, ModuleTypes>, { lookupIndex, name: enumName, sub }: TypeDef, imports: TypeImports, withShortcut = false): string {
  setImports(definitions, imports, ['Enum']);

  const indent = withShortcut ? '  ' : '';
  const named = (sub as TypeDef[]).filter(({ name }) => !!name && !name.startsWith('__Unused'));
  const keys = named.map((def): string => {
    const { info, lookupName, name = '', type } = def;
    const getter = stringPascalCase(name.replace(' ', '_'));
    const isComplex = [TypeDefInfo.Option, TypeDefInfo.Range, TypeDefInfo.RangeInclusive, TypeDefInfo.Result, TypeDefInfo.Struct, TypeDefInfo.Tuple, TypeDefInfo.Vec, TypeDefInfo.VecFixed].includes(info);
    const asGetter = type === 'Null' || info === TypeDefInfo.DoNotConstruct
      ? ''
      : createGetter(definitions, `as${getter}`, lookupName || (isComplex ? formatType(registry, definitions, info === TypeDefInfo.Struct ? def : type, imports, withShortcut) : type), imports);
    const isGetter = info === TypeDefInfo.DoNotConstruct
      ? ''
      : createGetter(definitions, `is${getter}`, 'boolean', imports);

    switch (info) {
      case TypeDefInfo.Compact:
      case TypeDefInfo.Plain:
      case TypeDefInfo.Range:
      case TypeDefInfo.RangeInclusive:
      case TypeDefInfo.Result:
      case TypeDefInfo.Si:
      case TypeDefInfo.Struct:
      case TypeDefInfo.Tuple:
      case TypeDefInfo.Vec:
      case TypeDefInfo.BTreeMap:
      case TypeDefInfo.BTreeSet:
      case TypeDefInfo.Option:
      case TypeDefInfo.VecFixed:
      case TypeDefInfo.WrapperKeepOpaque:
      case TypeDefInfo.WrapperOpaque:
        return `${indent}${isGetter}${indent}${asGetter}`;

      case TypeDefInfo.DoNotConstruct:
      case TypeDefInfo.Null:
        return `${indent}${isGetter}`;

      default:
        throw new Error(`Enum: ${enumName || 'undefined'}: Unhandled type ${TypeDefInfo[info]}, ${stringify(def)}`);
    }
  });

  return exportInterface(lookupIndex, enumName, 'Enum', `${keys.join('')}  ${indent}readonly type: ${named.map(({ name = '' }) => `'${stringPascalCase(name.replace(' ', '_'))}'`).join(' | ')};\n`, withShortcut);
}

function tsInt (_: Registry, definitions: Record<string, ModuleTypes>, def: TypeDef, imports: TypeImports, type: 'Int' | 'UInt' = 'Int'): string {
  setImports(definitions, imports, [type]);

  return exportInterface(def.lookupIndex, def.name, type);
}

/** @internal */
function tsNull (_registry: Registry, definitions: Record<string, ModuleTypes>, { lookupIndex = -1, name }: TypeDef, imports: TypeImports): string {
  setImports(definitions, imports, ['Null']);

  // * @description extends [[${base}]]
  const doc = `/** @name ${name || ''}${lookupIndex !== -1 ? ` (${lookupIndex})` : ''} */\n`;

  return `${doc}export type ${name || ''} = Null;`;
}

/** @internal */
function tsResultGetter (registry: Registry, definitions: Record<string, ModuleTypes>, resultName = '', getter: 'Ok' | 'Err', def: TypeDef, imports: TypeImports): string {
  const { info, lookupName, type } = def;
  const asGetter = type === 'Null'
    ? ''
    : createGetter(definitions, `as${getter}`, lookupName || (info === TypeDefInfo.Tuple ? formatType(registry, definitions, def, imports, false) : type), imports);
  const isGetter = createGetter(definitions, `is${getter}`, 'boolean', imports);

  switch (info) {
    case TypeDefInfo.Option:
    case TypeDefInfo.Plain:
    case TypeDefInfo.Si:
    case TypeDefInfo.Tuple:
    case TypeDefInfo.Vec:
    case TypeDefInfo.BTreeMap:
    case TypeDefInfo.BTreeSet:
    case TypeDefInfo.WrapperKeepOpaque:
    case TypeDefInfo.WrapperOpaque:
      return `${isGetter}${asGetter}`;

    case TypeDefInfo.Null:
      return `${isGetter}`;

    default:
      throw new Error(`Result: ${resultName}: Unhandled type ${TypeDefInfo[info]}, ${stringify(def)}`);
  }
}

/** @internal */
function tsResult (registry: Registry, definitions: Record<string, ModuleTypes>, def: TypeDef, imports: TypeImports): string {
  const [okDef, errorDef] = (def.sub as TypeDef[]);
  const inner = [
    tsResultGetter(registry, definitions, def.name, 'Err', errorDef, imports),
    tsResultGetter(registry, definitions, def.name, 'Ok', okDef, imports)
  ].join('');

  setImports(definitions, imports, [def.type]);

  const fmtType = def.lookupName && def.name !== def.lookupName
    ? def.lookupName
    : formatType(registry, definitions, def, imports, false);

  return exportInterface(def.lookupIndex, def.name, fmtType, inner);
}

/** @internal */
function tsSi (_registry: Registry, _definitions: Record<string, ModuleTypes>, typeDef: TypeDef, _imports: TypeImports): string {
  // FIXME
  return `// SI: ${stringify(typeDef)}`;
}

/** @internal */
function tsSet (_: Registry, definitions: Record<string, ModuleTypes>, { lookupIndex, name: setName, sub }: TypeDef, imports: TypeImports): string {
  setImports(definitions, imports, ['Set']);

  const types = (sub as TypeDef[]).map(({ name }): string => {
    assert(name, 'Invalid TypeDef found, no name specified');

    return createGetter(definitions, `is${name}`, 'boolean', imports);
  });

  return exportInterface(lookupIndex, setName, 'Set', types.join(''));
}

/** @internal */
function tsStruct (registry: Registry, definitions: Record<string, ModuleTypes>, { lookupIndex, name: structName, sub }: TypeDef, imports: TypeImports): string {
  setImports(definitions, imports, ['Struct']);

  const keys = (sub as TypeDef[]).map((def): string => {
    const fmtType = def.lookupName && def.name !== def.lookupName
      ? def.lookupName
      : def.info === TypeDefInfo.Enum
        ? `${tsEnum(registry, definitions, def, imports, true)} & Enum`
        : formatType(registry, definitions, def, imports, false);

    return createGetter(definitions, def.name, fmtType, imports);
  });

  return exportInterface(lookupIndex, structName, 'Struct', keys.join(''));
}

/** @internal */
function tsUInt (registry: Registry, definitions: Record<string, ModuleTypes>, def: TypeDef, imports: TypeImports): string {
  return tsInt(registry, definitions, def, imports, 'UInt');
}

/** @internal */
function tsVec (registry: Registry, definitions: Record<string, ModuleTypes>, def: TypeDef, imports: TypeImports): string {
  const type = (def.sub as TypeDef).type;

  if (type === 'u8') {
    if (def.info === TypeDefInfo.VecFixed) {
      setImports(definitions, imports, ['U8aFixed']);

      return exportInterface(def.lookupIndex, def.name, 'U8aFixed');
    } else {
      setImports(definitions, imports, ['Bytes']);

      return exportInterface(def.lookupIndex, def.name, 'Bytes');
    }
  }

  const fmtType = def.lookupName && def.name !== def.lookupName
    ? def.lookupName
    : formatType(registry, definitions, def, imports, false);

  return exportInterface(def.lookupIndex, def.name, fmtType);
}

// handlers are defined externally to use - this means that when we do a
// `generators[typedef.info](...)` TS will show any unhandled types. Rather
// we are being explicit in having no handlers where we do not support (yet)
export const typeEncoders: Record<TypeDefInfo, (registry: Registry, definitions: Record<string, ModuleTypes>, def: TypeDef, imports: TypeImports) => string> = {
  [TypeDefInfo.BTreeMap]: tsExport,
  [TypeDefInfo.BTreeSet]: tsExport,
  [TypeDefInfo.Compact]: tsExport,
  [TypeDefInfo.DoNotConstruct]: tsExport,
  [TypeDefInfo.Enum]: tsEnum,
  [TypeDefInfo.HashMap]: tsExport,
  [TypeDefInfo.Int]: tsInt,
  [TypeDefInfo.Linkage]: errorUnhandled,
  [TypeDefInfo.Null]: tsNull,
  [TypeDefInfo.Option]: tsExport,
  [TypeDefInfo.Plain]: tsExport,
  [TypeDefInfo.Range]: tsExport,
  [TypeDefInfo.RangeInclusive]: tsExport,
  [TypeDefInfo.Result]: tsResult,
  [TypeDefInfo.Set]: tsSet,
  [TypeDefInfo.Si]: tsSi,
  [TypeDefInfo.Struct]: tsStruct,
  [TypeDefInfo.Tuple]: tsExport,
  [TypeDefInfo.UInt]: tsUInt,
  [TypeDefInfo.Vec]: tsVec,
  [TypeDefInfo.VecFixed]: tsVec,
  [TypeDefInfo.WrapperKeepOpaque]: tsExport,
  [TypeDefInfo.WrapperOpaque]: tsExport
};

/** @internal */
function generateInterfaces (registry: Registry, definitions: Record<string, ModuleTypes>, { types }: { types: Record<string, any> }, imports: Imports): [string, string][] {
  return Object.entries(types).map(([name, type]): [string, string] => {
    const def = getTypeDef(isString(type) ? type : stringify(type), { name });

    return [name, typeEncoders[def.info](registry, definitions, def, imports)];
  });
}

/** @internal */
export function generateTsDefFor (registry: Registry, importDefinitions: Record<string, Record<string, ModuleTypes>>, defName: string, { types }: { types: Record<string, any> }, outputDir: string): void {
  const imports = { ...createImports(importDefinitions, { types }), interfaces: [] } as Imports;
  const definitions = imports.definitions;
  const interfaces = generateInterfaces(registry, definitions, { types }, imports);
  const items = interfaces.sort((a, b) => a[0].localeCompare(b[0])).map(([, definition]) => definition);

  writeFile(path.join(outputDir, defName, 'types.ts'), () => generateTsDefModuleTypesTemplate({
    headerType: 'defs',
    imports,
    items,
    name: defName,
    types: [
      ...Object.keys(imports.localTypes).sort().map((packagePath): { file: string; types: string[] } => ({
        file: packagePath.replace('@polkadot/types/augment', '@polkadot/types'),
        types: Object.keys(imports.localTypes[packagePath])
      }))
    ]
  }), true);
  writeFile(path.join(outputDir, defName, 'index.ts'), () => generateTsDefIndexTemplate({ headerType: 'defs' }), true);
}

/** @internal */
export function generateTsDef (importDefinitions: Record<string, Record<string, ModuleTypes>>, outputDir: string, generatingPackage: string): void {
  const registry = new TypeRegistry();

  writeFile(path.join(outputDir, 'types.ts'), (): string => {
    const definitions = importDefinitions[generatingPackage];

    Object.entries(definitions).forEach(([defName, obj]): void => {
      console.log(`\tExtracting interfaces for ${defName}`);

      generateTsDefFor(registry, importDefinitions, defName, obj, outputDir);
    });

    return generateTsDefTypesTemplate({
      headerType: 'defs',
      items: Object.keys(definitions)
    });
  });

  writeFile(path.join(outputDir, 'index.ts'), () => generateTsDefIndexTemplate({ headerType: 'defs' }), true);
}

/** @internal */
export function generateDefaultTsDef (): void {
  generateTsDef(
    { '@polkadot/types/interfaces': defaultDefinitions },
    'packages/types/src/interfaces',
    '@polkadot/types/interfaces'
  );
}
