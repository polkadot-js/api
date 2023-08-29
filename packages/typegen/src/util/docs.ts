// Copyright 2017-2023 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Handlebars from 'handlebars';

import { readTemplate } from './file.js';

Handlebars.registerPartial({
  docs: Handlebars.compile(readTemplate('docs'))
});

// empty export
export const __TYPEGEN_DUMMY_DOCS = 'DUMMY_DOCS';
