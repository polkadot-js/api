# state

Query the state and state storage. 

- [call](#call) Perform a call to a builtin on the chain.
- [getStorage](#getstorage) Retrieves the storage for an address.

## call

Perform a call to a builtin on the chain.

```js
chain_call (address: Address, method: String, data: CallData, block: HeaderHash): OutData
```


Calls a `method` at a specific `address`, passing the encoded `data`. The query is executed at the block specified by `block`.



## getStorage

Retrieves the storage for an address.

```js
chain_getStorage (address: Address, key: H256, block: HeaderHash): StorageData
```


Retrieves the storage `key` at a specific `address`, executing the query at a specific `block`.

