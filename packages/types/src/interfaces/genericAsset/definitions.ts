// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    AssetOptions: {
      initalIssuance: 'Balance',
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
};
