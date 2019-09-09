# Introduction to types

We've touched upon types in most previous sections, i.e. that these are driven by metadata and that they are created and converted to/from automatically by the API. Since they appear in all results, we will divert a bit from the regularly scheduled program in explaining the API interfaces to giving some info on the base types.

## Everything is a type

Just to re-iterate from the above. Eveything returned by the API is a type and has a consistent interface. This means that a `Vec<u32>` (an array) as well as a `Struct` (an object) or an `Enum` has the same consistent base interface. Additional types will have values, based on the type - decorated and available.

As a minimum, anything returned by the API, be it a `Vec<...>`, `Option<...>`, `Struct` or any normal type will always have the following methods -

- `.eq(<other value>)` - checks for equality against the other value. In all cases, it will accept "like" values, i.e. in the case of a number you can pass a primitive (i.e. `1`), a hex value ( i.e. `0x01`) or even a `Unit8Array`
- `toHex()` - returns a hex-base representation of the value, always prefixed by `0x`
- `toJSON()` - returns a JSON-like representation of the value, this is generally use when calling `JSON.stringify(...)` on the value
- `toString()` - returns a string representation, in some cases this performs additional encoding, i.e. for `Address` and `AccountId` it will encode to the ss58 address
- `.toU8a()` - returns a `Uint8Array` representation of the encoded value (generally exactly as passed to the node, where values are SCALE encoded)

Additionally, the following getters and utilities are available -

- `.isEmpty` - `true` if the value is an all-empy value, i.e. `0` in for numbers, all-zero for Arrays (or anything `Uint8Array`)
- `.hash` - a `Hash` (once again with all the methods above) that is a `blake2-256` of the contained value

## Working with numbers

All numbers wrap and extend an instance of [bn.js](https://github.com/indutny/bn.js/). This means that in addition  to the interfaces defined above, they have some additional methods -

- `.toNumber()` - a JS number (limited to 2^53 - 1). This does mean that for large values, e.g. `Balance` (a `u128` extension), can cause overflows
- `.add(...)`, `.sub(...)`, ... - all the base methods available on the `BN` object

In cases where a `Compact` is returned, i.e. `Compact<Balance>`, the value is wrapped. This object should be `.unwrap()`-ed first to gain access to the underlying `Balance` object.

## Working with structures

All structures, a wrapping of an object containing a number of member variables, is an implementation of a standard JS `Map` object, so all the functions available on  a `Map` such as `.entries()` are available. Additionally it is decorated with actual getters for the fields.

As an example, a `Header` will have getters for the `.parentHash`, `.number`, `.stateRoot`, `.extrinsicsRoot` and `.digest` fields. The same applies for all structures, as they are returned, each member will have an associated getter.

## Working with enums

Each enum has additional getters which are injected based on the fields wrapped. These take the form of `.is<Name>` and `.as<Name>` to allow you to check is the enum is a certain value or to retrieve the underlying value as a specific type.

As an example, when an extrinsic is applied, the `Phase` enum has one of two states, `ApplyExtrinsic(u32)` or `Finalization`. In this case `.isApplyExtrinsic` would be `true` when an extrinsic is being applied, and `.asApplyExtrinsic` would return the phase value as a `u32`

## Working with Option<Type>

An `Option<Type>` attempts to mimic the Rust approach of having `None` and `Some` available. This means the following getters & methods are available on an `Option` -

- `.isNone` - is `true` if no underlying values is warpped, effectively the same as `.isEmpty`
- `.isSome` - this is `true` is a value is wrapped, i.e. if a `Option<u32>` has an actual underlying `u32`
- `.unwrap()` - when `isSome`, this  will return the wrapped vlaue, i.e. for `Option<u32>`, this would return the `u32`. When the value is `isNone`, this call will  throw and exception.
- `.unwrapOr(<default value>)` - this extends `unwrap()`, returning the wrapped value when `isSome` and in the case of `isNone`, it will return the `<default value>` passed.

## Working with Tuples

A tuple is defined in the form of `(u32, AccountId)`. To access the individual values, you can access t via the index, i.e.

```js
// assuming  a tuple defined as `(32, AccountId)`
const [count, accountId] = tuple;

console.log(accountId.toString() + ' has ' + count.toNumber() + ' values');
```

## Extending types

For customized chains, the need exists to register types so the API is aware of how to decode values for those types. The next section will provide a [walk-through for the definition of custom types](types.extend.md) allowing the definition or re-definition of any type the API is aware of.
