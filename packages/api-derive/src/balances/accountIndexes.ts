// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import ApiRx from '@polkadot/api/rx';
import { AccountId, AccountIndex } from '@polkadot/types/index';

export type AccountIndexes = { [index: string]: AccountIndex };
