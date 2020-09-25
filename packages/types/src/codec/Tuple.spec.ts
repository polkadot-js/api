// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { VoteThreshold } from '../interfaces/elections';
import { BlockNumber } from '../interfaces/runtime';
import { CodecTo } from '../types';

import Metadata from '@polkadot/metadata/Metadata';
import rpcMetadata from '@polkadot/metadata/Metadata/static';

import { TypeRegistry } from '../create';
import Text from '../primitive/Text';
import U32 from '../primitive/U32';
import U128 from '../primitive/U128';
import Tuple from './Tuple';

describe('Tuple', (): void => {
  const registry = new TypeRegistry();
  let tuple: Tuple;

  beforeEach((): void => {
    tuple = new Tuple(
      registry,
      [Text, U32],
      ['bazzing', 69]
    );
  });

  describe('decoding', (): void => {
    const testDecode = (type: string, input: any): void =>
      it(`can decode from ${type}`, (): void => {
        const t = new Tuple(registry, [
          Text,
          U32
        ], input);

        expect(
          t.toJSON()
        ).toEqual(['bazzing', 69]);
      });

    testDecode('array', ['bazzing', 69]);
    testDecode('hex', '0x1c62617a7a696e6745000000');
    testDecode('Uint8Array', Uint8Array.from([28, 98, 97, 122, 122, 105, 110, 103, 69, 0, 0, 0]));

    it('decodes reusing instantiated inputs', (): void => {
      const foo = new Text(registry, 'bar');

      expect(
        (new Tuple(registry, [Text], [foo]))[0]
      ).toBe(foo);
    });

    it('decodes properly from complex types', (): void => {
      const INPUT = '0xcc0200000000';
      const test = registry.createType('(u32, [u32; 0], u16)' as 'u32', INPUT);

      expect(test.encodedLength).toEqual(4 + 0 + 2);
      expect(test.toHex()).toEqual(INPUT);
    });
  });

  describe('encoding', (): void => {
    const testEncode = (to: CodecTo | 'toArray', expected: any): void =>
      it(`can encode ${to}`, (): void => {
        expect(tuple[to]()).toEqual(expected);
      });

    testEncode('toHex', '0x1c62617a7a696e6745000000');
    testEncode('toJSON', ['bazzing', 69]);
    testEncode('toU8a', Uint8Array.from([28, 98, 97, 122, 122, 105, 110, 103, 69, 0, 0, 0]));
    testEncode('toString', '["bazzing",69]');
  });

  it('creates from string types', (): void => {
    expect(
      new Tuple(
        registry,
        ['Text', 'u32', U32],
        ['foo', 69, 42]
      ).toString()
    ).toEqual('["foo",69,42]');
  });

  it('creates properly via actual hex string', (): void => {
    const metadata = new Metadata(registry, rpcMetadata);

    registry.setMetadata(metadata);

    const test = new (Tuple.with([
      registry.createClass('BlockNumber'), registry.createClass('VoteThreshold')
    ]
    ))(registry, '0x6219000001');

    expect((test[0] as BlockNumber).toNumber()).toEqual(6498);
    expect((test[1] as VoteThreshold).toNumber()).toEqual(1);
  });

  it('exposes the Types', (): void => {
    expect(tuple.Types).toEqual(['Text', 'u32']);
  });

  it('exposes the Types (object creation)', (): void => {
    const test = new Tuple(registry, {
      BlockNumber: registry.createClass('BlockNumber'),
      VoteThreshold: registry.createClass('VoteThreshold')
    }, []);

    expect(test.Types).toEqual(['BlockNumber', 'VoteThreshold']);
  });

  it('exposes filter', (): void => {
    expect(tuple.filter((v): boolean => v.toJSON() === 69)).toEqual([new U32(registry, 69)]);
  });

  it('exposes map', (): void => {
    expect(tuple.map((v): string => v.toString())).toEqual(['bazzing', '69']);
  });

  describe('utils', (): void => {
    it('compares against inputs', (): void => {
      expect(tuple.eq(['bazzing', 69])).toBe(true);
    });

    it('compares against inputs (mismatch)', (): void => {
      expect(tuple.eq(['bazzing', 72])).toBe(false);
    });
  });

  describe('toRawType', (): void => {
    it('generates sane value with array types', (): void => {
      expect(
        new Tuple(registry, [U128, registry.createClass('BlockNumber')]).toRawType()
      ).toEqual('(u128,BlockNumber)');
    });

    it('generates sane value with object types', (): void => {
      expect(
        // eslint-disable-next-line sort-keys
        new Tuple(registry, { number: U128, blockNumber: registry.createClass('BlockNumber') }).toRawType()
      ).toEqual('(u128,BlockNumber)');
    });
  });
});
