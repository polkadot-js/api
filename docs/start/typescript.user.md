# TypeScript user generated

In the previous section we looked at the TypeScript definitions that are available and are generated from both the chain and definitions. Here we will expand upon the use of the infrastructure created to define types as part of the `@polkadot/types` library and see how to use them to generate your own definitions and chain types.

## Definitions

A large part of the type definitions are defined not as classes, but rather as structures from which type definitions are extracted and that can be used as-is to let the API know how to decode a type. By now you should be familiar with [type extensions](types.extend.md) and the [rules around fields](types.extend.md#field-ordering), but effectively the [types library does exactly the same](https://github.com/polkadot-js/api/tree/master/packages/types/src/interfaces).

To create TypeScript-aware definitions and keep your files in a single place, you can follow the same approach. Assuming you have a package named `@MeInc/stuff` where you have the definitions in an `stuff/interfaces` folder. Each sub-folder would indicate a runtime module, e.g.

- `stuff/interfaces/<module>/definitions.ts` for each module (`types.ts` & `index.ts` will be generated)
- `stuff/interfaces/definitions.ts` importing all sub-definitions`

With this structure setup, you can generate TypeScript definitions.

In the root of your project (with the `@polkadot/typegen` package installed), you can run `yarn polkadot-types-from-defs --input ./stuff/interfaces --package @MeInc/stuff/interfaces` which will create `types.ts` and `index.ts` files with the generated types. You can use these in exactly the same way as you would use your types from `@polkadot/types/interfaces`.

## Chain modules

In the same way as the type library provides defaults from a substrate-base chain, you can also, directly from the chain's metadata, generate a complete `api.{consts,query}.*` definition for your specific chain. The command will create 2 files, `{consts, query}.types.ts` which you can either use to augment the TypeScript definitions, or replace those in `@polkadot/api/*` with your versions (copy, TypeScript replacement or browser/node aliasing).

In the root of your project, you can run `yarn polkadot-types-from-chain --endpoint wss://<url> --output ./stuff` and it will create the required output. (Here you can specify an optional `--package @MeInc/stuff` to read definitions for the targeted output folder with the specified package name.)

## Example of actual use

The [TypeScript augmentation example](../examples/promise/90_typegen/) example provides a full real-world example of these scripts in action. Additionally it shows all the configurations from a TypeScript as well as an in-use perspective, showing how the types and interfaces are fully augmented based on the provided metadata.

## And that's a wrap

This brings us to the end of our overview and jump through the API. While the documentation is still very much an ever evolving item, we can encourage you to try out what you have learned with some [examples](../examples). As we [indicated right at the start of this journey](README.md#help-us-help-others), if there are areas for improvement, let us know.
