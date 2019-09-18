// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.


import { TypeDef, TypeDefInfo, TypeDefExtVecFixed } from '../../codec/types';

import { isString, stringCamelCase, stringUpperFirst } from '@polkadot/util';

import * as codecClasses from '../../codec';
import { getTypeDef } from '../../codec/create';
import { exportInterface, exportType, formatCompact, formatOption, formatTuple, formatVec } from './formatting';
import * as definitions from '../../interfaces/definitions';
import * as primitiveClasses from '../../primitive';

// these map all the codec and primitive types for import, see the TypeImports below. If
// we have an unseen type, it is `undefined`/`false`, if we need to import it, it is `true`
type TypeExist = Record<string, boolean>;

// local imports (between files), maps to this format
// { [moduleName]: { [typeName]: true } }
type LocalExist = Record<string, TypeExist>;

export interface TypeImports {
  codecTypes: TypeExist; // `import {} from '@polkadot/types/codec`
  localTypes: LocalExist;
  ownTypes: string[];
  primitiveTypes: TypeExist; // `import {} from '@polkadot/types/primitive`
  typesTypes: TypeExist; // `import {} from '@polkadot/types/types`
}

export interface Imports extends TypeImports {
  interfaces: [string, string][];
}

// Maps the types as found to the source location. This is used to generate the
// imports in the output file, dep-duped and sorted
export function setImports({ codecTypes, localTypes, ownTypes, primitiveTypes, typesTypes }: TypeImports, types: string[]): void {
  types.forEach((type): void => {
    if (ownTypes.includes(type)) {
      // do nothing
    } else if (['Codec', 'IExtrinsic'].includes(type)) {
      typesTypes[type] = true;
    } else if ((codecClasses as any)[type]) {
      codecTypes[type] = true;
    } else if ((primitiveClasses as any)[type] || type === 'Metadata') {
      primitiveTypes[type] = true;
    } else {
      // find this module inside the exports from the rest
      const [moduleName] = Object.entries(definitions).find(([, { types }]): boolean =>
        Object.keys(types).includes(type)
      ) || [null];

      if (moduleName) {
        localTypes[moduleName][type] = true;
      }
    }
  });
}

// helper to generate a `readonly <Name>: <Type>;` getter
export function createGetter(name = '', type: string, imports: TypeImports, doc?: string): string {
  setImports(imports, [type]);
  return `  /** ${doc || type} */\n  readonly ${name}: ${type};\n`;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function errorUnhandled(def: TypeDef, imports: TypeImports): string {
  throw new Error(`Generate: ${name}: Unhandled type ${TypeDefInfo[def.info]}`);
}

function tsCompact({ name: compactName, sub }: TypeDef, imports: TypeImports): string {
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

function tsEnum({ name: enumName, sub }: TypeDef, imports: TypeImports): string {
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

function tsOption({ name: optionName, sub }: TypeDef, imports: TypeImports): string {
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

function tsPlain({ name: plainName, type }: TypeDef, imports: TypeImports): string {
  setImports(imports, [type]);

  return exportType(plainName, type);
}

function _tsStructGetterType(structName: string | undefined, { info, sub, type }: TypeDef, imports: TypeImports): [string, string] {
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

function tsSet({ name: setName, sub }: TypeDef, imports: TypeImports): string {
  setImports(imports, ['Set']);

  const types = (sub as TypeDef[]).map(({ name }): string =>
    createGetter(`is${name}`, 'boolean', imports)
  );

  return exportInterface(setName, 'Set', types.join(''));
}

function tsStruct({ name: structName, sub }: TypeDef, imports: TypeImports): string {
  const keys = (sub as TypeDef[]).map((typedef): string => {
    const [embedType, returnType] = _tsStructGetterType(structName, typedef, imports);

    setImports(imports, ['Struct', embedType]);

    return createGetter(typedef.name, returnType, imports);
  });

  return exportInterface(structName, 'Struct', keys.join(''));
}

function _tsTupleGetterType(tupleName: string | undefined, { info, sub, type }: TypeDef, imports: TypeImports): string {
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

function tsTuple({ name: tupleName, sub }: TypeDef, imports: TypeImports): string {
  setImports(imports, ['Codec', 'Tuple']);

  const types = (sub as TypeDef[]).map((typedef): string =>
    _tsTupleGetterType(tupleName, typedef, imports)
  );

  return exportType(tupleName, formatTuple(types));
}

function tsVec({ ext, info, name: vectorName, sub }: TypeDef, imports: TypeImports): string {
  const type = info === TypeDefInfo.VecFixed
    ? (ext as TypeDefExtVecFixed).type
    : (sub as TypeDef).type;

  // FIXME This should be a VecFixed
  // FIXME Technically Vec has length prefix, so for others this is not 100%
  if (info === TypeDefInfo.VecFixed && type === 'u8') {
    setImports(imports, ['Codec']);

    return exportType(vectorName, 'Uint8Array & Codec');
  }

  setImports(imports, ['Vec', type]);

  return exportType(vectorName, formatVec(type));
}

// Create an Imports object, prefilled with types (if necessary)
export function createImports({ types }: { types: Record<string, any> } = { types: {} }): Imports {
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

  const codecTypes: TypeExist = {};
  const localTypes: LocalExist = Object.keys(definitions).reduce((localTypes: Record<string, TypeExist>, moduleName): Record<string, TypeExist> => {
    localTypes[moduleName] = {};

    return localTypes;
  }, {});
  const ownTypes = Object.keys(types);
  const primitiveTypes: TypeExist = {};
  const typesTypes: TypeExist = {};
  const interfaces = Object.entries(types).map(([name, type]): [string, string] => {
    const def = getTypeDef(isString(type) ? type.toString() : JSON.stringify(type), name);

    return [name, generators[def.info](def, { codecTypes, localTypes, ownTypes, primitiveTypes, typesTypes })];
  });

  const imports = { codecTypes, localTypes, ownTypes, primitiveTypes, typesTypes, interfaces };

  return imports;
}
