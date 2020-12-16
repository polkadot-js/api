// Copyright 2017-2020 @polkadot/x-rxjs authors & contributors
// SPDX-License-Identifier: Apache-2.0

// This is not great, but while having esm files, rxjs doesn't quite play nicely with
// Node.js mjs files. (Hopefully this improves in 7.0, although no exports map as of yet)
//
// Ensure the exports here do match up with what is done in index.d.ts

const rxjs = require('rxjs');

exports.BehaviorSubject = rxjs.BehaviorSubject;
exports.EMPTY = rxjs.EMPTY;
exports.Observable = rxjs.Observable;
exports.Subscription = rxjs.Subscription;

exports.asapScheduler = rxjs.asapScheduler;
exports.combineLatest = rxjs.combineLatest;
exports.from = rxjs.from;
exports.interval = rxjs.interval;
exports.of = rxjs.of;
exports.timer = rxjs.timer;
