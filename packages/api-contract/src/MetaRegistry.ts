// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import * as t from '@polkadot/types/types';

import { assert } from '@polkadot/util';
import { encodeEnum, encodeStruct, encodeTuple } from '@polkadot/types';

const SPECIAL_TYPES = ['AccountId', 'Balance'];

const {
  Builtin,
  ClikeEnum,
  Enum,
  Struct,
  TupleStruct,
  Null
} = t.MetaTypeInfo;

export default class MetaRegistry {
  private _strings: string[] = [];

  private _types: t.MetaType[] = [];

  public typeDefs: t.TypeDef[] = [];

  public constructor ({ registry: { strings, types } }: t.MetaRegistryJson) {
    this._strings = strings;
    this._types = types;

    this._types.forEach((_, index: number): void => this.setTypeDefAtIndex(index + 1));
  }

  public stringAt (index: t.StringIndex): string {
    assert(this._strings && index <= this._strings.length, `MetaRegistry: Invalid string index ${index} found in metadata`);

    return this._strings[index - 1];
  }

  public stringsAt (indices: t.StringIndex[]): string[] {
    return indices.map(
      (index: number): string => {
        return this.stringAt(index);
      }
    );
  }

  public typeAt (index: t.TypeIndex): t.MetaType {
    assert(this._types && index <= this._types.length, `MetaRegistry: Invalid type index ${index} found in metadata`);

    return this._types[index - 1];
  }

  public typesAt (indices: t.TypeIndex[]): t.MetaType[] {
    return indices.map(
      (index: number): t.MetaType => {
        return this.typeAt(index);
      }
    );
  }

  public hasTypeDefAt (index: t.TypeIndex): boolean {
    return !!this.typeDefs[index - 1];
  }

  public typeDefAt (index: t.TypeIndex, extra: Pick<t.TypeDef, never> = {}): t.TypeDef {
    assert(this.hasTypeDefAt(index), `Invalid TypeDef index requested: ${index}`);
    return {
      ...this.typeDefs[index - 1],
      ...extra
    };
  }

  private typeDefIdFields ({ id }: t.MetaType): Pick<t.TypeDef, never> {
    if (!id) {
      return {};
    }

    const {
      'custom.name': nameIndex,
      'custom.namespace': namespaceIndices,
      'custom.params': paramsIndices
    } = id as t.MetaTypeIdCustom;

    if (nameIndex) {
      return {
        name: this.stringAt(nameIndex),
        ...(
          namespaceIndices && namespaceIndices.length
            ? { namespace: this.stringsAt(namespaceIndices).join('::') }
            : {}
        ),
        ...(
          paramsIndices && paramsIndices.length
            ? { params: this.typesAt(paramsIndices).map((type): t.TypeDef => this.typeDefFromMetaType(type)) }
            : {}
        ),
        ...(SPECIAL_TYPES.includes(this.stringAt(nameIndex))
          ? { type: this.stringAt(nameIndex) }
          : {}
        )
      };
    }

    return {};
  }

  private typeDefDefFields (metaType: t.MetaType, typeIndex?: t.TypeIndex): Pick<t.TypeDef, never> {
    assert(!(metaType.def as t.MetaTypeDefUnion)['union.fields'], 'Invalid union type definition found');

    switch (this.detectedType(metaType)) {
      case Builtin:
        return this.typeDefForBuiltin(metaType, typeIndex);
      case Enum:
        return this.typeDefForEnum(metaType.def as t.MetaTypeDefEnum);
      case ClikeEnum:
        return this.typeDefForClikeEnum(metaType.def as t.MetaTypeDefClikeEnum);
      case Struct:
        return this.typeDefForStruct(metaType.def as t.MetaTypeDefStruct);
      case TupleStruct:
        return this.typeDefForTupleStruct(metaType.def as t.MetaTypeDefTupleStruct);
      case Null:
      default:
        throw new Error(`Invalid type detected at index ${typeIndex}`);
    }
  }

  public typeDefFromMetaType (metaType: t.MetaType, typeIndex?: t.TypeIndex): t.TypeDef {
    const typeDef: t.TypeDef = {
      info: t.TypeDefInfo.Null,
      type: '',
      ...this.typeDefDefFields(metaType, typeIndex),
      ...this.typeDefIdFields(metaType)
    };

    return typeDef;
  }

  public setTypeDefAtIndex (typeIndex: t.TypeIndex): void {
    const metaType = this.typeAt(typeIndex);

    this.typeDefs[typeIndex - 1] = this.typeDefFromMetaType(metaType, typeIndex);
  }

  public typeDefFromMetaTypeAt (typeIndex: t.TypeIndex): t.TypeDef {
    if (!this.hasTypeDefAt(typeIndex)) {
      this.setTypeDefAtIndex(typeIndex);
    }
    return this.typeDefAt(typeIndex)!;
  }

  private detectedType ({ def }: t.MetaType): t.MetaTypeInfo {
    if (def === 'builtin') {
      return t.MetaTypeInfo.Builtin;
    }

    if ((def as t.MetaTypeDefEnum)['enum.variants']) {
      return t.MetaTypeInfo.Enum;
    }

    if ((def as t.MetaTypeDefClikeEnum)['clike_enum.variants']) {
      return t.MetaTypeInfo.ClikeEnum;
    }

    if ((def as t.MetaTypeDefStruct)['struct.fields']) {
      return t.MetaTypeInfo.Struct;
    }

    if ((def as t.MetaTypeDefTupleStruct)['tuple_struct.types']) {
      return t.MetaTypeInfo.TupleStruct;
    }

    return t.MetaTypeInfo.Null;
  }

