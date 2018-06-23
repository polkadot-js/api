// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ApiInterface, ApiInterface$Section } from '@polkadot/api/types';
import { Interface$Sections } from '@polkadot/jsonrpc/types';
import { RxApiInterface$Section } from './types';

const observable = require('./observable');

module.exports = function createInterface (api: ApiInterface, sectionName: Interface$Sections): RxApiInterface$Section {
  const section: ApiInterface$Section = api[sectionName];

  return Object
    .keys(section)
    .filter((name) => !['subscribe', 'unsubscribe'].includes(name))
    .reduce((observables, name) => {
      observables[name] = observable(`${sectionName}_${name}`, name, section);

      return observables;
    }, ({}: $Shape<RxApiInterface$Section>));
};
