

# Variables

<a id="authoritycount"></a>

## `<Const>` authorityCount

**● authorityCount**: *`StorageFunction`* =  createRuntimeFunction('authorityCount', ':auth:len', {
  documentation: 'Number of authorities.',
  type: 'u32'
})

*Defined in [substrate.ts:45](https://github.com/polkadot-js/api/blob/f4d52ba/packages/type-storage/src/substrate.ts#L45)*

___
<a id="authorityprefix"></a>

## `<Const>` authorityPrefix

**● authorityPrefix**: *`StorageFunction`* =  createRuntimeFunction('authorityPrefix', ':auth:', {
  documentation: 'Prefix under which authorities are storied.',
  type: 'u32'
})

*Defined in [substrate.ts:50](https://github.com/polkadot-js/api/blob/f4d52ba/packages/type-storage/src/substrate.ts#L50)*

___
<a id="changestrieconfig"></a>

## `<Const>` changesTrieConfig

**● changesTrieConfig**: *`StorageFunction`* =  createRuntimeFunction('changesTrieConfig', ':changes_trie', {
  documentation: 'Changes trie configuration is stored under this key.',
  type: 'u32'
})

*Defined in [substrate.ts:60](https://github.com/polkadot-js/api/blob/f4d52ba/packages/type-storage/src/substrate.ts#L60)*

___
<a id="code"></a>

## `<Const>` code

**● code**: *`StorageFunction`* =  createRuntimeFunction('code', ':code', {
  documentation: 'Wasm code of the runtime.',
  type: 'Bytes'
})

*Defined in [substrate.ts:35](https://github.com/polkadot-js/api/blob/f4d52ba/packages/type-storage/src/substrate.ts#L35)*

___
<a id="extrinsicindex"></a>

## `<Const>` extrinsicIndex

**● extrinsicIndex**: *`StorageFunction`* =  createRuntimeFunction('extrinsicIndex', ':extrinsic_index', {
  documentation: 'Current extrinsic index (u32) is stored under this key.',
  type: 'u32'
})

*Defined in [substrate.ts:55](https://github.com/polkadot-js/api/blob/f4d52ba/packages/type-storage/src/substrate.ts#L55)*

___
<a id="heappages"></a>

## `<Const>` heapPages

**● heapPages**: *`StorageFunction`* =  createRuntimeFunction('heapPages', ':heappages', {
  documentation: 'Number of wasm linear memory pages required for execution of the runtime.',
  type: 'u64'
})

*Defined in [substrate.ts:40](https://github.com/polkadot-js/api/blob/f4d52ba/packages/type-storage/src/substrate.ts#L40)*

___

