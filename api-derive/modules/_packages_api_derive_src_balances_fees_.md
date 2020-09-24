**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / "packages/api-derive/src/balances/fees"

# Module: "packages/api-derive/src/balances/fees"

## Index

### Functions

* [fees](_packages_api_derive_src_balances_fees_.md#fees)

## Functions

### fees

▸ **fees**(`instanceId`: string, `api`: ApiInterfaceRx): function

*Defined in [packages/api-derive/src/balances/fees.ts:26](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/api-derive/src/balances/fees.ts#L26)*

**`name`** fees

**`example`** 
<BR>

```javascript
api.derive.balances.fees(({ creationFee, transferFee }) => {
  console.log(`The fee for creating a new account on this chain is ${creationFee} units. The fee required for making a transfer is ${transferFee} units.`);
});
```

#### Parameters:

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** function
