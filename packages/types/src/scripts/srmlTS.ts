// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import { isString } from '@polkadot/util';

import { getTypeDef, TypeDef, TypeDefInfo, TypeDefExtVecFixed } from '../codec/createType';
import * as primitives from '../primitive';
import * as substrate from '../type';
import * as definitions from '../srml/definitions';

// these map all the codec and primitive types for import, see the TypeImports below. If
// we have an unseen type, it is `undefined`/`false`, if we need to import it, it is `true`
type TypeExist = Record<string, boolean>;
interface TypeImports {
  codecTypes: TypeExist;
  ownTypes: string[];
  primitiveTypes: TypeExist;
  substrateTypes: TypeExist;
}

const HEADER = '/* eslint-disable @typescript-eslint/no-empty-interface */\n// Auto-generated, do not edit\n\n';
const FOOTER = '\n';
const OUTPUT_FILE = 'types.ts';

function setImports ({ codecTypes, ownTypes, primitiveTypes, substrateTypes }: TypeImports, type: string | null, codecType: string | null): void {
  if (type && !ownTypes.includes(type)) {
    if ((primitives as any)[type]) {
      primitiveTypes[type] = true;
    } else if ((substrate as any)[type]) {
      substrateTypes[type] = true;
    }
  }

  if (codecType) {
    codecTypes[codecType] = true;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function errorUnhandled (def: TypeDef, imports: TypeImports): string {
  throw new Error(`Generate: ${name}: Unhandled type ${TypeDefInfo[def.info]}`);
}

function tsCompact ({ name: compactName, sub }: TypeDef, imports: TypeImports): string {
  const def = (sub as TypeDef);

  setImports(imports, null, 'Compact');

  switch (def.info) {
    case TypeDefInfo.Plain:
      setImports(imports, def.type, null);
      return `export interface ${compactName} extends Compact<${def.type}> {}`;

    default:
      throw new Error(`Enum: ${compactName}: Unhandled type ${TypeDefInfo[def.info]}`);
  }
}

function tsEnum ({ name: enumName, sub }: TypeDef, imports: TypeImports): string {
  setImports(imports, null, 'Enum');

  const keys = (sub as TypeDef[]).map(({ info, name, type }, index): string => {
    const [enumType, asGetter] = type === 'Null'
      ? ['', '']
      : [`(${type})`, `  readonly as${name}: ${type};\n`];

    switch (info) {
      case TypeDefInfo.Plain:
        return `  /**\n   * @description ${index}:: ${name}${enumType}\n   */\n  readonly is${name}: boolean;\n${asGetter}`;

      default:
        throw new Error(`Enum: ${enumName}: Unhandled type ${TypeDefInfo[info]}`);
    }
  });

  return `export interface ${enumName} extends Enum {\n${keys.join('')}}`;
}

function tsOption ({ name: optionName, sub }: TypeDef, imports: TypeImports): string {
  const def = (sub as TypeDef);

  setImports(imports, null, 'Option');

  switch (def.info) {
    case TypeDefInfo.Plain:
      setImports(imports, def.type, null);
      return `export interface ${optionName} extends Option<${def.type}> {}`;

    default:
      throw new Error(`Enum: ${optionName}: Unhandled type ${TypeDefInfo[def.info]}`);
  }
}

function tsPlain ({ name: plainName, type }: TypeDef, imports: TypeImports): string {
  setImports(imports, type, null);

  return `export interface ${plainName} extends ${type} {}`;
}

function _tsStructGetterType (structName: string | undefined, { info, sub, type }: TypeDef, imports: TypeImports): [string, string] {
  let _type;

  switch (info) {
    case TypeDefInfo.Compact:
      _type = (sub as TypeDef).type;

      setImports(imports, null, 'Compact');

      return [_type, `Compact<${_type}>`];

    case TypeDefInfo.Option:
      _type = (sub as TypeDef).type;

      setImports(imports, null, 'Option');

      return [_type, `Option<${_type}>`];

    case TypeDefInfo.Plain:
      return [type, type];

    case TypeDefInfo.Vector:
      _type = (sub as TypeDef).type;

      setImports(imports, null, 'Vector');

      return [_type, `Vector<${_type}>`];

    default:
      throw new Error(`Struct: ${structName}: Unhandled type ${TypeDefInfo[info]}`);
  }
}

function tsStruct ({ name: structName, sub }: TypeDef, imports: TypeImports): string {
  const keys = (sub as TypeDef[]).map((typedef): string => {
    const [embedType, returnType] = _tsStructGetterType(structName, typedef, imports);

    setImports(imports, embedType, 'Struct');

    return `  readonly ${typedef.name}: ${returnType};\n`;
  });

  return `export interface ${structName} extends Struct {\n${keys.join('')}}`;
}

function tsTuple ({ name: tupleName, sub }: TypeDef, imports: TypeImports): string {
  const types = (sub as TypeDef[]).map(({ type }): string => {
    setImports(imports, type, 'Tuple');

    return type;
  });

  // TODO We need some way here of identifying the fields
  return `type _${tupleName} = [${types.join(', ')}];\nexport interface ${tupleName} extends Codec, _${tupleName} {}`;
}

function tsVector ({ ext, info, name: vectorName, sub }: TypeDef, imports: TypeImports): string {
  const type = info === TypeDefInfo.VectorFixed
    ? (ext as TypeDefExtVecFixed).type
    : (sub as TypeDef).type;

  setImports(imports, type, 'Vector');

  return `export interface ${vectorName} extends Vector<${type}> {}`;
}

function generateTsDef (srmlName: string, { types }: { types: Record<string, any> }): void {
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
    [TypeDefInfo.Struct]: tsStruct,
    [TypeDefInfo.Tuple]: tsTuple,
    [TypeDefInfo.Vector]: tsVector,
    [TypeDefInfo.VectorFixed]: tsVector
  };

  const codecTypes: TypeExist = {};
  const ownTypes = Object.keys(types);
  const primitiveTypes: TypeExist = {};
  const substrateTypes: TypeExist = {};
  const interfaces = Object.entries(types).map(([name, type]): [string, string] => {
    const def = getTypeDef(isString(type) ? type.toString() : JSON.stringify(type), name);

    return [name, generators[def.info](def, { codecTypes, ownTypes, primitiveTypes, substrateTypes })];
  });

  let header = HEADER;
  const codecImports = Object.keys(codecTypes).filter((name): boolean => name !== 'Tuple').sort();
  const primitiveImports = Object.keys(primitiveTypes).filter((type): boolean => primitiveTypes[type]).sort();
  const substrateImports = Object.keys(substrateTypes).filter((type): boolean => substrateTypes[type]).sort();
  const sortedDefs = interfaces.sort((a, b): number => a[0].localeCompare(b[0])).map(([, definition]): string => definition);

  if (codecTypes['Tuple']) {
    header = header.concat(`import { Codec } from '../../types';\n`);
  }

  if (codecImports.length) {
    header = header.concat(`import { ${codecImports.join(', ')} } from '../../codec';\n`);
  }

  if (primitiveImports.length) {
    header = header.concat(`import { ${primitiveImports.join(', ')} } from '../../primitive';\n`);
  }

  if (substrateImports.length) {
    header = header.concat(`import { ${substrateImports.join(', ')} } from '../../type';\n`);
  }

  fs.writeFileSync(`packages/types/src/srml/${srmlName}/${OUTPUT_FILE}`, header.concat('\n').concat(sortedDefs.join('\n\n')).concat(FOOTER), { flag: 'w' });
}

Object.entries(definitions).forEach(([name, obj]): void =>
  generateTsDef(name, obj)
);
