// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ExtDef, ExtInfo, ExtTypes } from './types';

import { polkadot } from './polkadot';
import { shell } from './shell';
import { statemint } from './statemint';
import { substrate } from './substrate';

// A mapping of the known signed extensions to the extra fields that they contain. Unlike in the actual extensions,
// we define the extra fields not as a Tuple, but rather as a struct so they can be named. These will be expanded
// into the various fields when added to the payload (we only support V4 onwards with these, V3 and earlier are
// deemed fixed and non-changeable)
export const allExtensions: ExtDef = {
  ...substrate,
  ...polkadot,
  ...shell,
  ...statemint
};

// the v4 signed extensions prior to the point of exposing these to the metadata.
// This may not match 100% with the current defaults and are used when not specified
// in the metadata (which is for very old chains). The order is important here, as
// applied by default
export const fallbackExtensions: Array<keyof typeof allExtensions> = [
  'CheckVersion',
  'CheckGenesis',
  'CheckEra',
  'CheckNonce',
  'CheckWeight',
  'ChargeTransactionPayment',
  'CheckBlockGasLimit'
];

export function findUnknownExtensions (extensions: string[], userExtensions: ExtDef = {}): string[] {
  const names = [...Object.keys(allExtensions), ...Object.keys(userExtensions)];

  return extensions.filter((key) => !names.includes(key));
}

export function expandExtensionTypes (extensions: string[], type: keyof ExtInfo, userExtensions: ExtDef = {}): ExtTypes {
  return extensions
    // Always allow user extensions first - these should provide overrides
    .map((key) => userExtensions[key] || allExtensions[key])
    .filter((info): info is ExtInfo => !!info)
    .reduce((result, info): ExtTypes => ({ ...result, ...info[type] }), {});
}
