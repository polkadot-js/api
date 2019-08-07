// Auto-generated via `yarn build:interfaces`, do not edit

import { Codec } from '../../types';
import { H160, H256, u8 } from '../../primitive';

/** [H256, H256, u8] & Codec */
export type EcdsaSignature = [H256, H256, u8] & Codec;

/** H160 */
export type EthereumAddress = H160;
