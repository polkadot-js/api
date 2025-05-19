// Copyright 2017-2025 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option, Text } from '@polkadot/types-codec';

export type ExtraTypes = Record<string, Record<string, {
  runtime?: Record<string, any>;
  types: Record<string, any>;
}>>;

export function getDeprecationNotice<T extends { isDeprecated: boolean; asDeprecated: { note: Text; since: Option<Text> }}> (deprecationInfo: T, name: string, label?: string): string {
  let deprecationNotice = '@deprecated';

  if (deprecationInfo.isDeprecated) {
    const { note, since } = deprecationInfo.asDeprecated;
    const sinceText = since.isSome ? ` Since ${since.unwrap().toString()}.` : '';

    deprecationNotice += ` ${note.toString()}${sinceText}`;
  } else {
    const labelText = label ? `${label} ` : '';

    deprecationNotice += ` ${labelText}${name} has been deprecated`;
  }

  return deprecationNotice;
}
