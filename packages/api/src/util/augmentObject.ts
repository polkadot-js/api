// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { logger } from '@polkadot/util';

const l = logger('api/augment');

// log details to console
function warn (prefix: string, type: 'calls' | 'modules', added: string[], removed: string[]): void {
  if (added.length || removed.length) {
    l.warn(`api.${prefix}: Found${added.length ? ` ${added.length} added${removed.length ? ' and ' : ''}` : ''}${removed.length ? `${removed.length} removed` : ''} ${type}:${added.length ? `\n\t  added: ${added.sort().join(', ')}` : ''}${removed.length ? `\n\tremoved: ${removed.sort().join(', ')}` : ''}`);
  }
}

function extractKeys (src: Record<string, Record<string, any>>, dst: Record<string, Record<string, any>>): [string[], string[]] {
  return [Object.keys(src), Object.keys(dst)];
}

function findSectionExcludes (a: string[], b: string[]): string[] {
  return a.filter((section): boolean => !b.includes(section));
}

function extractSections (src: Record<string, Record<string, any>>, dst: Record<string, Record<string, any>>): [string[], string[]] {
  const [srcSections, dstSections] = extractKeys(src, dst);

  return [
    findSectionExcludes(srcSections, dstSections),
    findSectionExcludes(dstSections, srcSections)
  ];
}

function findMethodExcludes (src: Record<string, Record<string, any>>, dst: Record<string, Record<string, any>>): string[] {
  const srcSections = Object.keys(src);
  const dstSections = Object.keys(dst);

  return dstSections
    .filter((section): boolean => srcSections.includes(section))
    .reduce((rmMethods: string[], section): string[] => {
      const srcMethods = Object.keys(src[section]);

      return rmMethods.concat(
        ...Object
          .keys(dst[section])
          .filter((method): boolean => !srcMethods.includes(method))
          .map((method): string => `${section}.${method}`)
      );
    }, []);
}

function extractMethods (src: Record<string, Record<string, any>>, dst: Record<string, Record<string, any>>): [string[], string[]] {
  return [
    findMethodExcludes(dst, src),
    findMethodExcludes(src, dst)
  ];
}

// log all the stuff that has been removed/
export function logChanges (prefix: string, src: Record<string, Record<string, any>>, dst: Record<string, Record<string, any>>): void {
  warn(prefix, 'modules', ...extractSections(src, dst));
  warn(prefix, 'calls', ...extractMethods(src, dst));
}

/**
 * Takes a decorated api section (e.g. api.tx) and augment it with the details. It does not override what is
 * already available, but rather just adds new missing ites into the result object.
 * @internal
 */
export default function augmentObject (prefix: string, src: Record<string, Record<string, any>>, dst: Record<string, Record<string, any>>): Record<string, Record<string, any>> {
  if (prefix && Object.keys(dst).length) {
    logChanges(prefix, src, dst);
  }

  return Object
    .keys(src)
    .reduce((newSection, sectionName): Record<string, Record<string, any>> => {
      const section = src[sectionName];

      newSection[sectionName] = Object
        .keys(section)
        .reduce((result, methodName): Record<string, any> => {
          // TODO When it does match, check the actual details and warn when there are differences
          if (!result[methodName]) {
            result[methodName] = section[methodName];
          }

          return result;
        }, dst[sectionName] || {});

      return newSection;
    }, dst);
}
