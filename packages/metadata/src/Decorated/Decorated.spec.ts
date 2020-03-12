// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '@polkadot/types/create';
import { u8aToHex } from '@polkadot/util';

import Decorated from './Decorated';
import json from '../Metadata/static';

const registry = new TypeRegistry();
const decorated = new Decorated(registry, json);

describe('Decorated', () => {
  it('should correctly get Alice\'s nonce storage key (u8a)', (): void => {
    expect(
      u8aToHex(
        decorated.query.system.account('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY')
      )
    ).toEqual(
      '0x010126aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da92e3fb4c297a84c5cebc0e78257d213d0927ccc7596044c6ba013dd05522aacba'
    );
  });

  it('should return properly-encoded transactions', (): void => {
    expect(
      registry.createType('Extrinsic', decorated.tx.timestamp.set([10101])).toU8a()
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
    expect(decorated.consts.democracy.cooloffPeriod).toBeInstanceOf(registry.createClass('BlockNumber'));
    expect(decorated.consts.democracy.cooloffPeriod.toHex()).toEqual('0x000c4e00');
  });
});
