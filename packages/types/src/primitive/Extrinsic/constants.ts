// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export const BIT_SIGNED = 0b10000000;

export const BIT_UNSIGNED = 0;

export const EMPTY_U8A = new Uint8Array();

// TODO We really want to swap this to V2, however all the test data is setup
// for V1, so this will take some time to convert... "some" time :)
export const DEFAULT_VERSION = 1;

export const IMMORTAL_ERA = new Uint8Array([0]);

export const UNMASK_VERSION = 0b01111111;
