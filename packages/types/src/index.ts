// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { detectPackage } from '@polkadot/util';

// FIXME This really should be `import(...).then(...)`, but need to check rejections
// eslint-disable-next-line @typescript-eslint/no-var-requires
detectPackage(require('./package.json'), typeof __dirname !== 'undefined' && __dirname);

export * from './codec';
export * from './create';
export * from './index.types';
