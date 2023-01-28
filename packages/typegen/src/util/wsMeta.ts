// Copyright 2017-2023 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import { WebSocket } from '@polkadot/x-ws';

async function getWsData <T> (endpoint: string, method: 'rpc_methods' | 'state_getMetadata' | 'state_getRuntimeVersion'): Promise<T> {
  return new Promise((resolve): void => {
    try {
      const websocket = new WebSocket(endpoint);

      websocket.onclose = (event: { code: number; reason: string }): void => {
        const msg = `disconnected, code: '${event.code}' reason: '${event.reason}'`;

        if (event.code === 1000) {
          console.log(msg);
        } else {
          console.error(msg);
          process.exit(1);
        }
      };

      websocket.onerror = (event: unknown): void => {
        console.error(event);
        process.exit(1);
      };

      websocket.onopen = (): void => {
        console.log('connected');
        websocket.send(`{"id":"1","jsonrpc":"2.0","method":"${method}","params":[]}`);
      };

      websocket.onmessage = (message: { data: string }): void => {
        resolve((JSON.parse(message.data) as { result: T }).result);
        websocket.close();
      };
    } catch (error) {
      process.exit(1);
    }
  });
}

export async function getMetadataViaWs (endpoint: string): Promise<HexString> {
  return getWsData<HexString>(endpoint, 'state_getMetadata');
}

export async function getRpcMethodsViaWs (endpoint: string): Promise<string[]> {
  const result = await getWsData<{ methods: string[] }>(endpoint, 'rpc_methods');

  return result.methods;
}

export async function getRuntimeVersionViaWs (endpoint: string): Promise<[apiHash: string, apiVersion: number][]> {
  const result = await getWsData<{ apis: [string, number][] }>(endpoint, 'state_getRuntimeVersion');

  return result.apis;
}
