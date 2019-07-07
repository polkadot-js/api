// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import { isString, isUndefined } from '@polkadot/util';

import { getTypeDef, TypeDef, TypeDefInfo, TypeDefExtVecFixed } from '../codec/createType';
import * as definitions from '../srml/definitions';

type TypeExist = { [index: string]: boolean };

const HEADER = '// Auto-generated, do not edit\n\n';
const FOOTER = '\n';

function tsEnum ({ name: enumName, sub }: TypeDef, codecTypes: TypeExist, otherTypes: TypeExist): string {
  otherTypes[enumName as string] = false;

  const keys = (sub as Array<TypeDef>).map(({ info, name, type }, index) => {
    const enumType = type === 'Null'
      ? ''
      : `(${type})`;
    const asGetter = type === 'Null'
      ? ''
      : `  readonly as${name}: ${type};\n`;

    switch (info) {
      case TypeDefInfo.Plain:
        return `  /**\n   * @description ${index}:: ${name}${enumType}\n   */\n  readonly is${name}: boolean;\n${asGetter}`;

      default:
        throw new Error(`Enum: ${enumName}: Unhandled type ${TypeDefInfo[info]}`);
    }
  });

  return `export interface ${enumName} extends Enum {\n${keys.join('')}}`;
}

function tsPlain ({ name: plainName, type }: TypeDef, codecTypes: TypeExist, otherTypes: TypeExist): string {
  otherTypes[plainName as string] = false;

  if (isUndefined(otherTypes[type])) {
    otherTypes[type] = true;
  }

  return `export interface ${plainName} extends ${type} {}`;
}

function tsStruct ({ name: structName, sub }: TypeDef, codecTypes: TypeExist, otherTypes: TypeExist): string {
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

function tsTuple ({ name: tupleName }: TypeDef, codecTypes: TypeExist, otherTypes: TypeExist): string {
  otherTypes[tupleName as string] = false;

  // TODO We need some way here of identifying the fields
  return `export interface ${tupleName} extends Tuple {}`;
}

function tsVector ({ name: vectorName, sub }: TypeDef, codecTypes: TypeExist, otherTypes: TypeExist): string {
  const type = (sub as TypeDef).type;

  otherTypes[vectorName as string] = false;

  if (isUndefined(otherTypes[type])) {
    otherTypes[type] = true;
  }

  return `export interface ${vectorName} extends Vector<${type}> {}`;
}

function tsVectorFixed ({ ext, name: vectorName }: TypeDef, codecTypes: TypeExist, otherTypes: TypeExist): string {
  const type = (ext as TypeDefExtVecFixed).type;

  otherTypes[vectorName as string] = false;

  if (isUndefined(otherTypes[type])) {
    otherTypes[type] = true;
  }

  return `export interface ${vectorName} extends Vector<${type}> {}`;
}

function generateTsDef (srmlName: string, { types }: { types: { [index: string]: any } }): void {
  const codecTypes: TypeExist = {};
  const otherTypes: TypeExist = {};
  const interfaces = Object.entries(types).map(([name, type]) => {
    const def = getTypeDef(isString(type) ? type.toString() : JSON.stringify(type), name);

    switch (def.info) {
      case TypeDefInfo.Enum:
        codecTypes['Enum'] = true;
        return [name, tsEnum(def, codecTypes, otherTypes)];

      case TypeDefInfo.Plain:
        return [name, tsPlain(def, codecTypes, otherTypes)];

      case TypeDefInfo.Struct:
        codecTypes['Struct'] = true;
        return [name, tsStruct(def, codecTypes, otherTypes)];

      case TypeDefInfo.Tuple:
        codecTypes['Tuple'] = true;
        return [name, tsTuple(def, codecTypes, otherTypes)];

      case TypeDefInfo.Vector:
        codecTypes['Vector'] = true;
        return [name, tsVector(def, codecTypes, otherTypes)];

      case TypeDefInfo.VectorFixed:
        codecTypes['Vector'] = true;
        return [name, tsVectorFixed(def, codecTypes, otherTypes)];

      default:
        throw new Error(`Generate: ${name}: Unhandled type ${TypeDefInfo[def.info]}`);
    }
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
