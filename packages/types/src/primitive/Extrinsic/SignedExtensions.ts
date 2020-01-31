// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { InterfaceTypes } from '../../types';

type ExtInfo = {
  extra: Record<string, InterfaceTypes>;
  types: Record<string, InterfaceTypes>;
}

// A mapping of the known signed extensions to the extra fields that they contain. Unlike in the actual extensions,
// we define the extra fields not as a Tuple, but rather as a struct so they can be named. These will be expanded
// into the various fields when added to the payload (we only support V4 onwards with these, V3 and earlier are
// deemded fixed and non-changeable)
const allExtensions: Record<string, ExtInfo> = {
  ChargeTransactionPayment: {
    extra: {},
    types: {
      tip: 'Compact<Balance>'
    }
  },
  CheckBlockGasLimit: {
    extra: {},
    types: {}
  },
  CheckEra: {
    extra: {
      blockHash: 'Hash'
    },
    types: {
      era: 'ExtrinsicEra'
    }
  },
  CheckGenesis: {
    extra: {
      genesisHash: 'Hash'
    },
    types: {}
  },
  CheckNonce: {
    extra: {},
    types: {
      nonce: 'Compact<Index>'
    }
  },
  CheckVersion: {
    extra: {
      specVersion: 'u32'
    },
    types: {}
  },
  CheckWeight: {
    extra: {},
    types: {}
  }
};

// the v4 signed extensions (the order is important here)
const defaultExtensions: Array<keyof typeof allExtensions> = [
  'CheckVersion',
  'CheckGenesis',
  'CheckEra',
  'CheckNonce',
  'CheckWeight',
  'ChargeTransactionPayment',
  'CheckBlockGasLimit'
];

const extensionNames = Object.keys(allExtensions);

function getExtensions (extensions: string[]): ExtInfo[] {
  return extensions
    .map((key): ExtInfo => {
      const info = allExtensions[key];

      if (!info) {
        console.warn(`Unknown signed extension ${key} found, treating it as empty with no extra data`);
      }

      return info;
    })
    .filter((info): boolean => !!info);
}

function getExtensionExtra (extensions: string[]): Record<string, InterfaceTypes> {
  return getExtensions(extensions).reduce((result, { extra }): Record<string, InterfaceTypes> => {
    return { ...result, ...extra };
  }, {});
}

function getExtensionTypes (extensions: string[]): Record<string, InterfaceTypes> {
  return getExtensions(extensions).reduce((result, { types }): Record<string, InterfaceTypes> => {
    return { ...result, ...types };
  }, {});
}

export { allExtensions, defaultExtensions, extensionNames, getExtensionExtra, getExtensionTypes };
