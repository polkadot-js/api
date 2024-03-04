// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

// As per frontier

import type { DefinitionsTypes } from '../../types/index.js';

import { rpc } from './rpc.js';
import { runtime } from './runtime.js';

const V0: DefinitionsTypes = {
  BlockV0: {
    header: 'EthHeader',
    transactions: 'Vec<TransactionV0>',
    ommers: 'Vec<EthHeader>'
  },
  LegacyTransaction: {
    nonce: 'U256',
    gasPrice: 'U256',
    gasLimit: 'U256',
    action: 'EthTransactionAction',
    value: 'U256',
    input: 'Bytes',
    signature: 'EthTransactionSignature'
  },
  TransactionV0: 'LegacyTransaction'
};

const V1: DefinitionsTypes = {
  BlockV1: {
    header: 'EthHeader',
    transactions: 'Vec<TransactionV1>',
    ommers: 'Vec<EthHeader>'
  },
  EIP2930Transaction: {
    chainId: 'u64',
    nonce: 'U256',
    gasPrice: 'U256',
    gasLimit: 'U256',
    action: 'EthTransactionAction',
    value: 'U256',
    input: 'Bytes',
    accessList: 'EthAccessList',
    oddYParity: 'bool',
    r: 'H256',
    s: 'H256'
  },
  TransactionV1: {
    _enum: {
      Legacy: 'LegacyTransaction',
      EIP2930: 'EIP2930Transaction'
    }
  }
};

const V2: DefinitionsTypes = {
  BlockV2: {
    header: 'EthHeader',
    transactions: 'Vec<TransactionV2>',
    ommers: 'Vec<EthHeader>'
  },
  EIP1559Transaction: {
    chainId: 'u64',
    nonce: 'U256',
    maxPriorityFeePerGas: 'U256',
    maxFeePerGas: 'U256',
    gasLimit: 'U256',
    action: 'EthTransactionAction',
    value: 'U256',
    input: 'Bytes',
    accessList: 'EthAccessList',
    oddYParity: 'bool',
    r: 'H256',
    s: 'H256'
  },
  TransactionV2: {
    _enum: {
      Legacy: 'LegacyTransaction',
      EIP2930: 'EIP2930Transaction',
      EIP1559: 'EIP1559Transaction'
    }
  }
};

