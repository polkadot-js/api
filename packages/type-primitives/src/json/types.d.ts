// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

export type JsonBnType = string;
export type JsonHash = string;

export type JsonBytes = string | Array<number>;
export type JsonH160 = JsonHash;
export type JsonH256 = JsonHash;
export type JsonH512 = JsonHash;
export type JsonHeaderHash = JsonH256;
export type JsonU64 = JsonBnType;
export type JsonU256 = JsonBnType;

export type JsonAccountId = JsonHash;
export type JsonAuthorityId = JsonHash;
export type JsonBlockNumber = JsonU64;
export type JsonObjectId = JsonU64;
export type JsonParaChainId = JsonU64;
export type JsonSignature = JsonHash;

export type JsonTransaction = {
  from: JsonAuthorityId,
  to: JsonAuthorityId,
  amount: JsonBnType,
  nonce: JsonBnType
}

export type JsonUnchecked = {
  tx: JsonTransaction,
  signature: JsonH512
}

export type JsonDigest = {
  logs: Array<JsonBytes>
};

export type JsonHeader = {
  parentHash: JsonHeaderHash,
  number: JsonBlockNumber,
  stateRoot: JsonHash,
  extrinsicsRoot: JsonHash,
  digest: JsonDigest
};

export type JsonBlock = {
  header: JsonHeader,
  timestamp: JsonU64,
  transactions: Array<JsonUnchecked>
};
