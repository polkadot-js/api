// Copyright 2017-2023 @polkadot/types-support authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable */

// cargo run --release -- purge-chain -y --dev  && cargo run --release -- --dev

export default {
  "methods": [
    "account_nextIndex",
    "author_hasKey",
    "author_hasSessionKeys",
    "author_insertKey",
    "author_pendingExtrinsics",
    "author_removeExtrinsic",
    "author_rotateKeys",
    "author_submitAndWatchExtrinsic",
    "author_submitExtrinsic",
    "author_unwatchExtrinsic",
    "babe_epochAuthorship",
    "chainHead_unstable_body",
    "chainHead_unstable_call",
    "chainHead_unstable_continue",
    "chainHead_unstable_follow",
    "chainHead_unstable_header",
    "chainHead_unstable_stopOperation",
    "chainHead_unstable_storage",
    "chainHead_unstable_unfollow",
    "chainHead_unstable_unpin",
    "chainSpec_v1_chainName",
    "chainSpec_v1_genesisHash",
    "chainSpec_v1_properties",
    "chain_getBlock",
    "chain_getBlockHash",
    "chain_getFinalisedHead",
    "chain_getFinalizedHead",
    "chain_getHead",
    "chain_getHeader",
    "chain_getRuntimeVersion",
    "chain_subscribeAllHeads",
    "chain_subscribeFinalisedHeads",
    "chain_subscribeFinalizedHeads",
    "chain_subscribeNewHead",
    "chain_subscribeNewHeads",
    "chain_subscribeRuntimeVersion",
    "chain_unsubscribeAllHeads",
    "chain_unsubscribeFinalisedHeads",
    "chain_unsubscribeFinalizedHeads",
    "chain_unsubscribeNewHead",
    "chain_unsubscribeNewHeads",
    "chain_unsubscribeRuntimeVersion",
    "childstate_getKeys",
    "childstate_getKeysPaged",
    "childstate_getKeysPagedAt",
    "childstate_getStorage",
    "childstate_getStorageEntries",
    "childstate_getStorageHash",
    "childstate_getStorageSize",
    "dev_getBlockStats",
    "grandpa_proveFinality",
    "grandpa_roundState",
    "grandpa_subscribeJustifications",
    "grandpa_unsubscribeJustifications",
    "mmr_generateProof",
    "mmr_root",
    "mmr_verifyProof",
    "mmr_verifyProofStateless",
    "offchain_localStorageGet",
    "offchain_localStorageSet",
    "payment_queryFeeDetails",
    "payment_queryInfo",
    "rpc_methods",
    "state_call",
    "state_callAt",
    "state_getChildReadProof",
    "state_getKeys",
    "state_getKeysPaged",
    "state_getKeysPagedAt",
    "state_getMetadata",
    "state_getPairs",
    "state_getReadProof",
    "state_getRuntimeVersion",
    "state_getStorage",
    "state_getStorageAt",
    "state_getStorageHash",
    "state_getStorageHashAt",
    "state_getStorageSize",
    "state_getStorageSizeAt",
    "state_queryStorage",
    "state_queryStorageAt",
    "state_subscribeRuntimeVersion",
    "state_subscribeStorage",
    "state_traceBlock",
    "state_trieMigrationStatus",
    "state_unsubscribeRuntimeVersion",
    "state_unsubscribeStorage",
    "statement_broadcasts",
    "statement_dump",
    "statement_posted",
    "statement_postedClear",
    "statement_remove",
    "statement_submit",
    "subscribe_newHead",
    "sync_state_genSyncSpec",
    "system_accountNextIndex",
    "system_addLogFilter",
    "system_addReservedPeer",
    "system_chain",
    "system_chainType",
    "system_dryRun",
    "system_dryRunAt",
    "system_health",
    "system_localListenAddresses",
    "system_localPeerId",
    "system_name",
    "system_nodeRoles",
    "system_peers",
    "system_properties",
    "system_removeReservedPeer",
    "system_reservedPeers",
    "system_resetLogFilter",
    "system_syncState",
    "system_unstable_networkState",
    "system_version",
    "transaction_unstable_submitAndWatch",
    "transaction_unstable_unwatch",
    "unsubscribe_newHead"
  ]
};
