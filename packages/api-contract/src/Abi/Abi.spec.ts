// Copyright 2017-2024 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { Registry } from '@polkadot/types/types';

import fs from 'node:fs';
import process from 'node:process';

import { TypeDefInfo } from '@polkadot/types/types';
import { hexToU8a } from '@polkadot/util';
import { blake2AsHex } from '@polkadot/util-crypto';

import abis from '../test/contracts/index.js';
import { Abi } from './index.js';

interface SpecDef {
  messages: {
    label: string;
    name: string[] | string
  }[]
}

interface JSONAbi {
  source: {
    compiler: string,
    hash: string,
    language: string,
    wasm: string
  },
  spec: SpecDef;
  V1: {
    spec: SpecDef;
  },
  V2: {
    spec: SpecDef;
  },
  V3: {
    spec: SpecDef;
  },
  V4: {
    spec: SpecDef;
  }
}

function stringifyInfo (key: string, value: unknown): unknown {
  return key === 'info' && typeof value === 'number'
    ? TypeDefInfo[value]
    : value;
}

function stringifyJson (registry: Registry): string {
  const defs = registry.lookup.types.map(({ id }) =>
    registry.lookup.getTypeDef(id)
  );

  return JSON.stringify(defs, stringifyInfo, 2);
}

describe('Abi', (): void => {
  describe('ABI', (): void => {
    Object.entries(abis).forEach(([abiName, _abi]) => {
      const abi = _abi as unknown as JSONAbi;

      it(`initializes from a contract ABI (${abiName})`, (): void => {
        try {
          const messageIds = (abi.V4 || abi.V3 || abi.V2 || abi.V1 || abi).spec.messages.map(({ label, name }) =>
            label || (
              Array.isArray(name)
                ? name.join('::')
                : name
            )
          );
          const inkAbi = new Abi(abis[abiName]);

          expect(inkAbi.messages.map(({ identifier }) => identifier)).toEqual(messageIds);
        } catch (error) {
          console.error(error);

          throw error;
        }
      });
    });
  });

  describe('TypeDef', (): void => {
    for (const [abiName, abiJson] of Object.entries(abis)) {
      it(`initializes from a contract ABI: ${abiName}`, (): void => {
        const abi = new Abi(abiJson);
        const registryJson = stringifyJson(abi.registry);
        const cmpFile = new URL(`../test/compare/${abiName}.test.json`, import.meta.url);

        try {
          expect(
            JSON.parse(registryJson)
          ).toEqual(
            JSON.parse(fs.readFileSync(cmpFile, 'utf-8'))
          );
        } catch (error) {
          if (process.env['GITHUB_REPOSITORY']) {
            console.error(registryJson);

            throw error;
          }

          fs.writeFileSync(cmpFile, registryJson, { flag: 'w' });
        }
      });
    }
  });

  it('has the correct hash for the source', (): void => {
    const abi = new Abi(abis['ink_v0_flipperBundle']);
    const bundle = abis['ink_v0_flipperBundle'] as unknown as JSONAbi;

    // manual
    expect(bundle.source.hash).toEqual(blake2AsHex(bundle.source.wasm));

    // the Codec hash
    expect(bundle.source.hash).toEqual(abi.info.source.wasm.hash.toHex());

    // the hash as per the actual Abi
    expect(bundle.source.hash).toEqual(abi.info.source.wasmHash.toHex());
  });

  it('decoding <=ink!v4 events', (): void => {
    const abi = new Abi(abis['ink_v4_erc20Metadata']);

    const dataHex = '0x0001d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d018eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4800505a4f7e9f4eb10600000000000000';
    const dataU8A = hexToU8a(dataHex);

    const decodedEvent = abi.decodeEvent(dataU8A);

    expect(decodedEvent.event.args.length).toEqual(3);
    expect(decodedEvent.args.length).toEqual(3);
    expect(decodedEvent.event.identifier).toEqual('Transfer');

    const decodedEventHuman = decodedEvent.event.args.reduce((prev, cur, index) => {
      return {
        ...prev,
        [cur.name]: decodedEvent.args[index].toHuman()
      };
    }, {});

    const expectedEvent = {
      from: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
      to: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
      value: '123.4567 MUnit'
    };

    expect(decodedEventHuman).toEqual(expectedEvent);
  });

  it('decoding <=ink!v5 events', (): void => {
    const metadataJson = abis['ink_v5_erc20Metadata'];

    expect(metadataJson).toBeDefined();
    const abi = new Abi(metadataJson);

    const dataHex = '0x01d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d018eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4800505a4f7e9f4eb10600000000000000';
    const dataU8A = hexToU8a(dataHex);

    const signatureTopicHex = '0xb5b61a3e6a21a16be4f044b517c28ac692492f73c5bfd3f60178ad98c767f4cb';

    expect(abi.events.length).toEqual(2);
    expect(abi.events[0].signatureTopic).toEqual(signatureTopicHex);

    const signatureTopicHash = abi.registry.createType('Hash', signatureTopicHex);
    const decodedEvent = abi.decodeEvent(dataU8A, signatureTopicHash);

    expect(decodedEvent.event.args.length).toEqual(3);
    expect(decodedEvent.args.length).toEqual(3);
    expect(decodedEvent.event.identifier).toEqual('erc20::erc20::Transfer');

    const decodedEventHuman = decodedEvent.event.args.reduce((prev, cur, index) => {
      return {
        ...prev,
        [cur.name]: decodedEvent.args[index].toHuman()
      };
    }, {});

    const expectedEvent = {
      from: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
      to: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
      value: '123.4567 MUnit'
    };

    expect(decodedEventHuman).toEqual(expectedEvent);
  });
});
