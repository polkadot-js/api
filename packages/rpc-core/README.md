# @polkadot/rpc-core

This library provides a clean wrapper around all the methods exposed by a Polkadot network client.

## Usage

Installation -

```
yarn add @polkadot/rpc-core
```

Initialisation -

```js
import Rpc from '@polkadot/rpc-core';
import WsProvider from '@polkadot/rpc-provider/ws';

const provider = new WsProvider('http://127.0.0.1:9944');
const rpc = new Rpc(provider);
```

Retrieving the block header object for a given block header hash (a 0x-prefixed hex string with length of 64) -

```js
rpc.chain
  .getHeader('0x1234567890')
  .subscribe(
    (header) => console.log(header),
    (error) => console.error('error:', error)
  );
```

Retrieving the best block number, parent hash, state root hash, extrinsics root hash, and digest (once-off) -

```js
rpc.chain
  .getHead()
  .pipe(
    switchMap((headerHash) => {
      return rpc.chain.getHeader(headerHash);
    })
  )
  .subscribe(
    (header) => {
      console.log(`best #${header.blockNumber.toString()}`);
      console.log(`parentHash: ${header.parentHash.toString()}`);
      console.log(`stateRoot: ${header.stateRoot.toString()}`);
      console.log(`extrinsicsRoot: ${header.extrinsicsRoot.toString()}`);
      console.log(`digest: ${header.digest.toString()}`);
    },
    (error) => {
      console.error('error:', error);
    }
  );
```

Retrieving best header via subscription -

```js
api.chain
rpc
  .subscribeNewHead()
  .subscribe(
    (header) => {
      console.log(`best #${header.blockNumber}`);
    },
    (error) => {
      console.error('error subscribing:', error);
    }
  );
```

## Classes

[Classes](SUMMARY.md)
