// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BlockNumber from './BlockNumber';

/**
 * @name LeasePeriod
 * @description
 * The length of the parachain lease
 */
export default class LeasePeriod extends BlockNumber {
}

/**
 * @name LeasePeriodOf
 * @description
 * The length of the parachain lease
 */
export class LeasePeriodOf extends LeasePeriod {
}
