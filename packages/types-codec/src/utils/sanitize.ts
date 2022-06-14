// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyString } from '../types';

interface SanitizeOptions {
  allowNamespaces?: boolean;
}

type Mapper = (value: string, options?: SanitizeOptions) => string;

const BOUNDED = ['BTreeMap', 'BTreeSet', 'HashMap', 'Vec'];
const ALLOWED_BOXES = BOUNDED.concat(['Compact', 'DoNotConstruct', 'Int', 'Linkage', 'Range', 'RangeInclusive', 'Result', 'Option', 'UInt', 'WrapperKeepOpaque', 'WrapperOpaque']);
const BOX_PRECEDING = ['<', '(', '[', '"', ',', ' ']; // start of vec, tuple, fixed array, part of struct def or in tuple

const mappings: Mapper[] = [
  // alias <T::InherentOfflineReport as InherentOfflineReport>::Inherent -> InherentOfflineReport
  alias('<T::InherentOfflineReport as InherentOfflineReport>::Inherent', 'InherentOfflineReport', false),
  alias('VecDeque<', 'Vec<', false),
  // <T::Balance as HasCompact>
  cleanupCompact(),
  // Change BoundedVec<Type, Size> to Vec<Type>
  removeExtensions('Bounded', true),
  // Change WeakVec<Type> to Vec<Type>
  removeExtensions('Weak', false),
  // Remove all the trait prefixes
  removeTraits(),
  // remove PairOf<T> -> (T, T)
  removePairOf(),
  // remove boxing, `Box<Proposal>` -> `Proposal`
  removeWrap('Box<'),
  // remove Bounded, `Bounded<Call>` -> `Call`
  removeWrap('Bounded<'),
  // remove generics, `MisbehaviorReport<Hash, BlockNumber>` -> `MisbehaviorReport`
  removeGenerics(),
  // alias String -> Text (compat with jsonrpc methods)
  alias('String', 'Text'),
  // alias Vec<u8> -> Bytes
  alias('Vec<u8>', 'Bytes'),
  alias('&\\[u8\\]', 'Bytes'),
  alias("&'static\\[u8\\]", 'Bytes'),
  // alias RawAddress -> Address
  alias('RawAddress', 'Address'),
  // lookups, mapped to Address/AccountId as appropriate in runtime
  alias('Lookup::Source', 'LookupSource'),
  alias('Lookup::Target', 'LookupTarget'),
  // HACK duplication between contracts & primitives, however contracts prefixed with exec
  alias('exec::StorageKey', 'ContractStorageKey'),
  // flattens tuples with one value, `(AccountId)` -> `AccountId`
  flattenSingleTuple(),
  // converts ::Type to Type, <T as Trait<I>>::Proposal -> Proposal
  removeColons(),
  // remove all trailing spaces - this should always be the last
  trim()
];

/**
 * Given a string, trim it
 * @internal
 */
export function trim (): Mapper {
  return (value: string): string =>
    value.trim();
}

/**
 * Given a starting index, find the closing >
 * @internal
 */
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

/**
 * Alias a sequence to another
 * @internal
 */
export function alias (src: string, dest: string, withChecks = true): Mapper {
  const from = new RegExp(`(^${src}|${BOX_PRECEDING.map((box) => `\\${box}${src}`).join('|')})`, 'g');

  const to = (src: string): string => {
    from.lastIndex = 0;

    return withChecks && BOX_PRECEDING.includes(src[0])
      ? `${src[0]}${dest}`
      : dest;
  };

  return (value: string): string =>
    value.replace(from, to);
}

/**
 * Remove all extra `as HasCompact` occurences
 * @internal
 */
export function cleanupCompact (): Mapper {
  return (value: string): string => {
    if (value.includes(' as HasCompact')) {
      for (let index = 0; index < value.length; index++) {
        if (value[index] === '<') {
          const end = findClosing(value, index + 1) - 14;

          if (value.substring(end, end + 14) === ' as HasCompact') {
            value = `Compact<${value.substring(index + 1, end)}>`;
          }
        }
      }
    }

    return value;
  };
}

/**
 * Adjust a single  value tuple, i.e. (u32) to u32
 * @internal
 */
export function flattenSingleTuple (): Mapper {
  const from1 = /,\)/g;
  const from2 = /\(([^,]+)\)/;

  return (value: string) => {
    from1.lastIndex = 0;

    return value
      // tuples may have trailing commas, e.g. (u32, BlockNumber, )
      .replace(from1, ')')
      // change (u32) -> u32
      .replace(from2, '$1');
  };
}

/**
 * Replace one tag with another
 * @internal
 */
