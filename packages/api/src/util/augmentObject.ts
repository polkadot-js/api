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

function findSectionExcludes (a: string[], b: string[]): string[] {
  return a.filter((s) => !b.includes(s));
}

function extractSections (src: Record<string, Record<string, any>>, dst: Record<string, Record<string, any>>): StringsStrings {
  const srcSections = Object.keys(src);
  const dstSections = Object.keys(dst);

  return [
    findSectionExcludes(srcSections, dstSections),
    findSectionExcludes(dstSections, srcSections)
  ];
}

function findMethodExcludes (src: Record<string, Record<string, any>>, dst: Record<string, Record<string, any>>): string[] {
  const srcSections = Object.keys(src);
  const dstSections = Object.keys(dst).filter((s) => srcSections.includes(s));
  const excludes: string[] = [];

  for (let d = 0; d < dstSections.length; d++) {
    const section = dstSections[d];
    const srcMethods = Object.keys(src[section]);

    excludes.push(
      ...Object
        .keys(dst[section])
        .filter((m) => !srcMethods.includes(m))
        .map((m) => `${section}.${m}`)
    );
  }

  return excludes;
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
    const dstKeys = Object.keys(dst);

    for (let k = 0; k < dstKeys.length; k++) {
      delete dst[dstKeys[k]];
    }
  }

  if (prefix && Object.keys(dst).length) {
    warn(prefix, 'modules', extractSections(src, dst));
    warn(prefix, 'calls', extractMethods(src, dst));
  }

  const srcKeys = Object.keys(src);

  for (let s = 0; s < srcKeys.length; s++) {
    const sectionName = srcKeys[s];

    if (!dst[sectionName]) {
      dst[sectionName] = {};
    }

    const section = src[sectionName];
    const methods = Object.keys(section);

    for (let m = 0; m < methods.length; m++) {
      const methodName = methods[m];

      // TODO When it does match, check the actual details and warn when there are differences
      if (!dst[sectionName][methodName]) {
        dst[sectionName][methodName] = section[methodName];
      }
    }
  }

  return dst;
}
