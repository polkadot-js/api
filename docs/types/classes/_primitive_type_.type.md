

*__name__*: Type

*__description__*: This is a extended version of String, specifically to handle types. Here we rely fully on what string provides us, however we also adjust the types received from the runtime, i.e. we remove the `T::` prefixes found in some types for consistency accross implementation.

# Hierarchy

↳  [Text](_primitive_text_.text.md)

**↳ Type**

↳  [PlainType](_metadata_v1_storage_.plaintype.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Indexable

\[index: `number`\]:&nbsp;`string`
# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Type**(value?: *[Text](_primitive_text_.text.md) \| `Uint8Array` \| `string`*): [Type](_primitive_type_.type.md)

*Overrides [Text](_primitive_text_.text.md).[constructor](_primitive_text_.text.md#constructor)*

*Defined in [primitive/Type.ts:19](https://github.com/polkadot-js/api/blob/6eb859c/packages/types/src/primitive/Type.ts#L19)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | [Text](_primitive_text_.text.md) \| `Uint8Array` \| `string` | &quot;&quot; |

**Returns:** [Type](_primitive_type_.type.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Text](_primitive_text_.text.md).[encodedLength](_primitive_text_.text.md#encodedlength)*

*Defined in [primitive/Type.ts:76](https://github.com/polkadot-js/api/blob/6eb859c/packages/types/src/primitive/Type.ts#L76)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

getisEmpty(): `boolean`

*Inherited from [Text](_primitive_text_.text.md).[isEmpty](_primitive_text_.text.md#isempty)*

*Defined in [primitive/Text.ts:52](https://github.com/polkadot-js/api/blob/6eb859c/packages/types/src/primitive/Text.ts#L52)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [Text](_primitive_text_.text.md).[length](_primitive_text_.text.md#length)*

*Overrides String.length*

*Defined in [primitive/Text.ts:59](https://github.com/polkadot-js/api/blob/6eb859c/packages/types/src/primitive/Text.ts#L59)*

*__description__*: The length of the value

**Returns:** `number`

___

# Methods

<a id="___iterator"></a>

##  __@iterator

▸ **__@iterator**(): `IterableIterator`<`string`>

*Inherited from String.[Symbol.iterator]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:235*

Iterator

**Returns:** `IterableIterator`<`string`>

___
<a id="anchor"></a>

##  anchor

▸ **anchor**(name: *`string`*): `string`

*Inherited from String.anchor*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:454*

Returns an HTML anchor element and sets the name attribute to the text value

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |   |

**Returns:** `string`

___
<a id="big"></a>

##  big

▸ **big**(): `string`

*Inherited from String.big*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:457*

Returns a HTML element

**Returns:** `string`

___
<a id="blink"></a>

##  blink

▸ **blink**(): `string`

*Inherited from String.blink*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:460*

Returns a HTML element

**Returns:** `string`

___
<a id="bold"></a>

##  bold

▸ **bold**(): `string`

*Inherited from String.bold*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:463*

Returns a **HTML element**

**Returns:** `string`

___
<a id="charat"></a>

##  charAt

▸ **charAt**(pos: *`number`*): `string`

*Inherited from String.charAt*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:402*

Returns the character at the specified index.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| pos | `number` |  The zero-based index of the desired character. |

**Returns:** `string`

___
<a id="charcodeat"></a>

##  charCodeAt

▸ **charCodeAt**(index: *`number`*): `number`

*Inherited from String.charCodeAt*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:408*

Returns the Unicode value of the character at the specified location.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| index | `number` |  The zero-based index of the desired character. If there is no character at the specified index, NaN is returned. |

**Returns:** `number`

___
<a id="codepointat"></a>

##  codePointAt

▸ **codePointAt**(pos: *`number`*): `number` \| `undefined`

*Inherited from String.codePointAt*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:402*

Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point value of the UTF-16 encoded code point starting at the string element at position pos in the String resulting from converting this object to a String. If there is no element at that position, the result is undefined. If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.

**Parameters:**

| Name | Type |
| ------ | ------ |
| pos | `number` |

**Returns:** `number` \| `undefined`

___
<a id="concat"></a>

##  concat

▸ **concat**(...strings: *`string`[]*): `string`

*Inherited from String.concat*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:414*

Returns a string that contains the concatenation of two or more strings.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` strings | `string`[] |  The strings to append to the end of the string. |

**Returns:** `string`

___
<a id="endswith"></a>

##  endsWith

▸ **endsWith**(searchString: *`string`*, endPosition?: *`undefined` \| `number`*): `boolean`

*Inherited from String.endsWith*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:418*

Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false.

**Parameters:**

| Name | Type |
| ------ | ------ |
| searchString | `string` |
| `Optional` endPosition | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Text](_primitive_text_.text.md).[eq](_primitive_text_.text.md#eq)*

*Defined in [primitive/Text.ts:67](https://github.com/polkadot-js/api/blob/6eb859c/packages/types/src/primitive/Text.ts#L67)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="fixed"></a>

##  fixed

▸ **fixed**(): `string`

*Inherited from String.fixed*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:466*

Returns a HTML element

**Returns:** `string`

___
<a id="fontcolor"></a>

##  fontcolor

▸ **fontcolor**(color: *`string`*): `string`

*Inherited from String.fontcolor*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:469*

Returns a HTML element and sets the color attribute value

**Parameters:**

| Name | Type |
| ------ | ------ |
| color | `string` |

**Returns:** `string`

___
<a id="fontsize"></a>

##  fontsize

▸ **fontsize**(size: *`number`*): `string`

▸ **fontsize**(size: *`string`*): `string`

*Inherited from String.fontsize*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:472*

Returns a HTML element and sets the size attribute value

**Parameters:**

| Name | Type |
| ------ | ------ |
| size | `number` |

**Returns:** `string`

*Inherited from String.fontsize*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:475*

Returns a HTML element and sets the size attribute value

**Parameters:**

| Name | Type |
| ------ | ------ |
| size | `string` |

**Returns:** `string`

___
<a id="includes"></a>

##  includes

▸ **includes**(searchString: *`string`*, position?: *`undefined` \| `number`*): `boolean`

*Inherited from String.includes*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:411*

Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchString | `string` |  search string |
| `Optional` position | `undefined` \| `number` |  If position is undefined, 0 is assumed, so as to search all of the String. |

**Returns:** `boolean`

___
<a id="indexof"></a>

##  indexOf

▸ **indexOf**(searchString: *`string`*, position?: *`undefined` \| `number`*): `number`

*Inherited from String.indexOf*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:421*

Returns the position of the first occurrence of a substring.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchString | `string` |  The substring to search for in the string |
| `Optional` position | `undefined` \| `number` |  The index at which to begin searching the String object. If omitted, search starts at the beginning of the string. |

**Returns:** `number`

___
<a id="italics"></a>

##  italics

▸ **italics**(): `string`

*Inherited from String.italics*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:478*

Returns an _HTML element_

**Returns:** `string`

___
<a id="lastindexof"></a>

##  lastIndexOf

▸ **lastIndexOf**(searchString: *`string`*, position?: *`undefined` \| `number`*): `number`

*Inherited from String.lastIndexOf*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:428*

Returns the last occurrence of a substring in the string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchString | `string` |  The substring to search for. |
| `Optional` position | `undefined` \| `number` |  The index at which to begin searching. If omitted, the search begins at the end of the string. |

**Returns:** `number`

___
<a id="link"></a>

##  link

▸ **link**(url: *`string`*): `string`

*Inherited from String.link*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:481*

Returns an HTML element and sets the href attribute value

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `string`

___
<a id="localecompare"></a>

##  localeCompare

▸ **localeCompare**(that: *`string`*): `number`

*Inherited from String.localeCompare*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:434*

Determines whether two strings are equivalent in the current locale.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| that | `string` |  String to compare to target string |

**Returns:** `number`

___
<a id="match"></a>

##  match

▸ **match**(regexp: *`string` \| `RegExp`*): `RegExpMatchArray` \| `null`

*Inherited from String.match*

*Overrides String.match*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:440*

Matches a string with a regular expression, and returns an array containing the results of that search.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| regexp | `string` \| `RegExp` |  A variable name or string literal containing the regular expression pattern and flags. |

**Returns:** `RegExpMatchArray` \| `null`

___
<a id="normalize"></a>

##  normalize

▸ **normalize**(form: *"NFC" \| "NFD" \| "NFKC" \| "NFKD"*): `string`

▸ **normalize**(form?: *`undefined` \| `string`*): `string`

*Inherited from String.normalize*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:426*

Returns the String value result of normalizing the string into the normalization form named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| form | "NFC" \| "NFD" \| "NFKC" \| "NFKD" |  Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC" |

**Returns:** `string`

*Inherited from String.normalize*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:434*

Returns the String value result of normalizing the string into the normalization form named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` form | `undefined` \| `string` |  Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC" |

**Returns:** `string`

___
<a id="padend"></a>

##  padEnd

▸ **padEnd**(maxLength: *`number`*, fillString?: *`undefined` \| `string`*): `string`

*Inherited from String.padEnd*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2017.string.d.ts:46*

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| maxLength | `number` |  The length of the resulting string once the current string has been padded. If this parameter is smaller than the current string's length, the current string will be returned as it is. |
| `Optional` fillString | `undefined` \| `string` |  The string to pad the current string with. If this string is too long, it will be truncated and the left-most part will be applied. The default value for this parameter is " " (U+0020). |

**Returns:** `string`

___
<a id="padstart"></a>

##  padStart

▸ **padStart**(maxLength: *`number`*, fillString?: *`undefined` \| `string`*): `string`

*Inherited from String.padStart*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2017.string.d.ts:33*

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| maxLength | `number` |  The length of the resulting string once the current string has been padded. If this parameter is smaller than the current string's length, the current string will be returned as it is. |
| `Optional` fillString | `undefined` \| `string` |  The string to pad the current string with. If this string is too long, it will be truncated and the left-most part will be applied. The default value for this parameter is " " (U+0020). |

**Returns:** `string`

___
<a id="repeat"></a>

##  repeat

▸ **repeat**(count: *`number`*): `string`

*Inherited from String.repeat*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:441*

Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| count | `number` |  number of copies to append |

**Returns:** `string`

___
<a id="replace"></a>

##  replace

▸ **replace**(searchValue: *`string` \| `RegExp`*, replaceValue: *`string`*): `string`

▸ **replace**(searchValue: *`string` \| `RegExp`*, replacer: *`function`*): `string`

*Inherited from String.replace*

*Overrides String.replace*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:447*

Replaces text in a string, using a regular expression or search string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchValue | `string` \| `RegExp` |  A string to search for. |
| replaceValue | `string` |  A string containing the text to replace for every successful match of searchValue in this string. |

**Returns:** `string`

*Inherited from String.replace*

*Overrides String.replace*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:454*

Replaces text in a string, using a regular expression or search string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchValue | `string` \| `RegExp` |  A string to search for. |
| replacer | `function` |  A function that returns the replacement text. |

**Returns:** `string`

___
<a id="search"></a>

##  search

▸ **search**(regexp: *`string` \| `RegExp`*): `number`

*Inherited from String.search*

*Overrides String.search*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:460*

Finds the first substring match in a regular expression search.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| regexp | `string` \| `RegExp` |  The regular expression pattern and applicable flags. |

**Returns:** `number`

___
<a id="slice"></a>

##  slice

▸ **slice**(start?: *`undefined` \| `number`*, end?: *`undefined` \| `number`*): `string`

*Inherited from String.slice*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:468*

Returns a section of a string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` start | `undefined` \| `number` |  The index to the beginning of the specified portion of stringObj. |
| `Optional` end | `undefined` \| `number` |  The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj. |

**Returns:** `string`

___
<a id="small"></a>

##  small

▸ **small**(): `string`

*Inherited from String.small*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:484*

Returns a HTML element

**Returns:** `string`

___
<a id="split"></a>

##  split

▸ **split**(separator: *`string` \| `RegExp`*, limit?: *`undefined` \| `number`*): `string`[]

*Inherited from String.split*

*Overrides String.split*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:475*

Split a string into substrings using the specified separator and return them as an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| separator | `string` \| `RegExp` |  A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. |
| `Optional` limit | `undefined` \| `number` |  A value used to limit the number of elements returned in the array. |

**Returns:** `string`[]

___
<a id="startswith"></a>

##  startsWith

▸ **startsWith**(searchString: *`string`*, position?: *`undefined` \| `number`*): `boolean`

*Inherited from String.startsWith*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:448*

Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.

**Parameters:**

| Name | Type |
| ------ | ------ |
| searchString | `string` |
| `Optional` position | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="strike"></a>

##  strike

▸ **strike**(): `string`

*Inherited from String.strike*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:487*

Returns a HTML element

**Returns:** `string`

___
<a id="sub"></a>

##  sub

▸ **sub**(): `string`

*Inherited from String.sub*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:490*

Returns a HTML element

**Returns:** `string`

___
<a id="substr"></a>

##  substr

▸ **substr**(from: *`number`*, length?: *`undefined` \| `number`*): `string`

*Inherited from String.substr*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:509*

Gets a substring beginning at the specified location and having the specified length.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| from | `number` |  The starting position of the desired substring. The index of the first character in the string is zero. |
| `Optional` length | `undefined` \| `number` |  The number of characters to include in the returned substring. |

**Returns:** `string`

___
<a id="substring"></a>

##  substring

▸ **substring**(start: *`number`*, end?: *`undefined` \| `number`*): `string`

*Inherited from String.substring*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:483*

Returns the substring at the specified location within a String object.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  The zero-based index number indicating the beginning of the substring. |
| `Optional` end | `undefined` \| `number` |  Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end. If end is omitted, the characters from start through the end of the original string are returned. |

**Returns:** `string`

___
<a id="sup"></a>

##  sup

▸ **sup**(): `string`

*Inherited from String.sup*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.core.d.ts:493*

Returns a HTML element

**Returns:** `string`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Text](_primitive_text_.text.md).[toHex](_primitive_text_.text.md#tohex)*

*Defined in [primitive/Text.ts:76](https://github.com/polkadot-js/api/blob/6eb859c/packages/types/src/primitive/Text.ts#L76)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Text](_primitive_text_.text.md).[toJSON](_primitive_text_.text.md#tojson)*

*Defined in [primitive/Text.ts:83](https://github.com/polkadot-js/api/blob/6eb859c/packages/types/src/primitive/Text.ts#L83)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tolocalelowercase"></a>

##  toLocaleLowerCase

▸ **toLocaleLowerCase**(): `string`

*Inherited from String.toLocaleLowerCase*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:489*

Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.

**Returns:** `string`

___
<a id="tolocaleuppercase"></a>

##  toLocaleUpperCase

▸ **toLocaleUpperCase**(): `string`

*Inherited from String.toLocaleUpperCase*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:495*

Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.

**Returns:** `string`

___
<a id="tolowercase"></a>

##  toLowerCase

▸ **toLowerCase**(): `string`

*Inherited from String.toLowerCase*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:486*

Converts all the alphabetic characters in a string to lowercase.

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Text](_primitive_text_.text.md).[toString](_primitive_text_.text.md#tostring)*

*Overrides String.toString*

*Defined in [primitive/Text.ts:90](https://github.com/polkadot-js/api/blob/6eb859c/packages/types/src/primitive/Text.ts#L90)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Overrides [Text](_primitive_text_.text.md).[toU8a](_primitive_text_.text.md#tou8a)*

*Defined in [primitive/Type.ts:87](https://github.com/polkadot-js/api/blob/6eb859c/packages/types/src/primitive/Type.ts#L87)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="touppercase"></a>

##  toUpperCase

▸ **toUpperCase**(): `string`

*Inherited from String.toUpperCase*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:492*

Converts all the alphabetic characters in a string to uppercase.

**Returns:** `string`

___
<a id="trim"></a>

##  trim

▸ **trim**(): `string`

*Inherited from String.trim*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:498*

Removes the leading and trailing white space and line terminator characters from a string.

**Returns:** `string`

___
<a id="trimleft"></a>

##  trimLeft

▸ **trimLeft**(): `string`

*Inherited from String.trimLeft*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/node/globals.d.ts:152*

Removes whitespace from the left end of a string.

**Returns:** `string`

___
<a id="trimright"></a>

##  trimRight

▸ **trimRight**(): `string`

*Inherited from String.trimRight*

*Defined in /home/travis/build/polkadot-js/api/node_modules/@types/node/globals.d.ts:154*

Removes whitespace from the right end of a string.

**Returns:** `string`

___
<a id="valueof"></a>

##  valueOf

▸ **valueOf**(): `string`

*Inherited from String.valueOf*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:512*

Returns the primitive value of the specified object.

**Returns:** `string`

___

