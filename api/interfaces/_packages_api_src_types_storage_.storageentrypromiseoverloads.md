**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/api/src/types/storage"](../modules/_packages_api_src_types_storage_.md) / StorageEntryPromiseOverloads

# Interface: StorageEntryPromiseOverloads

## Hierarchy

* **StorageEntryPromiseOverloads**

## Callable

▸ (`arg1?`: CodecArg, `arg2?`: CodecArg): Promise\<Codec>

*Defined in [packages/api/src/types/storage.ts:21](https://github.com/polkadot-js/api/blob/33c161f87/packages/api/src/types/storage.ts#L21)*

#### Parameters:

Name | Type |
------ | ------ |
`arg1?` | CodecArg |
`arg2?` | CodecArg |

**Returns:** Promise\<Codec>

▸ \<T>(`arg1?`: CodecArg, `arg2?`: CodecArg): Promise\<T>

*Defined in [packages/api/src/types/storage.ts:22](https://github.com/polkadot-js/api/blob/33c161f87/packages/api/src/types/storage.ts#L22)*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | Codec |

#### Parameters:

Name | Type |
------ | ------ |
`arg1?` | CodecArg |
`arg2?` | CodecArg |

**Returns:** Promise\<T>

▸ \<T>(`callback`: Callback\<T>): [UnsubscribePromise](../modules/_packages_api_src_types_base_.md#unsubscribepromise)

*Defined in [packages/api/src/types/storage.ts:23](https://github.com/polkadot-js/api/blob/33c161f87/packages/api/src/types/storage.ts#L23)*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | Codec |

#### Parameters:

Name | Type |
------ | ------ |
`callback` | Callback\<T> |

**Returns:** [UnsubscribePromise](../modules/_packages_api_src_types_base_.md#unsubscribepromise)

▸ \<T>(`arg`: CodecArg, `callback`: Callback\<T>): [UnsubscribePromise](../modules/_packages_api_src_types_base_.md#unsubscribepromise)

*Defined in [packages/api/src/types/storage.ts:24](https://github.com/polkadot-js/api/blob/33c161f87/packages/api/src/types/storage.ts#L24)*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | Codec |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | CodecArg |
`callback` | Callback\<T> |

**Returns:** [UnsubscribePromise](../modules/_packages_api_src_types_base_.md#unsubscribepromise)

▸ \<T>(`arg1`: CodecArg, `arg2`: CodecArg, `callback`: Callback\<T>): [UnsubscribePromise](../modules/_packages_api_src_types_base_.md#unsubscribepromise)

*Defined in [packages/api/src/types/storage.ts:25](https://github.com/polkadot-js/api/blob/33c161f87/packages/api/src/types/storage.ts#L25)*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | Codec |

#### Parameters:

Name | Type |
------ | ------ |
`arg1` | CodecArg |
`arg2` | CodecArg |
`callback` | Callback\<T> |

**Returns:** [UnsubscribePromise](../modules/_packages_api_src_types_base_.md#unsubscribepromise)
