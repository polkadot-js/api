// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, GenericEthereumAccountId, GenericEthereumLookupSource, Option, Struct, U256, U64, Vec, bool, u64 } from '@polkadot/types';
import type { BlockNumber, H160, H2048, H256, H512 } from '@polkadot/types/interfaces/runtime';

/** @name EthAccountId */
export interface EthAccountId extends GenericEthereumAccountId {}

/** @name EthBlock */
export interface EthBlock extends Struct {
  readonly hash: Option<H256>;
  readonly parentHash: H256;
  readonly sha3Uncles: H256;
  readonly author: H160;
  readonly miner: H160;
  readonly stateRoot: H256;
  readonly transactionsRoot: H256;
  readonly receiptsRoot: H256;
  readonly number: Option<U256>;
  readonly gasUsed: U256;
  readonly gasLimit: U256;
  readonly extraData: Bytes;
  readonly logsBloom: H2048;
  readonly timestamp: U256;
  readonly difficulty: U256;
  readonly totalDifficulty: Option<U256>;
  readonly sealFields: Vec<Bytes>;
  readonly uncles: Vec<H256>;
  readonly transactions: EthBlockTransactions;
  readonly size: Option<U256>;
}

/** @name EthBlockTransactions */
export interface EthBlockTransactions extends Enum {
  readonly isHashes: boolean;
  readonly asHashes: Vec<H256>;
  readonly isFull: boolean;
  readonly asFull: Vec<EthTransaction>;
}

/** @name EthCallRequest */
export interface EthCallRequest extends Struct {
  readonly from: Option<H160>;
  readonly to: Option<H160>;
  readonly gasPrice: Option<U256>;
  readonly gas: Option<U256>;
  readonly value: Option<U256>;
  readonly data: Option<Bytes>;
  readonly nonce: Option<U256>;
}

/** @name EthereumAccountId */
export interface EthereumAccountId extends GenericEthereumAccountId {}

/** @name EthereumLookupSource */
export interface EthereumLookupSource extends GenericEthereumLookupSource {}

/** @name EthFilter */
export interface EthFilter extends Struct {
  readonly fromBlock: Option<BlockNumber>;
  readonly toBlock: Option<BlockNumber>;
  readonly blockHash: Option<H256>;
  readonly address: Option<EthFilterAddress>;
  readonly topics: Option<EthFilterTopic>;
}

/** @name EthFilterAddress */
export interface EthFilterAddress extends Enum {
  readonly isSingle: boolean;
  readonly asSingle: H160;
  readonly isMultiple: boolean;
  readonly asMultiple: Vec<H160>;
  readonly isNull: boolean;
}

/** @name EthFilterTopic */
export interface EthFilterTopic extends Enum {
  readonly isSingle: boolean;
  readonly asSingle: EthFilterTopicInner;
  readonly isMultiple: boolean;
  readonly asMultiple: Vec<EthFilterTopicInner>;
  readonly isNull: boolean;
}

/** @name EthFilterTopicEntry */
export interface EthFilterTopicEntry extends Option<H256> {}

/** @name EthFilterTopicInner */
export interface EthFilterTopicInner extends Enum {
  readonly isSingle: boolean;
  readonly asSingle: EthFilterTopicEntry;
  readonly isMultiple: boolean;
  readonly asMultiple: Vec<EthFilterTopicEntry>;
  readonly isNull: boolean;
}

/** @name EthHeader */
export interface EthHeader extends Struct {
  readonly hash: Option<H256>;
  readonly parentHash: H256;
  readonly sha3Uncles: H256;
  readonly author: H160;
  readonly miner: H160;
  readonly stateRoot: H256;
  readonly transactionsRoot: H256;
  readonly receiptsRoot: H256;
  readonly number: Option<U256>;
  readonly gasUsed: U256;
  readonly gasLimit: U256;
  readonly extraData: Bytes;
  readonly logsBloom: H2048;
  readonly timestamp: U256;
  readonly difficulty: U256;
  readonly sealFields: Vec<Bytes>;
  readonly size: Option<U256>;
}

