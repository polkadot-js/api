// Copyright 2017-2021 @polkadot/x-rxjs authors & contributors
// SPDX-License-Identifier: Apache-2.0

// This is not great, but while having esm files, rxjs doesn't quite play nicely with
// Node.js mjs files. (Hopefully this improves in 7.0, although no exports map as of yet)
//
// Generated via s/export \{ (.*) \} from .*/exports.$1 = rxjs.$1;/ on rxjs/_esm

// This is or our builder, to add the correct exports entry
// @polkadot/dev: exports-node

const operators = require('rxjs/operators');

exports.audit = operators.audit;
exports.auditTime = operators.auditTime;
exports.buffer = operators.buffer;
exports.bufferCount = operators.bufferCount;
exports.bufferTime = operators.bufferTime;
exports.bufferToggle = operators.bufferToggle;
exports.bufferWhen = operators.bufferWhen;
exports.catchError = operators.catchError;
exports.combineAll = operators.combineAll;
exports.combineLatest = operators.combineLatest;
exports.concat = operators.concat;
exports.concatAll = operators.concatAll;
exports.concatMap = operators.concatMap;
exports.concatMapTo = operators.concatMapTo;
exports.count = operators.count;
exports.debounce = operators.debounce;
exports.debounceTime = operators.debounceTime;
exports.defaultIfEmpty = operators.defaultIfEmpty;
exports.delay = operators.delay;
exports.delayWhen = operators.delayWhen;
exports.dematerialize = operators.dematerialize;
exports.distinct = operators.distinct;
exports.distinctUntilChanged = operators.distinctUntilChanged;
exports.distinctUntilKeyChanged = operators.distinctUntilKeyChanged;
exports.elementAt = operators.elementAt;
exports.endWith = operators.endWith;
exports.every = operators.every;
exports.exhaust = operators.exhaust;
exports.exhaustMap = operators.exhaustMap;
exports.expand = operators.expand;
exports.filter = operators.filter;
exports.finalize = operators.finalize;
exports.find = operators.find;
exports.findIndex = operators.findIndex;
exports.first = operators.first;
exports.groupBy = operators.groupBy;
exports.ignoreElements = operators.ignoreElements;
exports.isEmpty = operators.isEmpty;
exports.last = operators.last;
exports.map = operators.map;
exports.mapTo = operators.mapTo;
exports.materialize = operators.materialize;
exports.max = operators.max;
exports.merge = operators.merge;
exports.mergeAll = operators.mergeAll;
exports.mergeMap = operators.mergeMap;
exports.flatMap = operators.flatMap;
exports.mergeMapTo = operators.mergeMapTo;
exports.mergeScan = operators.mergeScan;
exports.min = operators.min;
exports.multicast = operators.multicast;
exports.observeOn = operators.observeOn;
exports.onErrorResumeNext = operators.onErrorResumeNext;
exports.pairwise = operators.pairwise;
exports.partition = operators.partition;
exports.pluck = operators.pluck;
exports.publish = operators.publish;
exports.publishBehavior = operators.publishBehavior;
exports.publishLast = operators.publishLast;
exports.publishReplay = operators.publishReplay;
exports.race = operators.race;
exports.reduce = operators.reduce;
exports.repeat = operators.repeat;
exports.repeatWhen = operators.repeatWhen;
exports.retry = operators.retry;
exports.retryWhen = operators.retryWhen;
exports.refCount = operators.refCount;
exports.sample = operators.sample;
exports.sampleTime = operators.sampleTime;
exports.scan = operators.scan;
exports.sequenceEqual = operators.sequenceEqual;
exports.share = operators.share;
exports.shareReplay = operators.shareReplay;
exports.single = operators.single;
exports.skip = operators.skip;
exports.skipLast = operators.skipLast;
exports.skipUntil = operators.skipUntil;
exports.skipWhile = operators.skipWhile;
exports.startWith = operators.startWith;
exports.subscribeOn = operators.subscribeOn;
exports.switchAll = operators.switchAll;
exports.switchMap = operators.switchMap;
exports.switchMapTo = operators.switchMapTo;
exports.take = operators.take;
exports.takeLast = operators.takeLast;
exports.takeUntil = operators.takeUntil;
exports.takeWhile = operators.takeWhile;
exports.tap = operators.tap;
exports.throttle = operators.throttle;
exports.throttleTime = operators.throttleTime;
exports.throwIfEmpty = operators.throwIfEmpty;
exports.timeInterval = operators.timeInterval;
exports.timeout = operators.timeout;
exports.timeoutWith = operators.timeoutWith;
exports.timestamp = operators.timestamp;
exports.toArray = operators.toArray;
exports.window = operators.window;
exports.windowCount = operators.windowCount;
exports.windowTime = operators.windowTime;
exports.windowToggle = operators.windowToggle;
exports.windowWhen = operators.windowWhen;
exports.withLatestFrom = operators.withLatestFrom;
exports.zip = operators.zip;
exports.zipAll = operators.zipAll;
