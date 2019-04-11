// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const NUMBER_REGEX = new RegExp('(\\d+?)(?=(\\d{3})+(?!\\d)|$)', 'g');

export default function formatDecimal (value: string): string {
  const matched = value.match(NUMBER_REGEX);

  return matched
    ? matched.join(',')
    : value;
}
