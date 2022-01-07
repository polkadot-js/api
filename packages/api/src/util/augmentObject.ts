// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { lazyMethod, logger, objectClear } from '@polkadot/util';

type Sections <T> = Record<string, Methods<T>>;

type Methods <T> = Record<string, T>;

type StringsStrings = [string[], string[]];

const l = logger('api/augment');

function logLength (type: 'added' | 'removed', values: string[], and: string[] = []): string {
  return values.length
    ? ` ${values.length} ${type}${and.length ? ' and' : ''}`
    : '';
}

function logValues (type: 'added' | 'removed', values: string[]): string {
  return values.length
    ? `\n\t${type.padStart(7)}: ${values.sort().join(', ')}`
    : '';
}

// log details to console
function warn (prefix: string, type: 'calls' | 'modules', [added, removed]: StringsStrings): void {
  if (added.length || removed.length) {
    l.warn(`api.${prefix}: Found${logLength('added', added, removed)}${logLength('removed', removed)} ${type}:${logValues('added', added)}${logValues('removed', removed)}`);
  }
}

function findSectionExcludes (a: string[], b: string[]): string[] {
  return a.filter((s) => !b.includes(s));
}

function findSectionIncludes (a: string[], b: string[]): string[] {
  return a.filter((s) => b.includes(s));
}

function extractSections <T> (src: Sections<T>, dst: Sections<T>): StringsStrings {
  const srcSections = Object.keys(src);
  const dstSections = Object.keys(dst);

  return [
    findSectionExcludes(srcSections, dstSections),
    findSectionExcludes(dstSections, srcSections)
  ];
}

function findMethodExcludes <T> (src: Sections<T>, dst: Sections<T>): string[] {
  const srcSections = Object.keys(src);
  const dstSections = findSectionIncludes(Object.keys(dst), srcSections);
  const excludes: string[] = [];

  for (let s = 0; s < dstSections.length; s++) {
    const section = dstSections[s];
    const srcMethods = Object.keys(src[section]);
    const dstMethods = Object.keys(dst[section]);

    excludes.push(
      ...dstMethods
        .filter((m) => !srcMethods.includes(m))
        .map((m) => `${section}.${m}`)
    );
  }

  return excludes;
}

function extractMethods <T> (src: Sections<T>, dst: Sections<T>): StringsStrings {
  return [
    findMethodExcludes(dst, src),
    findMethodExcludes(src, dst)
  ];
}

function lazySection <T> (src: Methods<T>, dst: Methods<T>): void {
  const creator = (m: string) => src[m];
  const methods = Object.keys(src);

  for (let i = 0; i < methods.length; i++) {
    const method = methods[i];

    // We use hasOwnproperty here to only check for the existence of the key,
    // instead of reading dst[section][method] which will evaluate when already
    // set as a lazy value previously
    if (!Object.prototype.hasOwnProperty.call(dst, method)) {
      lazyMethod(dst, method, creator);
    }
  }
}

/**
 * @description Takes a decorated api section (e.g. api.tx) and augment it with the details. It does not override what is
 * already available, but rather just adds new missing items into the result object.
 * @internal
 */
export function augmentObject <T> (prefix: string | null, src: Sections<T>, dst: Sections<T>, fromEmpty = false): Sections<T> {
  fromEmpty && objectClear(dst);

  // NOTE: This part is slightly problematic since it will get the
  // values for at least all the sections and the names of the methods
  // (Since methods won't be decorated before lazy, this _may_ be ok)
  if (prefix && Object.keys(dst).length) {
    warn(prefix, 'modules', extractSections(src, dst));
    warn(prefix, 'calls', extractMethods(src, dst));
  }

  const sections = Object.keys(src);

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];

    // We don't set here with a lazy interface, we decorate based
    // on the top-level structure (this bypasses adding lazy onto lazy)
    if (!dst[section]) {
      dst[section] = {};
    }

    lazySection(src[section], dst[section]);
  }

  return dst;
}
