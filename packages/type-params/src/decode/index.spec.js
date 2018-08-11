// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import toU8a from '@polkadot/util/u8a/toU8a';

import decode from './index';

describe('decode', () => {
  it('decodes single types', () => {
    expect(
      JSON.stringify(
        decode('BlockNumber', new Uint8Array([
          0x69, 0, 0, 0, 0, 0, 0, 0
        ]))
      )
    ).toEqual('{"length":8,"value":"69"}');
  });

  it('decodes simple arrays', () => {
    expect(
      JSON.stringify(
        decode(['BlockNumber'], new Uint8Array([
          0x03, 0, 0, 0,
          0x69, 0, 0, 0, 0, 0, 0, 0,
          0x42, 0, 0, 0, 0, 0, 0, 0,
          0x15, 0, 0, 0, 0, 0, 0, 0
        ]))
      )
    ).toEqual('{"length":28,"value":["69","42","15"]}');
  });

  it('decodes tuple arrays', () => {
    expect(
      JSON.stringify(
        decode(['BlockNumber', 'bool'], new Uint8Array([
          0x69, 0, 0, 0, 0, 0, 0, 0,
          0x01
        ]))
      )
    ).toEqual('{"length":9,"value":["69",true]}');
  });

  it('decodes arrays with tuples', () => {
    expect(
      JSON.stringify(
        decode([['BlockNumber', 'bool']], new Uint8Array([
          0x03, 0, 0, 0,
          0x69, 0, 0, 0, 0, 0, 0, 0,
          0x01,
          0x42, 0, 0, 0, 0, 0, 0, 0,
          0x00,
          0x15, 0, 0, 0, 0, 0, 0, 0,
          0x01
        ]))
      )
    ).toEqual('{"length":31,"value":[["69",true],["42",false],["15",true]]}');
  });

  it('decodes tuples with arrays', () => {
    expect(
      JSON.stringify(
        decode(['BlockNumber', ['bool']], new Uint8Array([
          0x69, 0, 0, 0, 0, 0, 0, 0,
          0x03, 0, 0, 0,
          0x01,
          0x00,
          0x01
        ]))
      )
    ).toEqual('{"length":15,"value":["69",[true,false,true]]}');
  });

  it('decodes StorageKeyValue arrays', () => {
    expect(
      decode(['StorageKeyValue'], new Uint8Array([
        2, 0, 0, 0,
        4, 0, 0, 0,
        0x11, 0x22, 0x33, 0x44,
        9, 0, 0, 0,
        0x99, 0x88, 0x77, 0x66, 0x55, 0x44, 0x33, 0x22, 0x11,
        1, 0, 0, 0,
        0x11,
        2, 0, 0, 0,
        0x99, 0x88
      ]))
    ).toEqual({
      length: 36,
      value: [
        {
          key: toU8a('0x11223344'),
          value: toU8a('0x998877665544332211')
        },
        {
          key: toU8a('0x11'),
          value: toU8a('0x9988')
        }
      ]
    });
  });
});
