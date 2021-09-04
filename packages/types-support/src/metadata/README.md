## extraction

For Substrate & Polkadot (dev chains) -

`cargo run --release -- purge-chain -y --dev && cargo run --release -- --dev`

For Kusama -

`cargo run --release -- purge-chain -y --chain kusama-dev && cargo run --release -- --chain kusama-dev`

To retrieve the metadata -

`curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' http://localhost:9933`
