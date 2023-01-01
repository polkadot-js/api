// Copyright 2017-2023 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Handlebars from 'handlebars';

import { readTemplate } from './file';

Handlebars.registerPartial({
  docs: Handlebars.compile(readTemplate('docs'))
});
