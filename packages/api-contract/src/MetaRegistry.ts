import { MetaRegistryJson, MetaType, MetaTypeDef, MetaTypeDefStruct, MetaTypeDefTupleStruct, MetaTypeDefStructField, MetaTypeIdArray, MetaTypeIdCustom, StringIndex, TypeDef, TypeDefInfo, TypeIndex } from '@polkadot/types/types';

import { assert } from '@polkadot/util';
import { encodeEnum, encodeStruct, encodeTuple } from '@polkadot/types';

export default class MetaRegistry {
  private _strings: string[] = [];

  private _types: MetaType[] = [];

  public typeDefs: TypeDef[] = [];

  public constructor ({ registry: { strings, types } }: MetaRegistryJson) {
    this._strings = strings;
    this._types = types;

    this._types.forEach((_, index: number): void => this.setTypeDefAtIndex(index + 1));
  }

  public stringAt (index: StringIndex): string {
    assert(this._strings && index <= this._strings.length, `MetaRegistry: Invalid string index ${index} found in metadata`);

    return this._strings[index - 1];
  }

  public stringsAt (indices: StringIndex[]): string[] {
    return indices.map(
      (index: number): string => {
        return this.stringAt(index);
      }
    );
  }

  public typeAt (index: TypeIndex): MetaType {
    assert(this._types && index < this._types.length, `MetaRegistry: Invalid type index ${index} found in metadata`);

    return this._types[index - 1];
  }

  public typesAt (indices: TypeIndex[]): MetaType[] {
    return indices.map(
      (index: number): MetaType => {
        return this.typeAt(index);
      }
    );
  }

  public typeDefAt (index: TypeIndex): TypeDef | undefined {
    return this.typeDefs[index - 1];
  }

  public typeDefIdFields ({ id }: MetaType): Pick<TypeDef, never> {
    if (!id) {
      return {};
    }

    const {
      'custom.name': nameIndex,
      'custom.namespace': namespaceIndices,
      'custom.params': paramsIndices
    } = id as MetaTypeIdCustom;

    if (nameIndex) {
      return {
        name: this.stringAt(nameIndex),
        ...(
          namespaceIndices
            ? { namespace: this.stringsAt(namespaceIndices).join('::') }
            : {}
        ),
        ...(
          paramsIndices
            ? { params: this.typesAt(paramsIndices) }
            : {}
        )
      };
    }

    return {};
  }

  public typeDefDefFields ({ def, id }: MetaType, typeIndex?: TypeIndex): Pick<TypeDef, never> {
    if (def === 'builtin') {
      if (!id) {
        throw new Error('Invalid builtin type metadata found');
      }

      // builtin primitive type
      if (typeof id === 'string') {
        return {
          info: TypeDefInfo.Plain,
          type: id
        };
      }

      // builtin tuple
      if (Array.isArray(id)) {
        const sub = id.map((tupleTypeIndex: number): TypeDef => this.typeDefFromMetaTypeAt(tupleTypeIndex));
        return {
          info: TypeDefInfo.Tuple,
          sub,
          type: encodeTuple(sub)
        };
      }

      // builtin array
      const { 'array.type': vecTypeIndex, 'array.len': vecLength } = id as MetaTypeIdArray;
      if (vecTypeIndex) {
        assert(!vecLength || vecLength <= 256, `MetaRegistry: Only support for [Type; <length>], where length <= 256`);
        assert(!typeIndex || vecTypeIndex !== typeIndex, `MetaRegistry: self-referencing registry type at index ${typeIndex}`);
        const sub = this.typeDefFromMetaTypeAt(vecTypeIndex);

        return {
          ...(
            vecLength
              ? {
                info: TypeDefInfo.VecFixed,
                ext: { length: vecLength, type: '' },
                type: `[${sub.name || sub.type};${vecLength}]`
              }
              : {
                info: TypeDefInfo.Vec,
                type: `Vec<${sub.name || sub.type}>`
              }
          ),
          sub: this.typeDefFromMetaTypeAt(vecTypeIndex)
        };
      }
    }

    // enum
    if (Array.isArray(def)) {
      const sub = ((): TypeDef[] => {
        const isNoData = def.reduce(
          (bool: boolean, entry): boolean => bool && !!entry.discriminant,
          true
        );

        // plain enum
        if (isNoData) {
          return def.map(
            (entry: Record<string, number>): TypeDef => {
              const { name: nameIndex, discriminant } = entry;
              return {
                ext: { discriminant },
                info: TypeDefInfo.Plain,
                name: this.stringAt(nameIndex),
                type: 'Null'
              };
            }
          );
        }

        // enum with different types
        return def.map(
          (entry: number | MetaTypeDef): TypeDef => {
            if (typeof entry === 'number') {
              return this.typeDefFromMetaTypeAt(entry);
            }
            return this.typeDefFromMetaType({ def: entry, id: null });
          }
        );
      })();

      return {
        info: TypeDefInfo.Enum,
        sub,
        type: encodeEnum(sub)
      };
    }

    // struct
    const { 'struct.fields': structFields } = def as MetaTypeDefStruct;

    if (structFields) {
      const sub = structFields.map(
        (field: MetaTypeDefStructField): TypeDef => {
          const { name: nameIndex, type: fieldTypeIndex } = field;
          return {
            ...this.typeDefFromMetaTypeAt(fieldTypeIndex),
            name: this.stringAt(nameIndex)
          };
        }
      );
      return {
        info: TypeDefInfo.Struct,
        sub,
        type: encodeStruct(sub)
      };
    }

    // tuple struct
    const { 'tuple_struct.types': tupleStructTypes, 'tuple_struct_variant.name': tupleStructNameIndex } = def as MetaTypeDefTupleStruct;

    if (tupleStructTypes) {
      const sub: TypeDef[] = tupleStructTypes.map(
        (tupleStructFieldTypeIndex: number, index: number): TypeDef => {
          return {
            ...this.typeDefFromMetaTypeAt(tupleStructFieldTypeIndex),
            index
          };
        }
      );

      return {
        info: TypeDefInfo.Tuple,
        sub,
        ...(
          tupleStructNameIndex
            ? {
              type: this.stringAt(tupleStructNameIndex)
            }
            : {
              type: encodeTuple(sub)
            }
        )
      };
    }
    return {};
  }

  public typeDefFromMetaType (metaType: MetaType, typeIndex?: TypeIndex): TypeDef {
    const typeDef: TypeDef = {
      info: TypeDefInfo.Null,
      type: '',
      ...this.typeDefIdFields(metaType),
      ...this.typeDefDefFields(metaType, typeIndex)
    };

    return typeDef;
  }

  public setTypeDefAtIndex (typeIndex: TypeIndex): void {
    const metaType = this.typeAt(typeIndex);

    this.typeDefs[typeIndex - 1] = {
      index: typeIndex - 1,
      ...this.typeDefFromMetaType(metaType, typeIndex)
    };
  }

  public typeDefFromMetaTypeAt (typeIndex: TypeIndex): TypeDef {
    if (!this.typeDefAt(typeIndex)) {
      this.setTypeDefAtIndex(typeIndex);
    }
    return this.typeDefAt(typeIndex)!;
  }
}
