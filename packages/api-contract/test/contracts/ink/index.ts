// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { createVersionedExport } from '../util';
import * as v0 from './v0';
import * as v1 from './v1';

const exp = createVersionedExport('v0', v0, {});

export default createVersionedExport('v1', v1, exp);
