// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import { isString, stringCamelCase, stringUpperFirst } from '@polkadot/util';

import { getTypeDef, TypeDef, TypeDefInfo, TypeDefExtVecFixed } from '../codec/createType';
import * as codecClasses from '../codec';
import { COMPACT_ENCODABLE } from '../codec/Compact';
import * as primitiveClasses from '../primitive';
import * as typeClasses from '../type';
import { Constructor } from '../types';
import * as definitions from '../srml/definitions';

// these map all the codec and primitive types for import, see the TypeImports below. If
// we have an unseen type, it is `undefined`/`false`, if we need to import it, it is `true`
type TypeExist = Record<string, boolean>;

// local imports (between files), maps to this format
// { [moduleName]: { [typeName]: true } }
type LocalExist = Record<string, TypeExist>;

interface TypeImports {
  codecTypes: TypeExist;
  localTypes: LocalExist;
  ownTypes: string[];
  primitiveTypes: TypeExist;
  substrateTypes: TypeExist;
}

const HEADER = '/* eslint-disable @typescript-eslint/no-empty-interface */\n// Auto-generated via `yarn build:srmlTs`, do not edit\n\n';
const FOOTER = '\n';

// Maps the types as found to the source location. This is used to generate the
// imports in the output file, dep-duped and sorted
function setImports ({ codecTypes, localTypes, ownTypes, primitiveTypes, substrateTypes }: TypeImports, types: string[]): void {
  types.forEach((type): void => {
    if (ownTypes.includes(type)) {
      // do nothing
    } else if ((codecClasses as any)[type]) {
      codecTypes[type] = true;
    } else if ((primitiveClasses as any)[type]) {
      primitiveTypes[type] = true;
    } else if ((typeClasses as any)[type]) {
      substrateTypes[type] = true;
    } else {
      // find this module inside the exports from the rest
      const [moduleName] = Object.entries(definitions).find(([, { types }]): boolean =>
        Object.keys(types).includes(type)
      ) || [null];

      if (moduleName) {
        localTypes[moduleName][type] = true;

        console.log(`\tImporting ${type} from ../'${moduleName}/types'`);
      }
    }
  });
}

// FIMXE This could go in util some day
function isChildClass (Parent: Constructor<any>, Child: Constructor<any>): boolean {
  // https://stackoverflow.com/questions/30993434/check-if-a-constructor-inherits-another-in-es6/30993664
  // eslint-disable-next-line no-prototype-builtins
  return Parent.isPrototypeOf(Child);
}

function isCompactEncodable (Child: Constructor<any>): boolean {
  return isChildClass(COMPACT_ENCODABLE.UInt, Child) || isChildClass(COMPACT_ENCODABLE.Moment, Child);
}

// helper to generate a `export interface<Name> extends <Base> {<Body>}
function createInterface (name: string = '', base: string, body: string = ''): string {
  return `export interface ${name} extends ${base} {${body.length ? '\n' : ''}${body}}`;
}

// helper to generate a `readonly <Name>: <Type>;` getter
function createGetter (name: string = '', type: string): string {
  return `  readonly ${name}: ${type};\n`;
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
      return createInterface(compactName, `Compact<${def.type}>`);

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
      : [`(${type})`, createGetter(`as${getter}`, type)];
    const isGetter = createGetter(`is${getter}`, 'boolean');

    switch (info) {
      case TypeDefInfo.Plain:
        return `  /**\n   * @description ${index}:: ${name}${enumType}\n   */\n${isGetter}${asGetter}`;

      default:
        throw new Error(`Enum: ${enumName}: Unhandled type ${TypeDefInfo[info]}`);
    }
  });

  return createInterface(enumName, 'Enum', keys.join(''));
}

function tsOption ({ name: optionName, sub }: TypeDef, imports: TypeImports): string {
  const def = (sub as TypeDef);

  setImports(imports, ['Option']);

  switch (def.info) {
    case TypeDefInfo.Plain:
      setImports(imports, [def.type]);
      return createInterface(optionName, `Option<${def.type}>`);

    default:
      throw new Error(`Enum: ${optionName}: Unhandled type ${TypeDefInfo[def.info]}`);
  }
}

function tsPlain ({ name: plainName, type }: TypeDef, imports: TypeImports): string {
  setImports(imports, [type]);

  return createInterface(plainName, type);
}

