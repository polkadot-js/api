// Copyright 2017-2022 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as Handlebars from 'handlebars';

import { readTemplate } from './file';

Handlebars.registerPartial({
  docs: Handlebars.compile(readTemplate('docs'))
});
