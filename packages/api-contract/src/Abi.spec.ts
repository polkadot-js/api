// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Abi from './Abi';

import * as testContracts from '../test/contracts';

const abis: Record<string, any> = { ...testContracts };

function compare (name: string, messageIds: string[]): void {
  try {
    const inkAbi = new Abi(abis[name]);

    expect(inkAbi.messages.map(({ identifier }) => identifier)).toEqual(messageIds);
  } catch (error) {
    console.error(error);

    throw error;
  }
}

describe('Abi', (): void => {
  describe('construction', (): void => {
    it('initializes from a contract ABI (flipper)', (): void => {
      compare('flipper', ['flip', 'get']);
    });

    it('initializes from a contract ABI (incrementer)', (): void => {
      compare('incrementer', ['inc', 'get']);
    });

    it('initializes from a contract ABI (erc20)', (): void => {
      compare('erc20', [
        'total_supply',
        'balance_of',
        'allowance',
        'transfer',
        'approve',
        'transfer_from'
      ]);
    });

    it('initializes from a contract ABI (delegator)', (): void => {
      compare('delegator', [
        'get',
        'change',
        'switch'
      ]);
    });

    it('initializes from a contract ABI (dns)', (): void => {
      compare('dns', [
        'register',
        'set_address',
        'transfer',
        'get_address'
      ]);
    });

    it('initializes from a contract ABI (erc721)', (): void => {
      compare('erc721', [
        'balance_of',
        'owner_of',
        'get_approved',
        'is_approved_for_all',
        'set_approval_for_all',
        'approve',
        'transfer',
        'transfer_from',
        'mint',
        'burn'
      ]);
    });

    it('initializes from a contract ABI (multisig_plain)', (): void => {
      compare('multisigPlain', [
        'add_owner',
        'remove_owner',
        'replace_owner',
        'change_requirement',
        'submit_transaction',
        'cancel_transaction',
        'confirm_transaction',
        'revoke_confirmation',
        'invoke_transaction',
        'eval_transaction'
      ]);
    });
  });

  it('stores base project as JSON', (): void => {
    expect(new Abi(abis.dns).json).toEqual(abis.dns);
  });
});
