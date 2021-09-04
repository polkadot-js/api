// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TypeDef } from '@polkadot/types/create/types';
import type { Registry } from '@polkadot/types/types';
import type { ModuleTypes } from '../util/imports';

import Handlebars from 'handlebars';
import path from 'path';

import { getTypeDef, TypeRegistry } from '@polkadot/types/create';
import { TypeDefInfo } from '@polkadot/types/create/types';
import * as defaultDefinitions from '@polkadot/types/interfaces/definitions';
import { assert, isString, stringCamelCase, stringify, stringUpperFirst } from '@polkadot/util';

import { createImports, exportInterface, exportType, formatType, readTemplate, setImports, TypeImports, writeFile } from '../util';

interface Imports extends TypeImports {
  interfaces: [string, string][];
}

// helper to generate a `readonly <Name>: <Type>;` getter
/** @internal */
export function createGetter (definitions: Record<string, ModuleTypes>, name = '', type: string, imports: TypeImports): string {
  setImports(definitions, imports, [type]);

  return `  readonly ${name}: ${type};\n`;
}

/** @internal */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function errorUnhandled (_: Registry, definitions: Record<string, ModuleTypes>, def: TypeDef, imports: TypeImports): string {
  throw new Error(`Generate: ${def.name || ''}: Unhandled type ${TypeDefInfo[def.info]}`);
}

/** @internal */
function tsExport (registry: Registry, definitions: Record<string, ModuleTypes>, def: TypeDef, imports: TypeImports): string {
  return exportInterface(def.name, formatType(registry, definitions, def, imports));
}

const tsBTreeMap = tsExport;
const tsBTreeSet = tsExport;
const tsCompact = tsExport;
const tsDoNotConstruct = tsExport;
const tsHashMap = tsExport;
const tsOption = tsExport;
const tsPlain = tsExport;
const tsTuple = tsExport;

/** @internal */
function tsEnum (registry: Registry, definitions: Record<string, ModuleTypes>, { name: enumName, sub }: TypeDef, imports: TypeImports): string {
  setImports(definitions, imports, ['Enum']);

  const keys = (sub as TypeDef[]).map((def, index): string => {
    const { info, name = `unknown${index}`, type } = def;
    const getter = stringUpperFirst(stringCamelCase(name.replace(' ', '_')));
    const isComplex = [TypeDefInfo.Result, TypeDefInfo.Struct, TypeDefInfo.Tuple, TypeDefInfo.Vec, TypeDefInfo.VecFixed].includes(info);
    const asGetter = type === 'Null' || info === TypeDefInfo.DoNotConstruct
      ? ''
      : createGetter(definitions, `as${getter}`, isComplex ? formatType(registry, definitions, info === TypeDefInfo.Struct ? def : type, imports) : type, imports);
    const isGetter = info === TypeDefInfo.DoNotConstruct
      ? ''
      : createGetter(definitions, `is${getter}`, 'boolean', imports);

    switch (info) {
      case TypeDefInfo.Compact:
      case TypeDefInfo.Plain:
      case TypeDefInfo.Result:
      case TypeDefInfo.Struct:
      case TypeDefInfo.Tuple:
      case TypeDefInfo.Vec:
      case TypeDefInfo.Option:
      case TypeDefInfo.VecFixed:
        return `${isGetter}${asGetter}`;

      case TypeDefInfo.DoNotConstruct:
        return '';

      default:
        throw new Error(`Enum: ${enumName || 'undefined'}: Unhandled nested "${TypeDefInfo[info]}" type`);
    }
  });

  return exportInterface(enumName, 'Enum', keys.join(''));
}

function tsInt (_: Registry, definitions: Record<string, ModuleTypes>, def: TypeDef, imports: TypeImports, type: 'Int' | 'UInt' = 'Int'): string {
  setImports(definitions, imports, [type]);

  return exportInterface(def.name, type);
}

/** @internal */
function tsResultGetter (registry: Registry, definitions: Record<string, ModuleTypes>, resultName = '', getter: 'Ok' | 'Err' | 'Error', def: TypeDef, imports: TypeImports): string {
  const { info, type } = def;
  const asGetter = type === 'Null'
    ? ''
    : (getter === 'Error' ? '  /** @deprecated Use asErr */\n' : '') + createGetter(definitions, `as${getter}`, info === TypeDefInfo.Tuple ? formatType(registry, definitions, def, imports) : type, imports);
  const isGetter = (getter === 'Error' ? '  /** @deprecated Use isErr */\n' : '') + createGetter(definitions, `is${getter}`, 'boolean', imports);

  switch (info) {
    case TypeDefInfo.Plain:
    case TypeDefInfo.Tuple:
    case TypeDefInfo.Vec:
    case TypeDefInfo.Option:
      return `${isGetter}${asGetter}`;

    default:
      throw new Error(`Result: ${resultName}: Unhandled type ${TypeDefInfo[info]}`);
  }
}

/** @internal */
function tsResult (registry: Registry, definitions: Record<string, ModuleTypes>, def: TypeDef, imports: TypeImports): string {
  const [okDef, errorDef] = (def.sub as TypeDef[]);
  const inner = [
    tsResultGetter(registry, definitions, def.name, 'Err', errorDef, imports),
    // @deprecated, use Err
    tsResultGetter(registry, definitions, def.name, 'Error', errorDef, imports),
    tsResultGetter(registry, definitions, def.name, 'Ok', okDef, imports)
  ].join('');

  setImports(definitions, imports, [def.type]);

  return exportInterface(def.name, formatType(registry, definitions, def, imports), inner);
}

