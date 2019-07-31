// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef, TypeDefInfo, TypeDefExtVecFixed } from '../codec/types';

import fs from 'fs';
import { isString, stringCamelCase, stringUpperFirst } from '@polkadot/util';

import interfaces from '../../../type-jsonrpc/src';
import { ClassOfUnsafe, getTypeDef } from '../codec/createType';
import * as codecClasses from '../codec';
import AbstractInt from '../codec/AbstractInt';
import { COMPACT_ENCODABLE } from '../codec/Compact';
import Vec from '../codec/Vec';
import * as primitiveClasses from '../primitive';
import * as definitions from '../interfaces/definitions';
import { Constructor } from '../types';

// these map all the codec and primitive types for import, see the TypeImports below. If
// we have an unseen type, it is `undefined`/`false`, if we need to import it, it is `true`
type TypeExist = Record<string, boolean>;

// local imports (between files), maps to this format
// { [moduleName]: { [typeName]: true } }
type LocalExist = Record<string, TypeExist>;

interface TypeImports {
  codecTypes: TypeExist; // `import {} from '@polkadot/types/codec`
  localTypes: LocalExist;
  ownTypes: string[];
  primitiveTypes: TypeExist; // `import {} from '@polkadot/types/primitive`
  typesTypes: TypeExist; // `import {} from '@polkadot/types/types`
}

const HEADER = '// Auto-generated via `yarn build:interfaces`, do not edit\n\n';
const FOOTER = '\n';

// Maps the types as found to the source location. This is used to generate the
// imports in the output file, dep-duped and sorted
function setImports ({ codecTypes, localTypes, ownTypes, primitiveTypes, typesTypes }: TypeImports, types: string[]): void {
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

        console.log(`\tImporting ${type} from ../${moduleName}`);
      }
    }
  });
}

// See if a class is child of another class
// FIMXE This could go in util some day
function isChildClass (Parent: Constructor<any>, Child: Constructor<any>): boolean {
  // https://stackoverflow.com/questions/30993434/check-if-a-constructor-inherits-another-in-es6/30993664
  // eslint-disable-next-line no-prototype-builtins
  return Parent === Child || Parent.isPrototypeOf(Child);
}

function isCompactEncodable (Child: Constructor<any>): boolean {
  // @ts-ignore AbstractInt is abstract, we shouldn't isChildClass it here, but it works
  return Object.values(COMPACT_ENCODABLE).some((CompactEncodable): boolean => isChildClass(CompactEncodable, Child));
}

// helper to generate a `export interface <Name> extends <Base> {<Body>}
function exportInterface (name: string = '', base: string, body: string = ''): string {
  return `/** ${base} */\nexport interface ${name} extends ${base} {${body.length ? '\n' : ''}${body}}`;
}

// helper to create an `export <Name> = <Base>`
function exportType (name: string = '', base: string): string {
  return `/** ${base} */\nexport type ${name} = ${base};`;
}

// helper to generate a `readonly <Name>: <Type>;` getter
function createGetter (name: string = '', type: string, imports: TypeImports, doc?: string): string {
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
      return exportType(compactName, `Compact<${def.type}>`);

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
      return exportType(optionName, `Option<${def.type}>`);

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

      return [_type, `Compact<${_type}>`];

    case TypeDefInfo.Option:
      _type = (sub as TypeDef).type;

      setImports(imports, ['Option']);

      return [_type, `Option<${_type}>`];

    case TypeDefInfo.Plain:
      return [type, type];

    case TypeDefInfo.Vec:
      _type = (sub as TypeDef).type;

      setImports(imports, ['Vec']);

      return [_type, `Vec<${_type}>`];

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
  setImports(imports, ['Tuple']);

  const types = (sub as TypeDef[]).map((typedef): string =>
    _tsTupleGetterType(tupleName, typedef, imports)
  );

  return exportType(tupleName, `[${types.join(', ')}] & Codec`);
}

function tsVec ({ ext, info, name: vectorName, sub }: TypeDef, imports: TypeImports): string {
  const type = info === TypeDefInfo.VecFixed
    ? (ext as TypeDefExtVecFixed).type
    : (sub as TypeDef).type;

  setImports(imports, ['Vec', type]);

  return exportType(vectorName, `Vec<${type}>`);
}

// creates the import lines
function createImportCode (header: string, checks: { file: string; types: string[] }[]): string {
  return checks.reduce((result, { file, types }): string => {
    if (types.length) {
      result += `import { ${types.sort().join(', ')} } from '${file}';\n`;
    }

    return result;
  }, header) + '\n';
}

