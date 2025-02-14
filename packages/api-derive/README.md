# @polkadot/api-derive

Collection of high-level utility functions built on top of the @polkadot/api library. Designed to simplify the process of querying complex on-chain data by combining multiple RPC calls, storage queries, and runtime logic into a single, callable function.

Instead of manually fetching and processing blockchain data, developers can use `api.derive` methods to retrieve information.

## Available Derive Namespaces
The derive functions are categorized into namespaces based on different common Substrate modules. Accesible by calling `api.derive.NAMESPACE` (E.g. api.derive.balances). The available modules are as follows:

- accounts
- alliance
- bagsList
- balances
- bounties
- chain
- collective
- contracts
- council
- crowdloan
- democracy
- elections
- imOnline
- membership
- parachains
- session
- society
- staking
- technicalCommittee
- treasury
- tx

