// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import createType from './codec/createType';
import Vector from './codec/Vector';
import json1 from './json/EventRecord.001.json';
import json2 from './json/EventRecord.002.json';
import AccountId from './AccountId';
import Event from './Event';
import EventRecord from './EventRecord';
import Metadata from './Metadata';
import metadataRpc from './/Metadata.rpc';

describe('EventRecord', () => {
  beforeEach(() => {
    Event.injectMetadata(
      new Metadata(metadataRpc)
    );
  });

  it('decodes correctly', () => {
    const records: Vector<EventRecord> = createType('Vec<EventRecord>', json1.params.result.changes[0][1]) as any;
    const er = records[0];

    expect(er.phase.type).toEqual('ApplyExtrinsic');
  });

  it('decodes more complex events', () => {
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
