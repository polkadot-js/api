# Blocks

The building blocks for each blockchain. As such there are a number of examples for working with blocks and headers, that could be useful.

## How do I retrieve the header/extrinsic hash from blocks?

A block hash refers to the hash over the header, the extrinsic hash refers to the hash of the encoded extrinsic. Since all objects returned by the API implements the `.hash => Hash` getter, we can simply use this to view the actual hash.

```js
// returns Hash
const blockHash = await this.api.rpc.chain.getBlockHash(blockNumber);
// returns SignedBlock
const signedBlock = await this.api.rpc.chain.getBlock(blockHash);

// the hash for the block, always via header (Hash -> toHex()) - will be
// the same as blockHash above (also available on any header retrieved,
// subscription or once-off)
console.log(signedBlock.header.hash.toHex());

// the hash for each extrinsic in the block
signedBlock.block.extrinsics.forEach((ex, index) => {
  console.log(index, ex.hash.toHex());
});
```

## How do I extract the block author?

The block author is encoded inside the consensus logs for the block. To extract, you need to decode the log (which the API does do) and then map the index of the validator to the list of session validators. This extraction is however available on the api derive for new head subscriptions, which returns an extended header with the author populated (assuming that the digest logs are known).

```js
// subscribe to all new headers (with extended info)
api.derive.chain.subscribeNewHeads((header) => {
  console.log(`#${header.number}: ${header.author}`);
});
```

For a single header only, the derives also contain a `getHeader`, which once again returns a header extended with the author -

```js
// retrieve the last header (hash optional)
const header = await api.derive.chain.getHeader();

console.log(`#${header.number}: ${header.author}`);
```
