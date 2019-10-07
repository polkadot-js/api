// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '../injector';

import { hexToString } from '@polkadot/util';

import { u32, Text } from '../primitive';
import Result from './Result';

describe('Result', (): void => {
  const Type = Result.with(u32, Text);

  it('has a sane toRawType representation', (): void => {
    expect(new Type().toRawType()).toEqual('Result<u32,Text>');
  });

  it('decodes from a u8a (success)', (): void => {
    const result = new Type(new Uint8Array([0, 1, 2, 3, 4]));

    expect(result.isOk);
    expect(result.asOk.toU8a()).toEqual(new Uint8Array([1, 2, 3, 4]));
    expect(result.toHex()).toEqual('0x0001020304');
    expect(result.toJSON()).toEqual({
      Ok: 0x04030201
    });
  });

  it('decodes from a u8a (error)', (): void => {
    const result = new Type(new Uint8Array([1, 4 << 2, 100, 101, 102, 103]));

    expect(result.isError);
    expect(result.asError.toU8a()).toEqual(new Uint8Array([4 << 2, 100, 101, 102, 103]));
    expect(result.toHex()).toEqual('0x011064656667');
    expect(result.toJSON()).toEqual({
      Error: hexToString('0x64656667')
    });
  });

  it('decodes from a JSON representation', (): void => {
    const result = new Type({ Error: 'error' });

    expect(result.toHex()).toEqual('0x01146572726f72');
  });
});
