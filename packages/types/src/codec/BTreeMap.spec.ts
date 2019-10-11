import '../injector';
import BTreeMap from './BTreeMap';
import Text from '../primitive/Text';
import U32 from '../primitive/U32';
import { CodecTo } from '../types';
import { CodecTo } from '../types';

import Text from '../primitive/Text';
import U32 from '../primitive/U32';
import BTreeMap from './BTreeMap';
import Struct from './Struct';

const expectedMap = new Map<Text, U32>();
expectedMap.set(new Text('bazzing'), new U32(69));

describe('BTreeMap', (): void => {
  describe('decoding', (): void => {
    const testDecode = (type: string, input: any): void =>
      it(`can decode from ${type}`, (): void => {
        const s = new BTreeMap(Text, U32, input);

        expect(s.toString()).toBe('{"bazzing":69}');
      });

    testDecode('map', expectedMap);
    testDecode('hex', '0x041c62617a7a696e6745000000');
    testDecode('Uint8Array', Uint8Array.from([4, 28, 98, 97, 122, 122, 105, 110, 103, 69, 0, 0, 0]));
  });

  describe('encoding', (): void => {
    const testEncode = (to: CodecTo, expected: any): void =>
      it(`can encode ${to}`, (): void => {
        const s = new BTreeMap(Text, U32, expectedMap);
        expect(s[to]()).toEqual(expected);
      });

    testEncode('toHex', '0x041c62617a7a696e6745000000');
    testEncode('toJSON', { bazzing: 69 });
    testEncode('toU8a', Uint8Array.from([4, 28, 98, 97, 122, 122, 105, 110, 103, 69, 0, 0, 0]));
    testEncode('toString', '{"bazzing":69}');
  });

  it('decodes null', (): void => {
    expect(
      new (
        BTreeMap.with(Text, U32)
      )(null).toString()
    ).toEqual('{}');
  });

  it('decodes within more complicated types', (): void => {
    const s = new Struct({
      placeholder: U32,
      value: BTreeMap.with(Text, U32)
    });
    s.set('value', new BTreeMap(Text, U32, expectedMap));
    expect(s.toString()).toBe('{"placeholder":0,"value":{"bazzing":69}}');
  });

  it('throws when it cannot decode', (): void => {
    expect(
      (): BTreeMap<Text, U32> => new (
        BTreeMap.with(Text, U32)
      )('ABC')
    ).toThrowError(/BTreeMap: cannot decode type/);
  });

  it('correctly encodes length', (): void => {
    expect(
      new (
        BTreeMap.with(Text, U32))(expectedMap).encodedLength
    ).toEqual(13);
  });

  it('generates sane toRawTypes', (): void => {
    expect(new (BTreeMap.with(Text, U32))().toRawType()).toBe('BTreeMap<Text,u32>');
    expect(new (BTreeMap.with(Text, Text))().toRawType()).toBe('BTreeMap<Text,Text>');
    expect(new (BTreeMap.with(Text, Struct.with({ a: U32, b: Text })))().toRawType())
      .toBe('BTreeMap<Text,{"a":"u32","b":"Text"}>');
  });
});
