// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec } from '@polkadot/types/types';
import { Enum, Option, Struct, Vec } from '@polkadot/types/codec';
import { Text, bool, u16, u32, u64 } from '@polkadot/types/primitive';

/** Struct */
export interface InkConstructorSpec extends Struct {
  /** MtRegistryIndex */
  readonly name: MtRegistryIndex;
  /** InkSelector */
  readonly selector: InkSelector;
  /** Vec<InkMessageParamSpec> */
  readonly args: Vec<InkMessageParamSpec>;
  /** Vec<Text> */
  readonly docs: Vec<Text>;
}

/** Struct */
export interface InkContractSpec extends Struct {
  /** MtRegistryIndex */
  readonly name: MtRegistryIndex;
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
  /** MtRegistryIndex */
  readonly name: MtRegistryIndex;
  /** bool */
  readonly indexed: bool;
  /** InkTypeSpec */
  readonly type: InkTypeSpec;
  /** Vec<Text> */
  readonly docs: Vec<Text>;
}

/** Struct */
export interface InkEventSpec extends Struct {
  /** MtRegistryIndex */
  readonly name: MtRegistryIndex;
  /** Vec<InkEventParamSpec> */
  readonly args: Vec<InkEventParamSpec>;
  /** Vec<Text> */
  readonly docs: Vec<Text>;
}

/** Struct */
export interface InkLayoutField extends Struct {
  /** MtRegistryIndex */
  readonly name: MtRegistryIndex;
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
  /** MtRegistryIndex */
  readonly elemType: MtRegistryIndex;
}

/** Struct */
export interface InkLayoutStruct extends Struct {
  /** MtRegistryIndex */
  readonly type: MtRegistryIndex;
  /** Vec<InkLayoutField> */
  readonly fields: Vec<InkLayoutField>;
}

/** Struct */
export interface InkMessageParamSpec extends Struct {
  /** MtRegistryIndex */
  readonly name: MtRegistryIndex;
  /** InkTypeSpec */
  readonly type: InkTypeSpec;
}

/** Struct */
export interface InkMessageSpec extends Struct {
  /** MtRegistryIndex */
  readonly name: MtRegistryIndex;
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
  /** MtRegistryIndex */
  readonly ty: MtRegistryIndex;
  /** MtRegistryIndex */
  readonly displayName: MtRegistryIndex;
}

/** Struct */
export interface MtClikeEnumVariant extends Struct {
  /** MtRegistryIndex */
  readonly name: MtRegistryIndex;
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
  /** MtRegistryIndex */
  readonly name: MtRegistryIndex;
  /** Vec<MtNamedField> */
  readonly fields: Vec<MtNamedField>;
}

/** Struct */
export interface MtEnumVariantTupleStruct extends Struct {
  /** MtRegistryIndex */
  readonly name: MtRegistryIndex;
  /** Vec<MtRegistryIndex> */
  readonly types: Vec<MtRegistryIndex>;
}

/** Struct */
export interface MtEnumVariantUnit extends Struct {
  /** MtRegistryIndex */
  readonly name: MtRegistryIndex;
}

/** Struct */
export interface MtNamedField extends Struct {
  /** MtRegistryIndex */
  readonly name: MtRegistryIndex;
  /** MtRegistryIndex */
  readonly type: MtRegistryIndex;
}

/** Struct */
export interface MtRegistry extends Struct {
  /** Vec<Text> */
  readonly strings: Vec<Text>;
  /** Vec<MtTypeIdDef> */
  readonly types: Vec<MtTypeIdDef>;
}

/** u32 */
export interface MtRegistryIndex extends u32 {}

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
  /** Vec<MtRegistryIndex> */
  readonly types: Vec<MtRegistryIndex>;
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
  /** MtRegistryIndex */
  readonly type: MtRegistryIndex;
}

/** Struct */
export interface MtTypeIdCustom extends Struct {
  /** MtRegistryIndex */
  readonly name: MtRegistryIndex;
  /** Vec<MtRegistryIndex> */
  readonly namespace: Vec<MtRegistryIndex>;
  /** Vec<MtRegistryIndex> */
  readonly params: Vec<MtRegistryIndex>;
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
  /** MtRegistryIndex */
  readonly type: MtRegistryIndex;
}

/** Vec<MtTypeId> */
export interface MtTypeIdTuple extends Vec<MtTypeId> {}