/** @internal */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function tsSi (registry: Registry, definitions: Record<string, ModuleTypes>, { type }: TypeDef, imports: TypeImports): string {
  throw new Error('Unable to generate string definition from TypeDefInfo.Si');
}

/** @internal */
function tsSet (_: Registry, definitions: Record<string, ModuleTypes>, { name: setName, sub }: TypeDef, imports: TypeImports): string {
  setImports(definitions, imports, ['Set']);

  const types = (sub as TypeDef[]).map(({ name }): string => {
    assert(name, 'Invalid TypeDef found, no name specified');

    return createGetter(definitions, `is${name}`, 'boolean', imports);
  });

  return exportInterface(setName, 'Set', types.join(''));
}

/** @internal */
function tsStruct (registry: Registry, definitions: Record<string, ModuleTypes>, { name: structName, sub }: TypeDef, imports: TypeImports): string {
  setImports(definitions, imports, ['Struct']);

  const keys = (sub as TypeDef[]).map((typedef): string => {
    const returnType = formatType(registry, definitions, typedef, imports);

    return createGetter(definitions, typedef.name, returnType, imports);
  });

  return exportInterface(structName, 'Struct', keys.join(''));
}

/** @internal */
function tsUInt (registry: Registry, definitions: Record<string, ModuleTypes>, def: TypeDef, imports: TypeImports): string {
  return tsInt(registry, definitions, def, imports, 'UInt');
}

/** @internal */
function tsVec (registry: Registry, definitions: Record<string, ModuleTypes>, def: TypeDef, imports: TypeImports): string {
  const type = (def.sub as TypeDef).type;

  if (def.info === TypeDefInfo.VecFixed && type === 'u8') {
    setImports(definitions, imports, ['U8aFixed']);

    return exportType(def.name, 'U8aFixed');
  }

  return exportInterface(def.name, formatType(registry, definitions, def, imports));
}

// handlers are defined externally to use - this means that when we do a
// `generators[typedef.info](...)` TS will show any unhandled types. Rather
// we are being explicit in having no handlers where we do not support (yet)
const encoders: Record<TypeDefInfo, (registry: Registry, definitions: Record<string, ModuleTypes>, def: TypeDef, imports: TypeImports) => string> = {
  [TypeDefInfo.BTreeMap]: tsBTreeMap,
  [TypeDefInfo.BTreeSet]: tsBTreeSet,
  [TypeDefInfo.Compact]: tsCompact,
  [TypeDefInfo.DoNotConstruct]: tsDoNotConstruct,
  [TypeDefInfo.Enum]: tsEnum,
  [TypeDefInfo.HashMap]: tsHashMap,
  [TypeDefInfo.Int]: tsInt,
  [TypeDefInfo.Linkage]: errorUnhandled,
  [TypeDefInfo.Null]: errorUnhandled,
  [TypeDefInfo.Option]: tsOption,
  [TypeDefInfo.Plain]: tsPlain,
  [TypeDefInfo.Range]: errorUnhandled,
  [TypeDefInfo.Result]: tsResult,
  [TypeDefInfo.Set]: tsSet,
  [TypeDefInfo.Si]: tsSi,
  [TypeDefInfo.Struct]: tsStruct,
  [TypeDefInfo.Tuple]: tsTuple,
  [TypeDefInfo.UInt]: tsUInt,
  [TypeDefInfo.Vec]: tsVec,
  [TypeDefInfo.VecFixed]: tsVec
};

/** @internal */
function generateInterfaces (registry: Registry, definitions: Record<string, ModuleTypes>, { types }: { types: Record<string, any> }, imports: Imports): [string, string][] {
  return Object.entries(types).map(([name, type]): [string, string] => {
    const def = getTypeDef(isString(type) ? type : stringify(type), { name });

    return [name, encoders[def.info](registry, definitions, def, imports)];
  });
}

const templateIndex = readTemplate('tsDef/index');
const generateTsDefIndexTemplate = Handlebars.compile(templateIndex);

const templateModuleTypes = readTemplate('tsDef/moduleTypes');
const generateTsDefModuleTypesTemplate = Handlebars.compile(templateModuleTypes);

const templateTypes = readTemplate('tsDef/types');
const generateTsDefTypesTemplate = Handlebars.compile(templateTypes);

/** @internal */
function generateTsDefFor (registry: Registry, importDefinitions: { [importPath: string]: Record<string, ModuleTypes> }, defName: string, { types }: { types: Record<string, any> }, outputDir: string): void {
  const imports = { ...createImports(importDefinitions, { types }), interfaces: [] } as Imports;
  const definitions = imports.definitions;
  const interfaces = generateInterfaces(registry, definitions, { types }, imports);
  const items = interfaces.sort((a, b): number => a[0].localeCompare(b[0])).map(([, definition]): string => definition);

  const importTypes = [
    ...Object.keys(imports.localTypes).sort().map((packagePath): { file: string; types: string[] } => ({
      file: packagePath,
      types: Object.keys(imports.localTypes[packagePath])
    }))
  ];

  writeFile(path.join(outputDir, defName, 'types.ts'), () => generateTsDefModuleTypesTemplate({
    headerType: 'defs',
    imports,
    items,
    name: defName,
    types: importTypes
  }), true);
  writeFile(path.join(outputDir, defName, 'index.ts'), () => generateTsDefIndexTemplate({ headerType: 'defs' }), true);
}

/** @internal */
export function generateTsDef (importDefinitions: { [importPath: string]: Record<string, ModuleTypes> }, outputDir: string, generatingPackage: string): void {
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
