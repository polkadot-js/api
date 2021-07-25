// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Vec } from '../codec/Vec';
import type { PortableType } from '../interfaces/metadata';
import type { SiField, SiLookupTypeId, SiPath, SiType, SiTypeDefArray, SiTypeDefCompact, SiTypeDefComposite, SiTypeDefSequence, SiTypeDefTuple, SiTypeDefVariant, SiVariant } from '../interfaces/scaleInfo';
import type { Type } from '../primitive/Type';
import type { Registry, TypeDef } from '../types';

import { assert, isNumber, isString, stringCamelCase, stringify, stringUpperFirst } from '@polkadot/util';

import { Struct } from '../codec/Struct';
import { withTypeString } from '../create/encodeTypes';
import { getTypeDef } from '../create/getTypeDef';
import { TypeDefInfo } from '../types';

// Alias the primitive enum with out known values
const PRIMITIVE_ALIAS: Record<string, string> = {
  Char: 'u32', // Rust char is 4-bytes
  Str: 'Text'
};

// ink! specific overrides
const PRIMITIVE_INK = ['AccountId', 'AccountIndex', 'Address', 'Balance'];

// These are types where we have a specific decoding/encoding override + helpers
const PRIMITIVE_SP = [
  'node_runtime::Call',
  'sp_arithmetic::per_things::*',
  'sp_core::crypto::AccountId32',
  'sp_runtime::generic::era::Era',
  'sp_runtime::multiaddress::MultiAddress',
  'pallet_democracy::vote::Vote',
  'pallet_identity::types::Data',
  'pallet_identity::types::IdentityFields',
  'primitive_types::*'
];

// These we never use these as top-level names, they are wrappers
const WRAPPERS = ['Box', 'BTreeMap', 'Cow', 'Result', 'Option'];

// These are reserved and conflicts with built-in Codec definitions
const RESERVED = ['entries', 'hash', 'keys', 'size'];

// check if the path matches the PRIMITIVE_SP (with wildcards)
function isPrimitivePath (path: SiPath): boolean {
  return !!path.length && (
    (
      path.length > 2 &&
      path[0].eq('ink_env') &&
      path[1].eq('types')
    ) ||
    PRIMITIVE_INK.includes(path[path.length - 1].toString()) ||
    PRIMITIVE_SP
      .map((p) => p.split('::'))
      .some((parts) =>
        path.length === parts.length &&
        parts.every((p, index) =>
          p === '*' ||
          path[index].eq(p)
        )
      )
  );
}

function removeDuplicateNames (names: (string | null)[]): (string | null)[] {
  return names.map((name, index): string | null =>
    !name || names.some((o, i) => index !== i && name === o)
      ? null
      : name
  );
}

function extractNames (types: PortableType[]): Record<number, string> {
  return removeDuplicateNames(
    types.map(({ type: { def, params, path } }): string | null => {
      if (def.isCompact) {
        // Do magic for compact naming
        const instanceType = types[def.asCompact.type.toNumber()];

        if (instanceType.type.def.isPrimitive) {
          return `Compact${instanceType.type.def.asPrimitive.toString()}`;
        }
      }

      if (!path.length) {
        return null;
      }

      const parts = path.map((p) => stringUpperFirst(stringCamelCase(p)));

      if (parts.length >= 2 && parts[parts.length - 1] === parts[parts.length - 2]) {
        parts.pop();
      }

      let typeName = parts.join('');

      if (parts.length === 2 && parts[parts.length - 1] === 'RawOrigin' && params.length === 2 && params[1].type.isSome) {
        // Do magic for RawOrigin lookup
        const instanceType = types[params[1].type.unwrap().toNumber()];

        if (instanceType.type.path.length === 2) {
          typeName = `${typeName}${instanceType.type.path[1].toString()}`;
        }
      } else if (params.length === 1 && params[0].type.isSome) {
        // Do magic for single params primitive lookup
        const instanceType = types[params[0].type.unwrap().toNumber()];

        if (instanceType.type.def.isPrimitive) {
          typeName = `${typeName}${instanceType.type.def.asPrimitive.toString()}`;
        }
      }

      return WRAPPERS.includes(typeName)
        ? null
        : typeName;
    })
  ).reduce<Record<number, string>>((all, name, index) => {
    if (name) {
      all[index] = name;
    }

    return all;
  }, {});
}

export class GenericPortableRegistry extends Struct {
  #names: Record<number, string>;
  #typeDefs: Record<number, TypeDef> = {};

  constructor (registry: Registry, value?: Uint8Array) {
    super(registry, {
      types: 'Vec<PortableType>'
    }, value);

    this.#names = extractNames(this.types);
  }

  /**
   * @description The types of the registry
   */
  public get types (): Vec<PortableType> {
    return this.get('types') as Vec<PortableType>;
  }

