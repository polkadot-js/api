## extraction

For Substrate & Polkadot (dev chains) -

`cargo run --release -- purge-chain -y --dev && cargo run --release -- --dev`

For Kusama -

`cargo run --release -- purge-chain -y --chain kusama-dev && cargo run --release -- --chain kusama-dev`

To retrieve the metadata -

`curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' http://localhost:9933`

- Add it to the relevant folders e.g. `v14/{kusama, polkadot, substrate}-hex.json`
- Run `yarn build:interfaces` to re-generate all TS
- Run `yarn test:one packages/types/src/metadatra/v14` for Metadata checks
