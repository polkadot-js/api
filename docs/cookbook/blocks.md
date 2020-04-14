# Blocks

The building blocks for each blockchain. As such there are a number of examples for working with blocks and headers, that could be useful.

## How do I retrieve the header/extrinsic hash from blocks?

A block hash refers to the hash over the header, the extrinsic hash refers to the hash of the encoded extrinsic. Since all objects returned by the API implements the `.hash => Hash` getter, we can simply use this to view the actual hash.

```js
// returns Hash
const blockHash = await this.api.rpc.chain.getBlockHash(blockNumber);
// returns SignedBlock
const signedBlock = await this.api.rpc.chain.getBlock(blockHash);

// the hash for the block, always via header (Hash -> toHex()) - will be the same as
// blockHash above (also available on any header retrieved, subscription or once-off)
console.log(signedBlock.header.hash.toHex());

// the hash for each extrinsic in the block
signedBlock.block.extrinsics.forEach((ex, index) => {
  console.log(index, ex.hash.toHex());
});
```
