// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec } from '@polkadot/types/types';
import { Enum, Option, Struct, Vec } from '@polkadot/types/codec';
import { Text, bool, u16, u32, u64 } from '@polkadot/types/primitive';

/** Struct */
export interface InkConstructorSpec extends Struct {
  /** MtLookupTextId */
  readonly name: MtLookupTextId;
  /** InkSelector */
  readonly selector: InkSelector;
  /** Vec<InkMessageParamSpec> */
  readonly args: Vec<InkMessageParamSpec>;
  /** Vec<Text> */
  readonly docs: Vec<Text>;
}

/** Struct */
export interface InkContractSpec extends Struct {
  /** MtLookupTextId */
  readonly name: MtLookupTextId;
  /** Vec<InkConstructorSpec> */
  readonly constructors: Vec<InkConstructorSpec>;
  /** Vec<InkMessageSpec> */
  readonly messages: Vec<InkMessageSpec>;
  /** Vec<InkEventSpec> */
  readonly events: Vec<InkEventSpec>;
  /** Vec<Text> */
  readonly docs: Vec<Text>;
}

/** Struct */
export interface InkEventParamSpec extends Struct {
  /** MtLookupTextId */
  readonly name: MtLookupTextId;
  /** bool */
  readonly indexed: bool;
  /** InkTypeSpec */
  readonly type: InkTypeSpec;
  /** Vec<Text> */
  readonly docs: Vec<Text>;
}

/** Struct */
export interface InkEventSpec extends Struct {
  /** MtLookupTextId */
  readonly name: MtLookupTextId;
  /** Vec<InkEventParamSpec> */
  readonly args: Vec<InkEventParamSpec>;
  /** Vec<Text> */
  readonly docs: Vec<Text>;
}

/** Struct */
export interface InkLayoutField extends Struct {
  /** MtLookupTextId */
  readonly name: MtLookupTextId;
  /** InkStorageLayout */
  readonly layout: InkStorageLayout;
}

/** Uint8Array, Codec */
export interface InkLayoutKey extends Uint8Array, Codec {}

/** Struct */
export interface InkLayoutRange extends Struct {
  /** InkLayoutKey */
  readonly offset: InkLayoutKey;
  /** u32 */
  readonly len: u32;
  /** MtLookupTextId */
  readonly elemType: MtLookupTextId;
}

/** Struct */
export interface InkLayoutStruct extends Struct {
  /** MtLookupTextId */
  readonly type: MtLookupTextId;
  /** Vec<InkLayoutField> */
  readonly fields: Vec<InkLayoutField>;
}

/** Struct */
export interface InkMessageParamSpec extends Struct {
  /** MtLookupTextId */
  readonly name: MtLookupTextId;
  /** InkTypeSpec */
  readonly type: InkTypeSpec;
}

/** Struct */
export interface InkMessageSpec extends Struct {
  /** MtLookupTextId */
  readonly name: MtLookupTextId;
  /** InkSelector */
  readonly selector: InkSelector;
  /** bool */
  readonly mutates: bool;
  /** Vec<InkMessageParamSpec> */
  readonly args: Vec<InkMessageParamSpec>;
  /** Option<InkTypeSpec> */
  readonly returnType: Option<InkTypeSpec>;
  /** Vec<Text> */
  readonly docs: Vec<Text>;
}

/** Struct */
export interface InkProject extends Struct {
  /** MtRegistry */
  readonly lookup: MtRegistry;
  /** InkStorageLayout */
  readonly storage: InkStorageLayout;
  /** InkContractSpec */
  readonly contract: InkContractSpec;
}

/** Uint8Array, Codec */
export interface InkSelector extends Uint8Array, Codec {}

/** Enum */
export interface InkStorageLayout extends Enum {
  /** 0:: Range(InkLayoutRange) */
  readonly isRange: boolean;
  /** InkLayoutRange */
  readonly asRange: InkLayoutRange;
  /** 1:: Struct(InkLayoutStruct) */
  readonly isStruct: boolean;
  /** InkLayoutStruct */
  readonly asStruct: InkLayoutStruct;
}

/** Struct */
export interface InkTypeSpec extends Struct {
  /** MtLookupTypeId */
  readonly ty: MtLookupTypeId;
  /** MtLookupTextId */
  readonly displayName: MtLookupTextId;
}

/** Struct */
export interface MtClikeEnumVariant extends Struct {
  /** MtLookupTextId */
  readonly name: MtLookupTextId;
  /** u64 */
  readonly discriminant: u64;
}

/** Enum */
export interface MtEnumVariant extends Enum {
  /** 0:: Unit(MtEnumVariantUnit) */
  readonly isUnit: boolean;
  /** MtEnumVariantUnit */
  readonly asUnit: MtEnumVariantUnit;
  /** 1:: Struct(MtEnumVariantStruct) */
  readonly isStruct: boolean;
  /** MtEnumVariantStruct */
  readonly asStruct: MtEnumVariantStruct;
  /** 2:: TupleStruct(MtEnumVariantTupleStruct) */
  readonly isTupleStruct: boolean;
  /** MtEnumVariantTupleStruct */
  readonly asTupleStruct: MtEnumVariantTupleStruct;
}

/** Struct */
export interface MtEnumVariantStruct extends Struct {
  /** MtLookupTextId */
  readonly name: MtLookupTextId;
  /** Vec<MtNamedField> */
  readonly fields: Vec<MtNamedField>;
}

/** Struct */
export interface MtEnumVariantTupleStruct extends Struct {
  /** MtLookupTextId */
  readonly name: MtLookupTextId;
  /** Vec<MtLookupTypeId> */
  readonly types: Vec<MtLookupTypeId>;
}

