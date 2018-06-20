// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { HttpState } from './types';

import assert from '@polkadot/util/assert';

export default async function send ({ coder, endpoint }: HttpState, method: string, params: Array<mixed>): Promise<mixed> {
  const body = coder.encodeJson(method, params);
  const response = await fetch(endpoint, {
    body,
    headers: {
      'Accept': 'application/json',
      'Content-Length': `${body.length}`,
      'Content-Type': 'application/json'
    },
    method: 'POST'
  });

  assert(response.ok, `[${response.status}]: ${response.statusText}`);

  const result = await response.json();

  return coder.decodeResponse(result);
}
