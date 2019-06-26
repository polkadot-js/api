// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import { isString, isUndefined } from '@polkadot/util';

import { getTypeDef, TypeDef, TypeDefInfo, TypeDefExtVecFixed } from '../codec/createType';
import parachains from '../srml/parachains';

type TypeExist = { [index: string]: boolean };

const HEADER = '// Auto-generated, do not edit\n\n';
const FOOTER = '\n';

const srml = { parachains };

function tsEnum ({ name, sub }: TypeDef, otherTypes: TypeExist): string {
  otherTypes[name as string] = false;

  const keys = (sub as Array<TypeDef>).map(({ info, name }) => {
    switch (info) {
      case TypeDefInfo.Plain:
        return `  readonly is${name}: boolean;\n`;

      default:
        throw new Error(`Unhandled type ${info}`);
    }
  });

  return `export interface ${name} extends Enum {\n${keys.join('')}}`;
}

function tsPlain ({ name, type }: TypeDef, otherTypes: TypeExist): string {
  otherTypes[name as string] = false;

  if (isUndefined(otherTypes[type])) {
    otherTypes[type] = true;
  }

  return `export interface ${name} extends ${type} {}`;
}

function tsStruct ({ name, sub }: TypeDef, otherTypes: TypeExist): string {
  otherTypes[name as string] = false;

  const keys = (sub as Array<TypeDef>).map(({ info, name, type }) => {
    switch (info) {
      case TypeDefInfo.Plain:
        if (isUndefined(otherTypes[type])) {
          otherTypes[type] = true;
        }

        return `  readonly ${name}: ${type};\n`;

      default:
        throw new Error(`Unhandled type ${info}`);
    }
  });

  return `export interface ${name} extends Struct {\n${keys.join('')}}`;
}

function tsTuple ({ name }: TypeDef, otherTypes: TypeExist): string {
  otherTypes[name as string] = false;

  // TODO We need some way here of identifying the fields
  return `export interface ${name} extends Tuple {}`;
}

function tsVector ({ name, sub }: TypeDef, otherTypes: TypeExist): string {
  const type = (sub as TypeDef).type;

  otherTypes[name as string] = false;

  if (isUndefined(otherTypes[type])) {
    otherTypes[type] = true;
  }

  return `export interface ${name} extends Vector<${type}> {}`;
}

function tsVectorFixed ({ ext, name }: TypeDef, otherTypes: TypeExist): string {
  const type = (ext as TypeDefExtVecFixed).type;

  otherTypes[name as string] = false;

  if (isUndefined(otherTypes[type])) {
    otherTypes[type] = true;
  }

  return `export interface ${name} extends Vector<${type}> {}`;
}

function generateTsDef (srmlName: string, obj: { [index: string]: any }): void {
  const codecTypes: TypeExist = {};
  const otherTypes: TypeExist = {};
  const interfaces = Object.entries(obj).map(([name, type]) => {
    const def = getTypeDef(isString(type) ? type.toString() : JSON.stringify(type), name);

    switch (def.info) {
      case TypeDefInfo.Enum:
        codecTypes['Enum'] = true;
        return tsEnum(def, otherTypes);

      case TypeDefInfo.Plain:
        return tsPlain(def, otherTypes);

      case TypeDefInfo.Struct:
        codecTypes['Struct'] = true;
        return tsStruct(def, otherTypes);

      case TypeDefInfo.Tuple:
        codecTypes['Tuple'] = true;
        return tsTuple(def, otherTypes);

      case TypeDefInfo.Vector:
        codecTypes['Vector'] = true;
        return tsVector(def, otherTypes);

      case TypeDefInfo.VectorFixed:
        codecTypes['Vector'] = true;
        return tsVectorFixed(def, otherTypes);

      default:
        throw new Error(`Unhandled type ${def.info}`);
    }
  });

  let header = HEADER;
  const codecImports = Object.keys(codecTypes).sort();
  const primitiveImports = Object.keys(otherTypes).filter((type) => otherTypes[type]).sort();

  if (codecImports.length) {
    header = header.concat(`import { ${codecImports.join(', ')} } from '../../codec';\n`);
  }

  if (primitiveImports.length) {
    header = header.concat(`import { ${primitiveImports.join(', ')} } from '../../primitive';\n`);
  }

  fs.writeFileSync(`packages/types/src/srml/${srmlName}/types.ts`, header.concat('\n').concat(interfaces.join('\n\n')).concat(FOOTER), { flag: 'w' });
}

Object.entries(srml).forEach(([name, obj]) =>
  generateTsDef(name, obj)
);
