// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import String from './String';

type Mapper = (value: string) => string;

// given a starting index, find the closing >
function findClosing (value: string, start: number): number {
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

function unalias (src: string, dest: string): Mapper {
  return (value: string): string => {
    while (value.indexOf(src) !== -1) {
      value = value.replace(src, dest);
    }

    return value;
  };
}

function ungeneric (): Mapper {
  return (value: string): string => {
    for (let index = 0; index < value.length; index++) {
      if (value[index] === '<') {
        if (value.substr(index - 3, 3) !== 'Vec') {
          const start = index + 1;
          const end = findClosing(value, start);

          value = `${value.substr(0, index)}${value.substr(end + 1)}`;
        }
      }
    }

    return value;
  };
}

// remove the type traits
function untrait (): Mapper {
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
function unwrap (check: string): Mapper {
  return (value: string): string => {
    let index = 0;

    while (index !== -1) {
      index = value.indexOf(check);

      if (index !== -1) {
        const start = index + check.length;
        const end = findClosing(value, start);

        value = `${value.substr(start, end - start)}`;
      }
    }

    return value;
  };
}

function applyMappings (initial: string, mappings: Array<Mapper>): string {
  return mappings.reduce((result, fn: Mapper) => {
    return fn(result);
  }, initial);
}

// This is a extended version of String, specifically to handle types. Here we rely full on
// what string provides us, however we also "tweak" the types received from the runtime, i.e.
// we remove the `T::` prefixes found in some types for consistency accross implementation.
export default class Type extends String {
  fromU8a (input: Uint8Array): String {
    super.fromU8a(input);

    // HACK(ery) Take the types and tweak them (slightly?) for consistency
    this.raw = applyMappings(this.raw, [
      // Remove all the trait prefixes
      untrait(),
      // remove boxing, `Box<Proposal>` -> `Proposal`
      unwrap('Box<'),
      // remove generics, `MisbehaviorReport<Hash, BlockNumber>` -> `MisbehaviorReport`
      ungeneric(),
      // convert `RawAddress` -> `Address`
      unalias('RawAddress', 'Address'),
      // convert `PropIndex` -> `ProposalIndex`
      unalias('PropIndex', 'ProposalIndex')
    ]);

    return this;
  }

  toU8a (): Uint8Array {
    // Note Since we are mangling what we get in beyond recognition, we really should
    // not allow the re-encoding. Additionally, this is probably more of a decoder-only
    // helper, so treat it as such.
    throw new Error('Type::toU8a: unimplemented');
  }
}
