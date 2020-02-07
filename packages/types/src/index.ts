// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { detectPackage } from '@polkadot/util';

// eslint-disable-next-line no-useless-catch
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  detectPackage(require('./package.json'), __dirname);
} catch (error) {
  throw error;
}

export * from './codec';
export * from './index.types';

// FIXME We actually don't want to do this (if needed, it certainly is not in the right place)
export { formatType } from './scripts/util/formatting';
