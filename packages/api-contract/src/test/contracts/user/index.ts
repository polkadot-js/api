// Copyright 2017-2023 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { createVersionedExport } from '../util';
import * as v0 from './v0';
import * as v3 from './v3';

export default createVersionedExport({ v0, v3 });
