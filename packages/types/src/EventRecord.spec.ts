// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import createType from './codec/createType';
import Vector from './codec/Vector';
import json from './json/EventRecord.001.json';
import { EventRecord } from './index';

describe('EventRecord', () => {
  it('decodes correctly', () => {
    const records: Vector<EventRecord> = createType('Vec<EventRecord>', json.params.result.changes[0][1]) as any;
    const er = records.get(0);

    expect(er.phase.type).toEqual('ApplyExtrinsic');
  });
});
