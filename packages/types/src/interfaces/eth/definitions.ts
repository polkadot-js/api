// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

// As per frontier

import type { DefinitionsRpc, DefinitionsTypes } from '../../types';

const rpc: DefinitionsRpc = {
  accounts: {
    description: 'Returns accounts list.',
    params: [],
    type: 'Vec<H160>'
  },
  blockNumber: {
    description: 'Returns balance of the given account.',
    params: [],
    type: 'U256'
  },
  call: {
    description: 'Call contract, returning the output data.',
    params: [
      { name: 'request', type: 'EthCallRequest' },
      { isOptional: true, name: 'number', type: 'BlockNumber' }
    ],
    type: 'Bytes'
  },
  chainId: {
    description: 'Returns the chain ID used for transaction signing at the current best block. None is returned if not available.',
    params: [],
    type: 'U64'
  },
  coinbase: {
    description: 'Returns block author.',
    params: [],
    type: 'H160'
  },
  estimateGas: {
    description: 'Estimate gas needed for execution of given contract.',
    params: [
      { name: 'request', type: 'EthCallRequest' },
      { isOptional: true, name: 'number', type: 'BlockNumber' }
    ],
    type: 'U256'
  },
  gasPrice: {
    description: 'Returns current gas price.',
    params: [],
    type: 'U256'
  },
  getBalance: {
    description: 'Returns balance of the given account.',
    params: [
      { name: 'address', type: 'H160' },
      { isOptional: true, name: 'number', type: 'BlockNumber' }
    ],
    type: 'U256'
  },
  getBlockByHash: {
    description: 'Returns block with given hash.',
    params: [
      { name: 'hash', type: 'H256' },
      { name: 'full', type: 'bool' }
    ],
    type: 'Option<EthRichBlock>'
  },
  getBlockByNumber: {
    description: 'Returns block with given number.',
    params: [
      { name: 'block', type: 'BlockNumber' },
      { name: 'full', type: 'bool' }
    ],
    type: 'Option<EthRichBlock>'
  },
  getBlockTransactionCountByHash: {
    description: 'Returns the number of transactions in a block with given hash.',
    params: [
      { name: 'hash', type: 'H256' }
    ],
    type: 'U256'
  },
  getBlockTransactionCountByNumber: {
    description: 'Returns the number of transactions in a block with given block number.',
    params: [
      { name: 'block', type: 'BlockNumber' }
    ],
    type: 'U256'
  },
  getCode: {
    description: 'Returns the code at given address at given time (block number).',
    params: [
      { name: 'address', type: 'H160' },
      { isOptional: true, name: 'number', type: 'BlockNumber' }
    ],
    type: 'Bytes'
  },
  getLogs: {
    description: 'Returns logs matching given filter object.',
    params: [
      { name: 'filter', type: 'Filter' }
    ],
    type: 'Vec<EthLog>'
  },
  getStorageAt: {
    description: 'Returns content of the storage at given address.',
    params: [
      { name: 'address', type: 'H160' },
      { name: 'index', type: 'U256' },
      { isOptional: true, name: 'number', type: 'BlockNumber' }
    ],
    type: 'H256'
  },
  getTransactionByBlockHashAndIndex: {
    description: 'Returns transaction at given block hash and index.',
    params: [
      { name: 'hash', type: 'H256' },
      { name: 'index', type: 'U256' }
    ],
    type: 'EthTransaction'
  },
  getTransactionByBlockNumberAndIndex: {
    description: 'Returns transaction by given block number and index.',
    params: [
      { isOptional: true, name: 'number', type: 'BlockNumber' },
      { name: 'index', type: 'U256' }
    ],
    type: 'EthTransaction'
  },
  getTransactionByHash: {
    description: 'Get transaction by its hash.',
    params: [
      { name: 'hash', type: 'H256' }
    ],
    type: 'EthTransaction'
  },
  getTransactionCount: {
    description: 'Returns the number of transactions sent from given address at given time (block number).',
    params: [
      { name: 'hash', type: 'H256' },
      { isOptional: true, name: 'number', type: 'BlockNumber' }
    ],
    type: 'U256'
  },
  getTransactionReceipt: {
    description: 'Returns transaction receipt by transaction hash.',
    params: [
      { name: 'hash', type: 'H256' }
    ],
    type: 'EthReceipt'
  },
  getUncleByBlockHashAndIndex: {
    description: 'Returns an uncles at given block and index.',
    params: [
      { name: 'hash', type: 'H256' },
      { name: 'index', type: 'U256' }
    ],
    type: 'EthRichBlock'
  },
  getUncleByBlockNumberAndIndex: {
    description: 'Returns an uncles at given block and index.',
    params: [
      { isOptional: true, name: 'number', type: 'BlockNumber' },
      { name: 'index', type: 'U256' }
    ],
    type: 'EthRichBlock'
  },
  getUncleCountByBlockHash: {
    description: 'Returns the number of uncles in a block with given hash.',
    params: [
      { name: 'hash', type: 'H256' }
    ],
    type: 'U256'
  },
  getUncleCountByBlockNumber: {
    description: 'Returns the number of uncles in a block with given block number.',
    params: [
      { name: 'number', type: 'BlockNumber' }
    ],
    type: 'U256'
  },
  getWork: {
    description: 'Returns the hash of the current block, the seedHash, and the boundary condition to be met.',
    params: [],
    type: 'EthWork'
  },
  hashrate: {
    description: 'Returns the number of hashes per second that the node is mining with.',
    params: [],
    type: 'U256'
  },
  mining: {
    description: 'Returns true if client is actively mining new blocks.',
    params: [],
    type: 'bool'
  },
  protocolVersion: {
    description: 'Returns protocol version encoded as a string (quotes are necessary).',
    params: [],
    type: 'u64'
  },
  sendRawTransaction: {
    description: 'Sends signed transaction, returning its hash.',
    params: [
      { name: 'bytes', type: 'Bytes' }
    ],
    type: 'H256'
  },
  submitHashrate: {
    description: 'Used for submitting mining hashrate.',
    params: [
      { name: 'index', type: 'U256' },
      { name: 'hash', type: 'H256' }
    ],
    type: 'bool'
  },
  submitWork: {
    description: 'Used for submitting a proof-of-work solution.',
    params: [
      { name: 'nonce', type: 'H64' },
      { name: 'headerHash', type: 'H256' },
      { name: 'mixDigest', type: 'H256' }
    ],
    type: 'bool'
  },
  subscribe: {
    description: 'Subscribe to Eth subscription.',
    params: [
      { name: 'kind', type: 'EthSubKind' },
      { isOptional: true, name: 'params', type: 'EthSubParams' }
    ],
    pubsub: [
      'subscription',
      'subscribe',
      'unsubscribe'
    ],
    type: 'Null'
  },
  syncing: {
    description: 'Returns an object with data about the sync status or false.',
    params: [],
    type: 'EthSyncStatus'
  },

  // for net_*
  listening: {
    aliasSection: 'net',
    description: 'Returns true if client is actively listening for network connections. Otherwise false.',
    params: [],
    type: 'bool'
  },
  peerCount: {
    aliasSection: 'net',
    description: 'Returns number of peers connected to node.',
    params: [],
    type: 'String'
  },
  version: {
    aliasSection: 'net',
    description: 'Returns protocol version.',
    params: [],
    type: 'String'
  }
};

