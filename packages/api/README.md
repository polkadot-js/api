# @polkadot/api

An RxJs wrapper around [@polkadot/rpc-core](../rpc-core).

# Usage

Installation -

```
npm install --save @polkadot/api/rx
```

Making rpc calls -

```javascript
import ApiRx from '@polkadot/api/rx';
// alternatively
// import { ApiRx } from '@polkadot/api';

// initialise via Promise & static create
const api = await ApiRx.create().toPromise();

// make a call to retrieve the current network head
api.rpc.chain.newHead().subscribe((header) => {
  console.log(`Chain is at #${header.blockNumber}`);
});
```

Subscribing to chain state -

```javascript
import Api from '@polkadot/api';

// initialise via isReady & new
new Api().isReady.subscribe((api) => {
  // make a call to retrieve the current network head
  api.st.timestamp.now().subscribe((timestamp) => {
    console.log(`Current block timestamp ${timestamp}`);
  });
});
```
