

# Functions

<a id="createdescriptor"></a>

##  createDescriptor

▸ **createDescriptor**(section: *`string`*, method: *`string`*, index: *`number`*, meta: *`FunctionMetadata`*): `ExtrinsicFunction`

*Defined in [utils/createUnchecked.ts:16](https://github.com/polkadot-js/api/blob/a03babe/packages/type-extrinsics/src/utils/createUnchecked.ts#L16)*

From the metadata of a function in the module's storage, generate the function that will return the an UncheckExtrinsic.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| section | `string` |
| method | `string` |
| index | `number` |  Index of the module section in the modules array. |
| meta | `FunctionMetadata` |

**Returns:** `ExtrinsicFunction`

___

