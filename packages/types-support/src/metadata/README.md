## Extraction (Current)

For Substrate -

Clone the [polkadot-sdk](https://github.com/paritytech/polkadot-sdk) repository and from the ROOT run:

`cargo build --release && ./target/release/substrate-node --dev`

`--dev` sets the flag `--tmp` automatically so there is no need for purging the dev db.

For Polkadot & Kusama -

Clone the [polkadot-fellows/runtimes](https://github.com/polkadot-fellows/runtimes/tree/main) repository and from the ROOT run:

```bash 
$ unset SKIP_WASM_BUILD
$ cargo build --release -p chain-spec-generator --features fast-runtime
$ ./target/release/chain-spec-generator polkadot-dev > polkadotDevChainSpec.json
```

- For kusama just change the `polkadotDevChainSpec.json` to `kusamaDevChainSpec.json`.
- When you have the `polkadot-sdk` cloned, make sure to copy the chainspec from the `runtimes` repository to `polkadot-sdk` repository.

Clone the [polkadot-sdk](https://github.com/paritytech/polkadot-sdk) repository, checkout the most recent releases tag and from the ROOT run:

```bash
$ cargo build --release --bin polkadot-prepare-worker --features fast-runtime
$ cargo build --release --bin polkadot-execute-worker --features fast-runtime
$ cargo build --release --bin polkadot --features fast-runtime
$ cp ../runtimes/polkadotDevChainSpec.json .
$ ./target/release/polkadot --chain polkadotDevChainSpec.json
```

To retrieve the metadata -

`curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' http://localhost:9944`

- Add it to the relevant folders e.g. `v14/{kusama, polkadot, substrate}-hex.json`

To retrieve the rpc methods -

`curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "rpc_methods", "params":[]}' http://localhost:9944`

- Add it to the relevant folders e.g. `v14/{kusama, polkadot, substrate}-rpc.ts`

To retrieve the runtime versions -

`curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getRuntimeVersion", "params":[]}' http://localhost:9944`

- Add it to the relevant folders e.g. `v14/{kusama, polkadot, substrate}-ver.ts`

## NOTE: 

1. This all works for manual updating, but for an easier process run from root for each respective chain: `node ./scripts/metadata-get.mjs`.

2. If the chain is already live, running it locally is unnecessary — update the metadata & types using `node ./scripts/metadata-get.mjs --url <ws_chain_url>`.

3. Run `yarn test:one packages/types/src/metadata/v14` for Metadata checks

## Caveat

Occasionally, running the tests may result in a failure due to outdated metadata. The error message might look like this:

```bash
    /api/packages/types/src/metadata/v14/Metadata.spec.ts

    undefined / undefined
```

### How to Fix

1. Navigate to the file mentioned in the error.
2. Paste the line `writeJson(json, version, type, 'json');` into the `try` block.
3. Rerun the tests — they should pass now.
4. **Important:** After verifying that the tests pass, revert your changes and run the tests again to ensure everything still works as expected.


## extraction (Legacy)

For Substrate & Polkadot (dev chains) -

`cargo run --release -- purge-chain -y --dev && cargo run --release -- --dev`

For Kusama -

`cargo run --release -- purge-chain -y --chain kusama-dev && cargo run --release -- --chain kusama-dev`

To retrieve the metadata -

`curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' http://localhost:9933`

- Add it to the relevant folders e.g. `v14/{kusama, polkadot, substrate}-hex.json`
- Run `yarn build:interfaces` to re-generate all TS
- Run `yarn test:one packages/types/src/metadata/v14` for Metadata checks