const types: DefinitionsTypes = {
  EthereumAccountId: 'GenericEthereumAccountId',
  EthereumLookupSource: 'GenericEthereumLookupSource',
  EthAccountId: 'GenericEthereumAccountId',
  EthLookupSource: 'GenericEthereumLookupSource',
  EthCallRequest: {
    from: 'Option<H160>',
    to: 'Option<H160>',
    gasPrice: 'Option<U256>',
    gas: 'Option<U256>',
    value: 'Option<U256>',
    data: 'Option<Bytes>',
    nonce: 'Option<U256>'
  },
  EthHeader: {
    hash: 'Option<H256>',
    parentHash: 'H256',
    sha3Uncles: 'H256',
    author: 'H160',
    miner: 'H160',
    stateRoot: 'H256',
    transactionsRoot: 'H256',
    receiptsRoot: 'H256',
    number: 'Option<U256>',
    gasUsed: 'U256',
    gasLimit: 'U256',
    extraData: 'Bytes',
    logsBloom: 'H2048',
    timestamp: 'U256',
    difficulty: 'U256',
    sealFields: 'Vec<Bytes>',
    size: 'Option<U256>'
  },
  EthLog: {
    address: 'H160',
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
    from: 'Option<H160>',
    to: 'Option<H160>',
    blockNumber: 'Option<U256>',
    cumulativeGasUsed: 'U256',
    gasUsed: 'Option<U256>',
    contractAddress: 'Option<H160>',
    logs: 'Vec<EthLog>',
    root: 'Option<H256>',
    logsBloom: 'H2048',
    statusCode: 'Option<U64>'
  },
  EthRichBlock: 'EthBlock',
  EthRichHeader: 'EthHeader',
  EthSubKind: {
    _enum: ['newHeads', 'logs', 'newPendingTransactions', 'syncing']
  },
  EthSubParams: {
    _enum: {
      None: 'Null',
      Logs: 'Filter'
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
    blockHash: 'Option<H256>',
    blockNumber: 'Option<U256>',
    chainId: 'Option<u64>',
    condition: 'Option<EthTransactionCondition>',
    creates: 'Option<H160>',
    from: 'H160',
    gas: 'U256',
    gasPrice: 'U256',
    hash: 'H256',
    input: 'Bytes',
    nonce: 'U256',
    publicKey: 'Option<H512>',
    r: 'U256',
    raw: 'Bytes',
    s: 'U256',
    standardV: 'U256',
    to: 'Option<H160>',
    transactionIndex: 'Option<U256>',
    v: 'U256',
    value: 'U256'
  },
  EthTransactionCondition: {
    _enum: {
      block: 'u64',
      time: 'u64'
    }
  },
  EthWork: {
    pow_hash: 'H256',
    seed_hash: 'H256',
    target: 'H256',
    number: 'Option<u64>'
  }
};

export default { rpc, types };
