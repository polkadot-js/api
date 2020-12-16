// Copyright 2017-2020 @polkadot/x-rxjs authors & contributors
// SPDX-License-Identifier: Apache-2.0

// This is not great, but while having esm files, rxjs doesn't quite play nicely with
// Node.js mjs files. (Hopefully this improves in 7.0, although no exports map as of yet)
//
// Ensure the exports here do match up with what is done in operators.d.ts

const operators = require('rxjs/operators');

exports.catchError = operators.catchError;
exports.distinctUntilChanged = operators.distinctUntilChanged;
exports.first = operators.first;
exports.map = operators.map;
exports.mapTo = operators.mapTo;
exports.mergeMap = operators.mergeMap;
exports.refCount = operators.refCount;
exports.publishReplay = operators.publishReplay;
exports.startWith = operators.startWith;
exports.switchMap = operators.switchMap;
exports.take = operators.take;
exports.tap = operators.tap;
exports.toArray = operators.toArray;
