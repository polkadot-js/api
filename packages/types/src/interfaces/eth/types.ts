// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { GenericEthereumAccountId, GenericEthereumLookupSource } from '@polkadot/types';
import type { Bytes, Enum, Option, Struct, U256, U64, U8aFixed, Vec, bool, f64, u32, u64 } from '@polkadot/types-codec';
import type { BlockNumber, H160, H2048, H256, H512, H64 } from '@polkadot/types/interfaces/runtime';

/** @name BlockV0 */
export interface BlockV0 extends Struct {
  readonly header: EthHeader;
  readonly transactions: Vec<TransactionV0>;
  readonly ommers: Vec<EthHeader>;
}

/** @name BlockV1 */
export interface BlockV1 extends Struct {
  readonly header: EthHeader;
  readonly transactions: Vec<TransactionV1>;
  readonly ommers: Vec<EthHeader>;
}

/** @name BlockV2 */
export interface BlockV2 extends Struct {
  readonly header: EthHeader;
  readonly transactions: Vec<TransactionV2>;
  readonly ommers: Vec<EthHeader>;
}

/** @name EIP1559Transaction */
export interface EIP1559Transaction extends Struct {
  readonly chainId: u64;
  readonly nonce: U256;
  readonly maxPriorityFeePerGas: U256;
  readonly maxFeePerGas: U256;
  readonly gasLimit: U256;
  readonly action: EthTransactionAction;
  readonly value: U256;
  readonly input: Bytes;
  readonly accessList: EthAccessList;
  readonly oddYParity: bool;
  readonly r: H256;
  readonly s: H256;
}

/** @name EIP2930Transaction */
export interface EIP2930Transaction extends Struct {
  readonly chainId: u64;
  readonly nonce: U256;
  readonly gasPrice: U256;
  readonly gasLimit: U256;
  readonly action: EthTransactionAction;
  readonly value: U256;
  readonly input: Bytes;
  readonly accessList: EthAccessList;
  readonly oddYParity: bool;
  readonly r: H256;
  readonly s: H256;
}

/** @name EthAccessList */
export interface EthAccessList extends Vec<EthAccessListItem> {}

/** @name EthAccessListItem */
export interface EthAccessListItem extends Struct {
  readonly address: EthAddress;
  readonly slots: Vec<H256>;
}

/** @name EthAccount */
export interface EthAccount extends Struct {
  readonly address: EthAddress;
  readonly balance: U256;
  readonly nonce: U256;
  readonly codeHash: H256;
  readonly storageHash: H256;
  readonly accountProof: Vec<Bytes>;
  readonly storageProof: Vec<EthStorageProof>;
}

/** @name EthAddress */
export interface EthAddress extends H160 {}

/** @name EthBlock */
export interface EthBlock extends Struct {
  readonly header: EthHeader;
  readonly transactions: Vec<EthTransaction>;
  readonly ommers: Vec<EthHeader>;
}

/** @name EthBloom */
export interface EthBloom extends H2048 {}

/** @name EthCallRequest */
export interface EthCallRequest extends Struct {
  readonly from: Option<EthAddress>;
  readonly to: Option<EthAddress>;
  readonly gasPrice: Option<U256>;
  readonly gas: Option<U256>;
  readonly value: Option<U256>;
  readonly data: Option<Bytes>;
  readonly nonce: Option<U256>;
}

/** @name EthereumAccountId */
export interface EthereumAccountId extends GenericEthereumAccountId {}

/** @name EthereumAddress */
export interface EthereumAddress extends GenericEthereumAccountId {}

/** @name EthereumLookupSource */
export interface EthereumLookupSource extends GenericEthereumLookupSource {}

/** @name EthereumSignature */
export interface EthereumSignature extends U8aFixed {}

/** @name EthFeeHistory */
export interface EthFeeHistory extends Struct {
  readonly oldestBlock: U256;
  readonly baseFeePerGas: Vec<U256>;
  readonly gasUsedRatio: Vec<f64>;
  readonly reward: Option<Vec<Vec<U256>>>;
}

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
  readonly asSingle: EthAddress;
  readonly isMultiple: boolean;
  readonly asMultiple: Vec<EthAddress>;
  readonly isNull: boolean;
  readonly type: 'Single' | 'Multiple' | 'Null';
}

