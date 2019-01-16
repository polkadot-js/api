

# Functions

<a id="cache"></a>

## `<Const>` cache

▸ **cache**(fn: *`Function`*, map?: *`WeakMap`<`object`, `any`>*): `(Anonymous function)`

*Defined in [util/cache.ts:23](https://github.com/polkadot-js/api/blob/695e4f2/packages/api-derive/src/util/cache.ts#L23)*

Create memoization for a 2-currified function.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| fn | `Function` | - |  The function to memoize. |
| `Default value` map | `WeakMap`<`object`, `any`> |  new WeakMap() |  The Map used to cache function returns. |

**Returns:** `(Anonymous function)`

___

