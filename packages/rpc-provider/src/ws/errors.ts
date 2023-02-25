// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

// from https://stackoverflow.com/questions/19304157/getting-the-reason-why-websockets-closed-with-close-code-1006

const known: Record<number, string> = {
  1000: 'Normal Closure',
  1001: 'Going Away',
  1002: 'Protocol Error',
  1003: 'Unsupported Data',
  1004: '(For future)',
  1005: 'No Status Received',
  1006: 'Abnormal Closure',
  1007: 'Invalid frame payload data',
  1008: 'Policy Violation',
  1009: 'Message too big',
  1010: 'Missing Extension',
  1011: 'Internal Error',
  1012: 'Service Restart',
  1013: 'Try Again Later',
  1014: 'Bad Gateway',
  1015: 'TLS Handshake'
};

export function getWSErrorString (code: number): string {
  if (code >= 0 && code <= 999) {
    return '(Unused)';
  } else if (code >= 1016) {
    if (code <= 1999) {
      return '(For WebSocket standard)';
    } else if (code <= 2999) {
      return '(For WebSocket extensions)';
    } else if (code <= 3999) {
      return '(For libraries and frameworks)';
    } else if (code <= 4999) {
      return '(For applications)';
    }
  }

  return known[code] || '(Unknown)';
}