/** @name EthFilterChanges */
export interface EthFilterChanges extends Enum {
  readonly isLogs: boolean;
  readonly asLogs: Vec<EthLog>;
  readonly isHashes: boolean;
  readonly asHashes: Vec<H256>;
  readonly isEmpty: boolean;
  readonly type: 'Logs' | 'Hashes' | 'Empty';
}

/** @name EthFilterTopic */
export interface EthFilterTopic extends Enum {
  readonly isSingle: boolean;
  readonly asSingle: EthFilterTopicInner;
  readonly isMultiple: boolean;
  readonly asMultiple: Vec<EthFilterTopicInner>;
  readonly isNull: boolean;
  readonly type: 'Single' | 'Multiple' | 'Null';
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
  readonly type: 'Single' | 'Multiple' | 'Null';
}

/** @name EthHeader */
export interface EthHeader extends Struct {
  readonly parentHash: H256;
  readonly ommersHash: H256;
  readonly beneficiary: EthAddress;
  readonly stateRoot: H256;
  readonly transactionsRoot: H256;
  readonly receiptsRoot: H256;
  readonly logsBloom: EthBloom;
  readonly difficulty: U256;
  readonly number: U256;
  readonly gasLimit: U256;
  readonly gasUsed: U256;
  readonly timestamp: u64;
  readonly extraData: Bytes;
  readonly mixMash: H256;
  readonly nonce: H64;
}

