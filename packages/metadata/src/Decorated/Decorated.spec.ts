// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ClassOf, createType, TypeRegistry } from '@polkadot/types/codec/create';
import { hexToU8a } from '@polkadot/util';

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
      hexToU8a(
        '0x4101c2261276cc9d1f8598ea4b6a74b15c2f6482b9ade7bc6657aaca787ba1add3b4518366b5b1bc7c99bae0ba710af1ac66d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d'
      )
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
