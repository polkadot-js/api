// Auto-generated via `yarn build:interfaces`, do not edit

import { Compact, Option, Vec } from './codec';
import { AccountId, AccountIndex, Address, Bool, Bytes, ConsensusEngineId, Data, Event, Extrinsic, ExtrinsicEra, Fixed64, GenericBlock, GenericConsensusEngineId, GenericDigest, GenericDigestItem, GenericHeader, H160, H256, H512, I128, I16, I256, I32, I64, I8, ImmortalEra, Method, Moment, MortalEra, Null, Origin, SignaturePayload, StorageHasher, StorageKey, Text, Type, U128, U16, U256, U32, U64, U8, Vote, bool, i128, i16, i256, i32, i64, i8, u128, u16, u256, u32, u64, u8, usize } from './primitive';

export interface InterfaceRegistry {
  AccountId: AccountId;
  'Option<AccountId>': Option<AccountId>;
  'Vec<AccountId>': Vec<AccountId>;
  AccountIndex: AccountIndex;
  'Compact<AccountIndex>': Compact<AccountIndex>;
  'Option<AccountIndex>': Option<AccountIndex>;
  'Vec<AccountIndex>': Vec<AccountIndex>;
  Address: Address;
  'Option<Address>': Option<Address>;
  'Vec<Address>': Vec<Address>;
  Event: Event;
  'Option<Event>': Option<Event>;
  'Vec<Event>': Vec<Event>;
  Bool: Bool;
  'Option<Bool>': Option<Bool>;
  'Vec<Bool>': Vec<Bool>;
  bool: bool;
  'Option<bool>': Option<bool>;
  'Vec<bool>': Vec<bool>;
  Bytes: Bytes;
  'Option<Bytes>': Option<Bytes>;
  'Vec<Bytes>': Vec<Bytes>;
  ConsensusEngineId: ConsensusEngineId;
  'Compact<ConsensusEngineId>': Compact<ConsensusEngineId>;
  'Option<ConsensusEngineId>': Option<ConsensusEngineId>;
  'Vec<ConsensusEngineId>': Vec<ConsensusEngineId>;
  Data: Data;
  'Option<Data>': Option<Data>;
  'Vec<Data>': Vec<Data>;
  H160: H160;
  'Option<H160>': Option<H160>;
  'Vec<H160>': Vec<H160>;
  H256: H256;
  'Option<H256>': Option<H256>;
  'Vec<H256>': Vec<H256>;
  H512: H512;
  'Option<H512>': Option<H512>;
  'Vec<H512>': Vec<H512>;
  i8: i8;
  'Option<i8>': Option<i8>;
  'Vec<i8>': Vec<i8>;
  I8: I8;
  'Option<I8>': Option<I8>;
  'Vec<I8>': Vec<I8>;
  i16: i16;
  'Option<i16>': Option<i16>;
  'Vec<i16>': Vec<i16>;
  I16: I16;
  'Option<I16>': Option<I16>;
  'Vec<I16>': Vec<I16>;
  i32: i32;
  'Option<i32>': Option<i32>;
  'Vec<i32>': Vec<i32>;
  I32: I32;
  'Option<I32>': Option<I32>;
  'Vec<I32>': Vec<I32>;
  i64: i64;
  'Option<i64>': Option<i64>;
  'Vec<i64>': Vec<i64>;
  I64: I64;
  'Option<I64>': Option<I64>;
  'Vec<I64>': Vec<I64>;
  Fixed64: Fixed64;
  'Option<Fixed64>': Option<Fixed64>;
  'Vec<Fixed64>': Vec<Fixed64>;
  i128: i128;
  'Option<i128>': Option<i128>;
  'Vec<i128>': Vec<i128>;
  I128: I128;
  'Option<I128>': Option<I128>;
  'Vec<I128>': Vec<I128>;
  i256: i256;
  'Option<i256>': Option<i256>;
  'Vec<i256>': Vec<i256>;
  I256: I256;
  'Option<I256>': Option<I256>;
  'Vec<I256>': Vec<I256>;
  Method: Method;
  'Option<Method>': Option<Method>;
  'Vec<Method>': Vec<Method>;
  Moment: Moment;
  'Option<Moment>': Option<Moment>;
  'Vec<Moment>': Vec<Moment>;
  Null: Null;
  'Option<Null>': Option<Null>;
  'Vec<Null>': Vec<Null>;
  Origin: Origin;
  'Option<Origin>': Option<Origin>;
  'Vec<Origin>': Vec<Origin>;
  StorageHasher: StorageHasher;
  'Option<StorageHasher>': Option<StorageHasher>;
  'Vec<StorageHasher>': Vec<StorageHasher>;
  StorageKey: StorageKey;
  'Option<StorageKey>': Option<StorageKey>;
  'Vec<StorageKey>': Vec<StorageKey>;
  Text: Text;
  'Option<Text>': Option<Text>;
  'Vec<Text>': Vec<Text>;
  Type: Type;
  'Option<Type>': Option<Type>;
  'Vec<Type>': Vec<Type>;
  u8: u8;
  'Compact<u8>': Compact<u8>;
  'Option<u8>': Option<u8>;
  'Vec<u8>': Vec<u8>;
  U8: U8;
  'Compact<U8>': Compact<U8>;
  'Option<U8>': Option<U8>;
  'Vec<U8>': Vec<U8>;
  u16: u16;
  'Compact<u16>': Compact<u16>;
  'Option<u16>': Option<u16>;
  'Vec<u16>': Vec<u16>;
  U16: U16;
  'Compact<U16>': Compact<U16>;
  'Option<U16>': Option<U16>;
  'Vec<U16>': Vec<U16>;
  u32: u32;
  'Compact<u32>': Compact<u32>;
  'Option<u32>': Option<u32>;
  'Vec<u32>': Vec<u32>;
  U32: U32;
  'Compact<U32>': Compact<U32>;
  'Option<U32>': Option<U32>;
  'Vec<U32>': Vec<U32>;
  u64: u64;
  'Compact<u64>': Compact<u64>;
  'Option<u64>': Option<u64>;
  'Vec<u64>': Vec<u64>;
  U64: U64;
  'Compact<U64>': Compact<U64>;
  'Option<U64>': Option<U64>;
  'Vec<U64>': Vec<U64>;
  u128: u128;
  'Compact<u128>': Compact<u128>;
  'Option<u128>': Option<u128>;
  'Vec<u128>': Vec<u128>;
  U128: U128;
  'Compact<U128>': Compact<U128>;
  'Option<U128>': Option<U128>;
  'Vec<U128>': Vec<U128>;
  u256: u256;
  'Compact<u256>': Compact<u256>;
  'Option<u256>': Option<u256>;
  'Vec<u256>': Vec<u256>;
  U256: U256;
  'Compact<U256>': Compact<U256>;
  'Option<U256>': Option<U256>;
  'Vec<U256>': Vec<U256>;
  usize: usize;
  'Compact<usize>': Compact<usize>;
  'Option<usize>': Option<usize>;
  'Vec<usize>': Vec<usize>;
  Vote: Vote;
  'Option<Vote>': Option<Vote>;
  'Vec<Vote>': Vec<Vote>;
  Extrinsic: Extrinsic;
  'Option<Extrinsic>': Option<Extrinsic>;
  'Vec<Extrinsic>': Vec<Extrinsic>;
  ExtrinsicEra: ExtrinsicEra;
  'Option<ExtrinsicEra>': Option<ExtrinsicEra>;
  'Vec<ExtrinsicEra>': Vec<ExtrinsicEra>;
  MortalEra: MortalEra;
  'Option<MortalEra>': Option<MortalEra>;
  'Vec<MortalEra>': Vec<MortalEra>;
  ImmortalEra: ImmortalEra;
  'Option<ImmortalEra>': Option<ImmortalEra>;
  'Vec<ImmortalEra>': Vec<ImmortalEra>;
  SignaturePayload: SignaturePayload;
  'Option<SignaturePayload>': Option<SignaturePayload>;
  'Vec<SignaturePayload>': Vec<SignaturePayload>;
  GenericBlock: GenericBlock;
  'Option<GenericBlock>': Option<GenericBlock>;
  'Vec<GenericBlock>': Vec<GenericBlock>;
  GenericConsensusEngineId: GenericConsensusEngineId;
  'Compact<GenericConsensusEngineId>': Compact<GenericConsensusEngineId>;
  'Option<GenericConsensusEngineId>': Option<GenericConsensusEngineId>;
  'Vec<GenericConsensusEngineId>': Vec<GenericConsensusEngineId>;
  GenericDigest: GenericDigest;
  'Option<GenericDigest>': Option<GenericDigest>;
  'Vec<GenericDigest>': Vec<GenericDigest>;
  GenericDigestItem: GenericDigestItem;
  'Option<GenericDigestItem>': Option<GenericDigestItem>;
  'Vec<GenericDigestItem>': Vec<GenericDigestItem>;
  GenericHeader: GenericHeader;
  'Option<GenericHeader>': Option<GenericHeader>;
  'Vec<GenericHeader>': Vec<GenericHeader>;
}
