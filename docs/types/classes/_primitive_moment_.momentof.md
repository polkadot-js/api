

*__name__*: MomentOf

*__description__*: The Substrate MomentOf representation as a [Moment](_primitive_moment_.moment.md).

# Hierarchy

↳  [Moment](_primitive_moment_.moment.md)

**↳ MomentOf**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new MomentOf**(value?: *[Moment](_primitive_moment_.moment.md) \| `Date` \| [AnyNumber](../modules/_types_.md#anynumber)*): [MomentOf](_primitive_moment_.momentof.md)

*Inherited from [Moment](_primitive_moment_.moment.md).[constructor](_primitive_moment_.moment.md#constructor)*

*Defined in [primitive/Moment.ts:24](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/primitive/Moment.ts#L24)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | [Moment](_primitive_moment_.moment.md) \| `Date` \| [AnyNumber](../modules/_types_.md#anynumber) | 0 |

**Returns:** [MomentOf](_primitive_moment_.momentof.md)

___

# Properties

<a id="getvardate"></a>

##  getVarDate

**● getVarDate**: *`function`*

*Inherited from Date.getVarDate*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.scripthost.d.ts:326*

#### Type declaration
▸(): `VarDate`

**Returns:** `VarDate`

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Moment](_primitive_moment_.moment.md).[encodedLength](_primitive_moment_.moment.md#encodedlength)*

*Defined in [primitive/Moment.ts:51](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/primitive/Moment.ts#L51)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

getisEmpty(): `boolean`

*Inherited from [Moment](_primitive_moment_.moment.md).[isEmpty](_primitive_moment_.moment.md#isempty)*

*Defined in [primitive/Moment.ts:58](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/primitive/Moment.ts#L58)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___

# Methods

<a id="___toprimitive"></a>

##  __@toPrimitive

▸ **__@toPrimitive**(hint: *"default"*): `string`

▸ **__@toPrimitive**(hint: *"string"*): `string`

▸ **__@toPrimitive**(hint: *"number"*): `number`

▸ **__@toPrimitive**(hint: *`string`*): `string` \| `number`

*Inherited from Date.[Symbol.toPrimitive]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:109*

Converts a Date object to a string.

**Parameters:**

| Name | Type |
| ------ | ------ |
| hint | "default" |

**Returns:** `string`

*Inherited from Date.[Symbol.toPrimitive]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:113*

Converts a Date object to a string.

**Parameters:**

| Name | Type |
| ------ | ------ |
| hint | "string" |

**Returns:** `string`

*Inherited from Date.[Symbol.toPrimitive]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:117*

Converts a Date object to a number.

**Parameters:**

| Name | Type |
| ------ | ------ |
| hint | "number" |

**Returns:** `number`

*Inherited from Date.[Symbol.toPrimitive]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:126*

Converts a Date object to a string or number.

*__throws__*: {TypeError} If 'hint' was given something other than "number", "string", or "default".

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hint | `string` |  The strings "number", "string", or "default" to specify what primitive to return. |

**Returns:** `string` \| `number`
A number if 'hint' was "number", a string if 'hint' was "string" or "default".

___
<a id="bitlength"></a>

##  bitLength

▸ **bitLength**(): [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)

*Inherited from [Moment](_primitive_moment_.moment.md).[bitLength](_primitive_moment_.moment.md#bitlength)*

*Defined in [primitive/Moment.ts:72](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/primitive/Moment.ts#L72)*

*__description__*: Returns the number of bits in the value

**Returns:** [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Moment](_primitive_moment_.moment.md).[eq](_primitive_moment_.moment.md#eq)*

*Defined in [primitive/Moment.ts:65](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/primitive/Moment.ts#L65)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="getdate"></a>

##  getDate

▸ **getDate**(): `number`

*Inherited from Date.getDate*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:755*

Gets the day-of-the-month, using local time.

**Returns:** `number`

___
<a id="getday"></a>

##  getDay

▸ **getDay**(): `number`

*Inherited from Date.getDay*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:759*

Gets the day of the week, using local time.

**Returns:** `number`

___
<a id="getfullyear"></a>

##  getFullYear

▸ **getFullYear**(): `number`

*Inherited from Date.getFullYear*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:747*

Gets the year, using local time.

**Returns:** `number`

___
<a id="gethours"></a>

##  getHours

▸ **getHours**(): `number`

*Inherited from Date.getHours*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:763*

Gets the hours in a date, using local time.

**Returns:** `number`

___
<a id="getmilliseconds"></a>

##  getMilliseconds

▸ **getMilliseconds**(): `number`

*Inherited from Date.getMilliseconds*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:775*

Gets the milliseconds of a Date, using local time.

**Returns:** `number`

___
<a id="getminutes"></a>

##  getMinutes

▸ **getMinutes**(): `number`

*Inherited from Date.getMinutes*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:767*

Gets the minutes of a Date object, using local time.

**Returns:** `number`

___
<a id="getmonth"></a>

##  getMonth

▸ **getMonth**(): `number`

*Inherited from Date.getMonth*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:751*

Gets the month, using local time.

**Returns:** `number`

___
<a id="getseconds"></a>

##  getSeconds

▸ **getSeconds**(): `number`

*Inherited from Date.getSeconds*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:771*

Gets the seconds of a Date object, using local time.

**Returns:** `number`

___
<a id="gettime"></a>

##  getTime

▸ **getTime**(): `number`

*Inherited from Date.getTime*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:745*

Gets the time value in milliseconds.

**Returns:** `number`

___
<a id="gettimezoneoffset"></a>

##  getTimezoneOffset

▸ **getTimezoneOffset**(): `number`

*Inherited from Date.getTimezoneOffset*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:779*

Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).

**Returns:** `number`

___
<a id="getutcdate"></a>

##  getUTCDate

▸ **getUTCDate**(): `number`

*Inherited from Date.getUTCDate*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:757*

Gets the day-of-the-month, using Universal Coordinated Time (UTC).

**Returns:** `number`

___
<a id="getutcday"></a>

##  getUTCDay

▸ **getUTCDay**(): `number`

*Inherited from Date.getUTCDay*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:761*

Gets the day of the week using Universal Coordinated Time (UTC).

**Returns:** `number`

___
<a id="getutcfullyear"></a>

##  getUTCFullYear

▸ **getUTCFullYear**(): `number`

*Inherited from Date.getUTCFullYear*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:749*

Gets the year using Universal Coordinated Time (UTC).

**Returns:** `number`

___
<a id="getutchours"></a>

##  getUTCHours

▸ **getUTCHours**(): `number`

*Inherited from Date.getUTCHours*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:765*

Gets the hours value in a Date object using Universal Coordinated Time (UTC).

**Returns:** `number`

___
<a id="getutcmilliseconds"></a>

##  getUTCMilliseconds

▸ **getUTCMilliseconds**(): `number`

*Inherited from Date.getUTCMilliseconds*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:777*

Gets the milliseconds of a Date object using Universal Coordinated Time (UTC).

**Returns:** `number`

___
<a id="getutcminutes"></a>

##  getUTCMinutes

▸ **getUTCMinutes**(): `number`

*Inherited from Date.getUTCMinutes*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:769*

Gets the minutes of a Date object using Universal Coordinated Time (UTC).

**Returns:** `number`

___
<a id="getutcmonth"></a>

##  getUTCMonth

▸ **getUTCMonth**(): `number`

*Inherited from Date.getUTCMonth*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:753*

Gets the month of a Date object using Universal Coordinated Time (UTC).

**Returns:** `number`

___
<a id="getutcseconds"></a>

##  getUTCSeconds

▸ **getUTCSeconds**(): `number`

*Inherited from Date.getUTCSeconds*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:773*

Gets the seconds of a Date object using Universal Coordinated Time (UTC).

**Returns:** `number`

___
<a id="setdate"></a>

##  setDate

▸ **setDate**(date: *`number`*): `number`

*Inherited from Date.setDate*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:842*

Sets the numeric day-of-the-month value of the Date object using local time.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| date | `number` |  A numeric value equal to the day of the month. |

**Returns:** `number`

___
<a id="setfullyear"></a>

##  setFullYear

▸ **setFullYear**(year: *`number`*, month?: *`undefined` \| `number`*, date?: *`undefined` \| `number`*): `number`

*Inherited from Date.setFullYear*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:866*

Sets the year of the Date object using local time.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| year | `number` |  A numeric value for the year. |
| `Optional` month | `undefined` \| `number` |  A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified. |
| `Optional` date | `undefined` \| `number` |  A numeric value equal for the day of the month. |

**Returns:** `number`

___
<a id="sethours"></a>

##  setHours

▸ **setHours**(hours: *`number`*, min?: *`undefined` \| `number`*, sec?: *`undefined` \| `number`*, ms?: *`undefined` \| `number`*): `number`

*Inherited from Date.setHours*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:829*

Sets the hour value in the Date object using local time.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hours | `number` |  A numeric value equal to the hours value. |
| `Optional` min | `undefined` \| `number` |  A numeric value equal to the minutes value. |
| `Optional` sec | `undefined` \| `number` |  A numeric value equal to the seconds value. |
| `Optional` ms | `undefined` \| `number` |  A numeric value equal to the milliseconds value. |

**Returns:** `number`

___
<a id="setmilliseconds"></a>

##  setMilliseconds

▸ **setMilliseconds**(ms: *`number`*): `number`

*Inherited from Date.setMilliseconds*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:789*

Sets the milliseconds value in the Date object using local time.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| ms | `number` |  A numeric value equal to the millisecond value. |

**Returns:** `number`

___
<a id="setminutes"></a>

##  setMinutes

▸ **setMinutes**(min: *`number`*, sec?: *`undefined` \| `number`*, ms?: *`undefined` \| `number`*): `number`

*Inherited from Date.setMinutes*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:814*

Sets the minutes value in the Date object using local time.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| min | `number` |  A numeric value equal to the minutes value. |
| `Optional` sec | `undefined` \| `number` |  A numeric value equal to the seconds value. |
| `Optional` ms | `undefined` \| `number` |  A numeric value equal to the milliseconds value. |

**Returns:** `number`

___
<a id="setmonth"></a>

##  setMonth

▸ **setMonth**(month: *`number`*, date?: *`undefined` \| `number`*): `number`

*Inherited from Date.setMonth*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:853*

Sets the month value in the Date object using local time.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| month | `number` |  A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. |
| `Optional` date | `undefined` \| `number` |  A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used. |

**Returns:** `number`

___
<a id="setseconds"></a>

##  setSeconds

▸ **setSeconds**(sec: *`number`*, ms?: *`undefined` \| `number`*): `number`

*Inherited from Date.setSeconds*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:801*

Sets the seconds value in the Date object using local time.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| sec | `number` |  A numeric value equal to the seconds value. |
| `Optional` ms | `undefined` \| `number` |  A numeric value equal to the milliseconds value. |

**Returns:** `number`

___
<a id="settime"></a>

##  setTime

▸ **setTime**(time: *`number`*): `number`

*Inherited from Date.setTime*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:784*

Sets the date and time value in the Date object.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| time | `number` |  A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT. |

**Returns:** `number`

___
<a id="setutcdate"></a>

##  setUTCDate

▸ **setUTCDate**(date: *`number`*): `number`

*Inherited from Date.setUTCDate*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:847*

Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| date | `number` |  A numeric value equal to the day of the month. |

**Returns:** `number`

___
<a id="setutcfullyear"></a>

##  setUTCFullYear

▸ **setUTCFullYear**(year: *`number`*, month?: *`undefined` \| `number`*, date?: *`undefined` \| `number`*): `number`

*Inherited from Date.setUTCFullYear*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:873*

Sets the year value in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| year | `number` |  A numeric value equal to the year. |
| `Optional` month | `undefined` \| `number` |  A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied. |
| `Optional` date | `undefined` \| `number` |  A numeric value equal to the day of the month. |

**Returns:** `number`

___
<a id="setutchours"></a>

##  setUTCHours

▸ **setUTCHours**(hours: *`number`*, min?: *`undefined` \| `number`*, sec?: *`undefined` \| `number`*, ms?: *`undefined` \| `number`*): `number`

*Inherited from Date.setUTCHours*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:837*

Sets the hours value in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hours | `number` |  A numeric value equal to the hours value. |
| `Optional` min | `undefined` \| `number` |  A numeric value equal to the minutes value. |
| `Optional` sec | `undefined` \| `number` |  A numeric value equal to the seconds value. |
| `Optional` ms | `undefined` \| `number` |  A numeric value equal to the milliseconds value. |

**Returns:** `number`

___
<a id="setutcmilliseconds"></a>

##  setUTCMilliseconds

▸ **setUTCMilliseconds**(ms: *`number`*): `number`

*Inherited from Date.setUTCMilliseconds*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:794*

Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| ms | `number` |  A numeric value equal to the millisecond value. |

**Returns:** `number`

___
<a id="setutcminutes"></a>

##  setUTCMinutes

▸ **setUTCMinutes**(min: *`number`*, sec?: *`undefined` \| `number`*, ms?: *`undefined` \| `number`*): `number`

*Inherited from Date.setUTCMinutes*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:821*

Sets the minutes value in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| min | `number` |  A numeric value equal to the minutes value. |
| `Optional` sec | `undefined` \| `number` |  A numeric value equal to the seconds value. |
| `Optional` ms | `undefined` \| `number` |  A numeric value equal to the milliseconds value. |

**Returns:** `number`

___
<a id="setutcmonth"></a>

##  setUTCMonth

▸ **setUTCMonth**(month: *`number`*, date?: *`undefined` \| `number`*): `number`

*Inherited from Date.setUTCMonth*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:859*

Sets the month value in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| month | `number` |  A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. |
| `Optional` date | `undefined` \| `number` |  A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used. |

**Returns:** `number`

___
<a id="setutcseconds"></a>

##  setUTCSeconds

▸ **setUTCSeconds**(sec: *`number`*, ms?: *`undefined` \| `number`*): `number`

*Inherited from Date.setUTCSeconds*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:807*

Sets the seconds value in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| sec | `number` |  A numeric value equal to the seconds value. |
| `Optional` ms | `undefined` \| `number` |  A numeric value equal to the milliseconds value. |

**Returns:** `number`

___
<a id="tobn"></a>

##  toBn

▸ **toBn**(): `BN`

*Inherited from [Moment](_primitive_moment_.moment.md).[toBn](_primitive_moment_.moment.md#tobn)*

*Defined in [primitive/Moment.ts:79](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/primitive/Moment.ts#L79)*

*__description__*: Returns the BN representation of the timestamp

**Returns:** `BN`

___
<a id="todatestring"></a>

##  toDateString

▸ **toDateString**(): `string`

*Inherited from Date.toDateString*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:733*

Returns a date as a string value.

**Returns:** `string`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Moment](_primitive_moment_.moment.md).[toHex](_primitive_moment_.moment.md#tohex)*

*Defined in [primitive/Moment.ts:86](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/primitive/Moment.ts#L86)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="toisostring"></a>

##  toISOString

▸ **toISOString**(): `string`

*Inherited from Date.toISOString*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:877*

Returns a date as a string value in ISO format.

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Moment](_primitive_moment_.moment.md).[toJSON](_primitive_moment_.moment.md#tojson)*

*Overrides Date.toJSON*

*Defined in [primitive/Moment.ts:93](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/primitive/Moment.ts#L93)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tolocaledatestring"></a>

##  toLocaleDateString

▸ **toLocaleDateString**(): `string`

*Inherited from Date.toLocaleDateString*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:739*

Returns a date as a string value appropriate to the host environment's current locale.

**Returns:** `string`

___
<a id="tolocalestring"></a>

##  toLocaleString

▸ **toLocaleString**(): `string`

*Inherited from Date.toLocaleString*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:737*

Returns a value as a string value appropriate to the host environment's current locale.

**Returns:** `string`

___
<a id="tolocaletimestring"></a>

##  toLocaleTimeString

▸ **toLocaleTimeString**(): `string`

*Inherited from Date.toLocaleTimeString*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:741*

Returns a time as a string value appropriate to the host environment's current locale.

**Returns:** `string`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [Moment](_primitive_moment_.moment.md).[toNumber](_primitive_moment_.moment.md#tonumber)*

*Defined in [primitive/Moment.ts:100](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/primitive/Moment.ts#L100)*

*__description__*: Returns the number representation for the timestamp

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Moment](_primitive_moment_.moment.md).[toString](_primitive_moment_.moment.md#tostring)*

*Overrides Date.toString*

*Defined in [primitive/Moment.ts:107](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/primitive/Moment.ts#L107)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="totimestring"></a>

##  toTimeString

▸ **toTimeString**(): `string`

*Inherited from Date.toTimeString*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:735*

Returns a time as a string value.

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Moment](_primitive_moment_.moment.md).[toU8a](_primitive_moment_.moment.md#tou8a)*

*Defined in [primitive/Moment.ts:116](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/primitive/Moment.ts#L116)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="toutcstring"></a>

##  toUTCString

▸ **toUTCString**(): `string`

*Inherited from Date.toUTCString*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:875*

Returns a date converted to a string using Universal Coordinated Time (UTC).

**Returns:** `string`

___
<a id="valueof"></a>

##  valueOf

▸ **valueOf**(): `number`

*Inherited from Date.valueOf*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:743*

Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.

**Returns:** `number`

___
<a id="decodemoment"></a>

## `<Static>` decodeMoment

▸ **decodeMoment**(value: *[Moment](_primitive_moment_.moment.md) \| `Date` \| [AnyNumber](../modules/_types_.md#anynumber)*): `Date`

*Inherited from [Moment](_primitive_moment_.moment.md).[decodeMoment](_primitive_moment_.moment.md#decodemoment)*

*Defined in [primitive/Moment.ts:34](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/primitive/Moment.ts#L34)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | [Moment](_primitive_moment_.moment.md) \| `Date` \| [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** `Date`

___