/** @name EthLog */
export interface EthLog extends Struct {
  readonly address: EthAddress;
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

/** @name EthReceipt */
export interface EthReceipt extends Struct {
  readonly transactionHash: Option<H256>;
  readonly transactionIndex: Option<U256>;
  readonly blockHash: Option<H256>;
  readonly from: Option<EthAddress>;
  readonly to: Option<EthAddress>;
  readonly blockNumber: Option<U256>;
  readonly cumulativeGasUsed: U256;
  readonly gasUsed: Option<U256>;
  readonly contractAddress: Option<EthAddress>;
  readonly logs: Vec<EthLog>;
  readonly root: Option<H256>;
  readonly logsBloom: EthBloom;
  readonly statusCode: Option<U64>;
}

/** @name EthReceiptV0 */
export interface EthReceiptV0 extends EthReceipt {}

/** @name EthReceiptV3 */
export interface EthReceiptV3 extends EthReceipt {}

/** @name EthRichBlock */
export interface EthRichBlock extends Struct {
  readonly blockHash: Option<H256>;
  readonly parentHash: H256;
  readonly sha3Uncles: H256;
  readonly author: EthAddress;
  readonly miner: EthAddress;
  readonly stateRoot: H256;
  readonly transactionsRoot: H256;
  readonly receiptsRoot: H256;
  readonly number: Option<U256>;
  readonly gasUsed: U256;
  readonly gasLimit: U256;
  readonly extraData: Bytes;
  readonly logsBloom: EthBloom;
  readonly timestamp: U256;
  readonly difficulty: U256;
  readonly totalDifficulty: Option<U256>;
  readonly sealFields: Vec<Bytes>;
  readonly uncles: Vec<H256>;
  readonly transactions: Vec<EthTransaction>;
  readonly blockSize: Option<U256>;
}

/** @name EthRichHeader */
export interface EthRichHeader extends Struct {
  readonly blockHash: Option<H256>;
  readonly parentHash: H256;
  readonly sha3Uncles: H256;
  readonly author: EthAddress;
  readonly miner: EthAddress;
  readonly stateRoot: H256;
  readonly transactionsRoot: H256;
  readonly receiptsRoot: H256;
  readonly number: Option<U256>;
  readonly gasUsed: U256;
  readonly gasLimit: U256;
  readonly extraData: Bytes;
  readonly logsBloom: EthBloom;
  readonly timestamp: U256;
  readonly difficulty: U256;
  readonly sealFields: Vec<Bytes>;
  readonly blockSize: Option<U256>;
}

/** @name EthStorageProof */
export interface EthStorageProof extends Struct {
  readonly key: U256;
  readonly value: U256;
  readonly proof: Vec<Bytes>;
}

/** @name EthSubKind */
export interface EthSubKind extends Enum {
  readonly isNewHeads: boolean;
  readonly isLogs: boolean;
  readonly isNewPendingTransactions: boolean;
  readonly isSyncing: boolean;
  readonly type: 'NewHeads' | 'Logs' | 'NewPendingTransactions' | 'Syncing';
}

/** @name EthSubParams */
export interface EthSubParams extends Enum {
  readonly isNone: boolean;
  readonly isLogs: boolean;
  readonly asLogs: EthFilter;
  readonly type: 'None' | 'Logs';
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
  readonly type: 'Header' | 'Log' | 'TransactionHash' | 'SyncState';
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
  readonly type: 'Info' | 'None';
}

/** @name EthTransaction */
export interface EthTransaction extends Struct {
  readonly hash: H256;
  readonly nonce: U256;
  readonly blockHash: Option<H256>;
  readonly blockNumber: Option<U256>;
  readonly transactionIndex: Option<U256>;
  readonly from: H160;
  readonly to: Option<H160>;
  readonly value: U256;
  readonly gasPrice: Option<U256>;
  readonly maxFeePerGas: Option<U256>;
  readonly maxPriorityFeePerGas: Option<U256>;
  readonly gas: U256;
  readonly input: Bytes;
  readonly creates: Option<H160>;
  readonly raw: Bytes;
  readonly publicKey: Option<H512>;
  readonly chainId: Option<U64>;
  readonly standardV: U256;
  readonly v: U256;
  readonly r: U256;
  readonly s: U256;
  readonly accessList: Option<Vec<EthAccessListItem>>;
  readonly transactionType: Option<U256>;
}

/** @name EthTransactionAction */
export interface EthTransactionAction extends Enum {
  readonly isCall: boolean;
  readonly asCall: H160;
  readonly isCreate: boolean;
  readonly type: 'Call' | 'Create';
}

/** @name EthTransactionCondition */
export interface EthTransactionCondition extends Enum {
  readonly isBlock: boolean;
  readonly asBlock: u64;
  readonly isTime: boolean;
  readonly asTime: u64;
  readonly type: 'Block' | 'Time';
}

/** @name EthTransactionRequest */
export interface EthTransactionRequest extends Struct {
  readonly from: Option<EthAddress>;
  readonly to: Option<EthAddress>;
  readonly gasPrice: Option<U256>;
  readonly gas: Option<U256>;
  readonly value: Option<U256>;
  readonly data: Option<Bytes>;
  readonly nonce: Option<U256>;
}

/** @name EthTransactionSignature */
export interface EthTransactionSignature extends Struct {
  readonly v: u64;
  readonly r: H256;
  readonly s: H256;
}

/** @name EthTransactionStatus */
export interface EthTransactionStatus extends Struct {
  readonly transactionHash: H256;
  readonly transactionIndex: u32;
  readonly from: EthAddress;
  readonly to: Option<EthAddress>;
  readonly contractAddress: Option<EthAddress>;
  readonly logs: Vec<EthLog>;
  readonly logsBloom: EthBloom;
}

/** @name EthWork */
export interface EthWork extends Struct {
  readonly powHash: H256;
  readonly seedHash: H256;
  readonly target: H256;
  readonly number: Option<u64>;
}

/** @name LegacyTransaction */
export interface LegacyTransaction extends Struct {
  readonly nonce: U256;
  readonly gasPrice: U256;
  readonly gasLimit: U256;
  readonly action: EthTransactionAction;
  readonly value: U256;
  readonly input: Bytes;
  readonly signature: EthTransactionSignature;
}

/** @name TransactionV0 */
export interface TransactionV0 extends LegacyTransaction {}

/** @name TransactionV1 */
export interface TransactionV1 extends Enum {
  readonly isLegacy: boolean;
  readonly asLegacy: LegacyTransaction;
  readonly isEip2930: boolean;
  readonly asEip2930: EIP2930Transaction;
  readonly type: 'Legacy' | 'Eip2930';
}

/** @name TransactionV2 */
export interface TransactionV2 extends Enum {
  readonly isLegacy: boolean;
  readonly asLegacy: LegacyTransaction;
  readonly isEip2930: boolean;
  readonly asEip2930: EIP2930Transaction;
  readonly isEip1559: boolean;
  readonly asEip1559: EIP1559Transaction;
  readonly type: 'Legacy' | 'Eip2930' | 'Eip1559';
}

export type PHANTOM_ETH = 'eth';
