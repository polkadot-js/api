// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// As per frontier

import type { DefinitionsRpc } from '../../types';

// We use aliasSection here to override since these are in another namespace
const netRpc: DefinitionsRpc = {
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
const web3Rpc: DefinitionsRpc = {
  clientVersion: {
    aliasSection: 'web3',
    description: 'Returns current client version.',
    params: [],
    type: 'String'
  },
  sha3: {
    aliasSection: 'web3',
    description: 'Returns sha3 of the given data',
    params: [{ name: 'data', type: 'Bytes' }],
    type: 'H256'
  }
};

export const rpc: DefinitionsRpc = {
  ...netRpc,
  ...web3Rpc,
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
  getFilterChanges: {
    description: 'Returns filter changes since last poll.',
    params: [
      { name: 'index', type: 'U256' }
    ],
    type: 'EthFilterChanges'
  },
  getFilterLogs: {
    description: 'Returns all logs matching given filter (in a range \'from\' - \'to\').',
    params: [
      { name: 'index', type: 'U256' }
    ],
    type: 'Vec<EthLog>'
  },
  getLogs: {
    description: 'Returns logs matching given filter object.',
    params: [
      { name: 'filter', type: 'EthFilter' }
    ],
    type: 'Vec<EthLog>'
  },
  getProof: {
    description: 'Returns proof for account and storage.',
    params: [
      { name: 'address', type: 'H160' },
      { name: 'storageKeys', type: 'Vec<H256>' },
      { name: 'number', type: 'BlockNumber' }
    ],
    type: 'EthAccount'
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
      { name: 'number', type: 'BlockNumber' },
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
      { name: 'number', type: 'BlockNumber' },
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
  newBlockFilter: {
    description: 'Returns id of new block filter.',
    params: [],
    type: 'U256'
  },
  newFilter: {
    description: 'Returns id of new filter.',
    params: [
      { name: 'filter', type: 'EthFilter' }
    ],
    type: 'U256'
  },
  newPendingTransactionFilter: {
    description: 'Returns id of new block filter.',
    params: [],
    type: 'U256'
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
  sendTransaction: {
    description: 'Sends transaction; will block waiting for signer to return the transaction hash',
    params: [
      { name: 'tx', type: 'EthTransactionRequest' }
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
  uninstallFilter: {
    description: 'Uninstalls filter.',
    params: [
      { name: 'index', type: 'U256' }
    ],
    type: 'bool'
  }
};
