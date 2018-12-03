// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import registry from './codec/typeRegistry';
import * as allTypes from './allTypes';

export * from './allTypes';

registry.register(allTypes);
