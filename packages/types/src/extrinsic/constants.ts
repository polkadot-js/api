// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

export const BIT_SIGNED = 0b10000000;

export const BIT_UNSIGNED = 0;

export const EMPTY_U8A = new Uint8Array();

export const DEFAULT_VERSION = 4;

export const IMMORTAL_ERA = new Uint8Array([0]);

export const UNMASK_VERSION = 0b01111111;

export const DEFAULT_PREAMBLE = 'signed';

// Latest extrinsic version is v5, which has backwards compatibility for v4 signed extrinsics
export const LATEST_EXTRINSIC_VERSION = 5;

export const VERSION_MASK = 0b00111111;

export const TYPE_MASK = 0b11000000;

export const BARE_EXTRINSIC = 0b00000000;

export const SIGNED_EXTRINSIC = 0b10000000;

export const GENERAL_EXTRINSIC = 0b01000000;

export const LOWEST_SUPPORTED_EXTRINSIC_FORMAT_VERSION = 4;