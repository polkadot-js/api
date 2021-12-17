// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '@polkadot/types';
import { Result, Text, u32 } from '@polkadot/types-codec';
import { hexToString } from '@polkadot/util';

describe('Result', (): void => {
  const registry = new TypeRegistry();
  const Type = Result.with({ Err: Text, Ok: u32 });

  it('has a sane toRawType representation', (): void => {
    expect(new Type(registry).toRawType()).toEqual('Result<u32,Text>');
  });

  it('decodes from a u8a (success)', (): void => {
    const result = new Type(registry, new Uint8Array([0, 1, 2, 3, 4]));

    expect(result.isOk);
    expect(result.asOk.toU8a()).toEqual(new Uint8Array([1, 2, 3, 4]));
    expect(result.toHex()).toEqual('0x0001020304');
    expect(result.toJSON()).toEqual({
      ok: 0x04030201
    });
  });

  it('decodes from a u8a (error)', (): void => {
    const result = new Type(registry, new Uint8Array([1, 4 << 2, 100, 101, 102, 103]));

    expect(result.isErr);
    expect(result.asErr.toU8a()).toEqual(new Uint8Array([4 << 2, 100, 101, 102, 103]));
    expect(result.toHex()).toEqual('0x011064656667');
    expect(result.toJSON()).toEqual({
      err: hexToString('0x64656667')
    });
  });

  it('decodes from a JSON representation', (): void => {
    const result = new Type(registry, { Err: 'error' });

    expect(result.isErr).toBe(true);
    expect(result.isError).toBe(true);
    expect(result.asErr.toString()).toEqual('error');
    expect(result.asError.toString()).toEqual('error');
    expect(result.toHex()).toEqual('0x01146572726f72');
  });

  it('decodes reusing instanciated inputs', (): void => {
    const foo = new Text(registry, 'bar');

    expect(
      new Result(
        registry,
        Text,
        Text,
        { Ok: foo }
      ).asOk
    ).toBe(foo);
  });

  it('returns a proper raw typedef rom a built-in', (): void => {
    expect(registry.createType('DispatchResult').toRawType()).toEqual('Result<(),DispatchError>');
  });
});
