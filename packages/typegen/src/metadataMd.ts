// Copyright 2017-2020 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest } from '@polkadot/types/interfaces/metadata';
import type { Codec, DefinitionRpcParam } from '@polkadot/types/types';

import fs from 'fs';

import { Metadata } from '@polkadot/metadata';
import rpcdata from '@polkadot/metadata/static';
import { Vec } from '@polkadot/types/codec';
import { TypeRegistry } from '@polkadot/types/create';
import { GenericCall as Call } from '@polkadot/types/generic';
import * as definitions from '@polkadot/types/interfaces/definitions';
import { Text } from '@polkadot/types/primitive';
import { unwrapStorageType } from '@polkadot/types/primitive/StorageKey';
import { stringCamelCase, stringLowerFirst } from '@polkadot/util';

interface Page {
  title: string;
  description: string;
  sections: {
    name: string;
    description?: string;
    items: {
      name: string;
      [bullet: string]: string | Vec<Text>;
    }[];
  }[];
}

const STATIC_TEXT = '\n\n(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)';

const DESC_CONSTANTS = `The following sections contain the module constants, also known as parameter types. These can only be changed as part of a runtime upgrade. On the api, these are exposed via \`api.consts.<module>.<method>\`. ${STATIC_TEXT}`;
const DESC_EXTRINSICS = `The following sections contain Extrinsics methods are part of the default Substrate runtime. On the api, these are exposed via \`api.tx.<module>.<method>\`. ${STATIC_TEXT}`;
const DESC_ERRORS = `This page lists the errors that can be encountered in the different modules. ${STATIC_TEXT}`;
const DESC_EVENTS = `Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime. ${STATIC_TEXT}`;
const DESC_RPC = 'The following sections contain RPC methods that are Remote Calls available by default and allow you to interact with the actual node, query, and submit.';
const DESC_STORAGE = `The following sections contain Storage methods are part of the default Substrate runtime. On the api, these are exposed via \`api.query.<module>.<method>\`. ${STATIC_TEXT}`;

