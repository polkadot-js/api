// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CodecTypes } from '@polkadot/types/types';

export type Param = {
  isOptional: boolean,
  name: string,
  type: CodecTypes
};

export type MethodOpt = {
  description: string,
  isDeprecated?: boolean,
  isHidden?: boolean,
  isSigned?: boolean,
  isSubscription?: boolean,
  params: Array<Param>,
  subscribe?: [string, string],
  type: CodecTypes
};

export type Method = {
  description: string,
  isDeprecated: boolean,
  isHidden: boolean,
  isSigned: boolean,
  isSubscription: boolean,
  method: string,
  params: Array<Param>,
  section: string,
  subscribe: [string, string],
  type: CodecTypes
};

export type Section = {
  isDeprecated: boolean,
  isHidden: boolean,
  description: string,
  name: string,
  methods: {
    [index: string]: Method
  }
};
