// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Metadata from '@polkadot/metadata/Metadata';
import rpcMetadataV1 from '@polkadot/metadata/Metadata/v1/static';
import rpcMetadata from '@polkadot/metadata/Metadata/static';

import { TypeRegistry } from '../../create';
import json1 from '../../json/EventRecord.001.json';
import json3 from '../../json/EventRecord.003.json';

describe('EventRecord', (): void => {
  const registry = new TypeRegistry();

  describe('EventRecordTo76', (): void => {
    beforeEach((): void => {
      // eslint-disable-next-line no-new
      new Metadata(registry, rpcMetadataV1);
    });

    it('decodes correctly', (): void => {
      const records = registry.createType('Vec<EventRecord>', json1.params.result.changes[0][1]) as any;
      const er = records[0];

      expect(er.phase.type).toEqual('ApplyExtrinsic');
    });
  });

  describe('EventRecord (current)', (): void => {
    beforeEach((): void => {
      // eslint-disable-next-line no-new
      new Metadata(registry, rpcMetadata);
    });

    it('decodes older EventRecord correctly', (): void => {
      const records = registry.createType('Vec<EventRecord>', json1.params.result.changes[0][1], true) as any;
      const er = records[0];

      expect(er.phase.type).toEqual('ApplyExtrinsic');
    });

    it('decodes EventRecord with topics correctly', (): void => {
      const hex = json3.params.result.changes[0][1];
      const records = registry.createType('Vec<EventRecord>', hex, true) as any;
      const er = records[0];

      expect(er.phase.type).toEqual('ApplyExtrinsic');
      // additional payment info, weight u64 (vs u32)
      expect(records.toHex()).toEqual(hex + '000000000000' + '00000000');
    });
  });
});
