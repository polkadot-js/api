// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Text from './Text';

type Mapper = (value: string) => string;

const ALLOWED_BOXES = ['Option', 'Vec'];

// This is a extended version of String, specifically to handle types. Here we rely full on
// what string provides us, however we also "tweak" the types received from the runtime, i.e.
// we remove the `T::` prefixes found in some types for consistency accross implementation.
export default class Type extends Text {
  private _originalLength: number = 0;

  constructor (value?: Text | string) {
    super(value);

    this._cleanupTypes();
  }

  // NOTE Length is used in the decoding calculations, so return the original (pre-cleanup)
  // length of the data. Since toU8a is disabled, this does not affect encoding, but rather
  // only the decoding leg, allowing the decoders to work with original pointers
  get length (): number {
    return this._originalLength;
  }

  // Note Since we are mangling what we get in beyond recognition, we really should
  // not allow the re-encoding. Additionally, this is probably more of a decoder-only
  // helper, so treat it as such.
  toU8a (isBare?: boolean): Uint8Array {
    throw new Error('Type::toU8a: unimplemented');
  }

  // HACK(ery) Take the types and tweak them (slightly?) for consistency
  private _cleanupTypes (): Type {
    const mappings: Array<Mapper> = [
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

    this._originalLength = this.raw.length;
    this.raw = mappings.reduce((result, fn) => {
      return fn(result);
    }, this.raw).trim();

    return this;
  }

  // given a starting index, find the closing >
  private _findClosing (value: string, start: number): number {
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

  private _alias (src: string, dest: string): Mapper {
    return (value: string): string => {
      return value.replace(
        new RegExp(src, 'g'), dest
      );
    };
  }

  private _removeGenerics (): Mapper {
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
            const end = this._findClosing(value, index + 1);

            value = `${value.substr(0, index)}${value.substr(end + 1)}`;
          }
        }
      }

      return value;
    };
  }

  // remove the PairOf wrappers
  private _removePairOf (): Mapper {
    return (value: string): string => {
      for (let index = 0; index < value.length; index++) {
        if (value.substr(index, 7) === 'PairOf<') {
          const start = index + 7;
          const end = this._findClosing(value, start);
          const type = value.substr(start, end - start);

          value = `${value.substr(0, index)}(${type}, ${type})${value.substr(end + 1)}`;
        }
      }

      return value;
    };
  }

  // remove the type traits
  private _removeTraits (): Mapper {
    return (value: string): string => {
      return value
        // anything `T::<type>` to end up as `<type>`
        .replace(/T::/g, '')
        // `system::` with `` - basically we find `<T as system::Trait>`
        .replace(/system::/g, '')
        // replace `<T as Trait>::` (possibly sanitiused just above)
        .replace(/<T as Trait>::/g, '');
    };
  }

  // remove wrapping values, i.e. Box<Proposal> -> Proposal
  private _removeWrap (_check: string): Mapper {
    const check = `${_check}<`;

    return (value: string): string => {
      let index = 0;

      while (index !== -1) {
        index = value.indexOf(check);

        if (index !== -1) {
          const start = index + check.length;
          const end = this._findClosing(value, start);

          value = `${value.substr(0, index)}${value.substr(start, end - start)}${value.substr(end + 1)}`;
        }
      }

      return value;
    };
  }
}
