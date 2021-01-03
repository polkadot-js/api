// Copyright 2017-2021 @polkadot/x-rxjs authors & contributors
// SPDX-License-Identifier: Apache-2.0

// This is not great, but while having esm files, rxjs doesn't quite play nicely with
// Node.js mjs files. (Hopefully this improves in 7.0, although no exports map as of yet)
//
// Generated via s/export \{ (.*) \} from .*/exports.$1 = rxjs.$1;/ on rxjs/_esm

// This is or our builder
// @polkadot/dev: exports-node

const rxjs = require('rxjs');

exports.Observable = rxjs.Observable;
exports.ConnectableObservable = rxjs.ConnectableObservable;
exports.GroupedObservable = rxjs.GroupedObservable;
exports.observable = rxjs.observable;
exports.Subject = rxjs.Subject;
exports.BehaviorSubject = rxjs.BehaviorSubject;
exports.ReplaySubject = rxjs.ReplaySubject;
exports.AsyncSubject = rxjs.AsyncSubject;
exports.asap = rxjs.asap;
exports.asapScheduler = rxjs.asapScheduler;
exports.async = rxjs.async;
exports.asyncScheduler = rxjs.asyncScheduler;
exports.queue = rxjs.queue;
exports.queueScheduler = rxjs.queueScheduler;
exports.animationFrame = rxjs.animationFrame;
exports.animationFrameScheduler = rxjs.animationFrameScheduler;
exports.VirtualTimeScheduler = rxjs.VirtualTimeScheduler;
exports.VirtualAction = rxjs.VirtualAction;
exports.Scheduler = rxjs.Scheduler;
exports.Subscription = rxjs.Subscription;
exports.Subscriber = rxjs.Subscriber;
exports.Notification = rxjs.Notification;
exports.NotificationKind = rxjs.NotificationKind;
exports.pipe = rxjs.pipe;
exports.noop = rxjs.noop;
exports.identity = rxjs.identity;
exports.isObservable = rxjs.isObservable;
exports.ArgumentOutOfRangeError = rxjs.ArgumentOutOfRangeError;
exports.EmptyError = rxjs.EmptyError;
exports.ObjectUnsubscribedError = rxjs.ObjectUnsubscribedError;
exports.UnsubscriptionError = rxjs.UnsubscriptionError;
exports.TimeoutError = rxjs.TimeoutError;
exports.bindCallback = rxjs.bindCallback;
exports.bindNodeCallback = rxjs.bindNodeCallback;
exports.combineLatest = rxjs.combineLatest;
exports.concat = rxjs.concat;
exports.defer = rxjs.defer;
exports.empty = rxjs.empty;
exports.forkJoin = rxjs.forkJoin;
exports.from = rxjs.from;
exports.fromEvent = rxjs.fromEvent;
exports.fromEventPattern = rxjs.fromEventPattern;
exports.generate = rxjs.generate;
exports.iif = rxjs.iif;
exports.interval = rxjs.interval;
exports.merge = rxjs.merge;
exports.never = rxjs.never;
exports.of = rxjs.of;
exports.onErrorResumeNext = rxjs.onErrorResumeNext;
exports.pairs = rxjs.pairs;
exports.partition = rxjs.partition;
exports.race = rxjs.race;
exports.range = rxjs.range;
exports.throwError = rxjs.throwError;
exports.timer = rxjs.timer;
exports.using = rxjs.using;
exports.zip = rxjs.zip;
exports.scheduled = rxjs.scheduled;
exports.EMPTY = rxjs.EMPTY;
exports.NEVER = rxjs.NEVER;
exports.config = rxjs.config;
