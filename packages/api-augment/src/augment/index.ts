// Copyright 2017-2021 @polkadot/api-augment authors & contributors
// SPDX-License-Identifier: Apache-2.0

// for the API, we decorate not only the endpoints, but all types
import '@polkadot/rpc-augment';
import '@polkadot/types-augment';
// the augmentated types (on top of @polkadot/api-base)
import './consts';
import './errors';
import './events';
import './query';
import './tx';
