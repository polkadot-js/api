// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const fs = require('fs');

import Metadata from '../Metadata';
import rpcdata from '../Metadata/static';

function metadataStringifyAsJson () {
  const decoded = new Metadata(rpcdata);

  return JSON.stringify(decoded.toJSON(), null, 2);
}

function writeToJson () {
  const options = { encoding: 'ascii' };
  const writeStream = fs.createWriteStream('packages/types/src/Metadata.decoded.json', options);

  writeStream.write(metadataStringifyAsJson());

  writeStream.on('finish', () => {
    console.log('wrote all decoded metadata to JSON file');
  });

  writeStream.end('\n');
}

writeToJson();
