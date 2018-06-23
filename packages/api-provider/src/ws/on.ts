// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ProviderInterface$Emitted, ProviderInterface$EmitCb } from '../types';
import { WsState } from './types';

export default function on (self: WsState, type: ProviderInterface$Emitted, sub: ProviderInterface$EmitCb): void {
  self.emitter.on(type, sub);
};
