// Import the API
const { ApiPromise } = require('@polkadot/api');

async function main () {
  // Create our API with a default connection to the local node
  const api = await ApiPromise.create();

  api.query.system.events((events) => {
    console.log(`\nReceived ${events.length} events:`);

    events.forEach((record) => {
      const event = record.event;
      const types = event.typeDef;

      console.log(`\t${event.section}:${event.method}:: (phase=${record.phase.toString()})`);
      console.log(`\t\t${event.meta.documentation.toString()}`);

      event.data.toArray().forEach((data, index) => {
        console.log(`\t\t\t${types[index].type}: ${data.toString()}`);
      });
    });
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(-1);
});
