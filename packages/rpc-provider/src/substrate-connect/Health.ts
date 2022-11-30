// Copyright 2017-2022 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { stringify } from '@polkadot/util';

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

interface JSONRequest {
  id: string;
  jsonrpc: '2.0',
  method: string;
  params: unknown[];
}

/*
 * Creates a new health checker.
 *
 * The role of the health checker is to report to the user the health of a smoldot chain.
 *
 * In order to use it, start by creating a health checker, and call `setSendJsonRpc` to set the
 * way to send a JSON-RPC request to a chain. The health checker is disabled by default. Use
 * `start()` in order to start the health checks. The `start()` function must be passed a callback called
 * when an update to the health of the node is available.
 *
 * In order to send a JSON-RPC request to the chain, you **must** use the `sendJsonRpc` function
 * of the health checker. The health checker rewrites the `id` of the requests it receives.
 *
 * When the chain send a JSON-RPC response, it must be passed to `responsePassThrough()`. This
 * function intercepts the responses destined to the requests that have been emitted by the health
 * checker and returns `null`. If the response doesn't concern the health checker, the response is
 * simply returned by the function.
 *
 * # How it works
 *
 * The health checker periodically calls the `system_health` JSON-RPC call in order to determine
 * the health of the chain.
 *
 * In addition to this, as long as the health check reports that `isSyncing` is `true`, the
 * health checker also maintains a subscription to new best blocks using `chain_subscribeNewHeads`.
 * Whenever a new block is notified, a health check is performed immediately in order to determine
 * whether `isSyncing` has changed to `false`.
 *
 * Thanks to this subscription, the latency of the report of the switch from `isSyncing: true` to
 * `isSyncing: false` is very low.
 *
 */
export function healthChecker (): HealthChecker {
  // `null` if health checker is not started.
  let checker: null | InnerChecker = null;
  let sendJsonRpc: null | ((request: string) => void) = null;

  return {
    responsePassThrough: (jsonRpcResponse) => {
      if (checker === null) {
        return jsonRpcResponse;
      }

      return checker.responsePassThrough(jsonRpcResponse);
    },
    sendJsonRpc: (request) => {
      if (!sendJsonRpc) {
        throw new Error('setSendJsonRpc must be called before sending requests');
      }

      if (checker === null) {
        sendJsonRpc(request);
      } else {
        checker.sendJsonRpc(request);
      }
    },
    setSendJsonRpc: (cb) => {
      sendJsonRpc = cb;
    },
    start: (healthCallback) => {
      if (checker !== null) {
        throw new Error("Can't start the health checker multiple times in parallel");
      } else if (!sendJsonRpc) {
        throw new Error('setSendJsonRpc must be called before starting the health checks');
      }

      checker = new InnerChecker(healthCallback, sendJsonRpc);
      checker.update(true);
    },
    stop: () => {
      if (checker === null) {
        return;
      } // Already stopped.

      checker.destroy();
      checker = null;
    }
  };
}

class InnerChecker {
  #healthCallback: (health: SmoldotHealth) => void;
  #currentHealthCheckId: string | null = null;
  #currentHealthTimeout: ReturnType<typeof setTimeout> | null = null;
  #currentSubunsubRequestId: string | null = null;
  #currentSubscriptionId: string | null = null;
  #requestToSmoldot: (request: JSONRequest) => void;
  #isSyncing = false;
  #nextRequestId = 0;

  constructor (healthCallback: (health: SmoldotHealth) => void, requestToSmoldot: (request: string) => void) {
    this.#healthCallback = healthCallback;
    this.#requestToSmoldot = (request: JSONRequest) => requestToSmoldot(stringify(request));
  }

  sendJsonRpc = (request: string): void => {
    // Replace the `id` in the request to prefix the request ID with `extern:`.
    let parsedRequest: JSONRequest;

    try {
      parsedRequest = JSON.parse(request) as JSONRequest;
    } catch (err) {
      return;
    }

    if (parsedRequest.id) {
      const newId = 'extern:' + stringify(parsedRequest.id);

      parsedRequest.id = newId;
    }

    this.#requestToSmoldot(parsedRequest);
  };

