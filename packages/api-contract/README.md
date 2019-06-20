# @polkadot/api-contract

Interfaces to allow for the encoding and decoding of Substrate contract ABIs.

```js
import { Abi } from '@polkadot/api-contract';

const abi = new Abi(<...JSON ABI...>);

api.tx.contracts
  .call(<contract addr>, <value>, <max gas>, abi.messages.<method name>(<...params...>))
  .signAndSend(<keyring pair>, (result: SubmittableResult) => { ... });
```
