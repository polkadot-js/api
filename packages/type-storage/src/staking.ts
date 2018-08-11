// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Storages, Storage$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const bondingDuration: CreateItemOptions = {
  description: 'The length of the bonding duration in eras',
  key: 'sta:loc',
  params: [],
  type: 'BlockNumber'
};

const validatorCount: CreateItemOptions = {
  description: 'The number of validators',
  key: 'sta:vac',
  params: [],
  type: 'u32'
};

const sessionsPerEra: CreateItemOptions = {
  description: 'The length of a staking era in sessions',
  key: 'sta:spe',
  params: [],
  type: 'BlockNumber'
};

const totalStake: CreateItemOptions = {
  description: 'The total amount of stake on the system',
  key: 'sta:tot',
  params: [],
  type: 'Balance'
};

const transactionBaseFee: CreateItemOptions = {
  description: 'The fee to be paid for making a transaction; the base',
  key: 'sta:basefee',
  params: [],
  type: 'Balance'
};

const transactionByteFee: CreateItemOptions = {
  description: 'The fee to be paid for making a transaction; the per-byte portion',
  key: 'sta:bytefee',
  params: [],
  type: 'Balance'
};

const existentialDeposit: CreateItemOptions = {
  description: 'The minimum amount allowed to keep an account open',
  key: 'sta:existential_deposit',
  params: [],
  type: 'Balance'
};

const reclaimRebate: CreateItemOptions = {
  description: 'The amount credited to a destination account whose index was reclaimed',
  key: 'sta:reclaim_rebate',
  params: [],
  type: 'Balance'
};

const transferFee: CreateItemOptions = {
  description: 'The fee required to make a transfer',
  key: 'sta:transfer_fee',
  params: [],
  type: 'Balance'
};

const creationFee: CreateItemOptions = {
  description: 'The fee required to create an account',
  key: 'sta:creation_fee',
  params: [],
  type: 'Balance'
};

const sessionReward: CreateItemOptions = {
  description: 'Maximum reward, per validator, that is provided per acceptable session',
  key: 'sta:early_era_slash',
  params: [],
  type: 'Balance'
};

const earlyEraSlash: CreateItemOptions = {
  description: 'Slash, per validator that is taken per abnormal era end',
  key: 'sta:early_era_slash',
  params: [],
  type: 'Balance'
};

const currentEra: CreateItemOptions = {
  description: 'The current era index',
  key: 'sta:era',
  params: [],
  type: 'BlockNumber'
};

const intentions: CreateItemOptions = {
  description: 'All the accounts with a desire to stake',
  key: 'sta:wil:',
  params: [],
  type: ['AccountId']
};

const nominating: CreateItemOptions = {
  description: 'Nominator -> nominee relationship',
  key: 'sta:nominating',
  params: [
    param('who', 'AccountId')
  ],
  type: 'AccountId'
};

const nominatorsFor: CreateItemOptions = {
  description: 'Nominators for a particular account',
  key: 'sta:nominators_for',
  params: [
    param('who', 'AccountId')
  ],
  type: ['AccountId']
};

const currentNominatorsFor: CreateItemOptions = {
  description: 'Nominators for a particular account that is in action right now',
  key: 'sta:current_nominators_for',
  params: [
    param('who', 'AccountId')
  ],
  type: ['AccountId']
};

const nextSessionsPerEra: CreateItemOptions = {
  description: 'The next value of sessions per era',
  key: 'sta:nse',
  params: [],
  type: 'BlockNumber'
};

const lastEraLengthChange: CreateItemOptions = {
  description: 'The block number at which the era length last changed',
  key: 'sta:lec',
  params: [],
  type: 'BlockNumber'
};

const stakeThreshold: CreateItemOptions = {
  description: 'The current era stake threshold',
  key: 'sta:stake_threshold',
  params: [],
  type: 'Balance'
};

const nextEnumSet: CreateItemOptions = {
  description: 'The next free enumeration set',
  key: 'sta:next_enum',
  params: [],
  type: 'AccountIndex'
};

const enumSet: CreateItemOptions = {
  description: 'The enumeration sets',
  key: 'sta:enum_set',
  params: [
    param('index', 'AccountIndex')
  ],
  type: ['AccountId']
};

const freeBalanceOf: CreateItemOptions = {
  description: 'The balance of a given account',
  key: 'sta:bal:',
  params: [
    param('who', 'AccountId')
  ],
  type: 'Balance'
};

const reservedBalanceOf: CreateItemOptions = {
  description: 'The amount of a given account that is reserved',
  key: 'sta:lbo:',
  params: [
    param('who', 'AccountId')
  ],
  type: 'Balance'
};

const bondageOf: CreateItemOptions = {
  key: 'sta:bon:',
  description: 'The block at which the account becomes liquid',
  params: [
    param('who', 'AccountId')
  ],
  type: 'Balance'
};

export default (name: Storage$Sections): Section<Storages> =>
  createSection(name)((createMethod: CreateItems<Storages>) => ({
    description: 'Staking',
    public: {
      freeBalanceOf:
        createMethod('freeBalanceOf')(freeBalanceOf),
      bondageOf:
        createMethod('bondageOf')(bondageOf),
      creationFee:
        createMethod('creationFee')(creationFee),
      currentNominatorsFor:
        createMethod('currentNominatorsFor')(currentNominatorsFor),
      earlyEraSlash:
        createMethod('earlyEraSlash')(earlyEraSlash),
      existentialDeposit:
        createMethod('existentialDeposit')(existentialDeposit),
      enumSet:
        createMethod('enumSet')(enumSet),
      transactionBaseFee:
        createMethod('transactionBaseFee')(transactionBaseFee),
      transactionByteFee:
        createMethod('transactionByteFee')(transactionByteFee),
      transferFee:
        createMethod('transferFee')(transferFee),
      bondingDuration:
        createMethod('bondingDuration')(bondingDuration),
      currentEra:
        createMethod('currentEra')(currentEra),
      reservedBalanceOf:
        createMethod('reservedBalanceOf')(reservedBalanceOf),
      intentions:
        createMethod('intentions')(intentions),
      lastEraLengthChange:
        createMethod('lastEraLengthChange')(lastEraLengthChange),
      nextEnumSet:
        createMethod('nextEnumSet')(nextEnumSet),
      nextSessionsPerEra:
        createMethod('nextSessionsPerEra')(nextSessionsPerEra),
      nominating:
        createMethod('nominating')(nominating),
      nominatorsFor:
        createMethod('nominatorsFor')(nominatorsFor),
      reclaimRebate:
        createMethod('reclaimRebate')(reclaimRebate),
      stakeThreshold:
        createMethod('stakeThreshold')(stakeThreshold),
      sessionsPerEra:
        createMethod('sessionsPerEra')(sessionsPerEra),
      sessionReward:
        createMethod('sessionReward')(sessionReward),
      totalStake:
        createMethod('totalStake')(totalStake),
      validatorCount:
        createMethod('validatorCount')(validatorCount)
    }
  }));
