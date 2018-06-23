// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { WsState } from './types';

export default function onError (self: WsState): (event: Event) => void {
  return (error: Event): void => {
    self.l.error(error);
  };
}
