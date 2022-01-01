// Copyright 2017-2022 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, SiLookupTypeId } from '@polkadot/types/interfaces';
import type { PortableRegistry } from '@polkadot/types/metadata';
import type { Codec, DefinitionRpcParam } from '@polkadot/types/types';

import fs from 'fs';

import { Metadata, TypeRegistry, Vec } from '@polkadot/types';
import * as definitions from '@polkadot/types/interfaces/definitions';
import { getStorage as getSubstrateStorage } from '@polkadot/types/metadata/decorate/storage/getStorage';
import { Text } from '@polkadot/types/primitive';
import { unwrapStorageType } from '@polkadot/types/primitive/StorageKey';
import rpcdata from '@polkadot/types-support/metadata/static-substrate';
import { stringCamelCase, stringLowerFirst } from '@polkadot/util';

interface SectionItem {
  link?: string;
  name: string;
  [bullet: string]: undefined | string | Vec<Text>;
}

interface Section {
  link?: string;
  name: string;
  description?: string;
  items: SectionItem[];
}

interface Page {
  title: string;
  description: string;
  sections: Section[];
}

const STATIC_TEXT = '\n\n(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)';

const DESC_CONSTANTS = `The following sections contain the module constants, also known as parameter types. These can only be changed as part of a runtime upgrade. On the api, these are exposed via \`api.consts.<module>.<method>\`. ${STATIC_TEXT}`;
const DESC_EXTRINSICS = `The following sections contain Extrinsics methods are part of the default Substrate runtime. On the api, these are exposed via \`api.tx.<module>.<method>\`. ${STATIC_TEXT}`;
const DESC_ERRORS = `This page lists the errors that can be encountered in the different modules. ${STATIC_TEXT}`;
const DESC_EVENTS = `Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime. ${STATIC_TEXT}`;
const DESC_RPC = 'The following sections contain RPC methods that are Remote Calls available by default and allow you to interact with the actual node, query, and submit.';
const DESC_STORAGE = `The following sections contain Storage methods are part of the default Substrate runtime. On the api, these are exposed via \`api.query.<module>.<method>\`. ${STATIC_TEXT}`;

