// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import createType from '../codec/createType';
import Vector from '../codec/Vector';
import json1 from '../json/EventRecord.001.json';
import json2 from '../json/EventRecord.002.json';
import json3 from '../json/EventRecord.003.json';
import AccountId from './AccountId';
import Event from './Event';
import EventRecord from './EventRecord';
import Metadata from '../Metadata';
import metadataV0 from '../Metadata/v0/static';
import metadataV1 from '../Metadata/static';
import metadataV4 from '../Metadata/v4/static';

describe('EventRecord', () => {
  describe('v0', () => {
    beforeEach(() => {
      Event.injectMetadata(
        new Metadata(metadataV0)
      );
    });

    it('decodes correctly', () => {
      const records: Vector<EventRecord> = createType('Vec<EventRecord>', json1.params.result.changes[0][1]) as any;
      const er = records[0];

      expect(er.phase.type).toEqual('ApplyExtrinsic');
    });

    // FIXME skipping this one, need an actual updated sample for the actual new types
    it.skip('decodes more complex events', () => {
      const records: Vector<EventRecord> = createType('Vec<EventRecord>', json2.params.result.changes[0][1]) as any;

      expect(records).toHaveLength(4);

      const er = records[2];

      expect(
        er.event.data.toArray().map((v) => v.toString())
      ).toEqual(
        [
          new AccountId('0xd2de7394ae047a5502ad9adb9cc69ff6fe484033bfce874d775da947487cd832').toString(),
          new AccountId('0x37e027d776cd005c12bcf6722421374a9037167a0ceaf918f341c4ad68d54e59').toString(),
          '1000',
          '0'
        ]
      );
    });
  });

  describe.skip('v1', () => {
    beforeEach(() => {
      Event.injectMetadata(
        new Metadata(metadataV1)
      );
    });

    it('decodes correctly', () => {
      const records: Vector<EventRecord> = createType('Vec<EventRecord>', json3.params.result.changes[0][1]) as any;
      const er = records[0];

      expect(er.phase.type).toEqual('ApplyExtrinsic');
    });
  });

  describe.skip('v4', () => {
    beforeEach(() => {
      Event.injectMetadata(
        new Metadata(metadataV4)
      );
    });

    it('decodes correctly', () => {
      const records: Vector<EventRecord> = createType('Vec<EventRecord>', json3.params.result.changes[0][1]) as any;
      const er = records[0];

      expect(er.phase.type).toEqual('ApplyExtrinsic');
    });
  });
});
