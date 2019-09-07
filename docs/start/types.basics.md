# Introduction to types

We've touched upon types in previous sections, i.e. that these are driven by metadata and that they are created and converted to/from automatically by the API. Since they appear in all results, we will divert a bit from the regularly scheduled program in explaining the API interfaces to giving some info on the base types.

## Everything is a type

Just to re-iterate from the above. Eveything returned by the API is a type and has a consistent interface. This means that a `Vec<u32>` (an array) as well as a `Struct` (an object) or an `Enum` has the same consistent base interface. Additional types will have values, based on the type - decorated and available.

As a minimum, anything retuned by the API, be it a `Vec<...>`, `Option<...>`, `Struct` ot, just a normal type will always have the following methods -

- `.eq(<other value>)` - checks for equality against the other value. In all cases, it will accespt "like" values, i.e. in the case of a number you can pass a primitive (1), a hex value `0x01` or even a `Unit8Array`
- `toHex()` - returns a hex-base representation of the value, always prefixed by `0x`
- `toJSON()` - returns a JSON-like represnetation of the value, this is generally use when calling `JAOM.stringify(...)` on the value
- `toString()` - returns a string representation, in some cases this permorms additional encoding, i.e. for `Address` and `AccountId` it will encode to the ss58 address
- `.toU8a()` - returns a `Uint8Array` representation of the encoded value (genrally exactly as passed to the node, where values are SCALE encoded)

Additionally, the following getters and utilities are available -

- `.isEmpty` - `true` if the value is an all-empy value, i.e. `0` in for numbers, all-zero for Arrays (or anything `Uint8Array`)
- `.hash` - a `Hash` (onece again witj all the values above, invluding `toHex()`) that  is a `blake2-256` rwpresentation of the value

## Working with numbers

## Working with structures

## Working with enums

## Working with Option<Type>