  private typeDefForBuiltin ({ id }: t.MetaType, typeIndex?: t.TypeIndex): Pick<t.TypeDef, never> {
    assert(!!id, 'Invalid builtin type metadata found');

    // builtin primitive type
    if (typeof id === 'string') {
      return {
        info: t.TypeDefInfo.Plain,
        type: id
      };
    }

    // builtin tuple
    if (Array.isArray(id)) {
      const sub = id.map((tupleTypeIndex: number): t.TypeDef => this.typeDefFromMetaTypeAt(tupleTypeIndex));
      return {
        info: t.TypeDefInfo.Tuple,
        type: encodeTuple(sub),
        sub
      };
    }

    // builtin array
    const { 'array.type': vecTypeIndex, 'array.len': vecLength } = id as t.MetaTypeIdArray;
    if (vecTypeIndex) {
      assert(!vecLength || vecLength <= 256, 'MetaRegistry: Only support for [Type; <length>], where length <= 256');
      assert(!typeIndex || vecTypeIndex !== typeIndex, `MetaRegistry: self-referencing registry type at index ${typeIndex}`);
      const sub = this.typeDefFromMetaTypeAt(vecTypeIndex);

      return {
        ...(
          vecLength
            ? {
              info: t.TypeDefInfo.VecFixed,
              ext: { length: vecLength, type: '' },
              type: `[${sub.name || sub.type};${vecLength}]`
            }
            : {
              info: t.TypeDefInfo.Vec,
              type: `Vec<${sub.name || sub.type}>`
            }
        ),
        sub: this.typeDefFromMetaTypeAt(vecTypeIndex)
      };
    }

    return {};
  }

  private typeDefForEnum (def: t.MetaTypeDefEnum): t.TypeDef {
    const sub = def['enum.variants'].map(
      (variant): t.TypeDef => {
        const { 'unit_variant.name': unitNameIndex } = variant as t.MetaTypeDefEnumVariantUnit;
        if (unitNameIndex) {
          return {
            info: t.TypeDefInfo.Plain,
            name: this.stringAt(unitNameIndex),
            type: 'Null'
          };
        }

        const { 'tuple_struct_variant.name': tupleStructVariantNameIndex } = variant as t.MetaTypeDefEnumVariantTupleStruct;
        if (tupleStructVariantNameIndex) {
          return this.typeDefForTupleStruct(variant as t.MetaTypeDefEnumVariantTupleStruct);
        }

        const { 'struct_variant.name': structVariantNameIndex } = variant as t.MetaTypeDefEnumVariantStruct;
        if (structVariantNameIndex) {
          return this.typeDefForStruct(variant as t.MetaTypeDefEnumVariantStruct);
        }

        return {
          info: t.TypeDefInfo.Null,
          type: 'Null'
        };
      }
    );

    return {
      info: t.TypeDefInfo.Enum,
      type: encodeEnum(sub),
      sub
    };
  }

  private typeDefForClikeEnum (def: t.MetaTypeDefClikeEnum): Pick<t.TypeDef, never> {
    const sub = def['clike_enum.variants'].map(
      ({ name: nameIndex, discriminant }): t.TypeDef => {
        return {
          ext: { discriminant },
          info: t.TypeDefInfo.Plain,
          name: this.stringAt(nameIndex),
          type: 'Null'
        };
      }
    );

    return {
      info: t.TypeDefInfo.Enum,
      type: encodeEnum(sub),
      sub
    };
  }

  public typeDefForStruct (def: t.MetaTypeDefStruct | t.MetaTypeDefEnumVariantStruct): t.TypeDef {
    const structFields = (def as t.MetaTypeDefStruct)['struct.fields'] || (def as t.MetaTypeDefEnumVariantStruct)['struct_variant.fields'];
    const structNameIndex = (def as t.MetaTypeDefEnumVariantStruct)['struct_variant.name'];
    const sub = structFields.map(
      (field: t.MetaTypeDefStructField): t.TypeDef => {
        const { name: nameIndex, type: fieldTypeIndex } = field;
        return {
          ...this.typeDefFromMetaTypeAt(fieldTypeIndex),
          name: this.stringAt(nameIndex)
        };
      }
    );

    return {
      info: t.TypeDefInfo.Struct,
      ...(
        structNameIndex
          ? {
            name: this.stringAt(structNameIndex)
          }
          : {}
      ),
      type: encodeStruct(sub),
      sub
    };
  }

  private typeDefForTupleStruct (def: t.MetaTypeDefTupleStruct | t.MetaTypeDefEnumVariantTupleStruct): t.TypeDef {
    const tupleStructTypes = (def as t.MetaTypeDefTupleStruct)['tuple_struct.types'] || (def as t.MetaTypeDefEnumVariantTupleStruct)['tuple_struct_variant.types'];
    const tupleStructNameIndex = (def as t.MetaTypeDefEnumVariantTupleStruct)['tuple_struct_variant.name'];
    const sub: t.TypeDef[] = tupleStructTypes.map(
      (tupleStructFieldTypeIndex: number, index: number): t.TypeDef => {
        return {
          ...this.typeDefFromMetaTypeAt(tupleStructFieldTypeIndex),
          index
        };
      }
    );

    return {
      info: t.TypeDefInfo.Tuple,
      ...(
        tupleStructNameIndex
          ? {
            name: this.stringAt(tupleStructNameIndex)
          }
          : {}
      ),
      type: encodeTuple(sub),
      sub
    };
  }
}
