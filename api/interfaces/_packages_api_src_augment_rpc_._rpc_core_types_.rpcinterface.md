[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api/src/augment/rpc"](../modules/_packages_api_src_augment_rpc_.md) › ["rpc-core/types"](../modules/_packages_api_src_augment_rpc_._rpc_core_types_.md) › [RpcInterface](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md)

# Interface: RpcInterface

## Hierarchy

* **RpcInterface**

## Index

### Properties

* [author](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#author)
* [babe](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#babe)
* [chain](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#chain)
* [childstate](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#childstate)
* [contracts](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#contracts)
* [engine](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#engine)
* [grandpa](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#grandpa)
* [offchain](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#offchain)
* [payment](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#payment)
* [rpc](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#rpc)
* [state](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#state)
* [system](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#system)

## Properties

###  author

• **author**: *object*

*Defined in [packages/api/src/augment/rpc.ts:26](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/augment/rpc.ts#L26)*

#### Type declaration:

* **hasKey**: *AugmentedRpc‹function›*

* **hasSessionKeys**: *AugmentedRpc‹function›*

* **insertKey**: *AugmentedRpc‹function›*

* **pendingExtrinsics**: *AugmentedRpc‹function›*

* **removeExtrinsic**: *AugmentedRpc‹function›*

* **rotateKeys**: *AugmentedRpc‹function›*

* **submitAndWatchExtrinsic**: *AugmentedRpc‹function›*

* **submitExtrinsic**: *AugmentedRpc‹function›*

___

###  babe

• **babe**: *object*

*Defined in [packages/api/src/augment/rpc.ts:60](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/augment/rpc.ts#L60)*

#### Type declaration:

* **epochAuthorship**: *AugmentedRpc‹function›*

___

###  chain

• **chain**: *object*

*Defined in [packages/api/src/augment/rpc.ts:66](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/augment/rpc.ts#L66)*

#### Type declaration:

* **getBlock**: *AugmentedRpc‹function›*

* **getBlockHash**: *AugmentedRpc‹function›*

* **getFinalizedHead**: *AugmentedRpc‹function›*

* **getHeader**: *AugmentedRpc‹function›*

* **subscribeAllHeads**: *AugmentedRpc‹function›*

* **subscribeFinalizedHeads**: *AugmentedRpc‹function›*

* **subscribeNewHeads**: *AugmentedRpc‹function›*

___

###  childstate

• **childstate**: *object*

*Defined in [packages/api/src/augment/rpc.ts:96](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/augment/rpc.ts#L96)*

#### Type declaration:

* **getKeys**: *AugmentedRpc‹function›*

* **getStorage**: *AugmentedRpc‹function›*

* **getStorageHash**: *AugmentedRpc‹function›*

* **getStorageSize**: *AugmentedRpc‹function›*

___

###  contracts

• **contracts**: *object*

*Defined in [packages/api/src/augment/rpc.ts:114](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/augment/rpc.ts#L114)*

#### Type declaration:

* **call**: *AugmentedRpc‹function›*

* **getStorage**: *AugmentedRpc‹function›*

* **rentProjection**: *AugmentedRpc‹function›*

___

###  engine

• **engine**: *object*

*Defined in [packages/api/src/augment/rpc.ts:128](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/augment/rpc.ts#L128)*

#### Type declaration:

* **createBlock**: *AugmentedRpc‹function›*

* **finalizeBlock**: *AugmentedRpc‹function›*

___

###  grandpa

• **grandpa**: *object*

*Defined in [packages/api/src/augment/rpc.ts:138](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/augment/rpc.ts#L138)*

#### Type declaration:

* **roundState**: *AugmentedRpc‹function›*

* **subscribeJustifications**: *AugmentedRpc‹function›*

___

###  offchain

• **offchain**: *object*

*Defined in [packages/api/src/augment/rpc.ts:148](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/augment/rpc.ts#L148)*

#### Type declaration:

* **localStorageGet**: *AugmentedRpc‹function›*

* **localStorageSet**: *AugmentedRpc‹function›*

___

###  payment

• **payment**: *object*

*Defined in [packages/api/src/augment/rpc.ts:158](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/augment/rpc.ts#L158)*

#### Type declaration:

* **queryInfo**: *AugmentedRpc‹function›*

___

###  rpc

• **rpc**: *object*

*Defined in [packages/api/src/augment/rpc.ts:164](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/augment/rpc.ts#L164)*

#### Type declaration:

* **methods**: *AugmentedRpc‹function›*

___

###  state

• **state**: *object*

*Defined in [packages/api/src/augment/rpc.ts:170](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/augment/rpc.ts#L170)*

#### Type declaration:

* **call**: *AugmentedRpc‹function›*

* **getChildKeys**: *AugmentedRpc‹function›*

* **getChildStorage**: *AugmentedRpc‹function›*

* **getChildStorageHash**: *AugmentedRpc‹function›*

* **getChildStorageSize**: *AugmentedRpc‹function›*

* **getKeys**: *AugmentedRpc‹function›*

* **getKeysPaged**: *AugmentedRpc‹function›*

* **getMetadata**: *AugmentedRpc‹function›*

* **getPairs**: *AugmentedRpc‹function›*

* **getReadProof**: *AugmentedRpc‹function›*

* **getRuntimeVersion**: *AugmentedRpc‹function›*

* **getStorage**: *AugmentedRpc‹function›*

* **getStorageHash**: *AugmentedRpc‹function›*

* **getStorageSize**: *AugmentedRpc‹function›*

* **queryStorage**: *AugmentedRpc‹function›*

* **queryStorageAt**: *AugmentedRpc‹function›*

* **subscribeRuntimeVersion**: *AugmentedRpc‹function›*

* **subscribeStorage**: *AugmentedRpc‹function›*

___

###  system

• **system**: *object*

*Defined in [packages/api/src/augment/rpc.ts:244](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/augment/rpc.ts#L244)*

#### Type declaration:

* **accountNextIndex**: *AugmentedRpc‹function›*

* **addReservedPeer**: *AugmentedRpc‹function›*

* **chain**: *AugmentedRpc‹function›*

* **chainType**: *AugmentedRpc‹function›*

* **dryRun**: *AugmentedRpc‹function›*

* **health**: *AugmentedRpc‹function›*

* **localListenAddresses**: *AugmentedRpc‹function›*

* **localPeerId**: *AugmentedRpc‹function›*

* **name**: *AugmentedRpc‹function›*

* **networkState**: *AugmentedRpc‹function›*

* **nodeRoles**: *AugmentedRpc‹function›*

* **peers**: *AugmentedRpc‹function›*

* **properties**: *AugmentedRpc‹function›*

* **removeReservedPeer**: *AugmentedRpc‹function›*

* **version**: *AugmentedRpc‹function›*
