// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

export interface SmoldotHealth {
  isSyncing: boolean
  peers: number
  shouldHavePeers: boolean
}

export interface HealthChecker {
  setSendJsonRpc(sendRequest: (request: string) => void): void
  start(healthCallback: (health: SmoldotHealth) => void): void
  stop(): void
  sendJsonRpc(request: string): void
  responsePassThrough(response: string): string | null
}
