#!/usr/bin/env node
// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('@babel/register')({
  extensions: ['.js', '.ts']
});

require('./interfacesTs.ts');
