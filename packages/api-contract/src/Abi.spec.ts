// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '@polkadot/types';

import incrementerAbi from '../test/contracts/incrementer.json';
import { Abi } from '.';

describe('Abi', (): void => {
  const registry = new TypeRegistry();

  describe('incrementer', (): void => {
    let abi: Abi;

    beforeEach((): void => {
      abi = new Abi(registry, incrementerAbi);
    });

    it('has the attached methods', (): void => {
      expect(Object.values(abi.abi.contract.messages).map(({ name }): string => name)).toEqual(
        ['inc', 'get', 'compare']
      );
    });
  });
});
