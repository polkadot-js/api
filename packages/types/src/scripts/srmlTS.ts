// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import { isString, isUndefined } from '@polkadot/util';

import { getTypeDef, TypeDef, TypeDefInfo, TypeDefExtVecFixed } from '../codec/createType';
import * as definitions from '../srml/definitions';

type TypeExist = { [index: string]: boolean };
type TypeImports = { codecTypes: TypeExist, otherTypes: TypeExist };

const HEADER = '// Auto-generated, do not edit\n\n';
const FOOTER = '\n';

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
  [TypeDefInfo.VectorFixed]: tsVectorFixed
};

function errorUnhandled (def: TypeDef, imports: TypeImports): string {
  throw new Error(`Generate: ${name}: Unhandled type ${TypeDefInfo[def.info]}`);
}

function tsEnum ({ name: enumName, sub }: TypeDef, { codecTypes, otherTypes }: TypeImports): string {
  codecTypes['Enum'] = true;
  otherTypes[enumName as string] = false;

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

function tsPlain ({ name: plainName, type }: TypeDef, { codecTypes, otherTypes }: TypeImports): string {
  otherTypes[plainName as string] = false;

  if (isUndefined(otherTypes[type])) {
    otherTypes[type] = true;
  }

  return `export interface ${plainName} extends ${type} {}`;
}

function tsStruct ({ name: structName, sub }: TypeDef, { codecTypes, otherTypes }: TypeImports): string {
  codecTypes['Struct'] = true;
  otherTypes[structName as string] = false;

  const keys = (sub as Array<TypeDef>).map(({ info, name, sub, type }) => {
    switch (info) {
      case TypeDefInfo.Plain:
        if (isUndefined(otherTypes[type])) {
          otherTypes[type] = true;
        }

        return `  readonly ${name}: ${type};\n`;

      case TypeDefInfo.Vector:
        const _type = (sub as TypeDef).type;

        codecTypes['Vector'] = true;

        if (isUndefined(otherTypes[_type])) {
          otherTypes[_type] = true;
        }

        return `  readonly ${name}: Vector<${_type}>;\n`;

      default:
        throw new Error(`Struct: ${structName}: Unhandled type ${TypeDefInfo[info]}`);
    }
  });

  return `export interface ${structName} extends Struct {\n${keys.join('')}}`;
}

function tsTuple ({ name: tupleName }: TypeDef, { codecTypes, otherTypes }: TypeImports): string {
  codecTypes['Tuple'] = true;
  otherTypes[tupleName as string] = false;

  // TODO We need some way here of identifying the fields
  return `export interface ${tupleName} extends Tuple {}`;
}

function _tsVectorShared (vectorName: string, type: string, { codecTypes, otherTypes }: TypeImports): string {
  codecTypes['Vector'] = true;
  otherTypes[vectorName] = false;

  if (isUndefined(otherTypes[type])) {
    otherTypes[type] = true;
  }

  return `export interface ${vectorName} extends Vector<${type}> {}`;
}

function tsVector ({ name: vectorName, sub }: TypeDef, imports: TypeImports): string {
  return _tsVectorShared(vectorName as string, (sub as TypeDef).type, imports);
}

function tsVectorFixed ({ ext, name: vectorName }: TypeDef, imports: TypeImports): string {
  return _tsVectorShared(vectorName as string, (ext as TypeDefExtVecFixed).type, imports);
}

function generateTsDef (srmlName: string, { types }: { types: { [index: string]: any } }): void {
  const codecTypes: TypeExist = {};
  const otherTypes: TypeExist = {};
  const interfaces = Object.entries(types).map(([name, type]) => {
    const def = getTypeDef(isString(type) ? type.toString() : JSON.stringify(type), name);

    return [name, generators[def.info](def, { codecTypes, otherTypes })];
  });

  let header = HEADER;
  const codecImports = Object.keys(codecTypes).sort();
  const primitiveImports = Object.keys(otherTypes).filter((type) => otherTypes[type]).sort();
  const sortedDefs = interfaces.sort((a, b) => a[0].localeCompare(b[0])).map(([, definition]) => definition);

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
