// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import abis from '../test/contracts';
import { Abi } from '.';

interface JSONAbi {
  spec: {
    messages: {
      name: string[] | string
    }[]
  }
}

describe('Abi', (): void => {
  Object.entries(abis).forEach(([abiName, abi]) => {
    it(`initializes from a contract ABI (${abiName})`, (): void => {
      try {
        const messageIds = (abi as JSONAbi).spec.messages.map(({ name }) => Array.isArray(name) ? name[0] : name);
        const inkAbi = new Abi(abis[abiName]);

        expect(inkAbi.messages.map(({ identifier }) => identifier)).toEqual(messageIds);
      } catch (error) {
        console.error(error);

        throw error;
      }
    });
  });
});
