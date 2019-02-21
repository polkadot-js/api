

# Hierarchy

↳  [Tuple](_codec_tuple_.tuple.md)

**↳ ValidityVote**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Indexable

\[n: `number`\]:&nbsp;[Codec](../interfaces/_types_.codec.md)
# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ValidityVote**(Types: *`TupleConstructors`*, value: *`any`*): [ValidityVote](_type_attestedcandidate_.validityvote.md)

*Inherited from [Tuple](_codec_tuple_.tuple.md).[constructor](_codec_tuple_.tuple.md#constructor)*

*Defined in [codec/Tuple.ts:22](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/codec/Tuple.ts#L22)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `TupleConstructors` |
| value | `any` |

**Returns:** [ValidityVote](_type_attestedcandidate_.validityvote.md)

___

# Properties

<a id="length"></a>

##  length

**● length**: *`number`*

*Inherited from Array.length*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1209*

Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

___

# Accessors

<a id="types"></a>

##  Types

getTypes(): `Array`<`string`>

*Inherited from [Tuple](_codec_tuple_.tuple.md).[Types](_codec_tuple_.tuple.md#types)*

*Defined in [codec/Tuple.ts:75](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/codec/Tuple.ts#L75)*

*__description__*: The types definition of the tuple

**Returns:** `Array`<`string`>

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Tuple](_codec_tuple_.tuple.md).[encodedLength](_codec_tuple_.tuple.md#encodedlength)*

*Defined in [codec/Tuple.ts:59](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/codec/Tuple.ts#L59)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

getisEmpty(): `boolean`

*Inherited from [Tuple](_codec_tuple_.tuple.md).[isEmpty](_codec_tuple_.tuple.md#isempty)*

*Defined in [codec/Tuple.ts:68](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/codec/Tuple.ts#L68)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___

# Methods

<a id="___iterator"></a>

##  __@iterator

▸ **__@iterator**(): `IterableIterator`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from Array.[Symbol.iterator]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:52*

Iterator

**Returns:** `IterableIterator`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="___unscopables"></a>

##  __@unscopables

▸ **__@unscopables**(): `object`

*Inherited from Array.[Symbol.unscopables]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:94*

Returns an object whose properties have the value 'true' when they will be absent when used in a 'with' statement.

**Returns:** `object`

___
<a id="concat"></a>

##  concat

▸ **concat**(...items: *`ConcatArray`<[Codec](../interfaces/_types_.codec.md)>[]*): [Codec](../interfaces/_types_.codec.md)[]

▸ **concat**(...items: *(`T` \| `ConcatArray`<`T`>)[]*): [Codec](../interfaces/_types_.codec.md)[]

*Inherited from Array.concat*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1231*

Combines two or more arrays.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` items | `ConcatArray`<[Codec](../interfaces/_types_.codec.md)>[] |  Additional items to add to the end of array1. |

**Returns:** [Codec](../interfaces/_types_.codec.md)[]

*Inherited from Array.concat*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1236*

Combines two or more arrays.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` items | (`T` \| `ConcatArray`<`T`>)[] |  Additional items to add to the end of array1. |

**Returns:** [Codec](../interfaces/_types_.codec.md)[]

___
<a id="copywithin"></a>

##  copyWithin

▸ **copyWithin**(target: *`number`*, start: *`number`*, end?: *`undefined` \| `number`*): `this`

*Inherited from Array.copyWithin*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:64*

Returns the this object after copying a section of the array identified by start and end to the same array starting at position target

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| target | `number` |  If target is negative, it is treated as length+target where length is the length of the array. |
| start | `number` |  If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `Optional` end | `undefined` \| `number` |  If not specified, length of the this object is used as its default value. |

**Returns:** `this`

___
<a id="entries"></a>

##  entries

▸ **entries**(): `IterableIterator`<[`number`, [Codec](../interfaces/_types_.codec.md)]>

*Inherited from Array.entries*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:57*

Returns an iterable of key, value pairs for every entry in the array

**Returns:** `IterableIterator`<[`number`, [Codec](../interfaces/_types_.codec.md)]>

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[eq](_codec_tuple_.tuple.md#eq)*

*Defined in [codec/Tuple.ts:84](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/codec/Tuple.ts#L84)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="every"></a>

##  every

▸ **every**(callbackfn: *`function`*, thisArg?: *`any`*): `boolean`

*Inherited from Array.every*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1296*

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `boolean`

___
<a id="fill"></a>

##  fill

▸ **fill**(value: *[Codec](../interfaces/_types_.codec.md)*, start?: *`undefined` \| `number`*, end?: *`undefined` \| `number`*): `this`

*Inherited from Array.fill*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:53*

Returns the this object after filling the section identified by start and end with value

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | [Codec](../interfaces/_types_.codec.md) |  value to fill array section with |
| `Optional` start | `undefined` \| `number` |  index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `Optional` end | `undefined` \| `number` |  index to stop filling the array at. If end is negative, it is treated as length+end. |

**Returns:** `this`

___
<a id="filter"></a>

##  filter

▸ **filter**(callbackfn: *`function`*, thisArg?: *`any`*): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Tuple](_codec_tuple_.tuple.md).[filter](_codec_tuple_.tuple.md#filter)*

*Overrides Array.filter*

*Defined in [codec/Tuple.ts:140](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/codec/Tuple.ts#L140)*

*__description__*: Filters the array with the callback

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  The filter function |
| `Optional` thisArg | `any` |  The \`this\` object to apply the result to |

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="find"></a>

##  find

▸ **find**<`S`>(predicate: *`function`*, thisArg?: *`any`*): `S` \| `undefined`

▸ **find**(predicate: *`function`*, thisArg?: *`any`*): [Codec](../interfaces/_types_.codec.md) \| `undefined`

*Inherited from Array.find*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:31*

Returns the value of the first element in the array where predicate is true, and undefined otherwise.

**Type parameters:**

#### S :  [Codec](../interfaces/_types_.codec.md)
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| predicate | `function` |  find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `Optional` thisArg | `any` |  If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

**Returns:** `S` \| `undefined`

*Inherited from Array.find*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:32*

**Parameters:**

| Name | Type |
| ------ | ------ |
| predicate | `function` |
| `Optional` thisArg | `any` |

**Returns:** [Codec](../interfaces/_types_.codec.md) \| `undefined`

___
<a id="findindex"></a>

##  findIndex

▸ **findIndex**(predicate: *`function`*, thisArg?: *`any`*): `number`

*Inherited from Array.findIndex*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:43*

Returns the index of the first element in the array where predicate is true, and -1 otherwise.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| predicate | `function` |  find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `Optional` thisArg | `any` |  If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

**Returns:** `number`

___
<a id="flat"></a>

##  flat

▸ **flat**<`U`>(this: *`U`[][][][][][][][]*, depth: *`7`*): `U`[]

▸ **flat**<`U`>(this: *`U`[][][][][][][]*, depth: *`6`*): `U`[]

▸ **flat**<`U`>(this: *`U`[][][][][][]*, depth: *`5`*): `U`[]

▸ **flat**<`U`>(this: *`U`[][][][][]*, depth: *`4`*): `U`[]

▸ **flat**<`U`>(this: *`U`[][][][]*, depth: *`3`*): `U`[]

▸ **flat**<`U`>(this: *`U`[][][]*, depth: *`2`*): `U`[]

▸ **flat**<`U`>(this: *`U`[][]*, depth?: *`undefined` \| `1`*): `U`[]

▸ **flat**<`U`>(this: *`U`[]*, depth: *`0`*): `U`[]

▸ **flat**<`U`>(depth?: *`undefined` \| `number`*): `any`[]

*Inherited from Array.flat*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.esnext.array.d.ts:158*

Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| this | `U`[][][][][][][][] |
| depth | `7` |  The maximum recursion depth |

**Returns:** `U`[]

*Inherited from Array.flat*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.esnext.array.d.ts:166*

Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| this | `U`[][][][][][][] |
| depth | `6` |  The maximum recursion depth |

**Returns:** `U`[]

*Inherited from Array.flat*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.esnext.array.d.ts:174*

Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| this | `U`[][][][][][] |
| depth | `5` |  The maximum recursion depth |

**Returns:** `U`[]

*Inherited from Array.flat*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.esnext.array.d.ts:182*

Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| this | `U`[][][][][] |
| depth | `4` |  The maximum recursion depth |

**Returns:** `U`[]

*Inherited from Array.flat*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.esnext.array.d.ts:190*

Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| this | `U`[][][][] |
| depth | `3` |  The maximum recursion depth |

**Returns:** `U`[]

*Inherited from Array.flat*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.esnext.array.d.ts:198*

Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| this | `U`[][][] |
| depth | `2` |  The maximum recursion depth |

**Returns:** `U`[]

*Inherited from Array.flat*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.esnext.array.d.ts:206*

Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| this | `U`[][] |
| `Optional` depth | `undefined` \| `1` |  The maximum recursion depth |

**Returns:** `U`[]

*Inherited from Array.flat*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.esnext.array.d.ts:214*

Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| this | `U`[] |
| depth | `0` |  The maximum recursion depth |

**Returns:** `U`[]

*Inherited from Array.flat*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.esnext.array.d.ts:222*

Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. If no depth is provided, flat method defaults to the depth of 1.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` depth | `undefined` \| `number` |  The maximum recursion depth |

**Returns:** `any`[]

___
<a id="flatmap"></a>

##  flatMap

▸ **flatMap**<`U`,`This`>(callback: *`function`*, thisArg?: *[This]()*): `U`[]

*Inherited from Array.flatMap*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.esnext.array.d.ts:147*

Calls a defined callback function on each element of an array. Then, flattens the result into a new array. This is identical to a map followed by flat with depth 1.

**Type parameters:**

#### U 
#### This 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callback | `function` |  A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| `Optional` thisArg | [This]() |  An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `U`[]

___
<a id="foreach"></a>

##  forEach

▸ **forEach**(callbackfn: *`function`*, thisArg?: *`any`*): `void`

*Inherited from Array.forEach*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1308*

Performs the specified action for each element in an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `void`

___
<a id="includes"></a>

##  includes

▸ **includes**(searchElement: *[Codec](../interfaces/_types_.codec.md)*, fromIndex?: *`undefined` \| `number`*): `boolean`

*Inherited from Array.includes*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2016.array.include.d.ts:27*

Determines whether an array includes a certain element, returning true or false as appropriate.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchElement | [Codec](../interfaces/_types_.codec.md) |  The element to search for. |
| `Optional` fromIndex | `undefined` \| `number` |  The position in this array at which to begin searching for searchElement. |

**Returns:** `boolean`

___
<a id="indexof"></a>

##  indexOf

▸ **indexOf**(searchElement: *[Codec](../interfaces/_types_.codec.md)*, fromIndex?: *`undefined` \| `number`*): `number`

*Inherited from Array.indexOf*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1284*

Returns the index of the first occurrence of a value in an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchElement | [Codec](../interfaces/_types_.codec.md) |  The value to locate in the array. |
| `Optional` fromIndex | `undefined` \| `number` |  The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

**Returns:** `number`

___
<a id="join"></a>

##  join

▸ **join**(separator?: *`undefined` \| `string`*): `string`

*Inherited from Array.join*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1241*

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` separator | `undefined` \| `string` |  A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma. |

**Returns:** `string`

___
<a id="keys"></a>

##  keys

▸ **keys**(): `IterableIterator`<`number`>

*Inherited from Array.keys*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:62*

Returns an iterable of keys in the array

**Returns:** `IterableIterator`<`number`>

___
<a id="lastindexof"></a>

##  lastIndexOf

▸ **lastIndexOf**(searchElement: *[Codec](../interfaces/_types_.codec.md)*, fromIndex?: *`undefined` \| `number`*): `number`

*Inherited from Array.lastIndexOf*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1290*

Returns the index of the last occurrence of a specified value in an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchElement | [Codec](../interfaces/_types_.codec.md) |  The value to locate in the array. |
| `Optional` fromIndex | `undefined` \| `number` |  The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array. |

**Returns:** `number`

___
<a id="map"></a>

##  map

▸ **map**<`U`>(callbackfn: *`function`*, thisArg?: *`any`*): `Array`<`U`>

*Inherited from [Tuple](_codec_tuple_.tuple.md).[map](_codec_tuple_.tuple.md#map)*

*Overrides Array.map*

*Defined in [codec/Tuple.ts:149](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/codec/Tuple.ts#L149)*

*__description__*: Maps the array with the callback

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  The mapping function |
| `Optional` thisArg | `any` |  The \`this\` onject to apply the result to |

**Returns:** `Array`<`U`>

___
<a id="pop"></a>

##  pop

▸ **pop**(): [Codec](../interfaces/_types_.codec.md) \| `undefined`

*Inherited from Array.pop*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1221*

Removes the last element from an array and returns it.

**Returns:** [Codec](../interfaces/_types_.codec.md) \| `undefined`

___
<a id="push"></a>

##  push

▸ **push**(...items: *[Codec](../interfaces/_types_.codec.md)[]*): `number`

*Inherited from Array.push*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1226*

Appends new elements to an array, and returns the new length of the array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` items | [Codec](../interfaces/_types_.codec.md)[] |  New elements of the Array. |

**Returns:** `number`

___
<a id="reduce"></a>

##  reduce

▸ **reduce**(callbackfn: *`function`*): [Codec](../interfaces/_types_.codec.md)

▸ **reduce**(callbackfn: *`function`*, initialValue: *[Codec](../interfaces/_types_.codec.md)*): [Codec](../interfaces/_types_.codec.md)

▸ **reduce**<`U`>(callbackfn: *`function`*, initialValue: *`U`*): `U`

*Inherited from Array.reduce*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1332*

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

**Returns:** [Codec](../interfaces/_types_.codec.md)

*Inherited from Array.reduce*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1333*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackfn | `function` |
| initialValue | [Codec](../interfaces/_types_.codec.md) |

**Returns:** [Codec](../interfaces/_types_.codec.md)

*Inherited from Array.reduce*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1339*

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| initialValue | `U` |  If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

**Returns:** `U`

___
<a id="reduceright"></a>

##  reduceRight

▸ **reduceRight**(callbackfn: *`function`*): [Codec](../interfaces/_types_.codec.md)

▸ **reduceRight**(callbackfn: *`function`*, initialValue: *[Codec](../interfaces/_types_.codec.md)*): [Codec](../interfaces/_types_.codec.md)

▸ **reduceRight**<`U`>(callbackfn: *`function`*, initialValue: *`U`*): `U`

*Inherited from Array.reduceRight*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1345*

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

**Returns:** [Codec](../interfaces/_types_.codec.md)

*Inherited from Array.reduceRight*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1346*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackfn | `function` |
| initialValue | [Codec](../interfaces/_types_.codec.md) |

**Returns:** [Codec](../interfaces/_types_.codec.md)

*Inherited from Array.reduceRight*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1352*

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| initialValue | `U` |  If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

**Returns:** `U`

___
<a id="reverse"></a>

##  reverse

▸ **reverse**(): [Codec](../interfaces/_types_.codec.md)[]

*Inherited from Array.reverse*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1245*

Reverses the elements in an Array.

**Returns:** [Codec](../interfaces/_types_.codec.md)[]

___
<a id="shift"></a>

##  shift

▸ **shift**(): [Codec](../interfaces/_types_.codec.md) \| `undefined`

*Inherited from Array.shift*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1249*

Removes the first element from an array and returns it.

**Returns:** [Codec](../interfaces/_types_.codec.md) \| `undefined`

___
<a id="slice"></a>

##  slice

▸ **slice**(start?: *`undefined` \| `number`*, end?: *`undefined` \| `number`*): [Codec](../interfaces/_types_.codec.md)[]

*Inherited from Array.slice*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1255*

Returns a section of an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` start | `undefined` \| `number` |  The beginning of the specified portion of the array. |
| `Optional` end | `undefined` \| `number` |  The end of the specified portion of the array. |

**Returns:** [Codec](../interfaces/_types_.codec.md)[]

___
<a id="some"></a>

##  some

▸ **some**(callbackfn: *`function`*, thisArg?: *`any`*): `boolean`

*Inherited from Array.some*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1302*

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `boolean`

___
<a id="sort"></a>

##  sort

▸ **sort**(compareFn?: *`undefined` \| `function`*): `this`

*Inherited from Array.sort*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1260*

Sorts an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` compareFn | `undefined` \| `function` |  The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order. |

**Returns:** `this`

___
<a id="splice"></a>

##  splice

▸ **splice**(start: *`number`*, deleteCount?: *`undefined` \| `number`*): [Codec](../interfaces/_types_.codec.md)[]

▸ **splice**(start: *`number`*, deleteCount: *`number`*, ...items: *[Codec](../interfaces/_types_.codec.md)[]*): [Codec](../interfaces/_types_.codec.md)[]

*Inherited from Array.splice*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1266*

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  The zero-based location in the array from which to start removing elements. |
| `Optional` deleteCount | `undefined` \| `number` |  The number of elements to remove. |

**Returns:** [Codec](../interfaces/_types_.codec.md)[]

*Inherited from Array.splice*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1273*

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  The zero-based location in the array from which to start removing elements. |
| deleteCount | `number` |  The number of elements to remove. |
| `Rest` items | [Codec](../interfaces/_types_.codec.md)[] |  Elements to insert into the array in place of the deleted elements. |

**Returns:** [Codec](../interfaces/_types_.codec.md)[]

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toArray](_codec_tuple_.tuple.md#toarray)*

*Defined in [codec/Tuple.ts:91](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/codec/Tuple.ts#L91)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toHex](_codec_tuple_.tuple.md#tohex)*

*Defined in [codec/Tuple.ts:98](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/codec/Tuple.ts#L98)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toJSON](_codec_tuple_.tuple.md#tojson)*

*Defined in [codec/Tuple.ts:105](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/codec/Tuple.ts#L105)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tolocalestring"></a>

##  toLocaleString

▸ **toLocaleString**(): `string`

*Inherited from Array.toLocaleString*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1217*

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toString](_codec_tuple_.tuple.md#tostring)*

*Overrides Array.toString*

*Defined in [codec/Tuple.ts:114](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/codec/Tuple.ts#L114)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toU8a](_codec_tuple_.tuple.md#tou8a)*

*Defined in [codec/Tuple.ts:123](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/codec/Tuple.ts#L123)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="unshift"></a>

##  unshift

▸ **unshift**(...items: *[Codec](../interfaces/_types_.codec.md)[]*): `number`

*Inherited from Array.unshift*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1278*

Inserts new elements at the start of an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` items | [Codec](../interfaces/_types_.codec.md)[] |  Elements to insert at the start of the Array. |

**Returns:** `number`

___
<a id="values"></a>

##  values

▸ **values**(): `IterableIterator`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from Array.values*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:67*

Returns an iterable of values in the array

**Returns:** `IterableIterator`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="with"></a>

## `<Static>` with

▸ **with**(Types: *`TupleConstructors`*): [Constructor](../interfaces/_types_.constructor.md)<[Tuple](_codec_tuple_.tuple.md)>

*Inherited from [Tuple](_codec_tuple_.tuple.md).[with](_codec_tuple_.tuple.md#with)*

*Defined in [codec/Tuple.ts:48](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/codec/Tuple.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `TupleConstructors` |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)<[Tuple](_codec_tuple_.tuple.md)>

___