  /**
   * @description Finds a specific type in the registry
   */
  public getSiType (lookupId: SiLookupTypeId | string | number): SiType {
    const found = this.types[this.#getLookupId(lookupId)];

    assert(found, () => `PortableRegistry: Unable to find type with lookupId ${lookupId.toString()}`);

    return found.type;
  }

  /**
   * @description Lookup the type definition for the index
   */
  public getTypeDef (lookupId: SiLookupTypeId | string | number): TypeDef {
    const lookupIndex = this.#getLookupId(lookupId);

    if (!this.#typeDefs[lookupIndex]) {
      // we set first since we will get into circular lookups along the way
      this.#typeDefs[lookupIndex] = {
        info: TypeDefInfo.DoNotConstruct,
        lookupIndex,
        lookupName: this.#names[lookupIndex],
        type: this.registry.createLookupType(lookupIndex)
      };

      const extracted = this.#extract(this.getSiType(lookupId), lookupIndex);

      Object.keys(extracted).forEach((k): void => {
        if (k !== 'lookupName' || extracted[k]) {
          // these are safe since we are looking through the keys as set
          this.#typeDefs[lookupIndex][k as 'info'] = extracted[k as 'info'];
        }
      });

      // don't set lookupName on lower-level, we want to always direct to the type
      if (extracted.info === TypeDefInfo.Plain) {
        this.#typeDefs[lookupIndex].lookupNameOrig = this.#typeDefs[lookupIndex].lookupName;
        delete this.#typeDefs[lookupIndex].lookupName;
      }
    }

    return this.#typeDefs[lookupIndex];
  }

  #createSiDef (lookupId: SiLookupTypeId): TypeDef {
    const typeDef = this.getTypeDef(lookupId);
    const lookupIndex = lookupId.toNumber();

