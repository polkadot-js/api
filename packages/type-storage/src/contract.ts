// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Storages, Storage$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const contractFee: CreateItemOptions = {
  description: 'The fee required to create a contract.',
  key: 'con:contract_fee',
  params: [],
  type: 'Balance'
};

const callBaseFee: CreateItemOptions = {
  description: 'The fee charged for a call into a contract.',
  key: 'con:base_call_fee',
  params: [],
  type: 'Gas'
};

const createBaseFee: CreateItemOptions = {
  description: 'The fee charged for a create of a contract.',
  key: 'con:base_create_fee',
  params: [],
  type: 'Gas'
};

const gasPrice: CreateItemOptions = {
  description: 'The price of one unit of gas.',
  key: 'con:gas_price',
  params: [],
  type: 'Balance'
};

const maxStackDepth: CreateItemOptions = {
  description: 'The maximum nesting level of a call/create stack.',
  key: 'con:max_depth',
  params: [],
  type: 'u32'
};

const codeOf: CreateItemOptions = {
  description: 'The code associated with an account.',
  key: 'con:cod:',
  params: [
    param('who', 'AccountId')
  ],
  type: 'Code'
};

export default (name: Storage$Sections): Section<Storages> =>
  createSection(name)((createMethod: CreateItems<Storages>) => ({
    description: 'Contract',
    public: {
      codeOf:
        createMethod('codeOf')(codeOf),
      contractFee:
        createMethod('contractFee')(contractFee),
      callBaseFee:
        createMethod('callBaseFee')(callBaseFee),
      createBaseFee:
        createMethod('createBaseFee')(createBaseFee),
      gasPrice:
        createMethod('gasPrice')(gasPrice),
      maxStackDepth:
        createMethod('maxStackDepth')(maxStackDepth)
    }
  }));
