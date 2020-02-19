// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Metadata from '@polkadot/metadata/Metadata';
import rpcMetadataV0 from '@polkadot/metadata/Metadata/v0/static';
import rpcMetadata from '@polkadot/metadata/Metadata/static';

import { createType, TypeRegistry } from '../../create';
import json1 from '../../json/EventRecord.001.json';
import json3 from '../../json/EventRecord.003.json';

describe('EventRecord', (): void => {
  const registry = new TypeRegistry();

  describe('EventRecordTo76', (): void => {
    beforeEach((): void => {
      // eslint-disable-next-line no-new
      new Metadata(registry, rpcMetadataV0);
    });

    it('decodes correctly', (): void => {
      const records = createType(registry, 'Vec<EventRecord>', json1.params.result.changes[0][1]) as any;
      const er = records[0];

      expect(er.phase.type).toEqual('ApplyExtrinsic');
    });
  });

  describe('EventRecord (current)', (): void => {
    beforeEach((): void => {
      // eslint-disable-next-line no-new
      new Metadata(registry, rpcMetadata);
    });

    it('decodes older eventrecord correctly', (): void => {
      const records = createType(registry, 'Vec<EventRecord>', json1.params.result.changes[0][1], true) as any;
      const er = records[0];

      expect(er.phase.type).toEqual('ApplyExtrinsic');
    });

    it('decodes eventrecord with topics correctly', (): void => {
      const hex = json3.params.result.changes[0][1];
      const records = createType(registry, 'Vec<EventRecord>', hex, true) as any;
      const er = records[0];

      expect(er.phase.type).toEqual('ApplyExtrinsic');
      // additional payment info
      expect(records.toHex()).toEqual(`${hex}000000000000`);
    });
  });
});