  responsePassThrough = (jsonRpcResponse: string): string | null => {
    let parsedResponse: {id: string, result?: SmoldotHealth, params?: { subscription: string }};

    try {
      parsedResponse = JSON.parse(jsonRpcResponse) as { id: string, result: undefined | SmoldotHealth };
    } catch (err) {
      return jsonRpcResponse;
    }

    // Check whether response is a response to `system_health`.
    if (parsedResponse.id && this.#currentHealthCheckId === parsedResponse.id) {
      this.#currentHealthCheckId = null;

      // Check whether query was successful. It is possible for queries to fail for
      // various reasons, such as the client being overloaded.
      if (!parsedResponse.result) {
        this.update(false);

        return null;
      }

      this.#healthCallback(parsedResponse.result);
      this.#isSyncing = parsedResponse.result.isSyncing;
      this.update(false);

      return null;
    }

    // Check whether response is a response to the subscription or unsubscription.
    if (
      parsedResponse.id &&
      this.#currentSubunsubRequestId === parsedResponse.id
    ) {
      this.#currentSubunsubRequestId = null;

      // Check whether query was successful. It is possible for queries to fail for
      // various reasons, such as the client being overloaded.
      if (!parsedResponse.result) {
        this.update(false);

        return null;
      }

      if (this.#currentSubscriptionId) {
        this.#currentSubscriptionId = null;
      } else {
        this.#currentSubscriptionId = parsedResponse.result as unknown as string;
      }

      this.update(false);

      return null;
    }

    // Check whether response is a notification to a subscription.
    if (
      parsedResponse.params &&
      this.#currentSubscriptionId &&
      parsedResponse.params.subscription === this.#currentSubscriptionId
    ) {
      // Note that after a successful subscription, a notification containing
      // the current best block is always returned. Considering that a
      // subscription is performed in response to a health check, calling
      // `startHealthCheck()` here will lead to a second health check.
      // It might seem redundant to perform two health checks in a quick
      // succession, but doing so doesn't lead to any problem, and it is
      // actually possible for the health to have changed in between as the
      // current best block might have been updated during the subscription
      // request.
      this.update(true);

      return null;
    }

    // Response doesn't concern us.
    if (parsedResponse.id) {
      const id: string = parsedResponse.id;

      // Need to remove the `extern:` prefix.
      if (!id.startsWith('extern:')) {
        throw new Error('State inconsistency in health checker');
      }

      const newId = JSON.parse(id.slice('extern:'.length)) as string;

      parsedResponse.id = newId;
    }

    return stringify(parsedResponse);
  };

  update = (startNow: boolean): void => {
    // If `startNow`, clear `#currentHealthTimeout` so that it is set below.
    if (startNow && this.#currentHealthTimeout) {
      clearTimeout(this.#currentHealthTimeout);
      this.#currentHealthTimeout = null;
    }

    if (!this.#currentHealthTimeout) {
      const startHealthRequest = () => {
        this.#currentHealthTimeout = null;

        // No matter what, don't start a health request if there is already one in progress.
        // This is sane to do because receiving a response to a health request calls `update()`.
        if (this.#currentHealthCheckId) {
          return;
        }

        // Actual request starting.
        this.#currentHealthCheckId = `health-checker:${this.#nextRequestId}`;
        this.#nextRequestId += 1;

        this.#requestToSmoldot({
          id: this.#currentHealthCheckId,
          jsonrpc: '2.0',
          method: 'system_health',
          params: []
        });
      };

      if (startNow) {
        startHealthRequest();
      } else {
        this.#currentHealthTimeout = setTimeout(startHealthRequest, 1000);
      }
    }

    if (
      this.#isSyncing &&
      !this.#currentSubscriptionId &&
      !this.#currentSubunsubRequestId
    ) {
      this.startSubscription();
    }

    if (
      !this.#isSyncing &&
      this.#currentSubscriptionId &&
      !this.#currentSubunsubRequestId
    ) {
      this.endSubscription();
    }
  };

  startSubscription = (): void => {
    if (this.#currentSubunsubRequestId || this.#currentSubscriptionId) {
      throw new Error('Internal error in health checker');
    }

    this.#currentSubunsubRequestId = `health-checker:${this.#nextRequestId}`;
    this.#nextRequestId += 1;

    this.#requestToSmoldot({
      id: this.#currentSubunsubRequestId,
      jsonrpc: '2.0',
      method: 'chain_subscribeNewHeads',
      params: []
    });
  };

  endSubscription = (): void => {
    if (this.#currentSubunsubRequestId || !this.#currentSubscriptionId) {
      throw new Error('Internal error in health checker');
    }

    this.#currentSubunsubRequestId = `health-checker:${this.#nextRequestId}`;
    this.#nextRequestId += 1;

    this.#requestToSmoldot({
      id: this.#currentSubunsubRequestId,
      jsonrpc: '2.0',
      method: 'chain_unsubscribeNewHeads',
      params: [this.#currentSubscriptionId]
    });
  };

  destroy = (): void => {
    if (this.#currentHealthTimeout) {
      clearTimeout(this.#currentHealthTimeout);
      this.#currentHealthTimeout = null;
    }
  };
}

export class HealthCheckError extends Error {
  readonly #cause: unknown;

  getCause (): unknown {
    return this.#cause;
  }

  constructor (response: unknown, message = 'Got error response asking for system health') {
    super(message);

    this.#cause = response;
  }
}
