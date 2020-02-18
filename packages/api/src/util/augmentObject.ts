// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// log details to console
function warn (prefix: string, type: 'calls' | 'modules', rmed: string[]): void {
  if (rmed.length) {
    console.warn(`api.${prefix}: Found ${rmed.length} removed ${type}: ${rmed.join(', ')}`);
  }
}

// log all the stuff that has been removed/
export function findRemoved (prefix: string, src: Record<string, Record<string, any>>, dst: Record<string, Record<string, any>>): void {
  const srcSections = Object.keys(src);
  const dstSections = Object.keys(dst);

  warn(prefix, 'modules', dstSections
    .filter((section): boolean => !srcSections.includes(section))
    .sort()
  );

  warn(prefix, 'calls', dstSections
    .filter((section): boolean => srcSections.includes(section))
    .reduce((rmMethods: string[], section): string[] => {
      const srcMethods = Object.keys(src[section]);

      return rmMethods.concat(
        ...Object
          .keys(dst[section])
          .filter((method): boolean => !srcMethods.includes(method))
          .map((method): string => `${section}.${method}`)
      );
    }, [])
    .sort()
  );
}

/**
 * Takes a decorated api section (e.g. api.tx) and augment it with the details. It does not override what is
 * already available, but rather just adds new missing ites into the result object.
 * @internal
 */
export default function augmentObject (prefix: string, src: Record<string, Record<string, any>>, dst: Record<string, Record<string, any>>): Record<string, Record<string, any>> {
  if (prefix && Object.keys(dst).length) {
    findRemoved(prefix, src, dst);
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
