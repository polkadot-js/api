
Intro
-----

This is the Polkadot JS Api documentation.

Start [here](globals.html)

## Index

### Type aliases

* [FormatterFunction](#formatterfunction)

### Functions

* [echo](#echo)
* [format](#format)
* [formatInputs](#formatinputs)
* [formatOutput](#formatoutput)

---

## Type aliases

<a id="formatterfunction"></a>

###  FormatterFunction

**Ƭ FormatterFunction**: *`function`*

*Defined in [types.d.ts:7](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-format/src/types.d.ts#L7)*

#### Type declaration
▸(value: *`any`*): `any`

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `any`

___

## Functions

<a id="echo"></a>

###  echo

▸ **echo**(value: *`any`*): `any`

*Defined in [echo.ts:10](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-format/src/echo.ts#L10)*

A function returning any value passed to it

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `any` |  The input value |

**Returns:** `any`
The value passed as input

___
<a id="format"></a>

###  format

▸ **format**(formatters: *`FormattersFunctionMap`*, types: *`Array`<`Param$Types`>*, values: *`Array`<`any`>*): `Array`<`any`>

*Defined in [format.ts:49](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-format/src/format.ts#L49)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| formatters | `FormattersFunctionMap` |
| types | `Array`<`Param$Types`> |
| values | `Array`<`any`> |

**Returns:** `Array`<`any`>

___
<a id="formatinputs"></a>

###  formatInputs

▸ **formatInputs**(params: *`Params`*, values: *`Array`<`any`>*): `Array`<`any`>

*Defined in [input.ts:22](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-format/src/input.ts#L22)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| params | `Params` |
| values | `Array`<`any`> |

**Returns:** `Array`<`any`>

___
<a id="formatoutput"></a>

###  formatOutput

▸ **formatOutput**(type: *`Param$Types`*, value?: *`any`*):  `any` &#124; `null`

*Defined in [output.ts:30](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-format/src/output.ts#L30)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `Param$Types` |
| `Optional` value | `any` |

**Returns:**  `any` &#124; `null`

___