// From `T`, generate `Compact<T>, Option<T>, Vec<T>`
function getDerivedTypes (type: string, primitiveName: string, imports: TypeImports, indent: number = 2): string {
  // `primitiveName` represents the actual primitive type our type is mapped to
  const isCompact = isCompactEncodable((primitiveClasses as any)[primitiveName]);
  setImports(imports, ['Option', 'Vec', isCompact ? 'Compact' : '']);

  return [
    `${type}: ${type};`,
    isCompact ? `'Compact<${type}>': Compact<${type}>;` : undefined,
    `'Option<${type}>': Option<${type}>;`,
    `'Vec<${type}>': Vec<${type}>;`
  ]
    .filter((x): boolean => !!x)
    .map((line): string => `${' '.repeat(indent)}${line}`) // Add indentation
    .join('\n');
}

interface Imports extends TypeImports {

  interfaces: [string, string][];
}

// Create an Imports object, prefilled with types (if necessary)
function createImports ({ types }: { types: Record<string, any> } = { types: {} }): Imports {
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

function generateTsDef (defName: string, { types }: { types: Record<string, any> }): void {
  const imports = createImports({ types });

  const sortedDefs = imports.interfaces.sort((a, b): number => a[0].localeCompare(b[0])).map(([, definition]): string => definition).join('\n\n');
  const header = createImportCode(HEADER, [
    {
      file: '../../types',
      types: imports.codecTypes['Tuple'] ? ['Codec'] : []
    },
    {
      file: '../../codec',
      types: Object.keys(imports.codecTypes).filter((name): boolean => name !== 'Tuple')
    },
    {
      file: '../../primitive',
      types: Object.keys(imports.primitiveTypes)
    },
    ...Object.keys(imports.localTypes).map((moduleName): { file: string; types: string[] } => ({
      file: `../${moduleName}`,
      types: Object.keys(imports.localTypes[moduleName])
    }))
  ]);

  fs.writeFileSync(`packages/types/src/interfaces/${defName}/types.ts`, header.concat(sortedDefs).concat(FOOTER), { flag: 'w' });
  fs.writeFileSync(`packages/types/src/interfaces/${defName}/index.ts`, HEADER.concat(`export * from './types';`).concat(FOOTER), { flag: 'w' });
}

Object.entries(definitions).forEach(([defName, obj]): void => {
  console.log(`Extracting interfaces for ${defName}`);

  generateTsDef(defName, obj);
});

console.log(`Writing interfaces/types.ts`);

fs.writeFileSync(`packages/types/src/interfaces/types.ts`, HEADER.concat(Object.keys(definitions).map((moduleName): string => `export * from './${moduleName}/types';`).join('\n')).concat(FOOTER), { flag: 'w' });
fs.writeFileSync(`packages/types/src/interfaces/index.ts`, HEADER.concat(`export * from './types';`).concat(FOOTER), { flag: 'w' });

// Generate `packages/types/src/interfaceRegistry.ts`, the registry of all interfaces
function generateInterfaceRegistry (): void {
  const imports = createImports();

  const primitives = Object
    .keys(primitiveClasses)
    .filter((name): boolean =>
      !!name.indexOf('Generic') && !!name.indexOf('Metadata')
    )
    .reduce((accumulator, primitiveName): string => {
      setImports(imports, [primitiveName]);

      return [
        accumulator,
        getDerivedTypes(primitiveName, primitiveName, imports)
      ].join('\n');
    }, '');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const srml = Object.entries(definitions).reduce((accumulator, [_defName, { types }]): string => {
    setImports(imports, Object.keys(types));

    return [
      accumulator,
      ...Object.keys(types).map((type): string => getDerivedTypes(type, (types as any)[type], imports, 2))
    ].join('\n');
  }, '');

  const header = createImportCode(HEADER, [
    {
      file: './codec',
      types: Object.keys(imports.codecTypes).filter((name): boolean => name !== 'Tuple')
    },
    {
      file: './primitive',
      types: Object.keys(imports.primitiveTypes)
    },
    ...Object.keys(imports.localTypes).map((moduleName): { file: string; types: string[] } => ({
      file: `./interfaces/${moduleName}`,
      types: Object.keys(imports.localTypes[moduleName])
    }))
  ]);

  const interfaceStart = 'export interface InterfaceRegistry {';
  const interfaceEnd = '\n}';

  fs.writeFileSync(
    `packages/types/src/interfaceRegistry.ts`,
    header.concat(interfaceStart).concat(primitives).concat(srml).concat(interfaceEnd).concat(FOOTER)
    , { flag: 'w' }
  );
}

console.log(`Writing interfaceRegistry.ts`);

generateInterfaceRegistry();

// Make types a little bit more flexible
// - if param instanceof AbstractInt, then param: u64 | Uint8array | string | number
// etc
function getSimilarTypes (imports: Imports, type: string): string[] {
  const possibleTypes = [type];

  if (type === 'Extrinsic') {
    setImports(imports, ['IExtrinsic']);
    return ['IExtrinsic'];
  }

  if (isChildClass(Vec, ClassOfUnsafe(type))) {
    return [`(${getSimilarTypes(imports, ((getTypeDef(type).sub) as TypeDef).type).join(' | ')})[]`];
  }

  // FIXME This is a hack, it's hard to correctly type StorageKeys in the
  // current state
  if (type === 'StorageKey') {
    return ['any'];
  }

  // @ts-ignore Cannot get isChildClass of abstract class, but it works
  if (isChildClass(AbstractInt, ClassOfUnsafe(type))) {
    possibleTypes.push('Uint8Array', 'number', 'string');
  } else if (isChildClass(Uint8Array, ClassOfUnsafe(type))) {
    possibleTypes.push('Uint8Array', 'string');
  } else if (isChildClass(String, ClassOfUnsafe(type))) {
    possibleTypes.push('string');
  }

  return possibleTypes;
}

// Generate `packages/types-jsonrpc/src/jsonrpc.types.ts`
function generateRpcTypes (): void {
  // Inject all types so that types-jsonrpc can use them
  require('../injector');

  // Get all imported types by types-jsonrpc
  const allImportedTypes = Object.keys(interfaces).reduce<string[]>((allSections, section): string[] => {
    return allSections.concat(
      ...Object.values(interfaces[section].methods).map((method): string[] =>
        [...method.params.map(({ type }): string => type), method.type])
    );
  }, []);

  const imports = createImports({ types: allImportedTypes });

  const body = Object.keys(interfaces).reduce<string[]>((allSections, section): string[] => {
    const allMethods = Object.values(interfaces[section].methods).map((method): string => {
      // FIXME
      // These 3 are too hard to type, I give up
      if (method.method === 'getStorage') {
        setImports(imports, ['Codec']);
        return `    getStorage<T = Codec>(key: any, block?: Hash | Uint8Array | string): Observable<T>;`;
      }
      if (method.method === 'subscribeStorage') {
        return `    subscribeStorage<T = Codec[]>(keys: any[]): Observable<T>;`;
      }

      const args = method.params.map((param): string => {
        const similarTypes = getSimilarTypes(imports, param.type);
        setImports(imports, similarTypes);

        return `${param.name}${param.isOptional ? '?' : ''}: ${similarTypes.join(' | ')}`;
      });

      return `    ${method.method}(${args.join(', ')}): Observable<${method.type}>;`;
    });

    return allSections.concat(
      [
        `  ${section}: {`,
        ...allMethods,
        `  };`
      ].join('\n')
    );
  }, []).join('\n');

  const header = createImportCode(HEADER, [
    {
      file: 'rxjs',
      types: ['Observable']
    },
    {
      file: '@polkadot/types/codec',
      types: Object.keys(imports.codecTypes).filter((name): boolean => name !== 'Tuple')
    },
    {
      file: '@polkadot/types',
      types: Object.keys(imports.primitiveTypes)
    },
    ...Object.keys(imports.localTypes).map((moduleName): { file: string; types: string[] } => ({
      file: `@polkadot/types/interfaces/${moduleName}`,
      types: Object.keys(imports.localTypes[moduleName])
    })),
    {
      file: '@polkadot/types/types',
      types: Object.keys(imports.typesTypes)
    }
  ]);
  const interfaceStart = 'export interface RpcInterface {\n';
  const interfaceEnd = '\n}';

  fs.writeFileSync(
    `packages/rpc-core/src/jsonrpc.types.ts`,
    header.concat(interfaceStart).concat(body).concat(interfaceEnd).concat(FOOTER)
    , { flag: 'w' }
  );
}

console.log(`Writing packages/rpc-core/jsonrpc.types.ts`);

generateRpcTypes();
