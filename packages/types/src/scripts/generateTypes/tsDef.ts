// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef, TypeDefInfo, TypeDefExtVecFixed } from '../../codec/types';

import fs from 'fs';
import { isString, stringCamelCase, stringUpperFirst } from '@polkadot/util';

import { getTypeDef } from '../../codec/create';
import * as definitions from '../../interfaces/definitions';
import {
  createImportCode, createImports,
  exportInterface, exportType,
  formatCompact, formatOption, formatTuple, formatVec,
  FOOTER, HEADER,
  setImports, TypeImports
} from '../util';

interface Imports extends TypeImports {
  interfaces: [string, string][];
}

// helper to generate a `readonly <Name>: <Type>;` getter
export function createGetter (name = '', type: string, imports: TypeImports, doc?: string): string {
  setImports(imports, [type]);
  return `  /** ${doc || type} */\n  readonly ${name}: ${type};\n`;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function errorUnhandled (def: TypeDef, imports: TypeImports): string {
  throw new Error(`Generate: ${name}: Unhandled type ${TypeDefInfo[def.info]}`);
}

function tsCompact ({ name: compactName, sub }: TypeDef, imports: TypeImports): string {
  const def = (sub as TypeDef);

  setImports(imports, ['Compact']);

  switch (def.info) {
    case TypeDefInfo.Plain:
      setImports(imports, [def.type]);
      return exportType(compactName, formatCompact(def.type));

    default:
      throw new Error(`Enum: ${compactName}: Unhandled type ${TypeDefInfo[def.info]}`);
  }
}

function tsEnum ({ name: enumName, sub }: TypeDef, imports: TypeImports): string {
  setImports(imports, ['Enum']);

  const keys = (sub as TypeDef[]).map(({ info, name = '', type }, index): string => {
    const getter = stringUpperFirst(stringCamelCase(name.replace(' ', '_')));
    const [enumType, asGetter] = type === 'Null'
      ? ['', '']
      : [`(${type})`, createGetter(`as${getter}`, type, imports)];
    const isGetter = createGetter(`is${getter}`, 'boolean', imports, `${index}:: ${name}${enumType}`);

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

function tsOption ({ name: optionName, sub }: TypeDef, imports: TypeImports): string {
  const def = (sub as TypeDef);

  setImports(imports, ['Option']);

  switch (def.info) {
    case TypeDefInfo.Plain:
      setImports(imports, [def.type]);
      return exportType(optionName, formatOption(def.type));

    default:
      throw new Error(`Enum: ${optionName}: Unhandled type ${TypeDefInfo[def.info]}`);
  }
}

function tsPlain ({ name: plainName, type }: TypeDef, imports: TypeImports): string {
  setImports(imports, [type]);

  return exportType(plainName, type);
}

function _tsStructGetterType (structName: string | undefined, { info, sub, type }: TypeDef, imports: TypeImports): [string, string] {
  let _type;

  switch (info) {
    case TypeDefInfo.Compact:
      _type = (sub as TypeDef).type;

      setImports(imports, ['Compact']);

      return [_type, formatCompact(_type)];

    case TypeDefInfo.Option:
      _type = (sub as TypeDef).type;

      setImports(imports, ['Option']);

      return [_type, formatOption(_type)];

    case TypeDefInfo.Plain:
      return [type, type];

    case TypeDefInfo.Vec:
      _type = (sub as TypeDef).type;

      setImports(imports, ['Vec']);

      return [_type, formatVec(_type)];

    default:
      throw new Error(`Struct: ${structName}: Unhandled type ${TypeDefInfo[info]}`);
  }
}

function tsSet ({ name: setName, sub }: TypeDef, imports: TypeImports): string {
  setImports(imports, ['Set']);

  const types = (sub as TypeDef[]).map(({ name }): string =>
    createGetter(`is${name}`, 'boolean', imports)
  );

  return exportInterface(setName, 'Set', types.join(''));
}

function tsStruct ({ name: structName, sub }: TypeDef, imports: TypeImports): string {
  const keys = (sub as TypeDef[]).map((typedef): string => {
    const [embedType, returnType] = _tsStructGetterType(structName, typedef, imports);

    setImports(imports, ['Struct', embedType]);

    return createGetter(typedef.name, returnType, imports);
  });

  return exportInterface(structName, 'Struct', keys.join(''));
}

function _tsTupleGetterType (tupleName: string | undefined, { info, sub, type }: TypeDef, imports: TypeImports): string {
  switch (info) {
    case TypeDefInfo.Option:
      setImports(imports, ['Option', (sub as TypeDef).type]);

      return type;

    case TypeDefInfo.Plain:
      setImports(imports, [type]);

      return type;

    default:
      throw new Error(`Struct: ${tupleName}: Unhandled type ${TypeDefInfo[info]}`);
  }
}

function tsTuple ({ name: tupleName, sub }: TypeDef, imports: TypeImports): string {
  setImports(imports, ['ITuple']);

  const types = (sub as TypeDef[]).map((typedef): string =>
    _tsTupleGetterType(tupleName, typedef, imports)
  );

  return exportType(tupleName, formatTuple(types));
}

function tsVec ({ ext, info, name: vectorName, sub }: TypeDef, imports: TypeImports): string {
  const type = info === TypeDefInfo.VecFixed
    ? (ext as TypeDefExtVecFixed).type
    : (sub as TypeDef).type;

  // FIXME This should be a VecFixed
  // FIXME Technically Vec has length prefix, so for others this is not 100%
  if (info === TypeDefInfo.VecFixed && type === 'u8') {
    setImports(imports, ['Codec']);

    return exportType(vectorName, 'Uint8Array, Codec');
  }

  setImports(imports, ['Vec', type]);

  return exportType(vectorName, formatVec(type));
}

function generateInterfaces ({ types }: { types: Record<string, any> }, imports: Imports): [string, string][] {
  // handlers are defined externally to use - this means that when we do a
  // `generators[typedef.info](...)` TS will show any unhandled types. Rather
  // we are being explicit in having no handlers where we do not support (yet)
  const generators = {
    [TypeDefInfo.Compact]: tsCompact,
    [TypeDefInfo.DoubleMap]: errorUnhandled,
    [TypeDefInfo.Enum]: tsEnum,
    [TypeDefInfo.Linkage]: errorUnhandled,
    [TypeDefInfo.Null]: errorUnhandled,
    [TypeDefInfo.Option]: tsOption,
    [TypeDefInfo.Plain]: tsPlain,
    [TypeDefInfo.Set]: tsSet,
    [TypeDefInfo.Struct]: tsStruct,
    [TypeDefInfo.Tuple]: tsTuple,
    [TypeDefInfo.Vec]: tsVec,
    [TypeDefInfo.VecFixed]: tsVec
  };

  return Object.entries(types).map(([name, type]): [string, string] => {
    const def = getTypeDef(isString(type) ? type.toString() : JSON.stringify(type), { name });

    return [name, generators[def.info](def, imports)];
  });
}

function generateTsDefFor (defName: string, { types }: { types: Record<string, any> }): void {
  const imports = { ...createImports({ types }), interfaces: [] } as Imports;
  const interfaces = generateInterfaces({ types }, imports);
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

  fs.writeFileSync(`packages/types/src/interfaces/${defName}/types.ts`, header.concat(sortedDefs).concat(FOOTER), { flag: 'w' });
  fs.writeFileSync(`packages/types/src/interfaces/${defName}/index.ts`, HEADER.concat('export * from \'./types\';').concat(FOOTER), { flag: 'w' });
}

export default function generateTsDef (): void {
  Object.entries(definitions).forEach(([defName, obj]): void => {
    console.log(`Extracting interfaces for ${defName}`);

    generateTsDefFor(defName, obj);
  });

  console.log('Writing interfaces/types.ts');

  fs.writeFileSync('packages/types/src/interfaces/types.ts', HEADER.concat(Object.keys(definitions).map((moduleName): string => `export * from './${moduleName}/types';`).join('\n')).concat(FOOTER), { flag: 'w' });
  fs.writeFileSync('packages/types/src/interfaces/index.ts', HEADER.concat('export * from \'./types\';').concat(FOOTER), { flag: 'w' });
}