/** @internal */
function documentationVecToMarkdown (docLines: Vec<Text>, indent = 0): string {
  const md = docLines
    .map((docLine) => docLine && docLine.substring(1)) // trim the leading space
    .reduce((md, docLine): string => // generate paragraphs
      !docLine.trim().length
        ? `${md}\n\n` // empty line
        : /^[*-]/.test(docLine.trimStart()) && !md.endsWith('\n\n')
          ? `${md}\n\n${docLine}` // line calling for a preceding linebreak
          : `${md}${docLine.replace(/^#{1,3} /, '#### ')} `
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
    md += `\n___\n\n\n## ${section.name}\n`;

    if (section.description) {
      md += `\n_${section.description}_\n`;
    }

    section.items.forEach((item) => {
      md += ` \n### ${item.name}`;

      Object.keys(item).filter((i) => i !== 'name').forEach((bullet) => {
        md += `\n- **${bullet}**: ${
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          item[bullet] instanceof Vec
            ? documentationVecToMarkdown(item[bullet] as Vec<Text>, 2).toString()
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

/** @internal */
function addRpc (): string {
  const sections = Object
    .keys(definitions)
    .filter((key) => Object.keys(definitions[key as 'babe'].rpc || {}).length !== 0);

  return renderPage({
    description: DESC_RPC,
    sections: sections
      .sort()
      .map((sectionName) => {
        const section = definitions[sectionName as 'babe'];

        return {
          // description: section.description,
          items: Object.keys(section.rpc)
            .sort()
            .map((methodName) => {
              const method = section.rpc[methodName];
              const args = method.params.map(({ isOptional, name, type }: DefinitionRpcParam): string => {
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                return name + (isOptional ? '?' : '') + ': `' + type + '`';
              }).join(', ');
              const type = '`' + method.type + '`';

              return {
                interface: '`' + `api.rpc.${sectionName}.${methodName}` + '`',
                jsonrpc: '`' + (method.endpoint || `${sectionName}_${methodName}`) + '`',
                name: `${methodName}(${args}): ${type}`,
                ...(method.description && { summary: method.description })
              };
            }),
          name: sectionName
        };
      }),
    title: 'JSON-RPC'
  });
}

/** @internal */
function addConstants (metadata: MetadataLatest): string {
  return renderPage({
    description: DESC_CONSTANTS,
    sections: metadata.modules
      .sort(sortByName)
      .filter((moduleMetadata) => !moduleMetadata.constants.isEmpty)
      .map((moduleMetadata) => {
        const sectionName = stringLowerFirst(moduleMetadata.name);

        return {
          items: moduleMetadata.constants
            .sort(sortByName)
            .map((func) => {
              const methodName = stringCamelCase(func.name);

              return {
                interface: '`' + `api.consts.${sectionName}.${methodName}` + '`',
                name: `${methodName}: ` + '`' + func.type.toString() + '`',
                ...(func.documentation.length && { summary: func.documentation })
              };
            }),
          name: sectionName
        };
      }),
    title: 'Constants'
  });
}

/** @internal */
function addStorage (metadata: MetadataLatest): string {
  const moduleSections = metadata.modules
    .sort(sortByName)
    .filter((moduleMetadata) => !moduleMetadata.storage.isNone)
    .map((moduleMetadata) => {
      const sectionName = stringLowerFirst(moduleMetadata.name);

      return {
        items: moduleMetadata.storage.unwrap().items
          .sort(sortByName)
          .map((func) => {
            const arg = func.type.isMap
              ? ('`' + func.type.asMap.key.toString() + '`')
              : func.type.isDoubleMap
                ? ('`' + func.type.asDoubleMap.key1.toString() + ', ' + func.type.asDoubleMap.key2.toString() + '`')
                : '';
            const methodName = stringLowerFirst(func.name);
            const outputType = unwrapStorageType(func.type, func.modifier.isOptional);

            return {
              interface: '`' + `api.query.${sectionName}.${methodName}` + '`',
              name: `${methodName}(${arg}): ` + '`' + outputType + '`',
              ...(func.documentation.length && { summary: func.documentation })
            };
          }),
        name: sectionName
      };
    });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const knownSection: any = JSON.parse(fs.readFileSync('docs/substrate/storage-known-section.json', 'utf8'));

  return renderPage({
    description: DESC_STORAGE,
    sections: moduleSections.concat([knownSection]),
    title: 'Storage'
  });
}

/** @internal */
function addExtrinsics (metadata: MetadataLatest): string {
  return renderPage({
    description: DESC_EXTRINSICS,
    sections: metadata.modules
      .sort(sortByName)
      .filter((meta) => !meta.calls.isNone && meta.calls.unwrap().length !== 0)
      .map((meta) => {
        const sectionName = stringCamelCase(meta.name);

        return {
          items: meta.calls.unwrap()
            .sort(sortByName)
            .map((func) => {
              const methodName = stringCamelCase(func.name);
              const args = Call.filterOrigin(func).map(({ name, type }) => `${name.toString()}: ` + '`' + type.toString() + '`').join(', ');

              return {
                interface: '`' + `api.tx.${sectionName}.${methodName}` + '`',
                name: `${methodName}(${args})`,
                ...(func.documentation.length && { summary: func.documentation })
              };
            }),
          name: sectionName
        };
      }),
    title: 'Extrinsics'
  });
}

/** @internal */
function addEvents (metadata: MetadataLatest): string {
  return renderPage({
    description: DESC_EVENTS,
    sections: metadata.modules
      .sort(sortByName)
      .filter((meta) => !meta.events.isNone && meta.events.unwrap().length !== 0)
      .map((meta) => ({
        items: meta.events.unwrap()
          .sort(sortByName)
          .map((func) => {
            const methodName = func.name.toString();
            const args = func.args.map((type): string => '`' + type.toString() + '`').join(', ');

            return {
              name: `${methodName}(${args})`,
              ...(func.documentation.length && { summary: func.documentation })
            };
          }),
        name: stringCamelCase(meta.name)
      })),
    title: 'Events'
  });
}

/** @internal */
function addErrors (metadata: MetadataLatest): string {
  return renderPage({
    description: DESC_ERRORS,
    sections: metadata.modules
      .sort(sortByName)
      .filter((moduleMetadata) => !moduleMetadata.errors.isEmpty)
      .map((moduleMetadata) => ({
        items: moduleMetadata.errors
          .sort(sortByName)
          .map((error) => ({
            name: error.name.toString(),
            ...(error.documentation.length && { summary: error.documentation })
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
