// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Metadata from './Metadata';
import rpcdata from './Metadata.rpc';
import bbqBirch from './json/Metadata.001.json';
import compacted from './json/Metadata.002.json';

describe('Metadata', () => {
  it('decodes properly', () => {
    const decoded = new Metadata(rpcdata);
    const str = JSON.stringify(decoded.toJSON());

    console.error(str);
    console.error(decoded.getUniqTypes());

    expect(decoded.events.length).not.toBe(0);
  });

  it('decodes BBQ properly', () => {
    const decoded = new Metadata(bbqBirch.result);

    expect(decoded.events.length).not.toBe(0);
  });

  it('decodes Compacted properly', () => {
    const decoded = new Metadata(compacted.result);

    expect(decoded.events.length).not.toBe(0);
  });
});
