// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

interface SanitizeOptions {
  allowNamespaces?: boolean;
}

type Mapper = (value: string, options?: SanitizeOptions) => string;

const ALLOWED_BOXES = ['BTreeMap', 'BTreeSet', 'Compact', 'DoNotConstruct', 'HashMap', 'Int', 'Linkage', 'Result', 'Option', 'UInt', 'Vec'];
const BOX_PRECEDING = ['<', '(', '[', '"', ',', ' ']; // start of vec, tuple, fixed array, part of struct def or in tuple

const mappings: Mapper[] = [
  // alias <T::InherentOfflineReport as InherentOfflineReport>::Inherent -> InherentOfflineReport
  alias(['<T::InherentOfflineReport as InherentOfflineReport>::Inherent'], 'InherentOfflineReport', false),
  // <T::Balance as HasCompact>
  cleanupCompact(),
  // Remove all the trait prefixes
  removeTraits(),
  // remove PairOf<T> -> (T, T)
  removePairOf(),
  // remove boxing, `Box<Proposal>` -> `Proposal`
  removeWrap('Box'),
  // remove generics, `MisbehaviorReport<Hash, BlockNumber>` -> `MisbehaviorReport`
  removeGenerics(),
  // alias String -> Text (compat with jsonrpc methods)
  alias(['String'], 'Text'),
  // alias Vec<u8> -> Bytes
  alias(['Vec<u8>', '&\\[u8\\]'], 'Bytes'),
  // alias RawAddress -> Address
  alias(['RawAddress'], 'Address'),
  // lookups, mapped to Address/AccountId as appropriate in runtime
  alias(['Lookup::Source'], 'LookupSource'),
  alias(['Lookup::Target'], 'LookupTarget'),
  // HACK duplication between contracts & primitives, however contracts prefixed with exec
  alias(['exec::StorageKey'], 'ContractStorageKey'),
  // flattens tuples with one value, `(AccountId)` -> `AccountId`
  flattenSingleTuple(),
  // converts ::Type to Type, <T as Trait<I>>::Proposal -> Proposal
  removeColons()
];

// given a starting index, find the closing >
export function findClosing (value: string, start: number): number {
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

export function alias (src: string[], dest: string, withChecks = true): Mapper {
  return (value: string): string => {
    return src.reduce((value, src): string => {
      return value
        .replace(
          new RegExp(`(^${src}|${BOX_PRECEDING.map((box) => `\\${box}${src}`).join('|')})`, 'g'),
          (src): string =>
            withChecks && BOX_PRECEDING.includes(src[0])
              ? `${src[0]}${dest}`
              : dest
        );
    }, value);
  };
}

export function cleanupCompact (): Mapper {
  return (value: string): string => {
    for (let index = 0; index < value.length; index++) {
      if (value[index] !== '<') {
        continue;
      }

      const end = findClosing(value, index + 1) - 14;

      if (value.substr(end, 14) === ' as HasCompact') {
        value = `Compact<${value.substr(index + 1, end - index - 1)}>`;
      }
    }

    return value;
  };
}

export function flattenSingleTuple (): Mapper {
  return (value: string): string => {
    return value.replace(/\(([^,]+)\)/, '$1');
  };
}

export function removeColons (): Mapper {
  return (value: string, { allowNamespaces }: SanitizeOptions = {}): string => {
    let index = 0;

    while (index !== -1) {
      index = value.indexOf('::');

      if (index === 0) {
        value = value.substr(2);
      } else if (index !== -1) {
        if (allowNamespaces) {
          return value;
        }

        let start = index;

        while (start !== -1 && !BOX_PRECEDING.includes(value[start])) {
          start--;
        }

        value = `${value.substr(0, start + 1)}${value.substr(index + 2)}`;
      }
    }

    return value;
  };
}

export function removeGenerics (): Mapper {
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
          const end = findClosing(value, index + 1);

          value = `${value.substr(0, index)}${value.substr(end + 1)}`;
        }
      }
    }

    return value;
  };
}

// remove the PairOf wrappers
export function removePairOf (): Mapper {
  return (value: string): string => {
    for (let index = 0; index < value.length; index++) {
      if (value.substr(index, 7) === 'PairOf<') {
        const start = index + 7;
        const end = findClosing(value, start);
        const type = value.substr(start, end - start);

        value = `${value.substr(0, index)}(${type},${type})${value.substr(end + 1)}`;
      }
    }

    return value;
  };
}

// remove the type traits
export function removeTraits (): Mapper {
  return (value: string): string => {
    return value
      // remove all whitespaces
      .replace(/\s/g, '')
      // anything `T::<type>` to end up as `<type>`
      .replace(/(T|Self)::/g, '')
      // replace `<T as Trait>::` (whitespaces were removed above)
      .replace(/<(T|Self)asTrait>::/g, '')
      // replace `<T as something::Trait>::` (whitespaces were removed above)
      .replace(/<Tas[a-z]+::Trait>::/g, '')
      // replace <Lookup as StaticLookup>
      .replace(/<LookupasStaticLookup>/g, 'Lookup')
      // replace `<...>::Type`
      .replace(/::Type/g, '');
  };
}

// remove wrapping values, i.e. Box<Proposal> -> Proposal
export function removeWrap (_check: string): Mapper {
  const check = `${_check}<`;

  return (value: string): string => {
    let index = 0;

    while (index !== -1) {
      index = value.indexOf(check);

      if (index !== -1) {
        const start = index + check.length;
        const end = findClosing(value, start);

        value = `${value.substr(0, index)}${value.substr(start, end - start)}${value.substr(end + 1)}`;
      }
    }

    return value;
  };
}

export default function sanitize (value: string, options?: SanitizeOptions): string {
  return mappings.reduce((result, fn): string => {
    return fn(result, options);
  }, value).trim();
}
