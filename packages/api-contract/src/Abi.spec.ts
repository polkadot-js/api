// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { blake2AsHex } from '@polkadot/util-crypto';

import abis from '../test/contracts';
import { Abi } from '.';

interface JSONAbi {
  source: {
    compiler: string,
    hash: string,
    language: string,
    wasm: string
  },
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

  it('has the correct hash for the source', (): void => {
    const bundle = abis.ink_flipperBundle as JSONAbi;
    const abi = new Abi(bundle as any);

    // manual
    expect(bundle.source.hash).toEqual(blake2AsHex(bundle.source.wasm));

    // the Codec hash
    expect(bundle.source.hash).toEqual(abi.project.source.wasm.hash.toHex());

    // the hash as per the actual Abi
    expect(bundle.source.hash).toEqual(abi.project.source.wasmHash.toHex());
  });
});
