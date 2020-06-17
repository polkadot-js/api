// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    AssetOptions: {
      initalIssuance: 'Compact<Balance>',
      permissions: 'PermissionLatest'
    },
    Owner: {
      _enum: {
        None: 'Null',
        Address: 'AccountId'
      }
    },
    PermissionsV1: {
      update: 'Owner',
      mint: 'Owner',
      burn: 'Owner'
    },
    PermissionVersions: {
      _enum: {
        V1: 'PermissionsV1'
      }
    },
    PermissionLatest: 'PermissionsV1'
  }
} as Definitions;
