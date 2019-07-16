// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import WsProvider from '@polkadot/rpc-provider/ws';
import { Header, Option } from '@polkadot/types';

import ApiPromise from '../../../src/promise';
import describeE2E from '../../util/describeE2E';

// The following tests only run on nodes that support doubleMapType introduced by metadata v5
describeE2E({
  only: [
    'local',
    'docker-polkadot-master',
    'docker-substrate-master',
    'docker-substrate-2.0'
  ]
})('Promise e2e doubleMap queries (since Metadata v5)', (wsUrl): void => {
  let api: ApiPromise;

  beforeEach(async (done): Promise<void> => {
    api = await ApiPromise.create(new WsProvider(wsUrl));

    done();
  });
  // TODO Update ['any', '0x1234'] to the key of a known event topic and update EXPECTED_VALUE to the expected value
  describe('with double map type', (): void => {
    const KEY1 = 'any';
    const KEY2 = '0x1234';
    it('queries correct value', async (): Promise<void> => {
      const eventTopics = await api.query.system.eventTopics(KEY1, KEY2);

      expect(eventTopics.toJSON()).toEqual([]);
    });

    it('queries correct value at a specified block', async (): Promise<void> => {
      const header = await api.rpc.chain.getHeader() as Header;

      // TODO check & fix: this will throw the error: Encoding for input doesn't match output, created 0x00 from 0x
      const eventTopicsAt = await api.query.system.eventTopics.at(header.hash, KEY1, KEY2);
      expect(eventTopicsAt.toJSON()).toEqual([]);

      // const eventTopicsAt = await api.query.system.eventTopics.at(header.hash, KEY1, KEY2);
      // expect(eventTopicsAt.toJSON()).toEqual([]);
    });

    it('subscribes to query and get correct result', async (done): Promise<() => void> => {
      return api.query.system.eventTopics(KEY1, KEY2, (eventTopicsAt): void => {
        expect(eventTopicsAt.toJSON()).toEqual([]);
        done();
      });
    });

    it('queries correct hash', async (): Promise<void> => {
      const hash = await api.query.system.eventTopics(KEY1, KEY2);

      expect(hash).toBeDefined();
    });

    it('gets correct key', async (): Promise<void> => {
      const key = api.query.system.eventTopics.key(KEY1, KEY2);
      const eventTopicsData = await api.rpc.state.getStorage(key) as Option<any>;

      expect(eventTopicsData.unwrapOr(undefined)).toEqual(undefined);
    });

    it('queries multiple results', async (): Promise<void> => {
      const eventTopicsList = await api.query.system.eventTopics.multi([
        [KEY1, KEY2]
      ]);

      expect(eventTopicsList).toHaveLength(1);
      expect((eventTopicsList as any)[0].toJSON()).toEqual([]);
    });

    it('subscribes to multiple queries and get correct results', async (done): Promise<() => void> => {
      return api.query.system.eventTopics.multi([
        [KEY1, KEY2]
      ], (eventTopicsList): void => {
        expect(eventTopicsList).toHaveLength(1);
        expect(eventTopicsList[0].toJSON()).toEqual([]);
        done();
      });
    });

    it('queries correct size', async (): Promise<void> => {
      const size = await api.query.system.eventTopics.size(KEY1, KEY2);

      expect(size.toNumber()).toEqual(0);
    });
  });
});
