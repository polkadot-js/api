// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from '@polkadot/types/types';

import fromMetadata from '@polkadot/api-metadata/storage/fromMetadata';
import { Storage } from '@polkadot/api-metadata/storage/types';
import { Balance } from '@polkadot/types';
import Metadata from '@polkadot/types/Metadata';
import { injectDefinitions } from '@polkadot/types/srml';
import rpcMetadataV3 from '@polkadot/types/Metadata/v3/static';
import rpcMetadataV4 from '@polkadot/types/Metadata/v4/static';
import rpcMetadataV5 from '@polkadot/types/Metadata/v5/static';
import rpcMetadataV6 from '@polkadot/types/Metadata/v6/static';

import Api from '.';

const ADDR_ONE = '5DkQbYAExs3M2sZgT1Ec3mKfZnAQCL4Dt9beTCknkCUn5jzo';
const ADDR_TWO = '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF';
const BALANCE_KEYS = [
  /* v3-, using xxHash */ '0x4af2c53fce3ec33c6ccccf22e926f1a7',
  /* v4+, using blake2_256 */ '0xec8f96437274a883afcac82d01a9defeb68209cd4f2c084632813692aa5e65ad'
];
const OPTION_BYTES_HEX = '0x210100000000000000000000000000000000000000000000000000000000000000000000000000000000011b4d03dd8c01f1049143cf9c4c817e4b167f1d1b83e5c6f0f10d89ba1e7bce';

function formattingTests (version: string, storage: Storage, encodedValues: [string, string, string]): void {
  const [ENC_ONE, ENC_TWO, CONTRACT_KEY] = encodedValues;

  describe(`formatting with Metadata ${version}`, (): void => {
    let api: Api;
    let provider: any;

    beforeEach((): void => {
      injectDefinitions();

      provider = {
        send: jest.fn((method, [key]): Promise<any> =>
          Promise.resolve(
            BALANCE_KEYS.includes(key)
              ? '0x01020000000000000000000000000000'
              : null
          )
        ),
        subscribe: jest.fn((type, method, params, cb): void => {
          if (params[0][0] === CONTRACT_KEY) {
            // this emulates https://github.com/polkadot-js/api/issues/1051
            cb(null, {
              block: '0x2345',
              changes: [
                [CONTRACT_KEY, OPTION_BYTES_HEX]
              ]
            });
          } else if (params[0][0] === ENC_ONE || params[0][0] === ENC_TWO) {
            // known values for the balanaces
            cb(null, {
              block: '0x1234',
              changes: [
                [ENC_ONE, '0x01020000000000000000000000000000'],
                [ENC_TWO, '0x02010000000000000000000000000000']
              ]
            });
          } else {
            // return empty values for all else
            cb(null, {
              block: '0x3456',
              changes: [
                [params[0][0], null]
              ]
            });
          }
        })
      };

      api = new Api(provider);
    });

    it('encodes key (with params), decoding response', (done): void => {
      api.state
        .getStorage([storage.balances.freeBalance, ADDR_ONE])
        .subscribe((value): void => {
          expect(
            provider.send
          ).toHaveBeenCalledWith(
            'state_getStorage',
            [ENC_ONE]
          );
          expect(value.toNumber()).toEqual(513);
          done();
        });
    });

    it('returns the fallback result on not-found values', (done): void => {
      api.state
        .getStorage([storage.system.accountNonce, ADDR_ONE])
        .subscribe((value): void => {
          expect(value.toHex()).toEqual('0x0000000000000000');
          done();
        });
    });

    it('encodes multiple keys, decoding multiple results', (done): void => {
      api.state.subscribeStorage(
        [
          [storage.balances.freeBalance, ADDR_ONE],
          [storage.balances.freeBalance, ADDR_TWO]
        ]
      ).subscribe((value: Balance[]): void => {
        // console.error(value);

        expect(
          provider.subscribe
        ).toHaveBeenCalledWith(
          'state_storage',
          'state_subscribeStorage',
          [[ENC_ONE, ENC_TWO]],
          expect.anything()
        );
        expect(
          value.map((balance): number =>
            balance.toNumber()
          )
        ).toEqual([0x0201, 0x0102]);

        done();
      });
    });

    it('handles the case where Option<Bytes> are retrieved', (done): void => {
      const call = Number(version.slice(1)) <= 5
        ? storage.contract.pristineCode
        : storage.contracts.pristineCode;

      api.state
        .subscribeStorage([[call, '0x00']])
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .subscribe((value: Codec[]): void => {
          expect(value).toHaveLength(1);
          // console.error(value);

          // expect(value.toHex()).toBe(OPTION_BYTES_HEX);
          done();
        });
    });

    it('handles fallbacks for linked heads (new metadata only)', (done): void => {
      const headKey = storage.staking.validators && storage.staking.validators.headKey;

      // skip for old
      if (!headKey) {
        return done();
      }

      api.state
        .subscribeStorage([headKey])
        .subscribe((value: Codec[]): void => {
          expect(value).toHaveLength(1);
          // console.error('head fallback', value);

          done();
        });
    });

    it('handles fallbacks for linked maps (new metadata only)', (done): void => {
      const headKey = storage.staking.validators && storage.staking.validators.headKey;

      // skip for old
      if (!headKey) {
        return done();
      }

      api.state
        .subscribeStorage([[storage.staking.validators, '0x00']])
        .subscribe((value: Codec): void => {
          expect(value).toBeDefined();
          // console.error('linked falklback', value);

          done();
        });
    });
  });
}

formattingTests('v3', fromMetadata(new Metadata(rpcMetadataV3)), [
  '0x4af2c53fce3ec33c6ccccf22e926f1a7',
  '0x3e62f7ed6e788e1337bce2a97b68a12a',
  '0x777519cd81f845abdb40d253923d6098'
]);

formattingTests('v4', fromMetadata(new Metadata(rpcMetadataV4)), [
  '0xec8f96437274a883afcac82d01a9defeb68209cd4f2c084632813692aa5e65ad',
  '0x1dbb0224910f42a14e7f1406b24c6fe8157296691b02a78756e01946038fffab',
  '0xc7879f4faa637a90d782070a3cb6be99a9fb0316e19a0454ce93c4f0a34712f1'
]);

formattingTests('v5', fromMetadata(new Metadata(rpcMetadataV5)), [
  '0xec8f96437274a883afcac82d01a9defeb68209cd4f2c084632813692aa5e65ad',
  '0x1dbb0224910f42a14e7f1406b24c6fe8157296691b02a78756e01946038fffab',
  '0xc7879f4faa637a90d782070a3cb6be99a9fb0316e19a0454ce93c4f0a34712f1'
]);

formattingTests('v6', fromMetadata(new Metadata(rpcMetadataV6)), [
  '0xec8f96437274a883afcac82d01a9defeb68209cd4f2c084632813692aa5e65ad',
  '0x1dbb0224910f42a14e7f1406b24c6fe8157296691b02a78756e01946038fffab',
  '0xc7879f4faa637a90d782070a3cb6be99a9fb0316e19a0454ce93c4f0a34712f1'
]);
