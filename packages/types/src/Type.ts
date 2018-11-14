// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Compact, { DEFAULT_LENGTH_BITS } from './codec/Compact';
import U8a from './codec/U8a';
import Text from './Text';

type Mapper = (value: string) => string;

const ALLOWED_BOXES = ['Compact', 'Option', 'Vec'];

// This is a extended version of String, specifically to handle types. Here we rely full on
// what string provides us, however we also "tweak" the types received from the runtime, i.e.
// we remove the `T::` prefixes found in some types for consistency accross implementation.
export default class Type extends Text {
  private _originalLength: number;

  constructor (value: Text | U8a | Uint8Array | string = '') {
    // First decode it with Text
    const textValue = Text.decodeText(value);
    // Then cleanup the textValue to get the @polkadot/types type
    super(
      Type.decodeType(
        textValue
      )
    );

    this._originalLength = textValue.length;

  }

  private static decodeType (value: string) {
    const mappings: Array<Mapper> = [
      // <T::Balance as HasCompact>
      this._cleanupCompact(),
      // Remove all the trait prefixes
      this._removeTraits(),
      // remove PairOf<T> -> (T, T)
      this._removePairOf(),
      // remove boxing, `Box<Proposal>` -> `Proposal`
      this._removeWrap('Box'),
      // remove generics, `MisbehaviorReport<Hash, BlockNumber>` -> `MisbehaviorReport`
      this._removeGenerics(),
      // alias String -> Text (compat with jsonrpc methods)
      this._alias('String', 'Text'),
      // alias Vec<u8> -> Bytes
      this._alias('Vec<u8>', 'Bytes'),
      // alias RawAddress -> Address
      this._alias('RawAddress', 'Address')
      // TODO Check these for possibly matching -
      //   `PropIndex` -> `ProposalIndex` (implementation looks the same, however meant as diff)
    ];

    return mappings.reduce((result, fn) => {
      return fn(result);
    }, value).trim();
  }

  // NOTE Length is used in the decoding calculations, so return the original (pre-cleanup)
  // length of the data. Since toU8a is disabled, this does not affect encoding, but rather
  // only the decoding leg, allowing the decoders to work with original pointers
  get encodedLength (): number {
    return this._originalLength + Compact.encodeU8a(this._originalLength, DEFAULT_LENGTH_BITS).length;
  }

  // Note Since we are mangling what we get in beyond recognition, we really should
  // not allow the re-encoding. Additionally, this is probably more of a decoder-only
  // helper, so treat it as such.
  toU8a (isBare?: boolean): Uint8Array {
    throw new Error('Type::toU8a: unimplemented');
  }

  // given a starting index, find the closing >
  private static _findClosing (value: string, start: number): number {
    let depth = 0;

    for (let index = start; index < value.length; index++) {
      if (value[index] === '>') {
        if (!depth) {
          return index;
        } else {
          depth--;
        }
      } else if (value[index] === '<') {
        depth++;
      }
    }

    throw new Error(`Unable to find closing matching <> on '${value}' (start ${start})`);
  }

  private static _alias (src: string, dest: string): Mapper {
    return (value: string): string => {
      return value.replace(
        new RegExp(src, 'g'), dest
      );
    };
  }

  private static _cleanupCompact (): Mapper {
    return (value: string): string => {
      for (let index = 0; index < value.length; index++) {
        if (value[index] !== '<') {
          continue;
        }

        const end = Type._findClosing(value, index + 1) - 14;

        if (value.substr(end, 14) === ' as HasCompact') {
          value = `Compact<${value.substr(index + 1, end - index - 1)}>`;
        }
      }

      return value;
    };
  }

  private static _removeGenerics (): Mapper {
    return (value: string): string => {
      for (let index = 0; index < value.length; index++) {
        if (value[index] === '<') {
          // check against the allowed wrappers, be it Vec<..>, Option<...> ...
          const box = ALLOWED_BOXES.find((box) => {
            const start = index - box.length;

            return start >= 0 && value.substr(start, box.length) === box;
          });

          // we have not found anything, unwrap generic innards
          if (!box) {
            const end = Type._findClosing(value, index + 1);

            value = `${value.substr(0, index)}${value.substr(end + 1)}`;
          }
        }
      }

      return value;
    };
  }

  // remove the PairOf wrappers
  private static _removePairOf (): Mapper {
    return (value: string): string => {
      for (let index = 0; index < value.length; index++) {
        if (value.substr(index, 7) === 'PairOf<') {
          const start = index + 7;
          const end = Type._findClosing(value, start);
          const type = value.substr(start, end - start);

          value = `${value.substr(0, index)}(${type}, ${type})${value.substr(end + 1)}`;
        }
      }

      return value;
    };
  }

  // remove the type traits
  private static _removeTraits (): Mapper {
    return (value: string): string => {
      return value
        // anything `T::<type>` to end up as `<type>`
        .replace(/T::/g, '')
        // `system::` with `` - basically we find `<T as system::Trait>`
        .replace(/system::/g, '')
        // replace `<T as Trait>::` (possibly sanitised just above)
        .replace(/<T as Trait>::/g, '')
        // replace `<...>::Type`
        .replace(/::Type/g, '');
    };
  }

  // remove wrapping values, i.e. Box<Proposal> -> Proposal
  private static _removeWrap (_check: string): Mapper {
    const check = `${_check}<`;

    return (value: string): string => {
      let index = 0;

      while (index !== -1) {
        index = value.indexOf(check);

        if (index !== -1) {
          const start = index + check.length;
          const end = Type._findClosing(value, start);

          value = `${value.substr(0, index)}${value.substr(start, end - start)}${value.substr(end + 1)}`;
        }
      }

      return value;
    };
  }
}
