// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

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
};
