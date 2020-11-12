// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiBase } from '@polkadot/api/base';
import { TypeRegistry } from '@polkadot/types';

const registry = new TypeRegistry();

export const mockApi = {
  registry,
  rx: {
    tx: {
      contracts: {
        putCode: (): never => {
          throw new Error('mock');
        }
      }
    }
  }
} as unknown as ApiBase<'promise'>;
