// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { detectPackage } from '@polkadot/util';

// FIXME This really should be `import(...).then(...)`, but need to check rejections
// eslint-disable-next-line @typescript-eslint/no-var-requires
detectPackage(require('./package.json'), typeof __dirname !== 'undefined' && __dirname);

export * from './codec';
export * from './create';
export * from './index.types';
