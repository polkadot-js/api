// Copyright 2017-2025 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { createVersionedExport } from '../util.js';
import * as v0 from './v0/index.js';
import * as v1 from './v1/index.js';
import * as v2 from './v2/index.js';
import * as v3 from './v3/index.js';
import * as v4 from './v4/index.js';
import * as v5 from './v5/index.js';
import * as v6 from './v6/index.js';

export default createVersionedExport({ v0, v1, v2, v3, v4, v5, v6 });
