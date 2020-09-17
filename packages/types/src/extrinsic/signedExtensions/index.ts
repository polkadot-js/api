// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ExtDef, ExtInfo, ExtTypes } from './types';

import polkadotExtensions from './polkadot';
import substrateExtensions from './substrate';

// A mapping of the known signed extensions to the extra fields that they contain. Unlike in the actual extensions,
// we define the extra fields not as a Tuple, but rather as a struct so they can be named. These will be expanded
// into the various fields when added to the payload (we only support V4 onwards with these, V3 and earlier are
// deemded fixed and non-changeable)
const allExtensions: ExtDef = {
  ...substrateExtensions,
  ...polkadotExtensions
};

// the v4 signed extensions (the order is important here, as applied by default)
const defaultExtensions: Array<keyof typeof allExtensions> = [
  'CheckVersion',
  'CheckGenesis',
  'CheckEra',
  'CheckNonce',
  'CheckWeight',
  'ChargeTransactionPayment',
  'CheckBlockGasLimit'
];

function findUnknownExtensions (extensions: string[]): string[] {
  const names = Object.keys(allExtensions);

  return extensions.filter((key): boolean => !names.includes(key));
}

function expandExtensionTypes (extensions: string[], type: keyof ExtInfo): ExtTypes {
  return extensions
    .map((key): ExtInfo => allExtensions[key])
    .filter((info): boolean => !!info)
    .reduce((result, info): ExtTypes => ({ ...result, ...info[type] }), {});
}

export { allExtensions, defaultExtensions, expandExtensionTypes, findUnknownExtensions };
