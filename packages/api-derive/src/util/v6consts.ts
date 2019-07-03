// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// This file is only a temporary solution to reflect the changes introduced by
// https://github.com/paritytech/substrate/pull/2883 and to prevent the api from breaking.
// Once https://github.com/polkadot-js/api/pull/1066 is merged and the derive methods have
// been changed to make use of the new `api.consts` endpoint, this file can be removed.
// @TODO replace this with calls to `api.consts` once implemented

import BN from 'bn.js';

// Fees for the balances module as implemented here:
// https://github.com/paritytech/substrate/pull/2883/files#diff-5e5e1c3aec9ddfde0a9054d062ab3db9R131
const MILLICENTS: BN = new BN(1000000000);
const CENTS: BN = new BN(1000).mul(MILLICENTS);    // assume this is worth about a cent.
const DOLLARS: BN = new BN(100).mul(CENTS);

export const existentialDeposit: BN = new BN(1).mul(DOLLARS);
export const transferFee: BN = new BN(1).mul(CENTS);
export const creationFee: BN = new BN(1).mul(CENTS);
export const transactionBaseFee: BN = new BN(1).mul(CENTS);
export const transactionByteFee: BN = new BN(10).mul(MILLICENTS);

// parameter_types of council module as implemented here:
// https://github.com/paritytech/substrate/pull/2883/files#diff-5e5e1c3aec9ddfde0a9054d062ab3db9R250
export const CandidacyBond: BN = new BN(10).mul(DOLLARS);
export const VotingBond: BN = new BN(1).mul(DOLLARS);
export const VotingFee: BN = new BN(2).mul(DOLLARS);
export const PresentSlashPerVoter: BN = new BN(1).mul(CENTS);


// Fees for the contract module as implemented here:
// https://github.com/paritytech/substrate/pull/2883/files#diff-5e5e1c3aec9ddfde0a9054d062ab3db9R305
export const callBaseFee: BN = new BN(1000);
export const contractFee: BN = new BN(1).mul(CENTS);
export const createBaseFee: BN = new BN(1000);
export const contractCreationFee: BN = new BN(1).mul(CENTS);
export const rentByteFee: BN = new BN(4);
export const rentDepositOffset: BN = new BN(1000);
export const contractTransactionBaseFee: BN = new BN(1).mul(CENTS);
export const contractTransactionByteFee: BN = new BN(10).mul(MILLICENTS);
export const contractTransferFee: BN = new BN(1).mul(CENTS);
export const tombstoneDeposit: BN = new BN(16);
