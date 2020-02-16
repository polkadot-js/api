// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataLatest, ModuleMetadataLatest } from '@polkadot/types/interfaces/metadata';

import fs from 'fs';
import interfaces from '@polkadot/jsonrpc';
import Decorated from '@polkadot/metadata/Decorated';
import rpcdata from '@polkadot/metadata/Metadata/static';
import { unwrapStorageType } from '@polkadot/types/primitive/StorageKey';
import Call from '@polkadot/types/primitive/Generic/Call';
import { TypeRegistry } from '@polkadot/types/create';
import { Vec } from '@polkadot/types/codec';
import { Text } from '@polkadot/types/primitive';
import { stringCamelCase, stringLowerFirst } from '@polkadot/util';

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
    .map(docLine => docLine && docLine.substring(1)) // trim the leading space
    .reduce((md, docLine): string => // generate paragraphs
      !docLine.trim().length ? `${md}\n\n` // empty line
        : /^[*-]/.test(docLine.trimStart()) && !md.endsWith('\n\n') ? `${md}\n\n${docLine}` // line calling for a preceding linebreak
          : `${md}${docLine // line continuing the preceding line
            .replace(/^# <weight>$/g, '\\# \\<weight>\n\n')
            .replace(/^# <\/weight>$/g, '\n\n\\# \\</weight>')
            .replace(/^#{1,3} /, '#### ')} `
    , '');
  // prefix each line with indentation
  return md && md.split('\n\n').map(line => `${' '.repeat(indent)}${line}`).join('\n\n');
}

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

function renderPage (page: Page): string {
  let md = `## ${page.title}\n\n`;

  if (page.description) {
    md += `${page.description}\n\n`;
  }

  // index
  page.sections.forEach(section => {
    md += `- **[${stringCamelCase(section.name)}](#${stringCamelCase(section.name).toLowerCase()})**\n\n`;
  });

  // contents
  page.sections.forEach(section => {
    md += `\n___\n\n\n## ${section.name}\n`;
    if (section.description) { md += `\n_${section.description}_\n`; }

    section.items.forEach((item) => {
      md += ` \n### ${item.name}`;

      Object.keys(item).filter(i => i !== 'name').forEach(bullet => {
        md += `\n- **${bullet}**: ${item[bullet] instanceof Vec ? documentationVecToMarkdown(item[bullet] as Vec<Text>, 2) : item[bullet]}`;
      });

      md += '\n';
    });
  });

  return md;
}

/**
 * Sort object by their `.name`
 */
/** @internal */
function sortByName<T extends { name: any }> (a: T, b: T): number {
  // ignore upper and lowercase
  const nameA = a.name.toString().toUpperCase();
  const nameB = b.name.toString().toUpperCase();

  return nameA.localeCompare(nameB);
}

/** @internal */
function addRpc (): string {
  return renderPage({
    title: 'JSON-RPC',
    description: DESC_RPC,
    sections: Object.keys(interfaces).sort().map(sectionName => {
      const section = interfaces[sectionName];

      return {
        name: sectionName,
        description: section.description,
        items: Object.keys(section.methods).sort().map(methodName => {
          const method = section.methods[methodName];
          const args = method.params.map(({ name, isOptional, type }): string => {
            return name + (isOptional ? '?' : '') + ': `' + type + '`';
          }).join(', ');
          const type = '`' + method.type + '`';

          return {
            name: `${methodName}(${args}): ${type}`,
            jsonrpc: `${sectionName}_${methodName}`,
            interface: `api.rpc.${sectionName}.${methodName}`,
            ...(method.description && { summary: method.description })
          };
        })
      };
    })
  });
}

/** @internal */
function addConstants (metadata: MetadataLatest): string {
  return renderPage({
    title: 'Constants',
    description: DESC_CONSTANTS,
    sections: metadata.modules.sort(sortByName).filter(moduleMetadata => !moduleMetadata.constants.isEmpty).map(moduleMetadata => {
      const sectionName = stringLowerFirst(moduleMetadata.name.toString());

      return {
        name: sectionName,
        items: moduleMetadata.constants.sort(sortByName).map(func => {
          const methodName = stringCamelCase(func.name.toString());

          return {
            name: `${methodName}: ` + '`' + func.type + '`',
            interface: `api.consts.${sectionName}.${methodName}`,
            ...(func.documentation.length && { summary: func.documentation })
          };
        })
      };
    })
  });
}

