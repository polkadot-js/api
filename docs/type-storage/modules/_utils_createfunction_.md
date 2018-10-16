

# Functions

<a id="createfunction"></a>

##  createFunction

▸ **createFunction**(section: *`Text`*, method: *`Text`*, meta: *`StorageFunctionMetadata`*, options?: *[CreateItemOptions](../interfaces/_utils_createfunction_.createitemoptions.md)*): `StorageFunction`

*Defined in [utils/createFunction.ts:30](https://github.com/polkadot-js/api/blob/ef2b0b4/packages/type-storage/src/utils/createFunction.ts#L30)*

From the schema of a function in the module's storage, generate the function that will return the correct storage key.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| section | `Text` | - |
| method | `Text` | - |
| meta | `StorageFunctionMetadata` | - |
| `Default value` options | [CreateItemOptions](../interfaces/_utils_createfunction_.createitemoptions.md) |  {} |  Additional options when creating the function. These options are not known at runtime (from state_getMetadata), they need to be supplied by us manually at compile time. |

**Returns:** `StorageFunction`

___

