# ApiRx Examples

Here you will find a list of examples that takes you through the basics of connecting to a local node, retrieving data from the Node and chain and execute transactions on the chain. It uses the [[ApiRx]] interface.

## Prerequisites

For the following examples, you need a local node. It is usually convenient testing with:

```
substrate --dev
```

## Running the examples

From each folder, run `yarn` to install the required dependencies and then run `yarn start` to execute the example against the running node.

## Development accounts

Some of the examples use the following accounts:

- Alice: `5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ`
- Bob: `5Gw3s7q4QLkSWwknsiPtjujPv3XM4Trxi5d4PgKMMk3gfGTE`

Those accounts are easy to add if you don't have/see them. The seed of Alice's account is `Alice␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣` and the seed of Bob is... well you guess...

NOTE: Note the spaces padding Alice's key up to 32 chars.
