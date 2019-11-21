// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ClassOf, createType, TypeRegistry } from '@polkadot/types/codec/create';

import Decorated from './Decorated';
import json from '../Metadata/static';

const registry = new TypeRegistry();
const decorated = new Decorated(registry, json);

describe('Decorated', () => {
  it('should correctly get Alice\'s freeBalance storage key (u8a)', (): void => {
    expect(
      decorated.query
        .balances
        .freeBalance('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY')
    ).toEqual(
      // length prefix attached
      Uint8Array.from([
        128, 127, 134, 78, 24, 227, 221, 139, 88, 56, 99, 16, 210, 254, 9, 25, 238, 242, 124, 110, 85, 133, 100, 183, 246, 127, 34, 217, 157, 32, 245, 135, 187
      ])
    );
  });

  it('should return properly-encoded transactions', (): void => {
    expect(
      createType(registry, 'Extrinsic', decorated.tx.timestamp.set([10101])).toU8a()
    ).toEqual(
      new Uint8Array([
        // length (encoded)
        4 << 2,
        // version, no signature
        1,
        // index
        3, 0,
        // values, Compact<Moment>
        116
      ])
    );
  });

  it('should return constants with the correct type and value', (): void => {
    expect(decorated.consts.democracy.cooloffPeriod).toBeInstanceOf(ClassOf(registry, 'BlockNumber'));
    expect(decorated.consts.democracy.cooloffPeriod.toHex()).toEqual('0x000c4e00');
  });
});
