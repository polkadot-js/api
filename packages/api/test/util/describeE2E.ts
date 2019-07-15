// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const WS_ENDPOINTS = {
  local: 'ws://127.0.0.1:9944/',
  'substrate-master': 'ws://127.0.0.1:9945/',
  'substrate-1.0': 'ws://127.0.0.1:9946/',
  'substrate-2.0': 'ws://127.0.0.1:9947/',
  'polkadot-master': 'ws://127.0.0.1:9948/',
  'polkadot-alexander': 'ws://127.0.0.1:9949/',
  'remote-polkadot-alexander': 'wss://poc3-rpc.polkadot.io/',
  'remote-substrate-1.0': 'wss://substrate-rpc.parity.io/'
};

type WsName = keyof typeof WS_ENDPOINTS;

interface Options {
  except?: WsName[]; // Only one of the two keys `either` `only` should be set
  only?: WsName[];
  apiType?: 'promise' | 'rxjs';
}

// From the options and the WITH_DOCKER flag, calculate on which endpoints we
// should run the tests
function getWsEndpoints (options?: Options): WsName[] {
  let wsEndpoints: WsName[] = []; // The ws endpoints to test

  if (options && options.only) {
    wsEndpoints = options.only;
  } else {
    wsEndpoints = (Object.keys(WS_ENDPOINTS) as WsName[])
      .filter((wsName): boolean => !options || !options.except || !options.except.includes(wsName));
  }

  // If there's no WITH_DOCKER flag, we only run local node
  if (!process.env.WITH_DOCKER) {
    wsEndpoints = wsEndpoints.filter((wsName): boolean => wsName === 'local');
  }

  return wsEndpoints;
}

export default function describeE2E (options?: Options): (message: string, inner: (wsUrl: string) => void) => void {
  return function (message: string, inner: (wsUrl: string) => void): void {
    getWsEndpoints(options)
      .map((wsName): [string, string] => [wsName, WS_ENDPOINTS[wsName]])
      .forEach(([wsName, wsUrl]): void => {
        describe(`${message} on ${wsName}`, (): void => {
          beforeAll((): void => {
            jest.setTimeout(30000);
          });

          afterAll((): void => {
            jest.setTimeout(5000);
          });

          inner(wsUrl);
        });
      });
  };
}