const types: DefinitionsTypes = {
  ...V0,
  ...V1,
  ...V2,
  EthereumAccountId: 'GenericEthereumAccountId',
  EthereumAddress: 'GenericEthereumAccountId',
  EthereumLookupSource: 'GenericEthereumLookupSource',
  EthereumSignature: '[u8; 65]',
  EthAccessListItem: {
    address: 'EthAddress',
    slots: 'Vec<H256>'
  },
  EthAccessList: 'Vec<EthAccessListItem>',
  EthAccount: {
    address: 'EthAddress',
    balance: 'U256',
    nonce: 'U256',
    codeHash: 'H256',
    storageHash: 'H256',
    accountProof: 'Vec<Bytes>',
    storageProof: 'Vec<EthStorageProof>'
  },
  EthAddress: 'H160',
  EthBlock: {
    header: 'EthHeader',
    transactions: 'Vec<EthTransaction>',
    ommers: 'Vec<EthHeader>'
  },
  EthHeader: {
    parentHash: 'H256',
    ommersHash: 'H256',
    beneficiary: 'EthAddress',
    stateRoot: 'H256',
    transactionsRoot: 'H256',
    receiptsRoot: 'H256',
    logsBloom: 'EthBloom',
    difficulty: 'U256',
    number: 'U256',
    gasLimit: 'U256',
    gasUsed: 'U256',
    timestamp: 'u64',
    extraData: 'Bytes',
    mixMash: 'H256',
    nonce: 'H64'
  },
  EthRichBlock: {
    _alias: {
      blockHash: 'hash',
      blockSize: 'size'
    },
    blockHash: 'Option<H256>',
    parentHash: 'H256',
    sha3Uncles: 'H256',
    author: 'EthAddress',
    miner: 'EthAddress',
    stateRoot: 'H256',
    transactionsRoot: 'H256',
    receiptsRoot: 'H256',
    number: 'Option<U256>',
    gasUsed: 'U256',
    gasLimit: 'U256',
    extraData: 'Bytes',
    logsBloom: 'EthBloom',
    timestamp: 'U256',
    difficulty: 'U256',
    totalDifficulty: 'Option<U256>',
    sealFields: 'Vec<Bytes>',
    uncles: 'Vec<H256>',
    transactions: 'Vec<EthTransaction>',
    blockSize: 'Option<U256>'
  },
  EthBloom: 'H2048',
  EthCallRequest: {
    from: 'Option<EthAddress>',
    to: 'Option<EthAddress>',
    gasPrice: 'Option<U256>',
    gas: 'Option<U256>',
    value: 'Option<U256>',
    data: 'Option<Bytes>',
    nonce: 'Option<U256>'
  },
  EthFeeHistory: {
    oldestBlock: 'U256',
    baseFeePerGas: 'Vec<U256>',
    gasUsedRatio: 'Vec<f64>',
    reward: 'Option<Vec<Vec<U256>>>'
  },
  EthFilter: {
    fromBlock: 'Option<BlockNumber>',
    toBlock: 'Option<BlockNumber>',
    blockHash: 'Option<H256>',
    address: 'Option<EthFilterAddress>',
    topics: 'Option<EthFilterTopic>'
  },
  EthFilterAddress: {
    _enum: {
      Single: 'EthAddress',
      Multiple: 'Vec<EthAddress>',
      Null: 'Null'
    }
  },
  EthFilterChanges: {
    _enum: {
      Logs: 'Vec<EthLog>',
      Hashes: 'Vec<H256>',
      Empty: 'Null'
    }
  },
  EthFilterTopic: {
    _enum: {
      Single: 'EthFilterTopicInner',
      Multiple: 'Vec<EthFilterTopicInner>',
      Null: 'Null'
    }
  },
  EthFilterTopicEntry: 'Option<H256>',
  EthFilterTopicInner: {
    _enum: {
      Single: 'EthFilterTopicEntry',
      Multiple: 'Vec<EthFilterTopicEntry>',
      Null: 'Null'
    }
  },
  EthRichHeader: {
    _alias: {
      blockHash: 'hash',
      blockSize: 'size'
    },
    blockHash: 'Option<H256>',
    parentHash: 'H256',
    sha3Uncles: 'H256',
    author: 'EthAddress',
    miner: 'EthAddress',
    stateRoot: 'H256',
    transactionsRoot: 'H256',
    receiptsRoot: 'H256',
    number: 'Option<U256>',
    gasUsed: 'U256',
    gasLimit: 'U256',
    extraData: 'Bytes',
    logsBloom: 'EthBloom',
    timestamp: 'U256',
    difficulty: 'U256',
    sealFields: 'Vec<Bytes>',
    blockSize: 'Option<U256>'
  },
  EthLog: {
    address: 'EthAddress',
    topics: 'Vec<H256>',
    data: 'Bytes',
    blockHash: 'Option<H256>',
    blockNumber: 'Option<U256>',
    transactionHash: 'Option<H256>',
    transactionIndex: 'Option<U256>',
    logIndex: 'Option<U256>',
    transactionLogIndex: 'Option<U256>',
    removed: 'bool'
  },
  EthReceipt: {
    transactionHash: 'Option<H256>',
    transactionIndex: 'Option<U256>',
    blockHash: 'Option<H256>',
    from: 'Option<EthAddress>',
    to: 'Option<EthAddress>',
    blockNumber: 'Option<U256>',
    cumulativeGasUsed: 'U256',
    gasUsed: 'Option<U256>',
    contractAddress: 'Option<EthAddress>',
    logs: 'Vec<EthLog>',
    root: 'Option<H256>',
    logsBloom: 'EthBloom',
    statusCode: 'Option<U64>'
  },
  // not convinced, however the original commit matches, so... (maybe V3 is incorrect?)
  EthReceiptV0: 'EthReceipt',
  EthReceiptV3: 'EthReceipt',
  EthStorageProof: {
    key: 'U256',
    value: 'U256',
    proof: 'Vec<Bytes>'
  },
  EthSubKind: {
    _enum: ['newHeads', 'logs', 'newPendingTransactions', 'syncing']
  },
  EthSubParams: {
    _enum: {
      None: 'Null',
      Logs: 'EthFilter'
    }
  },
  EthSubResult: {
    _enum: {
      Header: 'EthRichHeader',
      Log: 'EthLog',
      TransactionHash: 'H256',
      SyncState: 'EthSyncStatus'
    }
  },
  EthSyncInfo: {
    startingBlock: 'U256',
    currentBlock: 'U256',
    highestBlock: 'U256',
    warpChunksAmount: 'Option<U256>',
    warpChunksProcessed: 'Option<U256>'
  },
  EthSyncStatus: {
    _enum: {
      Info: 'EthSyncInfo',
      None: 'Null'
    }
  },
  EthTransaction: {
    hash: 'H256',
    nonce: 'U256',
    blockHash: 'Option<H256>',
    blockNumber: 'Option<U256>',
    transactionIndex: 'Option<U256>',
    from: 'H160',
    to: 'Option<H160>',
    value: 'U256',
    gasPrice: 'Option<U256>',
    maxFeePerGas: 'Option<U256>',
    maxPriorityFeePerGas: 'Option<U256>',
    gas: 'U256',
    input: 'Bytes',
    creates: 'Option<H160>',
    raw: 'Bytes',
    publicKey: 'Option<H512>',
    chainId: 'Option<U64>',
    standardV: 'U256',
    v: 'U256',
    r: 'U256',
    s: 'U256',
    accessList: 'Option<Vec<EthAccessListItem>>',
    transactionType: 'Option<U256>'
  },
  EthTransactionSignature: {
    v: 'u64',
    r: 'H256',
    s: 'H256'
  },
  EthTransactionAction: {
    _enum: {
      Call: 'H160',
      Create: 'Null'
    }
  },
  EthTransactionCondition: {
    _enum: {
      block: 'u64',
      time: 'u64'
    }
  },
  EthTransactionRequest: {
    from: 'Option<EthAddress>',
    to: 'Option<EthAddress>',
    gasPrice: 'Option<U256>',
    gas: 'Option<U256>',
    value: 'Option<U256>',
    data: 'Option<Bytes>',
    nonce: 'Option<U256>'
  },
  EthTransactionStatus: {
    transactionHash: 'H256',
    transactionIndex: 'u32',
    from: 'EthAddress',
    to: 'Option<EthAddress>',
    contractAddress: 'Option<EthAddress>',
    logs: 'Vec<EthLog>',
    logsBloom: 'EthBloom'
  },
  EthWork: {
    powHash: 'H256',
    seedHash: 'H256',
    target: 'H256',
    number: 'Option<u64>'
  }
};

export default { rpc, runtime, types };