/** @internal */
function docsVecToMarkdown (docLines: Vec<Text>, indent = 0): string {
  const md = docLines
    .map((docLine) =>
      docLine
        .toString()
        .trimStart()
        .replace(/^r"/g, '')
        .trimStart()
    )
    .reduce((md, docLine) => // generate paragraphs
      !docLine.length
        ? `${md}\n\n` // empty line
        : /^[*-]/.test(docLine.trimStart()) && !md.endsWith('\n\n')
          ? `${md}\n\n${docLine}` // line calling for a preceding linebreak
          : `${md} ${docLine.replace(/^#{1,3} /, '#### ')} `
    , '')
    .replace(/#### <weight>/g, '<weight>')
    .replace(/<weight>(.|\n)*?<\/weight>/g, '')
    .replace(/#### Weight:/g, 'Weight:');

  // prefix each line with indentation
  return md && md.split('\n\n').map((line) => `${' '.repeat(indent)}${line}`).join('\n\n');
}

function renderPage (page: Page): string {
  let md = `---\ntitle: ${page.title}\n---\n\n`;

  if (page.description) {
    md += `${page.description}\n\n`;
  }

  // index
  page.sections.forEach((section) => {
    md += `- **[${stringCamelCase(section.name)}](#${stringCamelCase(section.name).toLowerCase()})**\n\n`;
  });

  // contents
  page.sections.forEach((section) => {
    md += '\n___\n\n\n';
    md += section.link
      ? `<h2 id="#${section.link}">${section.name}</h2>\n`
      : `## ${section.name}\n`;

    if (section.description) {
      md += `\n_${section.description}_\n`;
    }

    section.items.forEach((item) => {
      md += ' \n';
      md += item.link
        ? `<h3 id="#${item.link}">${item.name}</h3>`
        : `### ${item.name}`;

      Object.keys(item).filter((key) => !['link', 'name'].includes(key)).forEach((bullet) => {
        md += `\n- **${bullet}**: ${
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          item[bullet] instanceof Vec
            ? docsVecToMarkdown(item[bullet] as Vec<Text>, 2).toString()
            : item[bullet]
        }`;
      });

      md += '\n';
    });
  });

  return md;
}

function sortByName<T extends { name: Codec | string }> (a: T, b: T): number {
  // case insensitive (all-uppercase) sorting
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  return a.name.toString().toUpperCase().localeCompare(b.name.toString().toUpperCase());
}

function getSiName (lookup: PortableRegistry, type: SiLookupTypeId): string {
  const typeDef = lookup.getTypeDef(type);

  return typeDef.lookupName || typeDef.type;
}

/** @internal */
function addRpc (): string {
  const sections = Object
    .keys(definitions)
    .filter((key) => Object.keys(definitions[key as 'babe'].rpc || {}).length !== 0);

  return renderPage({
    description: DESC_RPC,
    sections: sections
      .sort()
      .reduce((all: Section[], _sectionName): Section[] => {
        const section = definitions[_sectionName as 'babe'];

        Object.keys(section.rpc)
          .sort()
          .forEach((methodName) => {
            const method = section.rpc[methodName];
            const sectionName = method.aliasSection || _sectionName;
            const topName = method.aliasSection ? `${_sectionName}/${method.aliasSection}` : _sectionName;
            let container = all.find(({ name }) => name === topName);

            if (!container) {
              container = { items: [], name: topName };

              all.push(container);
            }

            const args = method.params.map(({ isOptional, name, type }: DefinitionRpcParam): string => {
              // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
              return name + (isOptional ? '?' : '') + ': `' + type + '`';
            }).join(', ');
            const type = '`' + method.type + '`';
            const jsonrpc = (method.endpoint || `${sectionName}_${methodName}`);

            container.items.push({
              interface: '`' + `api.rpc.${sectionName}.${methodName}` + '`',
              jsonrpc: '`' + jsonrpc + '`',
              // link: jsonrpc,
              name: `${methodName}(${args}): ${type}`,
              ...(method.description && { summary: method.description })
            });
          });

        return all;
      }, []).sort(sortByName),
    title: 'JSON-RPC'
  });
}

/** @internal */
function addConstants ({ lookup, pallets }: MetadataLatest): string {
  return renderPage({
    description: DESC_CONSTANTS,
    sections: pallets
      .sort(sortByName)
      .filter(({ constants }) => !constants.isEmpty)
      .map(({ constants, name }) => {
        const sectionName = stringLowerFirst(name);

        return {
          items: constants
            .sort(sortByName)
            .map(({ docs, name, type }) => {
              const methodName = stringCamelCase(name);

              return {
                interface: '`' + `api.consts.${sectionName}.${methodName}` + '`',
                name: `${methodName}: ` + '`' + getSiName(lookup, type) + '`',
                ...(docs.length && { summary: docs })
              };
            }),
          name: sectionName
        };
      }),
    title: 'Constants'
  });
}

/** @internal */
function addStorage ({ lookup, pallets, registry }: MetadataLatest): string {
  const { substrate } = getSubstrateStorage(registry);
  const moduleSections = pallets
    .sort(sortByName)
    .filter((moduleMetadata) => !moduleMetadata.storage.isNone)
    .map((moduleMetadata): Section => {
      const sectionName = stringLowerFirst(moduleMetadata.name);

      return {
        items: moduleMetadata.storage.unwrap().items
          .sort(sortByName)
          .map((func) => {
            let arg = '';

            if (func.type.isMap) {
              const { hashers, key } = func.type.asMap;

              arg = '`' + (
                hashers.length === 1
                  ? getSiName(lookup, key)
                  : lookup.getSiType(key).def.asTuple.map((t) => getSiName(lookup, t)).join(', ')
              ) + '`';
            }

            const methodName = stringLowerFirst(func.name);
            const outputType = unwrapStorageType(registry, func.type, func.modifier.isOptional);

            return {
              interface: '`' + `api.query.${sectionName}.${methodName}` + '`',
              name: `${methodName}(${arg}): ` + '`' + outputType + '`',
              ...(func.docs.length && { summary: func.docs })
            };
          }),
        name: sectionName
      };
    });

  return renderPage({
    description: DESC_STORAGE,
    sections: moduleSections.concat([{
      description: 'These are well-known keys that are always available to the runtime implementation of any Substrate-based network.',
      items: Object.entries(substrate).map(([name, { meta }]) => {
        const arg = meta.type.isMap
          ? ('`' + getSiName(lookup, meta.type.asMap.key) + '`')
          : '';
        const methodName = stringLowerFirst(name);
        const outputType = unwrapStorageType(registry, meta.type, meta.modifier.isOptional);

        return {
          interface: '`' + `api.query.substrate.${methodName}` + '`',
          name: `${methodName}(${arg}): ` + '`' + outputType + '`',
          summary: meta.docs
        };
      }),
      name: 'substrate'
    }]).sort(sortByName),
    title: 'Storage'
  });
}

/** @internal */
function addExtrinsics ({ lookup, pallets }: MetadataLatest): string {
  return renderPage({
    description: DESC_EXTRINSICS,
    sections: pallets
      .sort(sortByName)
      .filter(({ calls }) => calls.isSome)
      .map(({ calls, name }) => {
        const sectionName = stringCamelCase(name);

        return {
          items: lookup.getSiType(calls.unwrap().type).def.asVariant.variants
            .sort(sortByName)
            .map(({ docs, fields, name }, index) => {
              const methodName = stringCamelCase(name);
              const args = fields.map(({ name, type }) =>
                `${name.isSome ? name.toString() : `param${index}`}: ` + '`' + getSiName(lookup, type) + '`'
              ).join(', ');

              return {
                interface: '`' + `api.tx.${sectionName}.${methodName}` + '`',
                name: `${methodName}(${args})`,
                ...(docs.length && { summary: docs })
              };
            }),
          name: sectionName
        };
      }),
    title: 'Extrinsics'
  });
}

/** @internal */
function addEvents ({ lookup, pallets }: MetadataLatest): string {
  return renderPage({
    description: DESC_EVENTS,
    sections: pallets
      .sort(sortByName)
      .filter(({ events }) => events.isSome)
      .map((meta) => ({
        items: lookup.getSiType(meta.events.unwrap().type).def.asVariant.variants
          .sort(sortByName)
          .map(({ docs, fields, name }) => {
            const methodName = name.toString();
            const args = fields.map(({ type }) =>
              '`' + getSiName(lookup, type) + '`'
            ).join(', ');

            return {
              interface: '`' + `api.events.${stringCamelCase(meta.name)}.${methodName}.is` + '`',
              name: `${methodName}(${args})`,
              ...(docs.length && { summary: docs })
            };
          }),
        name: stringCamelCase(meta.name)
      })),
    title: 'Events'
  });
}

/** @internal */
function addErrors ({ lookup, pallets }: MetadataLatest): string {
  return renderPage({
    description: DESC_ERRORS,
    sections: pallets
      .sort(sortByName)
      .filter(({ errors }) => errors.isSome)
      .map((moduleMetadata) => ({
        items: lookup.getSiType(moduleMetadata.errors.unwrap().type).def.asVariant.variants
          .sort(sortByName)
          .map((error) => ({
            interface: '`' + `api.errors.${stringCamelCase(moduleMetadata.name)}.${error.name.toString()}.is` + '`',
            name: error.name.toString(),
            ...(error.docs.length && { summary: error.docs })
          })),
        name: stringLowerFirst(moduleMetadata.name)
      })),
    title: 'Errors'
  });
}

/** @internal */
function writeFile (name: string, ...chunks: any[]): void {
  const writeStream = fs.createWriteStream(name, { encoding: 'utf8', flags: 'w' });

  writeStream.on('finish', (): void => {
    console.log(`Completed writing ${name}`);
  });

  chunks.forEach((chunk): void => {
    writeStream.write(chunk);
  });

  writeStream.end();
}

export function main (): void {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, rpcdata);

  registry.setMetadata(metadata);

  const latest = metadata.asLatest;

  writeFile('docs/substrate/rpc.md', addRpc());
  writeFile('docs/substrate/constants.md', addConstants(latest));
  writeFile('docs/substrate/storage.md', addStorage(latest));
  writeFile('docs/substrate/extrinsics.md', addExtrinsics(latest));
  writeFile('docs/substrate/events.md', addEvents(latest));
  writeFile('docs/substrate/errors.md', addErrors(latest));
}
