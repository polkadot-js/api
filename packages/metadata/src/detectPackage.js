// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

const util = require('@polkadot/util');

const packageInfo = require('./package-info.json');

util.detectPackage(packageInfo, typeof __dirname !== 'undefined' && __dirname);

exports.packageInfo = packageInfo;
