// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const WS_ENDPOINTS = {
  local: 'ws://127.0.0.1:9944/',
  'docker-substrate-master': 'ws://127.0.0.1:9945/',
  'docker-substrate-1.0': 'ws://127.0.0.1:9946/',
  'docker-substrate-2.0': 'ws://127.0.0.1:9947/',
  'docker-polkadot-master': 'ws://127.0.0.1:9948/',
  'docker-polkadot-alexander': 'ws://127.0.0.1:9949/',
  'remote-polkadot-alexander': 'wss://poc3-rpc.polkadot.io/',
  'remote-substrate-1.0': 'wss://substrate-rpc.parity.io/'
};

type WsName = keyof typeof WS_ENDPOINTS;

interface Options {
  except?: WsName[]; // Only one of the two keys `except` `only` should be set
  only?: WsName[];
}

function filterProcessEnv (wsEndpoints: WsName[]): WsName[] {
  // If there's a TEST_DOCKER flag, we  only run tests to Docker endpoints
  // If there's a TEST_REMOTE flag, we only run tests to remote endpoints
  // If none of the two is present, we only run tests on local node
  return process.env.TEST_REMOTE || process.env.TEST_DOCKER
    ? process.env.TEST_REMOTE
      ? wsEndpoints.filter((wsName): boolean => wsName.startsWith('remote-'))
      : wsEndpoints.filter((wsName): boolean => wsName.startsWith('docker-'))
    : wsEndpoints.filter((wsName): boolean => wsName === 'local');
}

// From the options and the TEST_DOCKER and TEST_REMOTE flags, calculate on which endpoints we
// should run the tests
function getWsEndpoints (options?: Options): WsName[] {
  let wsEndpoints: WsName[] = []; // The ws endpoints to test

  if (options && options.only) {
    wsEndpoints = options.only;
  } else {
    wsEndpoints = (Object.keys(WS_ENDPOINTS) as WsName[])
      .filter((wsName): boolean => !options || !options.except || !options.except.includes(wsName));
  }

  return filterProcessEnv(wsEndpoints);
}

export default function describeE2E (options?: Options): (message: string, inner: (wsUrl: string) => void) => void {
  return function (message: string, inner: (wsUrl: string) => void): void {
    const wsEndpoints = getWsEndpoints(options);
    if (!wsEndpoints.length) {
      describe(`Empty test Suite:`, (): void => {
        it('No tests found for passed endpoints', (): void => {});
      });
    } else {
      wsEndpoints.map((wsName): [string, string] => [wsName, WS_ENDPOINTS[wsName]])
        .forEach(([wsName, wsUrl]): void => {
          describe(`${message} on ${wsName}`, (): void => {
            beforeAll((): void => {
              jest.setTimeout(15000);
            });

            afterAll((): void => {
              jest.setTimeout(5000);
            });

            inner(wsUrl);
          });
        });
    }
  };
}
