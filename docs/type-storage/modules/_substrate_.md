

# Variables

<a id="authoritycount"></a>

## `<Const>` authorityCount

**● authorityCount**: *`StorageFunction`* =  createRuntimeFunction('authorityCount', ':auth:len', {
  documentation: 'Number of authorities.',
  type: 'u32'
})

*Defined in [substrate.ts:44](https://github.com/polkadot-js/api/blob/f820dfc/packages/type-storage/src/substrate.ts#L44)*

___
<a id="authorityprefix"></a>

## `<Const>` authorityPrefix

**● authorityPrefix**: *`StorageFunction`* =  createRuntimeFunction('authorityPrefix', ':auth:', {
  documentation: 'Prefix under which authorities are storied.',
  type: 'u32'
})

*Defined in [substrate.ts:49](https://github.com/polkadot-js/api/blob/f820dfc/packages/type-storage/src/substrate.ts#L49)*

___
<a id="changestrieconfig"></a>

## `<Const>` changesTrieConfig

**● changesTrieConfig**: *`StorageFunction`* =  createRuntimeFunction('changesTrieConfig', ':changes_trie', {
  documentation: 'Changes trie configuration is stored under this key.',
  type: 'u32'
})

*Defined in [substrate.ts:59](https://github.com/polkadot-js/api/blob/f820dfc/packages/type-storage/src/substrate.ts#L59)*

___
<a id="code"></a>

## `<Const>` code

**● code**: *`StorageFunction`* =  createRuntimeFunction('code', ':code', {
  documentation: 'Wasm code of the runtime.',
  type: 'Bytes'
})

*Defined in [substrate.ts:34](https://github.com/polkadot-js/api/blob/f820dfc/packages/type-storage/src/substrate.ts#L34)*

___
<a id="extrinsicindex"></a>

## `<Const>` extrinsicIndex

**● extrinsicIndex**: *`StorageFunction`* =  createRuntimeFunction('extrinsicIndex', ':extrinsic_index', {
  documentation: 'Current extrinsic index (u32) is stored under this key.',
  type: 'u32'
})

*Defined in [substrate.ts:54](https://github.com/polkadot-js/api/blob/f820dfc/packages/type-storage/src/substrate.ts#L54)*

___
<a id="heappages"></a>

## `<Const>` heapPages

**● heapPages**: *`StorageFunction`* =  createRuntimeFunction('heapPages', ':heappages', {
  documentation: 'Number of wasm linear memory pages required for execution of the runtime.',
  type: 'u64'
})

*Defined in [substrate.ts:39](https://github.com/polkadot-js/api/blob/f820dfc/packages/type-storage/src/substrate.ts#L39)*

___

