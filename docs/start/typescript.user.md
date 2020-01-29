# TypeScript user generated

In the previous section we looked at the TypeScript definitions that are available and is generated from both the chain and definitions. Here we will expand upon the use of the infrastructure created to define types as part of the `@polkadot/types` library and see how to use them to generate your onw defintions and chain types.

## Definitions

A large part of the type definitions are defined not as classes, but rather as structures from which type definitions are extracted and that can be used as-i to let the API know how to decode a type. By now you should be familiar with [type extensions](types.extend.md), but effectively the [types library does exactly the same](https://github.com/polkadot-js/api/tree/master/packages/types/src/interfaces).

To create TypeScript-aware definitions and keep your files in a single place, you can follow the same approach. Assuming you have a package named `@MeInc/stuff` where you have the definitions in an `stuff/interfaces` folder. Each sub-folder would indicate a runtime module, e.g. `stuff/interfaces/<module>/definitions.ts` with a root file importing all in `stuff/interfaces/definitions.ts`. With this structure setup, you can generate TypeScript defintions.

In the root of your project (with the `@polkadot/api`), you can run `yarn polkadot-types-from-defs --input ./stuff/interfaces --package @MeInc/stuff/interfaces` which will create `types.ts` and `index.ts` files with the generated types. You can use these in exactly the same way as you would use your types from `@polkadot/types/interfaces`.

## Chain modules

In the same way as the type library provides defaults from a substrate-base chain, you can also, directly from chain from metadata, generate a complete `api.{consts,query}.*` defintion for your specific chain. The command will create 2 files, `{consts, query}.types.ts` which you can either use to augment the TypeScript defintions, or replace those in `@polkadot/api/*` with your versions (copy, TypeScript replacement or browser/node aliassing).

In the root of your project, you can run `yarn polkadot-types-from-chain.js --endpoint wss://<url> --output ./stuff` and it will create the required output. (Here you can specify an optional `--package @MeInc/stuff` to read definitions for the targetted output folder with the specified package name.)

## And that's a wrap

This brings us to the end of our overview and jump through the API. While the documentation is still very much and ever evolving item, we can encourage you to try out what you have learned with some [examples](../examples). As we [indicated right at the start of this journey](README.md#help-us-help-others), if there are areas for improvement, let us know.
