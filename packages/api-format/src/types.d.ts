// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Param$Types } from '@polkadot/params/types';

export type FormatterFunction = (value: any) => any;

type FormattersFunctionMap = Map<Param$Types, FormatterFunction>;
