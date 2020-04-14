// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef, TypeDefInfo } from '@polkadot/types/create/types';

import path from 'path';
import { getTypeDef } from '@polkadot/types/create';
import * as defaultDefinitions from '@polkadot/types/interfaces/definitions';
import { isString, stringCamelCase, stringUpperFirst } from '@polkadot/util';

import { FOOTER, HEADER, TypeImports, createImportCode, createImports, exportInterface, exportType, formatType, setImports, writeFile } from '../util';

interface Imports extends TypeImports {
  interfaces: [string, string][];
}

// helper to generate a `readonly <Name>: <Type>;` getter
/** @internal */
export function createGetter (definitions: object, name = '', type: string, imports: TypeImports): string {
  setImports(definitions, imports, [type]);

  return `  readonly ${name}: ${type};\n`;
}

/** @internal */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function errorUnhandled (definitions: object, def: TypeDef, imports: TypeImports): string {
  throw new Error(`Generate: ${name}: Unhandled type ${TypeDefInfo[def.info]}`);
}

/** @internal */
function tsExport (definitions: object, def: TypeDef, imports: TypeImports): string {
  return exportInterface(def.name, formatType(definitions, def, imports));
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
function tsEnum (definitions: object, { name: enumName, sub }: TypeDef, imports: TypeImports): string {
  setImports(definitions, imports, ['Enum']);

  const keys = (sub as TypeDef[]).map(({ info, name = '', type }): string => {
    const getter = stringUpperFirst(stringCamelCase(name.replace(' ', '_')));
    const asGetter = type === 'Null'
      ? ''
      : createGetter(definitions, `as${getter}`, info === TypeDefInfo.Tuple ? formatType(definitions, type, imports) : type, imports);
    const isGetter = createGetter(definitions, `is${getter}`, 'boolean', imports);

    switch (info) {
      case TypeDefInfo.Plain:
      case TypeDefInfo.Tuple:
      case TypeDefInfo.Vec:
        return `${isGetter}${asGetter}`;

      default:
        throw new Error(`Enum: ${enumName}: Unhandled type ${TypeDefInfo[info]}`);
    }
  });

  return exportInterface(enumName, 'Enum', keys.join(''));
}

function tsInt (definitions: object, def: TypeDef, imports: TypeImports, type: 'Int' | 'UInt' = 'Int'): string {
  setImports(definitions, imports, [type]);

  return exportInterface(def.name, type);
}

/** @internal */
function tsResultGetter (definitions: object, resultName = '', getter: 'Ok' | 'Error', def: TypeDef, imports: TypeImports): string {
  const { info, type } = def;
  const asGetter = type === 'Null'
    ? ''
    : createGetter(definitions, `as${getter}`, info === TypeDefInfo.Tuple ? formatType(definitions, def, imports) : type, imports);
  const isGetter = createGetter(definitions, `is${getter}`, 'boolean', imports);

  switch (info) {
    case TypeDefInfo.Plain:
    case TypeDefInfo.Tuple:
    case TypeDefInfo.Vec:
      return `${isGetter}${asGetter}`;

    default:
      throw new Error(`Result: ${resultName}: Unhandled type ${TypeDefInfo[info]}`);
  }
}

/** @internal */
function tsResult (definitions: object, def: TypeDef, imports: TypeImports): string {
  const [okDef, errorDef] = (def.sub as TypeDef[]);
  const inner = [
    tsResultGetter(definitions, def.name, 'Error', errorDef, imports),
    tsResultGetter(definitions, def.name, 'Ok', okDef, imports)
  ].join('');

  setImports(definitions, imports, [def.type]);

  return exportInterface(def.name, formatType(definitions, def, imports), inner);
}

/** @internal */
function tsSet (definitions: object, { name: setName, sub }: TypeDef, imports: TypeImports): string {
  setImports(definitions, imports, ['Set']);

  const types = (sub as TypeDef[]).map(({ name }): string =>
    createGetter(definitions, `is${name}`, 'boolean', imports)
  );

  return exportInterface(setName, 'Set', types.join(''));
}

/** @internal */
function tsStruct (definitions: object, { name: structName, sub }: TypeDef, imports: TypeImports): string {
  setImports(definitions, imports, ['Struct']);

  const keys = (sub as TypeDef[]).map((typedef): string => {
    const returnType = formatType(definitions, typedef, imports);

    return createGetter(definitions, typedef.name, returnType, imports);
  });

  return exportInterface(structName, 'Struct', keys.join(''));
}

/** @internal */
function tsUInt (definitions: object, def: TypeDef, imports: TypeImports): string {
  return tsInt(definitions, def, imports, 'UInt');
}

/** @internal */
function tsVec (definitions: object, def: TypeDef, imports: TypeImports): string {
  const type = (def.sub as TypeDef).type;

  if (def.info === TypeDefInfo.VecFixed && type === 'u8') {
    setImports(definitions, imports, ['U8aFixed']);

    return exportType(def.name, 'U8aFixed');
  }

  return exportInterface(def.name, formatType(definitions, def, imports));
}

/** @internal */
function generateInterfaces (definitions: object, { types }: { types: Record<string, any> }, imports: Imports): [string, string][] {
  // handlers are defined externally to use - this means that when we do a
  // `generators[typedef.info](...)` TS will show any unhandled types. Rather
  // we are being explicit in having no handlers where we do not support (yet)
  const generators = {
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
    [TypeDefInfo.Result]: tsResult,
    [TypeDefInfo.Set]: tsSet,
    [TypeDefInfo.Struct]: tsStruct,
    [TypeDefInfo.Tuple]: tsTuple,
    [TypeDefInfo.UInt]: tsUInt,
    [TypeDefInfo.Vec]: tsVec,
    [TypeDefInfo.VecFixed]: tsVec
  };

  return Object.entries(types).map(([name, type]): [string, string] => {
    const def = getTypeDef(isString(type) ? type.toString() : JSON.stringify(type), { name });

    return [name, generators[def.info](definitions, def, imports)];
  });
}

/** @internal */
function generateTsDefFor (importDefinitions: { [importPath: string]: object }, defName: string, { types }: { types: Record<string, any> }, outputDir: string): void {
  const imports = { ...createImports(importDefinitions, { types }), interfaces: [] } as Imports;
  const definitions = imports.definitions;
  const interfaces = generateInterfaces(definitions, { types }, imports);
  const sortedDefs = interfaces.sort((a, b): number => a[0].localeCompare(b[0])).map(([, definition]): string => definition).join('\n\n');

  const header = createImportCode(HEADER('defs'), imports, [
    ...Object.keys(imports.localTypes).sort().map((packagePath): { file: string; types: string[] } => ({
      file: packagePath,
      types: Object.keys(imports.localTypes[packagePath])
    }))
  ]);

  writeFile(path.join(outputDir, defName, 'types.ts'), () => header.concat(sortedDefs).concat(`\n\nexport type PHANTOM_${defName.toUpperCase()} = '${defName}';`).concat(FOOTER), true);
  writeFile(path.join(outputDir, defName, 'index.ts'), () => HEADER('defs').concat('export * from \'./types\';').concat(FOOTER), true);
}

/** @internal */
export function generateTsDef (importDefinitions: { [importPath: string]: object }, outputDir: string, generatingPackage: string): void {
  writeFile(path.join(outputDir, 'types.ts'), (): string => {
    const definitions = importDefinitions[generatingPackage];

    Object.entries(definitions).forEach(([defName, obj]): void => {
      console.log(`\tExtracting interfaces for ${defName}`);

      generateTsDefFor(importDefinitions, defName, obj, outputDir);
    });

    return HEADER('defs')
      .concat(
        Object
          .keys(definitions)
          .map((moduleName): string => `export * from './${moduleName}/types';`)
          .join('\n')
      )
      .concat(FOOTER);
  });

  writeFile(path.join(outputDir, 'index.ts'), () => HEADER('defs').concat('export * from \'./types\';').concat(FOOTER), true);
}

/** @internal */
export default function generateTsDefDefault (): void {
  generateTsDef(
    { '@polkadot/types/interfaces': defaultDefinitions },
    'packages/types/src/interfaces',
    '@polkadot/types/interfaces'
  );
}
