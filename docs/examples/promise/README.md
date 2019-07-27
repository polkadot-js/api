# ApiPromise Examples

Here you will find a list of examples that takes you through the basics of connecting to a local node, retrieving data from the Node and chain and execute transactions on the chain. It uses the [[ApiPromise]] interface.

## Prerequisites

For the following examples, you need a local node. It is usually convenient testing with:

```
substrate --dev
```

## Running the examples

From each folder, run `yarn` to install the required dependencies and then run `yarn start` to execute the example against the running node.

## Development accounts

Some of the examples use the following accounts:

- Alice: `5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY`
- Bob: `5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty`

Those accounts are easy to add if you don't have/see them. The seed of Alice's account is `//Alice` (via `keyring.addUri(...)`, dev seed implied) and the seed of Bob is... well you guess...
