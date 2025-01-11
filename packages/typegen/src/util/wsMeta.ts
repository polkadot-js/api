// Copyright 2017-2025 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import { promiseTracker } from '@polkadot/api/promise/decorateMethod';
import { TypeRegistry } from '@polkadot/types';
import { stringify, u8aToHex } from '@polkadot/util';
import { WebSocket } from '@polkadot/x-ws';

async function getWsData <T> (endpoint: string, method: 'rpc_methods' | 'state_call' | 'state_getMetadata' | 'state_getRuntimeVersion', params?: string[]): Promise<T> {
  return new Promise((resolve, reject): void => {
    const tracker = promiseTracker<T>(resolve, reject);

    try {
      const websocket = new WebSocket(endpoint);

      websocket.onclose = (event: { code: number; reason: string }): void => {
        if (event.code !== 1000) {
          tracker.reject(new Error(`disconnected, code: '${event.code}' reason: '${event.reason}'`));
        }
      };

      websocket.onerror = (event: unknown): void => {
        tracker.reject(new Error(`WebSocket error:: ${stringify(event)}`));
      };

      websocket.onopen = (): void => {
        console.log('connected');
        params
          ? websocket.send(`{"id":"1","jsonrpc":"2.0","method":"${method}","params":[${params.map((param) => `"${param}"`).join(',')}]}`)
          : websocket.send(`{"id":"1","jsonrpc":"2.0","method":"${method}","params":[]}`);
      };

      websocket.onmessage = (message: { data: string }): void => {
        try {
          tracker.resolve((JSON.parse(message.data) as { result: T }).result);
        } catch (error) {
          tracker.reject(error as Error);
        }

        websocket.close();
      };
    } catch (error) {
      tracker.reject(error as Error);
    }
  });
}

export async function getMetadataViaWs (endpoint: string, metadataVer?: number): Promise<HexString> {
  const registry = new TypeRegistry();

  if (metadataVer) {
    return await getWsData<HexString>(endpoint, 'state_call', ['Metadata_metadata_at_version', u8aToHex(registry.createType('u32', metadataVer).toU8a())]);
  } else {
    return await getWsData<HexString>(endpoint, 'state_getMetadata');
  }
}

export async function getRpcMethodsViaWs (endpoint: string): Promise<string[]> {
  const result = await getWsData<{ methods: string[] }>(endpoint, 'rpc_methods');

  return result.methods;
}

export async function getRuntimeVersionViaWs (endpoint: string): Promise<[apiHash: string, apiVersion: number][]> {
  const result = await getWsData<{ apis: [string, number][] }>(endpoint, 'state_getRuntimeVersion');

  return result.apis;
}
