// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import { isString } from '@polkadot/util';

import { getTypeDef, TypeDef, TypeDefInfo, TypeDefExtVecFixed } from '../codec/createType';
import * as definitions from '../srml/definitions';

// these map all the codec and primitive types for import, see the TypeImports below. If
// we have an unseen type, it is `undefined`/`false`, if we need to import it, it is `true`
type TypeExist = {
  [index: string]: boolean
};
type TypeImports = {
  codecTypes: TypeExist,
  otherTypes: TypeExist,
  ownTypes: Array<string>
};

const HEADER = '// Auto-generated, do not edit\n\n';
const FOOTER = '\n';

// handlers are defined externally to use - this means that when we do a
// `generators[typedef.info](...)` TS will show any unhandled types. Rather
// we are being explicit in having no handlers where we do not support (yet)
const generators = {
  [TypeDefInfo.Compact]: errorUnhandled,
  [TypeDefInfo.DoubleMap]: errorUnhandled,
  [TypeDefInfo.Enum]: tsEnum,
  [TypeDefInfo.Linkage]: errorUnhandled,
  [TypeDefInfo.Null]: errorUnhandled,
  [TypeDefInfo.Option]: errorUnhandled,
  [TypeDefInfo.Plain]: tsPlain,
  [TypeDefInfo.Struct]: tsStruct,
  [TypeDefInfo.Tuple]: tsTuple,
  [TypeDefInfo.Vector]: tsVector,
  [TypeDefInfo.VectorFixed]: tsVector
};

function setImports ({ codecTypes, otherTypes, ownTypes }: TypeImports, type: string | null, codecType: string | null): void {
  if (type && !ownTypes.includes(type) && !otherTypes[type]) {
    otherTypes[type] = true;
  }

  if (codecType) {
    codecTypes[codecType] = true;
  }
}

function errorUnhandled (def: TypeDef, imports: TypeImports): string {
  throw new Error(`Generate: ${name}: Unhandled type ${TypeDefInfo[def.info]}`);
}

function tsEnum ({ name: enumName, sub }: TypeDef, imports: TypeImports): string {
  setImports(imports, null, 'Enum');

  const keys = (sub as Array<TypeDef>).map(({ info, name, type }, index) => {
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

function tsPlain ({ name: plainName, type }: TypeDef, imports: TypeImports): string {
  setImports(imports, type, null);

  return `export interface ${plainName} extends ${type} {}`;
}

function _tsStructGetterType (structName: string | undefined, { info, sub, type }: TypeDef): [string, string] {
  switch (info) {
    case TypeDefInfo.Plain:
      return [type, type];

    case TypeDefInfo.Vector:
      const _type = (sub as TypeDef).type;

      return [_type, `Vector<${_type}>`];

    default:
      throw new Error(`Struct: ${structName}: Unhandled type ${TypeDefInfo[info]}`);
  }
}

function tsStruct ({ name: structName, sub }: TypeDef, imports: TypeImports): string {
  const keys = (sub as Array<TypeDef>).map((typedef) => {
    const [embedType, returnType] = _tsStructGetterType(structName, typedef);

    setImports(imports, embedType, 'Struct');

    return `  readonly ${typedef.name}: ${returnType};\n`;
  });

  return `export interface ${structName} extends Struct {\n${keys.join('')}}`;
}

function tsTuple ({ name: tupleName, sub }: TypeDef, imports: TypeImports): string {
  const types = (sub as Array<TypeDef>).map(({ type }) => {
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

function generateTsDef (srmlName: string, { types }: { types: { [index: string]: any } }): void {
  const codecTypes: TypeExist = {};
  const otherTypes: TypeExist = {};
  const ownTypes = Object.keys(types);
  const interfaces = Object.entries(types).map(([name, type]) => {
    const def = getTypeDef(isString(type) ? type.toString() : JSON.stringify(type), name);

    return [name, generators[def.info](def, { codecTypes, otherTypes, ownTypes })];
  });

  let header = HEADER;
  const codecImports = Object.keys(codecTypes).filter((name) => name !== 'Tuple').sort();
  const primitiveImports = Object.keys(otherTypes).filter((type) => otherTypes[type]).sort();
  const sortedDefs = interfaces.sort((a, b) => a[0].localeCompare(b[0])).map(([, definition]) => definition);

  if (codecTypes['Tuple']) {
    header = header.concat(`import { Codec } from '../../types';\n`);
  }

  if (codecImports.length) {
    header = header.concat(`import { ${codecImports.join(', ')} } from '../../codec';\n`);
  }

  if (primitiveImports.length) {
    header = header.concat(`import { ${primitiveImports.join(', ')} } from '../../primitive';\n`);
  }

  fs.writeFileSync(`packages/types/src/srml/${srmlName}/types.ts`, header.concat('\n').concat(sortedDefs.join('\n\n')).concat(FOOTER), { flag: 'w' });
}

Object.entries(definitions).forEach(([name, obj]) =>
  generateTsDef(name, obj)
);
