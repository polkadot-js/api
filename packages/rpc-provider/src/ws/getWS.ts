// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export async function getWSClass (): Promise<[typeof WebSocket, boolean]> {
  if (typeof WebSocket === 'undefined') {
    const { w3cwebsocket } = await import('websocket');

    return [w3cwebsocket as unknown as typeof WebSocket, false];
  }

  return [WebSocket, true];
}

export async function createWS (endpoint: string, headers?: Record<string, string>): Promise<WebSocket> {
  const [WS, isDefault] = await getWSClass();

  return isDefault
    ? new WS(endpoint)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - WS may be an instance of w3cwebsocket, which supports headers
    : new WS(endpoint, undefined, undefined, headers);
}