/** Struct */
export interface MtEnumVariantUnit extends Struct {
  /** MtLookupTextId */
  readonly name: MtLookupTextId;
}

/** u32 */
export interface MtLookupTextId extends u32 {}

/** u32 */
export interface MtLookupTypeId extends u32 {}

/** Struct */
export interface MtNamedField extends Struct {
  /** MtLookupTextId */
  readonly name: MtLookupTextId;
  /** MtLookupTypeId */
  readonly type: MtLookupTypeId;
}

/** Struct */
export interface MtRegistry extends Struct {
  /** Vec<Text> */
  readonly strings: Vec<Text>;
  /** Vec<MtTypeIdDef> */
  readonly types: Vec<MtTypeIdDef>;
}

/** Enum */
export interface MtTypeDef extends Enum {
  /** 0:: Builtin */
  readonly isBuiltin: boolean;
  /** 1:: Struct(MtTypeDefStruct) */
  readonly isStruct: boolean;
  /** MtTypeDefStruct */
  readonly asStruct: MtTypeDefStruct;
  /** 2:: TupleStruct(MtTypeDefTupleStruct) */
  readonly isTupleStruct: boolean;
  /** MtTypeDefTupleStruct */
  readonly asTupleStruct: MtTypeDefTupleStruct;
  /** 3:: ClikeEnum(MtTypeDefClikeEnum) */
  readonly isClikeEnum: boolean;
  /** MtTypeDefClikeEnum */
  readonly asClikeEnum: MtTypeDefClikeEnum;
  /** 4:: Enum(MtTypeDefEnum) */
  readonly isEnum: boolean;
  /** MtTypeDefEnum */
  readonly asEnum: MtTypeDefEnum;
  /** 5:: Union(MtTypeDefUnion) */
  readonly isUnion: boolean;
  /** MtTypeDefUnion */
  readonly asUnion: MtTypeDefUnion;
}

/** Struct */
export interface MtTypeDefClikeEnum extends Struct {
  /** Vec<MtClikeEnumVariant> */
  readonly variants: Vec<MtClikeEnumVariant>;
}

/** Struct */
export interface MtTypeDefEnum extends Struct {
  /** Vec<MtEnumVariant> */
  readonly variants: Vec<MtEnumVariant>;
}

/** Struct */
export interface MtTypeDefStruct extends Struct {
  /** Vec<MtNamedField> */
  readonly fields: Vec<MtNamedField>;
}

/** Struct */
export interface MtTypeDefTupleStruct extends Struct {
  /** Vec<MtLookupTypeId> */
  readonly types: Vec<MtLookupTypeId>;
}

/** Struct */
export interface MtTypeDefUnion extends Struct {
  /** Vec<MtNamedField> */
  readonly fields: Vec<MtNamedField>;
}

/** Enum */
export interface MtTypeId extends Enum {
  /** 0:: Custom(MtTypeIdCustom) */
  readonly isCustom: boolean;
  /** MtTypeIdCustom */
  readonly asCustom: MtTypeIdCustom;
  /** 1:: Slice(MtTypeIdSlice) */
  readonly isSlice: boolean;
  /** MtTypeIdSlice */
  readonly asSlice: MtTypeIdSlice;
  /** 2:: Array(MtTypeIdArray) */
  readonly isArray: boolean;
  /** MtTypeIdArray */
  readonly asArray: MtTypeIdArray;
  /** 3:: Tuple(MtTypeIdTuple) */
  readonly isTuple: boolean;
  /** MtTypeIdTuple */
  readonly asTuple: MtTypeIdTuple;
  /** 4:: Primitive(MtTypeIdPrimitive) */
  readonly isPrimitive: boolean;
  /** MtTypeIdPrimitive */
  readonly asPrimitive: MtTypeIdPrimitive;
}

/** Struct */
export interface MtTypeIdArray extends Struct {
  /** u16 */
  readonly len: u16;
  /** MtLookupTypeId */
  readonly type: MtLookupTypeId;
}

/** Struct */
export interface MtTypeIdCustom extends Struct {
  /** MtLookupTextId */
  readonly name: MtLookupTextId;
  /** Vec<MtLookupTextId> */
  readonly namespace: Vec<MtLookupTextId>;
  /** Vec<MtLookupTypeId> */
  readonly params: Vec<MtLookupTypeId>;
}

/** Struct */
export interface MtTypeIdDef extends Struct {
  /** MtTypeId */
  readonly id: MtTypeId;
  /** MtTypeDef */
  readonly def: MtTypeDef;
}

/** Enum */
export interface MtTypeIdPrimitive extends Enum {
  /** 0:: Bool */
  readonly isBool: boolean;
  /** 1:: Char */
  readonly isChar: boolean;
  /** 2:: Str */
  readonly isStr: boolean;
  /** 3:: U8 */
  readonly isU8: boolean;
  /** 4:: U16 */
  readonly isU16: boolean;
  /** 5:: U32 */
  readonly isU32: boolean;
  /** 6:: U64 */
  readonly isU64: boolean;
  /** 7:: U128 */
  readonly isU128: boolean;
  /** 8:: I8 */
  readonly isI8: boolean;
  /** 9:: I16 */
  readonly isI16: boolean;
  /** 10:: I32 */
  readonly isI32: boolean;
  /** 11:: I64 */
  readonly isI64: boolean;
  /** 12:: I128 */
  readonly isI128: boolean;
}

/** Struct */
export interface MtTypeIdSlice extends Struct {
  /** MtLookupTypeId */
  readonly type: MtLookupTypeId;
}

/** Vec<MtTypeId> */
export interface MtTypeIdTuple extends Vec<MtTypeId> {}
