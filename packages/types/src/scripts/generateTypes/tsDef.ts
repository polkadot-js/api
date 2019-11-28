// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef, TypeDefInfo, TypeDefExtVecFixed } from '../../codec/types';

import fs from 'fs';
import path from 'path';
import { isString, stringCamelCase, stringUpperFirst } from '@polkadot/util';

import { getTypeDef } from '../../codec/create';
import * as defaultDefinitions from '../../interfaces/definitions';
import { createImportCode, createImports, exportInterface, exportType, formatBTreeMap, formatCompact, formatOption, formatResult, formatTuple, formatVec, FOOTER, HEADER, setImports, TypeImports } from '../util';

interface Imports extends TypeImports {
  interfaces: [string, string][];
}

// helper to generate a `readonly <Name>: <Type>;` getter
export function createGetter (definitions: object, name = '', type: string, imports: TypeImports, doc?: string): string {
  setImports(definitions, imports, [type]);
  return `  /** ${doc || type} */\n  readonly ${name}: ${type};\n`;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function errorUnhandled (definitions: object, def: TypeDef, imports: TypeImports): string {
  throw new Error(`Generate: ${name}: Unhandled type ${TypeDefInfo[def.info]}`);
}

function tsBTreeMap (definitions: object, { name: resultName, sub, type }: TypeDef, imports: TypeImports): string {
  const [keyDef, valDef] = (sub as TypeDef[]);

  setImports(definitions, imports, [type]);

  return exportInterface(resultName, formatBTreeMap(keyDef.type, valDef.type));
}

function tsCompact (definitions: object, { name: compactName, sub }: TypeDef, imports: TypeImports): string {
  const def = (sub as TypeDef);

  setImports(definitions, imports, ['Compact']);

  switch (def.info) {
    case TypeDefInfo.Plain:
      setImports(definitions, imports, [def.type]);
      return exportType(compactName, formatCompact(def.type));

    default:
      throw new Error(`Enum: ${compactName}: Unhandled type ${TypeDefInfo[def.info]}`);
  }
}

function tsEnum (definitions: object, { name: enumName, sub }: TypeDef, imports: TypeImports): string {
  setImports(definitions, imports, ['Enum']);

  const keys = (sub as TypeDef[]).map(({ info, name = '', type }, index): string => {
    const getter = stringUpperFirst(stringCamelCase(name.replace(' ', '_')));
    const [enumType, asGetter] = type === 'Null'
      ? ['', '']
      : [`(${type})`, createGetter(definitions, `as${getter}`, type, imports)];
    const isGetter = createGetter(definitions, `is${getter}`, 'boolean', imports, `${index}:: ${name}${enumType}`);

    switch (info) {
      case TypeDefInfo.Plain:
      case TypeDefInfo.Vec:
        return `${isGetter}${asGetter}`;

      default:
        throw new Error(`Enum: ${enumName}: Unhandled type ${TypeDefInfo[info]}`);
    }
  });

  return exportInterface(enumName, 'Enum', keys.join(''));
}

function tsOption (definitions: object, { name: optionName, sub }: TypeDef, imports: TypeImports): string {
  const def = (sub as TypeDef);

  setImports(definitions, imports, ['Option']);

  switch (def.info) {
    case TypeDefInfo.Plain:
      setImports(definitions, imports, [def.type]);
      return exportType(optionName, formatOption(def.type));

    default:
      throw new Error(`Enum: ${optionName}: Unhandled type ${TypeDefInfo[def.info]}`);
  }
}

function tsPlain (definitions: object, { name: plainName, type }: TypeDef, imports: TypeImports): string {
  setImports(definitions, imports, [type]);

  return exportType(plainName, type);
}

function tsResultGetter (definitions: object, resultName = '', getter: 'Ok' | 'Error', { info, name = '', type }: TypeDef, imports: TypeImports): string {
  const [resultType, asGetter] = type === 'Null'
    ? ['', '']
    : [`(${type})`, createGetter(definitions, `as${getter}`, type, imports)];
  const isGetter = createGetter(definitions, `is${getter}`, 'boolean', imports, `${getter}:: ${name}${resultType}`);

  switch (info) {
    case TypeDefInfo.Plain:
    case TypeDefInfo.Vec:
      return `${isGetter}${asGetter}`;

    default:
      throw new Error(`Result: ${resultName}: Unhandled type ${TypeDefInfo[info]}`);
  }
}

function tsResult (definitions: object, { name: resultName, sub, type }: TypeDef, imports: TypeImports): string {
  const [okDef, errorDef] = (sub as TypeDef[]);
  const inner = [
    tsResultGetter(definitions, resultName, 'Error', errorDef, imports),
    tsResultGetter(definitions, resultName, 'Ok', okDef, imports)
  ].join('');

  setImports(definitions, imports, [type]);

  return exportInterface(resultName, formatResult(okDef.type, errorDef.type), inner);
}

function _tsStructGetterType (definitions: object, structName: string | undefined, { info, sub, type }: TypeDef, imports: TypeImports): [string, string] {
  let _type;

  switch (info) {
    case TypeDefInfo.Compact:
      _type = (sub as TypeDef).type;

      setImports(definitions, imports, ['Compact']);

      return [_type, formatCompact(_type)];

    case TypeDefInfo.Option:
      _type = (sub as TypeDef).type;

      setImports(definitions, imports, ['Option']);

      return [_type, formatOption(_type)];

    case TypeDefInfo.Plain:
      return [type, type];

    case TypeDefInfo.Vec:
      _type = (sub as TypeDef).type;

      setImports(definitions, imports, ['Vec']);

      return [_type, formatVec(_type)];

    default:
      throw new Error(`Struct: ${structName}: Unhandled type ${TypeDefInfo[info]}`);
  }
}

function tsSet (definitions: object, { name: setName, sub }: TypeDef, imports: TypeImports): string {
  setImports(definitions, imports, ['Set']);

  const types = (sub as TypeDef[]).map(({ name }): string =>
    createGetter(definitions, `is${name}`, 'boolean', imports)
  );

  return exportInterface(setName, 'Set', types.join(''));
}

function tsStruct (definitions: object, { name: structName, sub }: TypeDef, imports: TypeImports): string {
  const keys = (sub as TypeDef[]).map((typedef): string => {
    const [embedType, returnType] = _tsStructGetterType(definitions, structName, typedef, imports);

    setImports(definitions, imports, ['Struct', embedType]);

    return createGetter(definitions, typedef.name, returnType, imports);
  });

  return exportInterface(structName, 'Struct', keys.join(''));
}

function _tsTupleGetterType (definitions: object, tupleName: string | undefined, { info, sub, type }: TypeDef, imports: TypeImports): string {
  switch (info) {
    case TypeDefInfo.Option:
      setImports(definitions, imports, ['Option', (sub as TypeDef).type]);

      return type;

    case TypeDefInfo.Plain:
      setImports(definitions, imports, [type]);

      return type;

    default:
      throw new Error(`Struct: ${tupleName}: Unhandled type ${TypeDefInfo[info]}`);
  }
}

function tsTuple (definitions: object, { name: tupleName, sub }: TypeDef, imports: TypeImports): string {
  setImports(definitions, imports, ['ITuple']);

  const types = (sub as TypeDef[]).map((typedef): string =>
    _tsTupleGetterType(definitions, tupleName, typedef, imports)
  );

  return exportType(tupleName, formatTuple(types));
}

function tsVec (definitions: object, { ext, info, name: vectorName, sub }: TypeDef, imports: TypeImports): string {
  const type = info === TypeDefInfo.VecFixed
    ? (ext as TypeDefExtVecFixed).type
    : (sub as TypeDef).type;

  // FIXME This should be a VecFixed
  // FIXME Technically Vec has length prefix, so for others this is not 100%
  if (info === TypeDefInfo.VecFixed && type === 'u8') {
    setImports(definitions, imports, ['Codec']);

    return exportType(vectorName, 'Uint8Array, Codec');
  }

  setImports(definitions, imports, ['Vec', type]);

  return exportType(vectorName, formatVec(type));
}

function generateInterfaces (definitions: object, { types }: { types: Record<string, any> }, imports: Imports): [string, string][] {
  // handlers are defined externally to use - this means that when we do a
  // `generators[typedef.info](...)` TS will show any unhandled types. Rather
  // we are being explicit in having no handlers where we do not support (yet)
  const generators = {
    [TypeDefInfo.BTreeMap]: tsBTreeMap,
    [TypeDefInfo.Compact]: tsCompact,
    [TypeDefInfo.DoubleMap]: errorUnhandled,
    [TypeDefInfo.Enum]: tsEnum,
    [TypeDefInfo.Linkage]: errorUnhandled,
    [TypeDefInfo.Null]: errorUnhandled,
    [TypeDefInfo.Option]: tsOption,
    [TypeDefInfo.Plain]: tsPlain,
    [TypeDefInfo.Result]: tsResult,
    [TypeDefInfo.Set]: tsSet,
    [TypeDefInfo.Struct]: tsStruct,
    [TypeDefInfo.Tuple]: tsTuple,
    [TypeDefInfo.Vec]: tsVec,
    [TypeDefInfo.VecFixed]: tsVec
  };

  return Object.entries(types).map(([name, type]): [string, string] => {
    const def = getTypeDef(isString(type) ? type.toString() : JSON.stringify(type), { name });

    return [name, generators[def.info](definitions, def, imports)];
  });
}

function generateTsDefFor (definitions: object, defName: string, { types }: { types: Record<string, any> }, outputDir: string): void {
  const imports = { ...createImports(definitions, { types }), interfaces: [] } as Imports;
  const interfaces = generateInterfaces(definitions, { types }, imports);
  const sortedDefs = interfaces.sort((a, b): number => a[0].localeCompare(b[0])).map(([, definition]): string => definition).join('\n\n');

  const header = createImportCode(HEADER, [
    {
      file: '@polkadot/types/types',
      types: Object.keys(imports.typesTypes)
    },
    {
      file: '@polkadot/types/codec',
      types: Object.keys(imports.codecTypes).filter((name): boolean => name !== 'Tuple')
    },
    {
      file: '@polkadot/types/primitive',
      types: Object.keys(imports.primitiveTypes)
    },
    ...Object.keys(imports.localTypes).map((moduleName): { file: string; types: string[] } => ({
      file: `@polkadot/types/interfaces/${moduleName}`,
      types: Object.keys(imports.localTypes[moduleName])
    }))
  ]);

  Object.entries(imports.localTypes).forEach(([moduleName, typeMap]): void => {
    const types = Object.keys(typeMap).sort();

    if (types.length) {
      console.log(`\timport { ${types.join(', ')} } from '../${moduleName}'`);
    }
  });

  fs.writeFileSync(path.join(outputDir, defName, 'types.ts'), header.concat(sortedDefs).concat(FOOTER), { flag: 'w' });
  fs.writeFileSync(path.join(outputDir, defName, 'index.ts'), HEADER.concat('export * from \'./types\';').concat(FOOTER), { flag: 'w' });
}

export function generateTsDef (definitions: object, outputDir: string): void {
  Object.entries(definitions).forEach(([defName, obj]): void => {
    console.log(`Extracting interfaces for ${defName}`);

    generateTsDefFor(definitions, defName, obj, outputDir);
  });

  console.log(`Writing ${outputDir}`);

  fs.writeFileSync(path.join(outputDir, 'types.ts'), HEADER.concat(Object.keys(definitions).map((moduleName): string => `export * from './${moduleName}/types';`).join('\n')).concat(FOOTER), { flag: 'w' });
  fs.writeFileSync(path.join(outputDir, 'index.ts'), HEADER.concat('export * from \'./types\';').concat(FOOTER), { flag: 'w' });
}

export default function generateTsDefDefault (): void {
  generateTsDef(defaultDefinitions, 'packages/types/src/interfaces');
}