function replaceTagWith (value: string, matcher: string, replacer: (v: string) => string): string {
  let index = -1;

  while (true) {
    index = value.indexOf(matcher, index + 1);

    if (index === -1) {
      return value;
    }

    const start = index + matcher.length;
    const end = findClosing(value, start);

    value = `${value.substring(0, index)}${replacer(value.substring(start, end))}${value.substring(end + 1)}`;
  }
}

/**
 * Remove the Bounded* or Weak* wrappers
 * @internal
 */
export function removeExtensions (type: string, isSized: boolean): Mapper {
  return (value: string): string => {
    for (let i = 0; i < BOUNDED.length; i++) {
      const tag = BOUNDED[i];

      value = replaceTagWith(value, `${type}${tag}<`, (v: string): string => {
        const parts = v
          .split(',')
          .map((s) => s.trim())
          .filter((s) => s);

        if (isSized) {
          parts.pop();
        }

        return `${tag}<${parts.join(',')}>`;
      });
    }

    return value;
  };
}

/**
 * Remove all :: in the tupes
 * @internal
 */
export function removeColons (): Mapper {
  return (value: string, { allowNamespaces }: SanitizeOptions = {}): string => {
    let index = 0;

    while (index !== -1) {
      index = value.indexOf('::');

      if (index === 0) {
        value = value.substring(2);
      } else if (index !== -1) {
        if (allowNamespaces) {
          return value;
        }

        let start = index;

        while (start !== -1 && !BOX_PRECEDING.includes(value[start])) {
          start--;
        }

        value = `${value.substring(0, start + 1)}${value.substring(index + 2)}`;
      }
    }

    return value;
  };
}

/**
 * Remove all generics
 * @internal
 */
export function removeGenerics (): Mapper {
  return (value: string): string => {
    for (let index = 0; index < value.length; index++) {
      if (value[index] === '<') {
        // check against the allowed wrappers, be it Vec<..>, Option<...> ...
        const box = ALLOWED_BOXES.find((box): boolean => {
          const start = index - box.length;

          return (
            (
              start >= 0 &&
              value.substring(start, start + box.length) === box
            ) && (
              // make sure it is stand-alone, i.e. don't catch ElectionResult<...> as Result<...>
              start === 0 ||
              BOX_PRECEDING.includes(value[start - 1])
            )
          );
        });

        // we have not found anything, unwrap generic innards
        if (!box) {
          const end = findClosing(value, index + 1);

          value = `${value.substring(0, index)}${value.substring(end + 1)}`;
        }
      }
    }

    return value;
  };
}

/** @internal */
function pairOfReplacer (v: string): string {
  return `(${v},${v})`;
}

/**
 * Remove the PairOf wrappers
 * @internal
 */
export function removePairOf (): Mapper {
  return (value: string) =>
    replaceTagWith(value, 'PairOf<', pairOfReplacer);
}

/**
 * Remove the type traits
 * @internal
 */
export function removeTraits (): Mapper {
  const from1 = /\s/g;
  const from2 = /(T|Self)::/g;
  const from3 = /<(T|Self)asTrait>::/g;
  const from4 = /<Tas[a-z]+::Trait>::/g;
  const from5 = /<LookupasStaticLookup>/g;
  const from6 = /::Type/g;

  return (value: string): string => {
    from1.lastIndex = 0;
    from2.lastIndex = 0;
    from3.lastIndex = 0;
    from4.lastIndex = 0;
    from5.lastIndex = 0;
    from6.lastIndex = 0;

    return value
      // remove all whitespaces
      .replace(from1, '')
      // anything `T::<type>` to end up as `<type>`
      .replace(from2, '')
      // replace `<T as Trait>::` (whitespaces were removed above)
      .replace(from3, '')
      // replace `<T as something::Trait>::` (whitespaces were removed above)
      .replace(from4, '')
      // replace <Lookup as StaticLookup>
      .replace(from5, 'Lookup')
      // replace `<...>::Type`
      .replace(from6, '');
  };
}

/** @internal */
function wrapReplacer (v: string): string {
  return v;
}

/**
 * Remove wrapping values, i.e. Box<Proposal> -> Proposal
 * @internal
 */
export function removeWrap (check: string): Mapper {
  return (value: string) =>
    replaceTagWith(value, check, wrapReplacer);
}

const sanitizeMap = new Map<string, string>();

/**
 * Adjust a type string to known sequences. This cleans up aliaseing, boxing, etc.
 */
export function sanitize (value: AnyString, options?: SanitizeOptions): string {
  const startValue = value.toString();
  let result = startValue;

  if (!options) {
    const memoized = sanitizeMap.get(startValue);

    if (memoized) {
      return memoized;
    }
  }

  for (let i = 0; i < mappings.length; i++) {
    result = mappings[i](result, options);
  }

  if (!options) {
    sanitizeMap.set(startValue, result);
  }

  return result;
}