/** @name EthLog */
export interface EthLog extends Struct {
  readonly address: H160;
  readonly topics: Vec<H256>;
  readonly data: Bytes;
  readonly blockHash: Option<H256>;
  readonly blockNumber: Option<U256>;
  readonly transactionHash: Option<H256>;
  readonly transactionIndex: Option<U256>;
  readonly logIndex: Option<U256>;
  readonly transactionLogIndex: Option<U256>;
  readonly removed: bool;
}

/** @name EthLookupSource */
export interface EthLookupSource extends GenericEthereumLookupSource {}

/** @name EthReceipt */
export interface EthReceipt extends Struct {
  readonly transactionHash: Option<H256>;
  readonly transactionIndex: Option<U256>;
  readonly blockHash: Option<H256>;
  readonly from: Option<H160>;
  readonly to: Option<H160>;
  readonly blockNumber: Option<U256>;
  readonly cumulativeGasUsed: U256;
  readonly gasUsed: Option<U256>;
  readonly contractAddress: Option<H160>;
  readonly logs: Vec<EthLog>;
  readonly root: Option<H256>;
  readonly logsBloom: H2048;
  readonly statusCode: Option<U64>;
}

/** @name EthRichBlock */
export interface EthRichBlock extends EthBlock {}

/** @name EthRichHeader */
export interface EthRichHeader extends EthHeader {}

/** @name EthSubKind */
export interface EthSubKind extends Enum {
  readonly isNewHeads: boolean;
  readonly isLogs: boolean;
  readonly isNewPendingTransactions: boolean;
  readonly isSyncing: boolean;
}

/** @name EthSubParams */
export interface EthSubParams extends Enum {
  readonly isNone: boolean;
  readonly isLogs: boolean;
  readonly asLogs: EthFilter;
}

/** @name EthSubResult */
export interface EthSubResult extends Enum {
  readonly isHeader: boolean;
  readonly asHeader: EthRichHeader;
  readonly isLog: boolean;
  readonly asLog: EthLog;
  readonly isTransactionHash: boolean;
  readonly asTransactionHash: H256;
  readonly isSyncState: boolean;
  readonly asSyncState: EthSyncStatus;
}

/** @name EthSyncInfo */
export interface EthSyncInfo extends Struct {
  readonly startingBlock: U256;
  readonly currentBlock: U256;
  readonly highestBlock: U256;
  readonly warpChunksAmount: Option<U256>;
  readonly warpChunksProcessed: Option<U256>;
}

/** @name EthSyncStatus */
export interface EthSyncStatus extends Enum {
  readonly isInfo: boolean;
  readonly asInfo: EthSyncInfo;
  readonly isNone: boolean;
}

/** @name EthTransaction */
export interface EthTransaction extends Struct {
  readonly blockHash: Option<H256>;
  readonly blockNumber: Option<U256>;
  readonly chainId: Option<u64>;
  readonly condition: Option<EthTransactionCondition>;
  readonly creates: Option<H160>;
  readonly from: H160;
  readonly gas: U256;
  readonly gasPrice: U256;
  readonly hash: H256;
  readonly input: Bytes;
  readonly nonce: U256;
  readonly publicKey: Option<H512>;
  readonly r: U256;
  readonly raw: Bytes;
  readonly s: U256;
  readonly standardV: U256;
  readonly to: Option<H160>;
  readonly transactionIndex: Option<U256>;
  readonly v: U256;
  readonly value: U256;
}

/** @name EthTransactionCondition */
export interface EthTransactionCondition extends Enum {
  readonly isBlock: boolean;
  readonly asBlock: u64;
  readonly isTime: boolean;
  readonly asTime: u64;
}

/** @name EthWork */
export interface EthWork extends Struct {
  readonly pow_hash: H256;
  readonly seed_hash: H256;
  readonly target: H256;
  readonly number: Option<u64>;
}

export type PHANTOM_ETH = 'eth';
