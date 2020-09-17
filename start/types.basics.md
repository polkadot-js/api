# Type basics

We've touched upon types in most previous sections, i.e. that these are driven by metadata and that they are created and converted to/from automatically by the API. Since they appear in all results, we will divert a bit from the regularly scheduled program in explaining the API interfaces to giving some info on the base types.

## Everything is a type

Just to re-iterate from the above. Everything returned by the API is a type and has a consistent interface. This means that a `Vec<u32>` (an array of `u32` values) as well as a `Struct` (an pre-defined object) or an `Enum` has the same consistent base interface. Specific types types will have values, based on the type - decorated and available.

As a minimum, anything returned by the API, be it a `Vec<...>`, `Option<...>`, `Struct` or any normal type will always have the following methods -

- `.eq(<other value>)` - checks for equality against the other value. In all cases, it will accept "like" values, i.e. in the case of a number you can pass a primitive (such as `1`), a hex value (such as `0x01`) or even an `Unit8Array`
- `toHex()` - returns a hex-base representation of the value, always prefixed by `0x`
- `toHuman()` - returns Human-parsable JSON structure with values formatted as per the settings
- `toJSON()` - returns a JSON-like representation of the value, this is generally used when calling `JSON.stringify(...)` on the value
- `toString()` - returns a string representation, in some cases this performs additional encoding, i.e. for `Address`, `AccountId` and `AccountIndex` it will encode to the ss58 address
- `.toU8a()` - returns a `Uint8Array` representation of the encoded value (generally exactly as passed to the node, where values are SCALE encoded)

Additionally, the following getters and utilities are available -

- `.isEmpty` - `true` if the value is an all-empty value, i.e. `0` in for numbers, all-zero for Arrays (or anything `Uint8Array`), `false` is non-zero
- `.hash` - a `Hash` (once again with all the methods above) that is a `blake2-256` representation of the contained value

## Comparing types

To reiterate the above API, the `.eq` method is the preferred means of comparing base types, rather than the JavaScript equality operator (`===`).

For example:

```js
const { metadata } = await api.rpc.state.getMetadata();
const modules = metadata.asLatest.modules;

// This will not work, because `name` is an instance of `Text`, not a string
// const system = modules.find(m => m.name === 'system');

// This will work, because `Text.eq()` can compare against a string
const system = modules.find(m => m.name.eq('system'));
```

## Working with numbers

All numbers wrap and extend an instance of [bn.js](https://github.com/indutny/bn.js/). This means that in addition to the interfaces defined above, they have some additional methods -

- `.toNumber()` - a JS number (limited to 2^53 - 1). This does mean that for large values, e.g. `Balance` (a `u128` extension), this can cause overflows
- `.toBigInt()` - a JS `BigInt` object (on supported platforms)
- `.add(...)`, `.sub(...)`, ... - all the base methods available on the `BN` object

In cases where a `Compact` is returned, i.e. `Compact<Balance>`, the value is wrapped. This object should be `.unwrap()`-ed first to gain access to the underlying `Balance` object.

## Working with structures

All structures, a wrapping of an object containing a number of member variables, is an implementation of a standard JS `Map` object, so all the functions available on a `Map` such as `.entries()` are available. Additionally it is decorated with actual getters for the fields.

As an example, a `Header` will have getters for the `.parentHash`, `.number`, `.stateRoot`, `.extrinsicsRoot` and `.digest` fields. The same applies for all structures, as they are returned, each member will have an associated getter.

Be aware that in the JS version naming defaults to `camelCase` where names of fields in Substrate defaults to `snake_case`. (Each version aligning with conventions in the respective languages)

## Working with enums

Each enum has additional getters which are injected based on the fields wrapped. These take the form of `.is<Name>` and `.as<Name>` to allow you to check is the enum is a certain value or to retrieve the underlying value as a specific type.

As a real-world example, when an extrinsic is applied, the `Phase` enum has one of two states, `ApplyExtrinsic(u32)` or `Finalization`. In this case `.isApplyExtrinsic` would be `true` when an extrinsic is being applied, and `.asApplyExtrinsic` would return the value as a `u32` (which is the index of the extrinsic in the block, as it is being applied). When `isApplyExtrinsic` is `false` and `asApplyExtrinsic` is called, the getter will throw.

## Working with Option&lt;Type&gt;

An `Option<Type>` attempts to mimic the Rust approach of having `None` and `Some` available. This means the following getters & methods are available on an `Option` -

- `.isNone` - is `true` if no underlying values is wrapped, effectively the same as `.isEmpty`
- `.isSome` - this is `true` is a value is wrapped, i.e. if a `Option<u32>` has an actual underlying `u32`
- `.unwrap()` - when `isSome`, this will return the wrapped value, i.e. for `Option<u32>`, this would return the `u32`. When the value is `isNone`, this call will throw an exception.
- `.unwrapOr(<default value>)` - this extends `unwrap()`, returning the wrapped value when `isSome` and in the case of `isNone` it will return the `<default value>` passed.
- `.unwrapOrDefault()` - returns either the rapped value when `isSome`, or the default for the type when `isNone`

## Working with Tuples

A tuple is defined in the form of `(u32, AccountId)`. To access the individual values, you can access t via the index, i.e.

```js
// Assuming a tuple defined as `(32, AccountId)`
const [count, accountId] = tuple;

console.log(`${accountId} has ${count.toNumber()} values`);
```

When making a call that expect a `Tuple` input, pass it as an array, so to pass the example above into a call, it would be `.call([123, '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'])`

## Extending types

For customized chains, the need exists to register types so the API is aware of how to decode values for those types. The next section will provide a [walk-through for the definition of custom types](types.extend.md) allowing the definition or re-definition of any type the API is aware of.
