// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { logger } from '@polkadot/util';

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

function extractKeys (src: Record<string, Record<string, any>>, dst: Record<string, Record<string, any>>): StringsStrings {
  return [Object.keys(src), Object.keys(dst)];
}

function findSectionExcludes (a: string[], b: string[]): string[] {
  return a.filter((s) => !b.includes(s));
}

function extractSections (src: Record<string, Record<string, any>>, dst: Record<string, Record<string, any>>): StringsStrings {
  const [srcSections, dstSections] = extractKeys(src, dst);

  return [
    findSectionExcludes(srcSections, dstSections),
    findSectionExcludes(dstSections, srcSections)
  ];
}

function findMethodExcludes (src: Record<string, Record<string, any>>, dst: Record<string, Record<string, any>>): string[] {
  const srcSections = Object.keys(src);
  const rmMethods: string[] = [];

  for (const s of Object.keys(dst)) {
    if (srcSections.includes(s)) {
      const srcMethods = Object.keys(src[s]);
      const filterIncluded = (m: string) => !srcMethods.includes(m);

      rmMethods.concat(
        ...Object
          .keys(dst[s])
          .filter(filterIncluded)
          .map((m) => `${s}.${m}`)
      );
    }
  }

  return rmMethods;
}

function extractMethods (src: Record<string, Record<string, any>>, dst: Record<string, Record<string, any>>): StringsStrings {
  return [
    findMethodExcludes(dst, src),
    findMethodExcludes(src, dst)
  ];
}

/**
 * Takes a decorated api section (e.g. api.tx) and augment it with the details. It does not override what is
 * already available, but rather just adds new missing ites into the result object.
 * @internal
 */
export function augmentObject (prefix: string | null, src: Record<string, Record<string, unknown>>, dst: Record<string, Record<string, unknown>>, fromEmpty = false): Record<string, Record<string, any>> {
  if (fromEmpty) {
    for (const k of Object.keys(dst)) {
      delete dst[k];
    }
  }

  if (prefix && Object.keys(dst).length) {
    warn(prefix, 'modules', extractSections(src, dst));
    warn(prefix, 'calls', extractMethods(src, dst));
  }

  for (const s of Object.keys(src)) {
    if (!dst[s]) {
      dst[s] = {};
    }

    const secSrc = src[s];
    const secDst = dst[s];

    for (const m of Object.keys(secSrc)) {
      // TODO When it does match, check the actual details and warn when there are differences
      if (!secDst[m]) {
        secDst[m] = secSrc[m];
      }
    }
  }

  return dst;
}