function _tsStructGetterType (structName: string | undefined, { info, sub, type }: TypeDef, imports: TypeImports): [string, string] {
  let _type;

  switch (info) {
    case TypeDefInfo.Compact:
      _type = (sub as TypeDef).type;

      setImports(imports, ['Compact']);

      return [_type, `Compact<${_type}>`];

    case TypeDefInfo.Option:
      _type = (sub as TypeDef).type;

      setImports(imports, ['Option']);

      return [_type, `Option<${_type}>`];

    case TypeDefInfo.Plain:
      return [type, type];

    case TypeDefInfo.Vector:
      _type = (sub as TypeDef).type;

      setImports(imports, ['Vector']);

      return [_type, `Vector<${_type}>`];

    default:
      throw new Error(`Struct: ${structName}: Unhandled type ${TypeDefInfo[info]}`);
  }
}

function tsStruct ({ name: structName, sub }: TypeDef, imports: TypeImports): string {
  const keys = (sub as TypeDef[]).map((typedef): string => {
    const [embedType, returnType] = _tsStructGetterType(structName, typedef, imports);

    setImports(imports, ['Struct', embedType]);

    return createGetter(typedef.name, returnType);
  });

  return createInterface(structName, 'Struct', keys.join(''));
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
  setImports(imports, ['Tuple']);

  const types = (sub as TypeDef[]).map((typedef): string =>
    _tsTupleGetterType(tupleName, typedef, imports)
  );
  const exp = createInterface(tupleName, `Codec, _${tupleName}`);

  // TODO We need some way here of identifying the fields
  return `type _${tupleName} = [${types.join(', ')}];\n${exp}`;
}

function tsVector ({ ext, info, name: vectorName, sub }: TypeDef, imports: TypeImports): string {
  const type = info === TypeDefInfo.VectorFixed
    ? (ext as TypeDefExtVecFixed).type
    : (sub as TypeDef).type;

  setImports(imports, ['Vector', type]);

  return createInterface(vectorName, `Vector<${type}>`);
}

// creates the import lines
function createImportCode (header: string, checks: { file: string; types: string[] }[]): string {
  return checks.reduce((result, { file, types }): string => {
    if (types.length) {
      result += `import { ${types.sort().join(', ')} } from '../${file}';\n`;
    }

    return result;
  }, header) + '\n';
}

function interfaceRegistry (types: Record<string, any>): string {
  return `

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
${Object.keys(types)
    .map((type): string => [
      `${type}: ${type};`,
      isCompactEncodable((primitiveClasses as any)[types[type]]) ? `'Compact<${type}>': Compact<${type}>;` : undefined,
      `'Option<${type}>': Option<${type}>;`,
      `'Vec<${type}>': Vector<${type}>;`].filter((x): boolean => !!x).map((line): string => `    ${line}`).join('\n')
    ).join('\n')}
  }
}`;
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
  const localTypes: LocalExist = Object.keys(definitions).reduce((localTypes: Record<string, TypeExist>, moduleName): Record<string, TypeExist> => {
    localTypes[moduleName] = {};

    return localTypes;
  }, {});
  const ownTypes = Object.keys(types);
  const primitiveTypes: TypeExist = {};
  const substrateTypes: TypeExist = {};
  const interfaces = Object.entries(types).map(([name, type]): [string, string] => {
    const def = getTypeDef(isString(type) ? type.toString() : JSON.stringify(type), name);

    return [name, generators[def.info](def, { codecTypes, localTypes, ownTypes, primitiveTypes, substrateTypes })];
  });

  const sortedDefs = interfaces.sort((a, b): number => a[0].localeCompare(b[0])).map(([, definition]): string => definition).join('\n\n');
  const header = createImportCode(HEADER, [
    {
      file: '../types',
      types: codecTypes['Tuple'] ? ['Codec'] : []
    },
    {
      file: '../codec',
      types: Object.keys(codecTypes).filter((name): boolean => name !== 'Tuple')
    },
    {
      file: '../primitive',
      types: Object.keys(primitiveTypes)
    },
    {
      file: '../type',
      types: Object.keys(substrateTypes)
    },
    ...Object.keys(localTypes).map((moduleName): { file: string; types: string[] } => ({
      file: `${moduleName}/types`,
      types: Object.keys(localTypes[moduleName])
    }))
  ]);
  const interfaceReg = interfaceRegistry(types);

  fs.writeFileSync(`packages/types/src/srml/${srmlName}/types.ts`, header.concat(sortedDefs).concat(interfaceReg).concat(FOOTER), { flag: 'w' });
}

Object.entries(definitions).forEach(([srmlName, obj]): void => {
  console.log(`Extracting definitions for ${srmlName}`);

  generateTsDef(srmlName, obj);
});

console.log(`Writing srml/types.ts`);

fs.writeFileSync(`packages/types/src/srml/types.ts`, HEADER.concat(Object.keys(definitions).map((moduleName): string => `export * from './${moduleName}/types';`).join('\n')).concat(FOOTER), { flag: 'w' });
