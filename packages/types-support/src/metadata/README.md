## Extraction (Current)

For Substrate -

Clone the [polkadot-sdk](https://github.com/paritytech/polkadot-sdk) repository and from the ROOT run:

`cargo build --release && ./target/release/substrate-node --dev`

`--dev` sets the flag `--tmp` automatically so there is no need for purging the dev db.

To retrieve the metadata -

`curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' http://localhost:9944`

- Add it to the relevant folders e.g. `v14/{kusama, polkadot, substrate}-hex.json`

To retrieve the rpc methods -

`curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "rpc_methods", "params":[]}' http://localhost:9944`

- Add it to the relevant folders e.g. `v14/{kusama, polkadot, substrate}-rpc.ts`

To retrieve the runtime versions -

`curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getRuntimeVersion", "params":[]}' http://localhost:9944`

- Add it to the relevant folders e.g. `v14/{kusama, polkadot, substrate}-ver.ts`

NOTE: This all works for manual updating, but for an easier process run from root for each respective chain: `node ./scripts/metadata-get.mjs`

## extraction (Legacy)

For Substrate & Polkadot (dev chains) -

`cargo run --release -- purge-chain -y --dev && cargo run --release -- --dev`

For Kusama -

`cargo run --release -- purge-chain -y --chain kusama-dev && cargo run --release -- --chain kusama-dev`

To retrieve the metadata -

`curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' http://localhost:9933`

- Add it to the relevant folders e.g. `v14/{kusama, polkadot, substrate}-hex.json`
- Run `yarn build:interfaces` to re-generate all TS
- Run `yarn test:one packages/types/src/metadatra/v14` for Metadata checks
