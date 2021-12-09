# metadata update

0. New branch :)
0. Start the node, typically via `cargo run --release -- purge-chain -y --dev && cargo run --release -- --dev` ([types-support/src/metadata/README.md](../../../types-support/src/metadata/README.md) has more information for specific chains)
0. Retrieve the metadata `curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' http://localhost:9933`
0. Copy into the latest version folder per node type in `types-support/src/metadata` eg. `types-support/src/metadata/v14/substrate-hex.json`
0. Re-build the interfaces `yarn build:interfaces`
0. Run Metadata tests, `yarn test:one packages/types/src/metadata`
0. All tests
0. Make PR
