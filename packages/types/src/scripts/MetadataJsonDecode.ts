// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const fs = require('fs');

import Metadata from '../Metadata';
import rpcdata from '../Metadata/v0/static';

function metadataStringifyAsJson () {
  const decoded = new Metadata(rpcdata).asV0;

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
