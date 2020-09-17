# Read storage, at a specific blockhash

In addition to querying the latest storage, you can make storage queries at a specific blockhash. Be aware that the node applies a pruning strategy and typically only keeps the last 256 blocks, unless run in archive mode.

<<< @/docs/examples/promise/05_read_storage_at/index.js
