// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { SubmittableExtrinsic } from '../submittable/types';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import testingPairs from '@polkadot/keyring/testingPairs';
import Mock from '@polkadot/rpc-provider/mock/index';
import { TypeRegistry } from '@polkadot/types';

import { SingleAccountSigner } from '../../test/util';
import ApiRx from './Api';

describe('ApiRx', (): void => {
  const registry = new TypeRegistry();
  const keyring = testingPairs({ type: 'ed25519' });
  let provider: Mock;

  beforeEach((): void => {
    jest.setTimeout(3000000);
    provider = new Mock(registry);
  });

  describe('decorator.signAsync', (): void => {
    it('signs a transfer using an external signer', (): void => {
      const signer = new SingleAccountSigner(registry, keyring.alice_session);

      ApiRx.create({ provider, registry, signer }).pipe(
        switchMap((api: ApiRx): Observable<SubmittableExtrinsic<'rxjs'>> =>
          api.tx.balances
            .transfer(keyring.eve.address, 12345)
            .signAsync(keyring.alice_session, {})
        ),
        map((tx: SubmittableExtrinsic<'rxjs'>): void => {
          expect(tx.signature.toHex()).toEqual(
            '0x97f3cfe5088fcd575313e983f45d02b0f630e7b94ff9a3ac50e20cd096a8f554fda73d42ead891b5a1d3ce5607d83f20b0c6570b555e949cfb5763d0abcd590b'
          );
        })
      );
    });

    it('allows the second argument to signAsync to be omitted', () => {
      const signer = new SingleAccountSigner(registry, keyring.alice_session);

      ApiRx.create({ provider, registry, signer }).pipe(
        switchMap((api: ApiRx): Observable<SubmittableExtrinsic<'rxjs'>> =>
          api.tx.balances
            .transfer(keyring.eve.address, 12345)
            .signAsync(keyring.alice_session)
        ),
        map((tx: SubmittableExtrinsic<'rxjs'>): void => {
          expect(tx.signature.toHex()).toEqual(
            '0x97f3cfe5088fcd575313e983f45d02b0f630e7b94ff9a3ac50e20cd096a8f554fda73d42ead891b5a1d3ce5607d83f20b0c6570b555e949cfb5763d0abcd590b'
          );
        })
      );
    });
  });
});
