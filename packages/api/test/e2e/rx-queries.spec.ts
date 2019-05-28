// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { combineLatest, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Balance, Header, Option } from '@polkadot/types';
import testingPairs from '@polkadot/keyring/testingPairs';

import Api from '../../src/rx';

describe.skip('Rx e2e queries', () => {
  const keyring = testingPairs({ type: 'ed25519' });
  let api: Api;

  beforeEach(async (done) => {
    api = await Api.create().toPromise();
    jest.setTimeout(3000000);
    done();
  });

  it('makes the runtime, rpc, state & extrinsics available', () => {
    expect(api.genesisHash).toBeDefined();
    expect(api.runtimeMetadata).toBeDefined();
    expect(api.runtimeVersion).toBeDefined();
    expect(api.rpc).toBeDefined();
    expect(api.query).toBeDefined();
    expect(api.tx).toBeDefined();
    expect(api.derive).toBeDefined();
  });

  it('queries state for a balance', (done) => {
    api.query.balances.freeBalance(keyring.alice.address()).subscribe((balance) => {
      expect(balance).toBeInstanceOf(BN);
      expect((balance as Balance).isZero()).toBe(false);
      done();
    });
  });

  it('makes a query at a specific block', (done) => {
    (api.rpc.chain.getHeader() as Observable<Header>)
      .pipe(
        switchMap(({ hash }: Header) =>
          api.query.system.events.at(hash)
        )
      )
      .subscribe((events: any) => {
        expect(events.length).not.toEqual(0);
        done();
      });
  });

  describe('with plain type', async () => {
    const TOTAL_ISSUANCE = 12582912;
    it('queries correct value', async (done) => {
      api.query.balances.totalIssuance().subscribe(totalIssuance => {
        expect((totalIssuance as Balance).toNumber()).toEqual(TOTAL_ISSUANCE);
        done();
      });
    });

    it('queries correct value at a specified block', async (done) => {
      api.rpc.chain
      .getHeader()
      .pipe(
        switchMap((header) =>
          api.query.balances.totalIssuance.at((header as Header).hash)
        )
      )
      .subscribe((totalIssuanceAt) => {
        expect((totalIssuanceAt as Balance).toNumber()).toEqual(TOTAL_ISSUANCE);
        done();
      });
    });

    it('queries correct hash', async (done) => {
      api.query.balances.totalIssuance.hash().subscribe(hash => {
        expect(hash).toBeDefined();
        done();
      });
    });

    it('gets correct key', async (done) => {
      const key = api.query.balances.totalIssuance.key();
      api.rpc.state.getStorage(key).subscribe((totalIssuanceData) => {
        const totalIssuanceRPC = new Balance((totalIssuanceData as Option<any>).unwrapOr(undefined));
        expect(totalIssuanceRPC.toNumber()).toEqual(TOTAL_ISSUANCE);
        done();
      });
    });

    it('queries correct size', async (done) => {
      api.query.balances.totalIssuance.size().subscribe(size => {
        expect(size.toNumber()).not.toEqual(0);
        done();
      });
    });
  });

  describe('with map type', async () => {
    it('queries correct value', async (done) => {
      api.query.balances.freeBalance(keyring.alice.address()).subscribe(balance => {
        expect((balance as Balance).isZero()).toBe(false);
        done();
      });
    });

    it('queries correct value at a specified block', async (done) => {
      // assume the account Alice is only used in test(the balance of Alice does not change in this test case)
      combineLatest([
        api.rpc.chain
        .getHeader()
        .pipe(
          switchMap((header) =>
            api.query.balances.freeBalance.at((header as Header).hash, keyring.alice.address())
          )
        ),
        api.query.balances.freeBalance(keyring.alice.address())
      ]).subscribe(([balanceAt, balance]) => {
        expect((balanceAt as Balance).isZero()).toBe(false);
        expect(balanceAt.toString()).toEqual(balance.toString());
        done();
      });
    });

    it('queries correct hash', async (done) => {
      api.query.balances.freeBalance.hash(keyring.alice.address()).subscribe(hash => {
        expect(hash).toBeDefined();
        done();
      });
    });

    it('gets correct key', async (done) => {
      // assume the account Alice is only used in test(the balance of Alice does not change in this test case)
      const key = api.query.balances.freeBalance.key(keyring.alice.address());
      combineLatest([
        api.rpc.state.getStorage(key),
        api.query.balances.freeBalance(keyring.alice.address())
      ]).subscribe(([balanceData, balance]) => {
        const balanceRPC = new Balance((balanceData as Option<any>).unwrapOr(undefined));
        expect(balanceRPC.isZero()).toBe(false);
        expect(balanceRPC.toString()).toEqual(balance.toString());
        done();
      });
    });

    it('queries multiple results', async (done) => {
      // assume the account Alice and Bob are only used in test(the balance of them do not change in this test case)
      combineLatest([
        api.query.balances.freeBalance.multi([
          keyring.alice.address(),
          keyring.bob.address()
        ]),
        api.query.balances.freeBalance(keyring.alice.address()),
        api.query.balances.freeBalance(keyring.bob.address())
      ]).subscribe(([balances, balanceAlice, balanceBob]) => {
        expect(balances).toHaveLength(2);
        expect((balances as any)[0].toString()).toEqual(balanceAlice.toString());
        expect((balances as any)[1].toString()).toEqual(balanceBob.toString());
        done();
      });
    });

    it('queries correct size', async (done) => {
      api.query.balances.freeBalance.size(keyring.alice.address()).subscribe(size => {
        expect(size.toNumber()).not.toEqual(0);
        done();
      });
    });
  });

  // TODO Update ['any', '0x1234'] to the key of a known event topic and update EXPECTED_VALUE to the expected value
  describe('with double map type', async () => {
    const KEY1 = 'any';
    const KEY2 = '0x1234';
    it('queries correct value', async (done) => {
      api.query.system.eventTopics(KEY1, KEY2).subscribe(eventTopics => {
        expect(eventTopics.toJSON()).toEqual([]);
        done();
      });
    });

    it('queries correct value at a specified block', async (done) => {
      api.rpc.chain
      .getHeader()
      .pipe(
        switchMap((header) =>
          // TODO check: this will throw the error: Encoding for input doesn't match output, created 0x00 from 0x
          api.query.system.eventTopics.at((header as Header).hash, KEY1, KEY2)
        )
      ).subscribe(eventTopicsAt => {
        expect(eventTopicsAt).toEqual(undefined);
        done();
      });
    });

    it('queries correct hash', async (done) => {
      api.query.system.eventTopics(KEY1, KEY2).subscribe(hash => {
        expect(hash).toBeDefined();
        done();
      });
    });

    it('gets correct key', async (done) => {
      const key = api.query.system.eventTopics.key(KEY1, KEY2);
      api.rpc.state.getStorage(key).subscribe(eventTopicsData => {
        expect((eventTopicsData as Option<any>).unwrapOr(undefined)).toEqual(undefined);
        done();
      });
    });

    it('queries multiple results', async (done) => {
      api.query.system.eventTopics.multi([
        [KEY1, KEY2]
      ]).subscribe(eventTopicsList => {
        expect(eventTopicsList).toHaveLength(1);
        expect((eventTopicsList as any)[0].toJSON()).toEqual([]);
        done();
      });
    });

    it('queries correct size', async (done) => {
      api.query.system.eventTopics.size(KEY1, KEY2).subscribe(size => {
        expect(size.toNumber()).toEqual(0);
        done();
      });
    });
  });
});
