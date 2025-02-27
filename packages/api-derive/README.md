# @polkadot/api-derive

Collection of high-level utility functions built on top of the @polkadot/api library. Designed to simplify the process of querying complex on-chain data by combining multiple RPC calls, storage queries, and runtime logic into a single, callable function.

Instead of manually fetching and processing blockchain data, developers can use `api.derive` methods to retrieve information.

## Available Derive Namespaces

The derive functions are categorized into namespaces based on different common Substrate modules. Accesible by calling `api.derive.NAMESPACE` (e.g. `api.derive.balances`). The available modules are as follows:

- [accounts](https://github.com/polkadot-js/api/tree/master/packages/api-derive/src/accounts)
- [alliance](https://github.com/polkadot-js/api/tree/master/packages/api-derive/src/alliance)
- [bagsList](https://github.com/polkadot-js/api/tree/master/packages/api-derive/src/bagsList)
- [balances](https://github.com/polkadot-js/api/tree/master/packages/api-derive/src/balances)
- [bounties](https://github.com/polkadot-js/api/tree/master/packages/api-derive/src/bounties)
- [chain](https://github.com/polkadot-js/api/tree/master/packages/api-derive/src/chain)
- [contracts](https://github.com/polkadot-js/api/tree/master/packages/api-derive/src/contracts)
- [council](https://github.com/polkadot-js/api/tree/master/packages/api-derive/src/council)
- [crowdloan](https://github.com/polkadot-js/api/tree/master/packages/api-derive/src/crowdloan)
- [democracy](https://github.com/polkadot-js/api/tree/master/packages/api-derive/src/democracy)
- [elections](https://github.com/polkadot-js/api/tree/master/packages/api-derive/src/elections)
- [imOnline](https://github.com/polkadot-js/api/tree/master/packages/api-derive/src/imOnline)
- [membership](https://github.com/polkadot-js/api/tree/master/packages/api-derive/src/membership)
- [parachains](https://github.com/polkadot-js/api/tree/master/packages/api-derive/src/parachains)
- [session](https://github.com/polkadot-js/api/tree/master/packages/api-derive/src/session)
- [society](https://github.com/polkadot-js/api/tree/master/packages/api-derive/src/society)
- [staking](https://github.com/polkadot-js/api/tree/master/packages/api-derive/src/staking)
- [technicalCommittee](https://github.com/polkadot-js/api/tree/master/packages/api-derive/src/technicalCommittee)
- [treasury](https://github.com/polkadot-js/api/tree/master/packages/api-derive/src/treasury)
- [tx](https://github.com/polkadot-js/api/tree/master/packages/api-derive/src/tx)
