// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import fs from 'fs';
import path from 'path';

import Abi from './Abi';

import * as testContracts from '../test/contracts';
import * as userContracts from '../test/contracts/user';

const abis: Record<string, any> = { ...testContracts };
const userAbis: Record<string, any> = { ...userContracts };

function compareInterface (name: string, messageIds: string[]): void {
  try {
    const inkAbi = new Abi(abis[name]);

    expect(inkAbi.messages.map(({ identifier }) => identifier)).toEqual(messageIds);
  } catch (error) {
    console.error(error);

    throw error;
  }
}

function compareTypes (name: string): void {
  const inkRegistry = new Abi(abis[name] || userAbis[name]);

  try {
    const cmpPath = path.join(__dirname, `../test/compare/${name}.test.json`);

    if (!fs.existsSync(cmpPath)) {
      fs.writeFileSync(cmpPath, JSON.stringify(inkRegistry.typeDefs, null, 2), { flag: 'w' });
    }

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    expect(inkRegistry.typeDefs).toEqual(require(cmpPath));
  } catch (error) {
    console.error(JSON.stringify(inkRegistry.typeDefs));

    throw error;
  }
}

describe('Abi', (): void => {
  describe('construction', (): void => {
    it('initializes from a contract ABI (flipper)', (): void => {
      compareInterface('flipper', ['flip', 'get']);
    });

    it('initializes from a contract ABI (incrementer)', (): void => {
      compareInterface('incrementer', ['inc', 'get']);
    });

    it('initializes from a contract ABI (erc20)', (): void => {
      compareInterface('erc20', [
        'total_supply',
        'balance_of',
        'allowance',
        'transfer',
        'approve',
        'transfer_from'
      ]);
    });

    it('initializes from a contract ABI (delegator)', (): void => {
      compareInterface('delegator', [
        'get',
        'change',
        'switch'
      ]);
    });

    it('initializes from a contract ABI (dns)', (): void => {
      compareInterface('dns', [
        'register',
        'set_address',
        'transfer',
        'get_address'
      ]);
    });

    it('initializes from a contract ABI (erc721)', (): void => {
      compareInterface('erc721', [
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
      compareInterface('multisigPlain', [
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

  describe('types', (): void => {
    it('initializes from a contract ABI (flipper)', (): void => {
      compareTypes('flipper');
    });

    it('initializes from a contract ABI (incrementer)', (): void => {
      compareTypes('incrementer');
    });

    it('initializes from a contract ABI (erc20)', (): void => {
      compareTypes('erc20');
    });

    it('initializes from a contract ABI (dns)', (): void => {
      compareTypes('dns');
    });

    it('initializes from a contract ABI (erc721)', (): void => {
      compareTypes('erc721');
    });

    it('initializes from a contract ABI (multisig_plain)', (): void => {
      compareTypes('multisigPlain');
    });
  });

  describe('user ABIs', (): void => {
    it('initializes from a contract ABI (withString)', (): void => {
      compareTypes('withString');
    });
  });

  it('stores base project as JSON', (): void => {
    expect(new Abi(abis.dns).json).toEqual(abis.dns);
  });
});
