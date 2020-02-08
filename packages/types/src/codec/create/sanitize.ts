/* eslint-disable @typescript-eslint/no-use-before-define */
// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

type Mapper = (value: string) => string;

const ALLOWED_BOXES = ['BTreeMap', 'BTreeSet', 'Compact', 'Linkage', 'Result', 'Option', 'Vec'];
const BOX_PRECEDING = ['<', '(', '[', '"', ',', ' ']; // start of vec, tuple, fixed array, part of struct def or in tuple

const mappings: Mapper[] = [
  // alias <T::InherentOfflineReport as InherentOfflineReport>::Inherent -> InherentOfflineReport
  _alias('<T::InherentOfflineReport as InherentOfflineReport>::Inherent', 'InherentOfflineReport'),
  // <T::Balance as HasCompact>
  _cleanupCompact(),
  // Remove all the trait prefixes
  _removeTraits(),
  // remove PairOf<T> -> (T, T)
  _removePairOf(),
  // remove boxing, `Box<Proposal>` -> `Proposal`
  _removeWrap('Box'),
  // remove generics, `MisbehaviorReport<Hash, BlockNumber>` -> `MisbehaviorReport`
  _removeGenerics(),
  // alias String -> Text (compat with jsonrpc methods)
  _alias('String', 'Text'),
  // alias Vec<u8> -> Bytes
  _alias('Vec<u8>', 'Bytes'),
  // alias &[u8] -> Bytes
  _alias('&\\[u8\\]', 'Bytes'),
  // alias RawAddress -> Address
  _alias('RawAddress', 'Address'),
  // lookups, mapped to Address/AccountId as appropriate in runtime
  _alias('Lookup::Source', 'LookupSource'),
  _alias('Lookup::Target', 'LookupTarget'),
  // alias for grandpa internal, as used in polkadot
  _alias('grandpa::', ''),
  // specific for session internal
  _alias('session::', ''),
  // specific for staking/slashing.rs internal
  _alias('slashing::', ''),
  // HACK duplication between contracts & primitives, however contracts prefixed with exec
  _alias('exec::StorageKey', 'ContractStorageKey'),
  // Phantom
  _alias('rstd::marker::PhantomData', 'PhantomData'),
  _alias('sp_std::marker::PhantomData', 'PhantomData'),
  // flattens tuples with one value, `(AccountId)` -> `AccountId`
  _flattenSingleTuple(),
  // converts ::Type to Type, <T as Trait<I>>::Proposal -> ::Proposal
  _removeColonPrefix()
];

// given a starting index, find the closing >
function _findClosing (value: string, start: number): number {
  let depth = 0;

  for (let index = start; index < value.length; index++) {
    if (value[index] === '>') {
      if (!depth) {
        return index;
      }

      depth--;
    } else if (value[index] === '<') {
      depth++;
    }
  }

  throw new Error(`Unable to find closing matching <> on '${value}' (start ${start})`);
}

function _alias (src: string, dest: string): Mapper {
  return (value: string): string => {
    return value.replace(
      new RegExp(src, 'g'), dest
    );
  };
}

function _cleanupCompact (): Mapper {
  return (value: string): string => {
    for (let index = 0; index < value.length; index++) {
      if (value[index] !== '<') {
        continue;
      }

      const end = _findClosing(value, index + 1) - 14;

      if (value.substr(end, 14) === ' as HasCompact') {
        value = `Compact<${value.substr(index + 1, end - index - 1)}>`;
      }
    }

    return value;
  };
}

function _flattenSingleTuple (): Mapper {
  return (value: string): string => {
    return value.replace(/\(([^,]+)\)/, '$1');
  };
}

function _removeColonPrefix (): Mapper {
  return (value: string): string => {
    return value.replace(/^::/, '');
  };
}

function _removeGenerics (): Mapper {
  return (value: string): string => {
    for (let index = 0; index < value.length; index++) {
      if (value[index] === '<') {
        // check against the allowed wrappers, be it Vec<..>, Option<...> ...
        const box = ALLOWED_BOXES.find((box): boolean => {
          const start = index - box.length;

          return (start >= 0 && value.substr(start, box.length) === box) && (
            // make sure it is stand-alone, i.e. don't catch ElectionResult<...> as Result<...>
            start === 0 || BOX_PRECEDING.includes(value[start - 1])
          );
        });

        // we have not found anything, unwrap generic innards
        if (!box) {
          const end = _findClosing(value, index + 1);

          value = `${value.substr(0, index)}${value.substr(end + 1)}`;
        }
      }
    }

    return value;
  };
}

// remove the PairOf wrappers
function _removePairOf (): Mapper {
  return (value: string): string => {
    for (let index = 0; index < value.length; index++) {
      if (value.substr(index, 7) === 'PairOf<') {
        const start = index + 7;
        const end = _findClosing(value, start);
        const type = value.substr(start, end - start);

        value = `${value.substr(0, index)}(${type},${type})${value.substr(end + 1)}`;
      }
    }

    return value;
  };
}

// remove the type traits
function _removeTraits (): Mapper {
  return (value: string): string => {
    return value
      // remove all whitespaces
      .replace(/\s/g, '')
      // anything `T::<type>` to end up as `<type>`
      .replace(/T::/g, '')
      // anything `Self::<type>` to end up as `<type>`
      .replace(/Self::/g, '')
      // `system::` with `` - basically we find `<T as system::Trait>`
      .replace(/system::/g, '')
      // replace `<T as Trait>::` (whitespaces were removed above)
      .replace(/<TasTrait>::/g, '')
      // replace `<T as something::Trait>::` (whitespaces were removed above)
      .replace(/<Tas[a-z]+::Trait>::/g, '')
      // replace `<Self as Trait>::` (whitespaces were removed above)
      .replace(/<SelfasTrait>::/g, '')
      // replace <Lookup as StaticLookup>
      .replace(/<LookupasStaticLookup>/g, 'Lookup')
      // replace `<...>::Type`
      .replace(/::Type/g, '')
      // replace `wasm::*` eg. `wasm::PrefabWasmModule`
      .replace(/wasm::/g, '')
      // `sr_std::marker::`
      .replace(/sr_std::marker::/g, '');
  };
}

// remove wrapping values, i.e. Box<Proposal> -> Proposal
function _removeWrap (_check: string): Mapper {
  const check = `${_check}<`;

  return (value: string): string => {
    let index = 0;

    while (index !== -1) {
      index = value.indexOf(check);

      if (index !== -1) {
        const start = index + check.length;
        const end = _findClosing(value, start);

        value = `${value.substr(0, index)}${value.substr(start, end - start)}${value.substr(end + 1)}`;
      }
    }

    return value;
  };
}

export default function sanitize (value: string): string {
  return mappings.reduce((result, fn): string => {
    return fn(result);
  }, value).trim();
}
