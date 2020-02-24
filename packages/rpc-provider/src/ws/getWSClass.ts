// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default async function getWSClass (): Promise<typeof WebSocket> {
  if (typeof WebSocket === 'undefined') {
    const { w3cwebsocket } = await import('websocket');

    return w3cwebsocket as unknown as typeof WebSocket;
  }

  return WebSocket;
}