    // Setup for a lookup on complex types
    return [TypeDefInfo.Enum, TypeDefInfo.Struct].includes(typeDef.info)
      ? {
        docs: typeDef.docs,
        info: TypeDefInfo.Si,
        lookupIndex,
        lookupName: this.#names[lookupIndex],
        type: this.registry.createLookupType(lookupId)
      }
      : typeDef;
  }

  #getLookupId (lookupId: SiLookupTypeId | string | number): number {
    if (isString(lookupId)) {
      assert(this.registry.isLookupType(lookupId), () => `PortableRegistry: Expected a lookup string type, found ${lookupId}`);

      return parseInt(lookupId.replace('Lookup', ''), 10);
    } else if (isNumber(lookupId)) {
      return lookupId;
    }

    return lookupId.toNumber();
  }

  #extract (type: SiType, lookupIndex: number): TypeDef {
    const path = [...type.path];
    let typeDef: TypeDef;

    try {
      if (isPrimitivePath(type.path)) {
        typeDef = this.#extractPrimitivePath(lookupIndex, type);
      } else if (type.def.isArray) {
        typeDef = this.#extractArray(lookupIndex, type.def.asArray);
      } else if (type.def.isCompact) {
        typeDef = this.#extractCompact(lookupIndex, type.def.asCompact);
      } else if (type.def.isComposite) {
        typeDef = this.#extractComposite(lookupIndex, type, type.def.asComposite);
      } else if (type.def.isHistoricMetaCompat) {
        typeDef = this.#extractHistoric(lookupIndex, type.def.asHistoricMetaCompat);
      } else if (type.def.isPrimitive) {
        typeDef = this.#extractPrimitive(lookupIndex, type);
      } else if (type.def.isSequence) {
        typeDef = this.#extractSequence(lookupIndex, type.def.asSequence);
      } else if (type.def.isTuple) {
        typeDef = this.#extractTuple(lookupIndex, type.def.asTuple);
      } else if (type.def.isVariant) {
        typeDef = this.#extractVariant(lookupIndex, type, type.def.asVariant);
      } else {
        throw new Error(`Invalid type at index ${lookupIndex}: No handler for ${type.def.toString()}`);
      }
    } catch (error) {
      throw new Error(`PortableRegistry: Error extracting ${stringify(type)}: ${(error as Error).message}`);
    }

    return {
      docs: type.docs.map((d) => d.toString()),
      namespace: path.join('::'),
      ...typeDef
    };
  }

  #extractArray (_: number, { len: length, type }: SiTypeDefArray): TypeDef {
    assert(!length || length.toNumber() <= 256, 'PortableRegistry: Only support for [Type; <length>], where length <= 256');

    return withTypeString(this.registry, {
      info: TypeDefInfo.VecFixed,
      length: length.toNumber(),
      sub: this.#createSiDef(type)
    });
  }

  #extractCompact (_: number, { type }: SiTypeDefCompact): TypeDef {
    return withTypeString(this.registry, {
      info: TypeDefInfo.Compact,
      sub: this.#createSiDef(type)
    });
  }

  #extractComposite (lookupIndex: number, { params, path }: SiType, { fields }: SiTypeDefComposite): TypeDef {
    if (path.length === 1 && path[0].eq('BTreeMap')) {
      return withTypeString(this.registry, {
        info: TypeDefInfo.BTreeMap,
        sub: params.map(({ type }) => this.#createSiDef(type.unwrap()))
      });
    }

    return this.#extractFields(lookupIndex, fields);
  }

  #extractFields (lookupIndex: number, fields: SiField[]): TypeDef {
    const [isStruct, isTuple] = fields.reduce(([isAllNamed, isAllUnnamed], { name }) => ([
      isAllNamed && name.isSome,
      isAllUnnamed && name.isNone
    ]),
    [true, true]);

    assert(isTuple || isStruct, 'PortableRegistry: Invalid fields type detected, expected either Tuple or Struct');

    if (fields.length === 0) {
      return {
        info: TypeDefInfo.Null,
        type: 'Null'
      };
    } else if (isTuple && fields.length === 1) {
      return this.#createSiDef(fields[0].type);
    }

    const [sub, alias] = this.#extractFieldsAlias(fields);

    return withTypeString(this.registry, {
      info: isTuple // Tuple check first
        ? TypeDefInfo.Tuple
        : TypeDefInfo.Struct,
      ...(
        lookupIndex === -1
          ? {}
          : {
            lookupIndex,
            lookupName: this.#names[lookupIndex]
          }
      ),
      ...(
        alias.size
          ? { alias }
          : {}
      ),
      sub
    });
  }

  #extractFieldsAlias (fields: SiField[]): [TypeDef[], Map<string, string>] {
    const alias = new Map<string, string>();
    const sub = fields.map(({ docs, name, type }) => {
      const typeDef = this.#createSiDef(type);

      if (name.isNone) {
        return typeDef;
      }

      let nameField = stringCamelCase(name.unwrap());
      let nameOrig: string | null = null;

      if (nameField.includes('#')) {
        nameOrig = nameField;
        nameField = nameOrig.replace(/#/g, '_');
      } else if (RESERVED.includes(nameField)) {
        nameOrig = nameField;
        nameField = `${nameField}_`;
      }

      if (nameOrig) {
        alias.set(nameField, nameOrig);
      }

      return {
        ...typeDef,
        docs: docs.map((d) => d.toString()),
        name: nameField
      };
    });

    return [sub, alias];
  }

  #extractHistoric (_: number, type: Type): TypeDef {
    return {
      ...getTypeDef(type),
      displayName: type.toString(),
      isFromSi: true
    };
  }

  #extractPrimitive (_: number, type: SiType): TypeDef {
    const typeStr = type.def.asPrimitive.type.toString();

    return {
      info: TypeDefInfo.Plain,
      type: PRIMITIVE_ALIAS[typeStr] || typeStr.toLowerCase()
    };
  }

  #extractPrimitivePath (_: number, type: SiType): TypeDef {
    return {
      info: TypeDefInfo.Plain,
      type: type.path[type.path.length - 1].toString()
    };
  }

  #extractSequence (lookupIndex: number, { type }: SiTypeDefSequence): TypeDef {
    const sub = this.#createSiDef(type);

    if (sub.type === 'u8') {
      return {
        info: TypeDefInfo.Plain,
        type: 'Bytes'
      };
    }

    return withTypeString(this.registry, {
      info: TypeDefInfo.Vec,
      lookupIndex,
      lookupName: this.#names[lookupIndex],
      sub
    });
  }

  #extractTuple (lookupIndex: number, ids: SiTypeDefTuple): TypeDef {
    if (ids.length === 0) {
      return {
        info: TypeDefInfo.Null,
        type: 'Null'
      };
    } else if (ids.length === 1) {
      return this.getTypeDef(ids[0]);
    }

    const sub = ids.map((type) => this.#createSiDef(type));

    return withTypeString(this.registry, {
      info: TypeDefInfo.Tuple,
      lookupIndex,
      lookupName: this.#names[lookupIndex],
      sub
    });
  }

  #extractVariant (lookupIndex: number, { params, path }: SiType, { variants }: SiTypeDefVariant): TypeDef {
    const specialVariant = path[0].toString();

    if (specialVariant === 'Option') {
      return withTypeString(this.registry, {
        info: TypeDefInfo.Option,
        sub: this.#createSiDef(params[0].type.unwrap())
      });
    } else if (specialVariant === 'Result') {
      return withTypeString(this.registry, {
        info: TypeDefInfo.Result,
        sub: params.map(({ type }) => this.#createSiDef(type.unwrap())).map((def, index) => ({
          name: ['Ok', 'Error'][index],
          ...def
        }))
      });
    } else if (variants.length === 0) {
      return {
        info: TypeDefInfo.Null,
        type: 'Null'
      };
    }

    return this.#extractVariantEnum(lookupIndex, variants);
  }

  #extractVariantEnum (lookupIndex: number, variants: SiVariant[]): TypeDef {
    const sub: (TypeDef & { name: string })[] = [];

    // we may get entries out of order, arrange them first before creating with gaps filled
    variants
      .sort((a, b) => a.index.cmp(b.index))
      .forEach(({ fields, index, name }) => {
        const desired = index.toNumber();

        while (sub.length !== desired) {
          sub.push({
            index: sub.length,
            info: TypeDefInfo.Null,
            name: `Unused${sub.length}`,
            type: 'Null'
          });
        }

        sub.push({
          ...this.#extractFields(-1, fields),
          index: index.toNumber(),
          name: name.toString()
        });
      });

    return withTypeString(this.registry, {
      info: TypeDefInfo.Enum,
      lookupIndex,
      lookupName: this.#names[lookupIndex],
      sub
    });
  }
}
