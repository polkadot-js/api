// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types/index.js';

export const runtime: DefinitionsCall = {
  DryRunApi: [
    {
      methods: {
        dry_run_call: {
          description: 'Dry run call',
          params: [
            {
              name: 'origin',
              type: 'OriginCaller'
            },
            {
              name: 'call',
              type: 'RuntimeCall'
            }
          ],
          type: 'Result<CallDryRunEffects, XcmDryRunApiError>'
        },
        dry_run_xcm: {
          description: 'Dry run XCM program',
          params: [
            {
              name: 'originLocation',
              type: 'VersionedLocation'
            },
            {
              name: 'xcm',
              type: 'VersionedXcm'
            }
          ],
          type: 'Result<XcmDryRunEffects, XcmDryRunApiError>'
        }
      },
      version: 1
    }
  ]
};
