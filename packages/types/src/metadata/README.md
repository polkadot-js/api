# metadata update

1. New branch :)
2. `curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' http://localhost:9933`
3. Copy the latest version folder (vx) in `types-support/metadata`
3. Copy the result (hex-only) into `static.ts`, as of now linked to `v6/static.ts`
4. Rust Metadata tests, `yarn run test packages/types/src/metadata`
5. Add new class types as required (find missing in Rust code, add)
6. Repeat 4-6 until passing
7. All tests
8. Make PR