/** @internal */
function addStorage (metadata: MetadataLatest): string {
  const moduleSections = metadata.modules.sort(sortByName)
    .filter(moduleMetadata => !moduleMetadata.storage.isNone)
    .map(moduleMetadata => {
      const sectionName = stringLowerFirst(moduleMetadata.name.toString());

      return {
        name: sectionName,
        items: moduleMetadata.storage.unwrap().items.sort(sortByName).map(func => {
          const arg =
            func.type.isMap
              ? ('`' + func.type.asMap.key.toString() + '`')
              : func.type.isDoubleMap
                ? ('`' + func.type.asDoubleMap.key1.toString() + ', ' + func.type.asDoubleMap.key2.toString() + '`')
                : '';

          const methodName = stringLowerFirst(func.name.toString());

          let result = unwrapStorageType(func.type);

          if (func.modifier.isOptional) {
            result = `Option<${result}>`;
          }

          return {
            name: `${methodName}(${arg}): ` + '`' + result + '`',
            interface: `api.query.${sectionName}.${methodName}`,
            ...(func.documentation.length && { summary: func.documentation })
          };
        })
      };
    });

  const options = { flags: 'r', encoding: 'utf8' };
  const knownSection = JSON.parse(fs.readFileSync('docs/substrate/storage-known-section.json', options));

  return renderPage({
    title: 'Storage',
    description: DESC_STORAGE,
    sections: moduleSections.concat([knownSection])
  });
}

/** @internal */
function addExtrinsics (metadata: MetadataLatest): string {
  return renderPage({
    title: 'Extrinsics',
    description: DESC_EXTRINSICS,
    sections: metadata.modules.map((i): ModuleMetadataLatest => i).sort(sortByName).filter(meta => !meta.calls.isNone && meta.calls.unwrap().length).map(meta => {
      const sectionName = stringCamelCase(meta.name.toString());

      return {
        name: sectionName,
        items: meta.calls.unwrap().sort(sortByName).map(func => {
          const methodName = stringCamelCase(func.name.toString());
          const args = Call.filterOrigin(func).map(({ name, type }): string => `${name}: ` + '`' + type + '`').join(', ');

          return {
            name: `${methodName}(${args})`,
            interface: `api.tx.${sectionName}.${methodName}`,
            ...(func.documentation.length && { summary: func.documentation })
          };
        })
      };
    })
  });
}

/** @internal */
function addEvents (metadata: MetadataLatest): string {
  return renderPage({
    title: 'Events',
    description: DESC_EVENTS,
    sections: metadata.modules.sort(sortByName).filter(meta => !meta.events.isNone && meta.events.unwrap().length).map(meta => {
      const sectionName = stringCamelCase(meta.name.toString());

      return {
        name: sectionName,
        items: meta.events.unwrap().sort(sortByName).map(func => {
          const methodName = func.name.toString();
          const args = func.args.map((type): string => '`' + type + '`').join(', ');

          return {
            name: `${methodName}(${args})`,
            ...(func.documentation.length && { summary: func.documentation })
          };
        })
      };
    })
  });
}

/** @internal */
function addErrors (metadata: MetadataLatest): string {
  return renderPage({
    title: 'Errors',
    description: DESC_ERRORS,
    sections: metadata.modules.sort(sortByName).filter(moduleMetadata => !moduleMetadata.errors.isEmpty).map(moduleMetadata => {
      const sectionName = stringLowerFirst(moduleMetadata.name.toString());

      return {
        name: sectionName,
        items: moduleMetadata.errors.sort(sortByName).map(error => {
          return {
            name: error.name.toString(),
            ...(error.documentation.length && { summary: error.documentation })
          };
        })
      };
    })
  });
}

/** @internal */
function writeFile (name: string, ...chunks: any[]): void {
  const options = { flags: 'w', encoding: 'utf8' };
  const writeStream = fs.createWriteStream(name, options);

  writeStream.on('finish', (): void => {
    console.log(`Completed writing ${name}`);
  });

  chunks.forEach((chunk): void => {
    writeStream.write(chunk);
  });

  writeStream.end();
}

/** @internal */
function writeToRpcMd (): void {
  writeFile('docs/substrate/rpc.md', addRpc());
}

/** @internal */
function writeToConstantsMd (metadata: MetadataLatest): void {
  writeFile('docs/substrate/constants.md', addConstants(metadata));
}

/** @internal */
function writeToStorageMd (metadata: MetadataLatest): void {
  writeFile('docs/substrate/storage.md', addStorage(metadata));
}

/** @internal */
function writeToExtrinsicsMd (metadata: MetadataLatest): void {
  writeFile('docs/substrate/extrinsics.md', addExtrinsics(metadata));
}

/** @internal */
function writeToEventsMd (metadata: MetadataLatest): void {
  writeFile('docs/substrate/events.md', addEvents(metadata));
}

/** @internal */
function writeToErrorsMd (metadata: MetadataLatest): void {
  writeFile('docs/substrate/errors.md', addErrors(metadata));
}

const registry = new TypeRegistry();
const decorated = new Decorated(registry, rpcdata);
const latest = decorated.metadata.asLatest;

writeToRpcMd();
writeToConstantsMd(latest);
writeToStorageMd(latest);
writeToExtrinsicsMd(latest);
writeToEventsMd(latest);
writeToErrorsMd(latest);
