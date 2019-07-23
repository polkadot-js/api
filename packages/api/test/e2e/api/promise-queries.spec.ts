// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SessionIndex } from '@polkadot/types/srml/session/types';

import { HeaderExtended } from '@polkadot/api-derive';
import WsProvider from '@polkadot/rpc-provider/ws';
import { LinkageResult } from '@polkadot/types/codec/Linkage';
import { EventRecord, Hash, Header, Option, Vector, createType } from '@polkadot/types';

import ApiPromise from '../../../src/promise';
import describeE2E from '../../util/describeE2E';

describeE2E()('Promise e2e queries', (wsUrl): void => {
  let api: ApiPromise;

  beforeEach(async (done): Promise<void> => {
    api = await ApiPromise.create(new WsProvider(wsUrl));

    done();
  });

  it('makes the runtime, rpc, state & extrinsics available', (): void => {
    expect(api.genesisHash).toBeDefined();
    expect(api.runtimeMetadata).toBeDefined();
    expect(api.runtimeVersion).toBeDefined();
    expect(api.rpc).toBeDefined();
    expect(api.query).toBeDefined();
    expect(api.tx).toBeDefined();
    expect(api.derive).toBeDefined();
  });

  it('subscribes to rpc', (done): Promise<() => void> => {
    return (
      api.rpc.chain.subscribeNewHead((header: Header): void => {
        expect(header.blockNumber.isZero()).toBe(false);

        done();
      })
    );
  });

  it('subscribes to finalized', (done): Promise<() => void> => {
    return (
      api.rpc.chain.subscribeFinalizedHeads((header: Header): void => {
        expect(header.blockNumber.isZero()).toBe(false);

        done();
      })
    );
  });

  it('subscribes to derive', (done): Promise<() => void> => {
    return (
      api.derive.chain.subscribeNewHead((header: HeaderExtended): void => {
        expect(header.blockNumber.isZero()).toBe(false);

        done();
      })
    );
  });

  it('subscribes to a linked map (staking.validators)', (done): Promise<() => void> => {
    return (
      api.query.staking.validators((prefs: LinkageResult): void => {
        expect(prefs instanceof LinkageResult).toBe(true);

        done();
      })
    );
  });

  it('can retrive header by hash', async (): Promise<void> => {
    const latest = await api.rpc.chain.getHeader() as Header;
    const specific = await api.rpc.chain.getHeader(latest.hash) as Header;

    expect(latest.hash).toEqual(specific.hash);
  });

  it('makes a query at a latest block (specified)', async (): Promise<void> => {
    const header = await api.rpc.chain.getHeader() as Header;
    const events = await api.query.system.events.at(header.hash) as Vector<EventRecord>;

    expect(events.length).not.toEqual(0);

    events.forEach(({ event: { data, method, section }, phase, topics }: EventRecord): void => {
      console.error(phase.toString(), `: ${section}.${method}`, data.toString(), topics.toString());
    });
  });

  it('subscribes to events', (done): Promise<() => void> => {
    return (
      api.query.system.events((events): void => {
        expect(events).not.toHaveLength(0);
        done();
      })
    );
  });

  describe('with plain type', (): void => {
    it('queries a correct value', async (): Promise<void> => {
      const sessionIndex = await api.query.session.currentIndex() as SessionIndex;

      expect(sessionIndex.toNumber()).toBeGreaterThanOrEqual(0);
    });

    it('queries correct value at a specified block', async (): Promise<void> => {
      const header = await api.rpc.chain.getHeader() as Header;
      const sessionIndex = await api.query.session.currentIndex.at(header.hash) as SessionIndex;

      expect(sessionIndex.toNumber()).toBeGreaterThanOrEqual(0);
    });

    it('subscribes to query and get correct result', (done): Promise<() => void> => {
      return api.query.session.currentIndex((sessionIndex: SessionIndex): void => {
        expect(sessionIndex.toNumber()).toBeGreaterThanOrEqual(0);
        done();
      });
    });

    it('queries correct hash', async (): Promise<void> => {
      const hash: Hash = await api.query.session.currentIndex.hash();

      expect(hash).toBeDefined();
    });

    it('gets correct key', async (): Promise<void> => {
      const key = api.query.session.currentIndex.key();
      const sessionIndexData = await api.rpc.state.getStorage(key) as Option<any>;
      const sessionIndexRPC = createType<SessionIndex>('SessionIndex', sessionIndexData.unwrapOr(undefined));

      expect(sessionIndexRPC.toNumber()).toBeGreaterThanOrEqual(0);
    });

    it('queries correct size', async (): Promise<void> => {
      const size = await api.query.session.currentIndex.size();

      expect(size).not.toHaveLength(0);
      expect(size.toNumber()).toBeGreaterThanOrEqual(0);
    });
  });
});
