// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Text from './Text';

type Mapper = (value: string) => string;

// This is a extended version of String, specifically to handle types. Here we rely full on
// what string provides us, however we also "tweak" the types received from the runtime, i.e.
// we remove the `T::` prefixes found in some types for consistency accross implementation.
export default class Type extends Text {
  constructor (value?: Text | string) {
    super(value);

    this._cleanupTypes();
  }

  fromJSON (input: any): Type {
    super.fromJSON(input);

    return this._cleanupTypes();
  }

  fromU8a (input: Uint8Array): Type {
    super.fromU8a(input);

    return this._cleanupTypes();
  }

  // Note Since we are mangling what we get in beyond recognition, we really should
  // not allow the re-encoding. Additionally, this is probably more of a decoder-only
  // helper, so treat it as such.
  toU8a (): Uint8Array {
    throw new Error('Type::toU8a: unimplemented');
  }

  // HACK(ery) Take the types and tweak them (slightly?) for consistency
  private _cleanupTypes (): Type {
    const mappings: Array<Mapper> = [
      // Remove all the trait prefixes
      this._removeTraits(),
      // remove boxing, `Box<Proposal>` -> `Proposal`
      this._removeWrap('Box'),
      // remove generics, `MisbehaviorReport<Hash, BlockNumber>` -> `MisbehaviorReport`
      this._removeGenerics(),
      // alias Vec<u8> -> Bytes
      this._alias('Vec<u8>', 'Bytes')
      // TODO Check these for possibly matching -
      //   `RawAddress` -> `Address` (implementation looks the same)
      //   `PropIndex` -> `ProposalIndex` (implementation looks the same, however meant as diff)
    ];

    this.raw = mappings.reduce((result, fn) => {
      return fn(result);
    }, this.raw);

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
          if (value.substr(index - 3, 3) !== 'Vec') {
            const start = index + 1;
            const end = this._findClosing(value, start);

            value = `${value.substr(0, index)}${value.substr(end + 1)}`;
          }
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

          value = `${value.substr(start, end - start)}`;
        }
      }

      return value;
    };
  }
}
