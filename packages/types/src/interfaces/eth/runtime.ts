// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types/index.js';

export const runtime: DefinitionsCall = {
  ConvertTransactionRuntimeApi: [
    {
      methods: {
        convert_transaction: {
          description: 'Converts an Ethereum-style transaction to Extrinsic',
          params: [
            {
              name: 'transaction',
              type: 'TransactionV2'
            }
          ],
          type: 'Extrinsic'
        }
      },
      version: 2
    }
  ],
  DebugRuntimeApi: [
    {
      methods: {
        trace_block: {
          description: 'Trace all block extrinsics',
          params: [
            {
              name: 'extrinsics',
              type: 'Vec<Extrinsic>'
            },
            {
              name: 'knownTransactions',
              type: 'Vec<H256>'
            }
          ],
          type: 'Result<(), DispatchError>'
        },
        trace_transaction: {
          description: 'Trace transaction extrinsics',
          params: [
            {
              name: 'extrinsics',
              type: 'Vec<Extrinsic>'
            },
            {
              name: 'transaction',
              type: 'EthTransaction'
            }
          ],
          type: 'Result<(), DispatchError>'
        }
      },
      version: 4
    }
  ],
  EthereumRuntimeRPCApi: [
    {
      methods: {
        account_basic: {
          description: 'Returns pallet_evm::Accounts by address.',
          params: [
            {
              name: 'address',
              type: 'H160'
            }
          ],
          type: 'EvmAccount'
        },
        account_code_at: {
          description: 'For a given account address, returns pallet_evm::AccountCodes.',
          params: [
            {
              name: 'address',
              type: 'H160'
            }
          ],
          type: 'Bytes'
        },
        author: {
          description: 'Returns the converted FindAuthor::find_author authority id.',
          params: [],
          type: 'H160'
        },
        call: {
          description: 'Returns a frame_ethereum::call response. If `estimate` is true,',
          params: [
            {
              name: 'from',
              type: 'H160'
            },
            {
              name: 'to',
              type: 'H160'
            },
            {
              name: 'data',
              type: 'Vec<u8>'
            },
            {
              name: 'value',
              type: 'U256'
            },
            {
              name: 'gasLimit',
              type: 'U256'
            },
            {
              name: 'maxFeePerGas',
              type: 'Option<U256>'
            },
            {
              name: 'maxPriorityFeePerGas',
              type: 'Option<U256>'
            },
            {
              name: 'nonce',
              type: 'Option<U256>'
            },
            {
              name: 'estimate',
              type: 'bool'
            },
            {
              name: 'accessList',
              type: 'Option<Vec<(H160, Vec<H256>)>>'
            }
          ],
          type: 'Result<EvmCallInfo, DispatchError>'
        },
        chain_id: {
          description: 'Returns runtime defined pallet_evm::ChainId.',
          params: [],
          type: 'u64'
        },
        create: {
          description: 'Returns a frame_ethereum::call response. If `estimate` is true,',
          params: [
            {
              name: 'from',
              type: 'H160'
            },
            {
              name: 'data',
              type: 'Vec<u8>'
            },
            {
              name: 'value',
              type: 'U256'
            },
            {
              name: 'gasLimit',
              type: 'U256'
            },
            {
              name: 'maxFeePerGas',
              type: 'Option<U256>'
            },
            {
              name: 'maxPriorityFeePerGas',
              type: 'Option<U256>'
            },
            {
              name: 'nonce',
              type: 'Option<U256>'
            },
            {
              name: 'estimate',
              type: 'bool'
            },
            {
              name: 'accessList',
              type: 'Option<Vec<(H160, Vec<H256>)>>'
            }
          ],
          type: 'Result<EvmCreateInfo, DispatchError>'
        },
        current_all: {
          description: 'Return all the current data for a block in a single runtime call.',
          params: [],
          type: '(Option<BlockV2>, Option<Vec<EthReceiptV3>>, Option<Vec<EthTransactionStatus>>)'
        },
        current_block: {
          description: 'Return the current block.',
          params: [],
          type: 'BlockV2'
        },
        current_receipts: {
          description: 'Return the current receipt.',
          params: [],
          type: 'Option<Vec<EthReceiptV3>>'
        },
        current_transaction_statuses: {
          description: 'Return the current transaction status.',
          params: [],
          type: 'Option<Vec<EthTransactionStatus>>'
        },
        elasticity: {
          description: 'Return the elasticity multiplier.',
          params: [],
          type: 'Option<Permill>'
        },
        extrinsic_filter: {
          description: 'Receives a `Vec<OpaqueExtrinsic>` and filters all the ethereum transactions.',
          params: [
            {
              name: 'xts',
              type: 'Vec<Extrinsic>'
            }
          ],
          type: 'Vec<TransactionV2>'
        },
        gas_price: {
          description: 'Returns FixedGasPrice::min_gas_price',
          params: [],
          type: 'u256'
        },
        storage_at: {
          description: 'For a given account address and index, returns pallet_evm::AccountStorages.',
          params: [
            {
              name: 'address',
              type: 'H160'
            },
            {
              name: 'index',
              type: 'u256'
            }
          ],
          type: 'H256'
        }
      },
      version: 4
    }
  ]
};
