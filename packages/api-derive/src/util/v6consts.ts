// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// This file is only a temporary solution to reflect the changes introduced by
// https://github.com/paritytech/substrate/pull/2883 and to prevent the api from breaking.
// Once https://github.com/polkadot-js/api/pull/1066 is merged and the derive methods have
// been changed to make use of the new `api.consts` endpoint, this file can be removed.

import BN from 'bn.js';

// Fees for the balances module as implemented here:
// https://github.com/paritytech/substrate/pull/2883/files#diff-5e5e1c3aec9ddfde0a9054d062ab3db9R131
const MILLICENTS: BN = new BN(1000000000);
const CENTS: BN = new BN(1000).mul(MILLICENTS);    // assume this is worth about a cent.
const DOLLARS: BN = new BN(100).mul(CENTS);

export const v6existentialDeposit: BN = new BN(1).mul(DOLLARS);
export const v6transferFee: BN = new BN(1).mul(CENTS);
export const v6creationFee: BN = new BN(1).mul(CENTS);
export const v6transactionBaseFee: BN = new BN(1).mul(CENTS);
export const v6transactionByteFee: BN = new BN(10).mul(MILLICENTS);

// parameter_types of council module as implemented here:
// https://github.com/paritytech/substrate/pull/2883/files#diff-5e5e1c3aec9ddfde0a9054d062ab3db9R250
export const v6CandidacyBond: BN = new BN(10).mul(DOLLARS);
export const v6VotingBond: BN = new BN(1).mul(DOLLARS);
export const v6VotingFee: BN = new BN(2).mul(DOLLARS);
export const v6PresentSlashPerVoter: BN = new BN(1).mul(CENTS);

// Fees for the contract module as implemented here:
// https://github.com/paritytech/substrate/pull/2883/files#diff-5e5e1c3aec9ddfde0a9054d062ab3db9R305
// @TODO replace this with calls to `api.consts` once implemented
export const v6callBaseFee: BN = new BN(1000);
export const v6contractFee: BN = new BN(1).mul(CENTS);
export const v6createBaseFee: BN = new BN(1000);
export const v6contractCreationFee: BN = new BN(1).mul(CENTS);
export const v6rentByteFee: BN = new BN(4);
export const v6rentDepositOffset: BN = new BN(1000);
export const v6contractTransactionBaseFee: BN = new BN(1).mul(CENTS);
export const v6contractTransactionByteFee: BN = new BN(10).mul(MILLICENTS);
export const v6contractTransferFee: BN = new BN(1).mul(CENTS);
export const v6tombstoneDeposit: BN = new BN(16);