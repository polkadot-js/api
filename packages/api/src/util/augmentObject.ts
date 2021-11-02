// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { lazyMethod } from '@polkadot/types';
import { logger } from '@polkadot/util';

type StringsStrings = [string[], string[]];

const l = logger('api/augment');

function clearObject (obj: Record<string, unknown>): void {
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    delete obj[keys[i]];
  }
}

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

function extractSections (src: Record<string, Record<string, unknown>>, dst: Record<string, Record<string, unknown>>): StringsStrings {
  const srcSections = Object.keys(src);
  const dstSections = Object.keys(dst);

  return [
    findSectionExcludes(srcSections, dstSections),
    findSectionExcludes(dstSections, srcSections)
  ];
}

function findMethodExcludes (src: Record<string, Record<string, unknown>>, dst: Record<string, Record<string, unknown>>): string[] {
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

function extractMethods (src: Record<string, Record<string, unknown>>, dst: Record<string, Record<string, unknown>>): StringsStrings {
  return [
    findMethodExcludes(dst, src),
    findMethodExcludes(src, dst)
  ];
}

function lazySection (src: Record<string, unknown>, dst: Record<string, unknown>): void {
  const creator = (method: string) => src[method];
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
export function augmentObject (prefix: string | null, src: Record<string, Record<string, unknown>>, dst: Record<string, Record<string, unknown>>, fromEmpty = false): Record<string, Record<string, any>> {
  fromEmpty && clearObject(dst);

  // NOTE: This part is slightly problematic since it will get the
  // values for at least all the sections and the names of the methods
  // (Since methods won't be decorated before lazy, this _may_ be ok)
  if (prefix && Object.keys(dst).length) {
    warn(prefix, 'modules', extractSections(src, dst));
    warn(prefix, 'calls', extractMethods(src, dst));
  }

  const filler = (section: string): Record<string, unknown> => {
    lazySection(src[section], dst[section]);

    return dst[section];
  };

  const sections = Object.keys(src);

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];

    // We actually do read the section here, i.e. if it has been lazy in the past,
    // it now has the methods. This is to reset the actual value from it, i.e. it
    // won't conflict with declarations wher it may call an existing lazy
    if (!dst[section]) {
      // it didn't exist before, so set it lazily
      lazyMethod(dst, section, filler);
    } else {
      // it existed before, so just add whatever we are missing
      filler(section);
    }
  }

  return dst;
}
