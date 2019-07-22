// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import createType from '../codec/createType';
import Vector from '../codec/Vector';
import json1 from '../json/EventRecord.001.json';
import json3 from '../json/EventRecord.003.json';
import { injectDefinitions } from '../srml';
import Metadata from '../Metadata';
import metadataV0 from '../Metadata/v0/static';
import metadata from '../Metadata/static';
import Event from './Event';
import EventRecord from './EventRecord';

describe('EventRecord', (): void => {
  describe('EventRecord_0_76', (): void => {
    beforeEach((): void => {
      injectDefinitions();

      Event.injectMetadata(
        new Metadata(metadataV0)
      );
    });

    it('decodes correctly', (): void => {
      const records: Vector<EventRecord> = createType('Vec<EventRecord>', json1.params.result.changes[0][1]) as any;
      const er = records[0];

      expect(er.phase.type).toEqual('ApplyExtrinsic');
    });
  });

  describe('EventRecord (current)', (): void => {
    beforeEach((): void => {
      injectDefinitions();

      Event.injectMetadata(
        new Metadata(metadata)
      );
    });

    it('decodes older eventrecord correctly', (): void => {
      const records: Vector<EventRecord> = createType('Vec<EventRecord>', json1.params.result.changes[0][1], true) as any;
      const er = records[0];

      expect(er.phase.type).toEqual('ApplyExtrinsic');
    });

    it('decodes eventrecord with topics correctly', (): void => {
      const hex = json3.params.result.changes[0][1];
      const records: Vector<EventRecord> = createType('Vec<EventRecord>', hex, true) as any;
      const er = records[0];

      expect(er.phase.type).toEqual('ApplyExtrinsic');
      expect(records.toHex()).toEqual(hex);
    });
  });
});
