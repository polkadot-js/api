import { ApiPromise, WsProvider } from '@polkadot/api';


function createApi (): Promise<ApiPromise> {
  jest.setTimeout(30000);
  process.env.NODE_ENV = 'test';

  const provider = new WsProvider('wss://kusama-rpc.polkadot.io');
  // const provider = new WsProvider('wss://westend-rpc.polkadot.io/');
  // const provider = new WsProvider('ws://127.0.0.1:9944/');

  return new ApiPromise({ provider }).isReady;
}

describe('with kusama', () => {
  it('gets derived bounties', async () => {
    const api = await createApi();
    console.log((await api.query.treasury.bounties.keys())[0].toString())
    console.log(await api.derive.treasury.bounties())
  });
});
