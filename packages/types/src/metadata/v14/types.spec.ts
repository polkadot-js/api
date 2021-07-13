// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../../create';
import { Metadata } from '../Metadata';
import substrateData from './static';

describe('MetadataV14 (substrate)', (): void => {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, substrateData);

  console.error(JSON.stringify(
    metadata.asLatest.types.types.map((type, counter) => {
      const json = type.toJSON();

      return {
        counter,
        ...json
      };
    })
  ));
});
