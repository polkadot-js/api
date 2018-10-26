// Import the API and WebSockets provider
const { ApiPromise } = require('@polkadot/api');
const { WsProvider } = require('@polkadot/rpc-provider');

// Declare a known account to use (available on dev chain with funds)
const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

async function main () {
  // Initialise the provider to connect to the local node
  const provider = new WsProvider('ws://127.0.0.1:9944');

  // Create the API and wait until ready
  const api = await ApiPromise.create(provider);

  // Query the Existing Runtime Code stored on-chain
  // Use the Storage chain state (runtime) Node Interface.
  const existingRuntimeCode = await api.query.substrate.code();

  // Show the first 512-odd chars of the code
  console.log('Existing runtime code: ', existingRuntimeCode.toHex()); // Ox

  // Retrieve Alice's Free Balance to check for sufficient balance to
  // start a Referendum and obtain enough votes for obtain approval
  // to change the runtime code.
  let aliceBalance = await api.query.balances.freeBalance(Alice);
  console.log(`Balance available for Alice: ${aliceBalance}`);

  // Submit a Public Proposal to change the Runtime Code.
  // Since code is Bytes it expects Uint8Array and also
  // it needs the length prefix applied.
  // Bytes are encoded with Compact encoded length + data.
  // So [0] would set length to 0 for the empty value below.
  // Note that '0x1337' would not work.
  // Attempted arg1:
  // - new Uint8Array([0])
  // - new Uint8Array([2 << 2, 0x13, 0x37])
  //   (i.e. 2 byte length is compact encoded via the shift)
  // - new Uint8Array([4 << 2, 0xde, 0xad, 0xbe, 0xef])
  //
  const proposedNewRuntimeCode = new Uint8Array([4 << 2, 0xde, 0xad, 0xbe, 0xef]);
  const proposalToSetCode = await api.tx.consensus.setCode(proposedNewRuntimeCode);

  // Submit a Public Proposal to change the the Runtime Code
  // FIXME: Error: Method: cannot decode value ""0x2001000310deadbeef"".
  const proposalSubmitted = await api.tx.democracy.propose(proposalToSetCode, 100000);
  console.log(`Proposal submitted: ${proposalSubmitted}`);

  const [publicProposals, minimumReferendumDeposit] = Promise.all([
    api.query.democracy.publicProps(),
    api.query.democracy.minimumDeposit()
  ]);

  console.log('Current public proposals: ', publicProposals);
  console.log('Minimum deposit required to start a referendum: ', minimumReferendumDeposit.toNumber());

  // Start a Public Referendum with a vote threshold of 'Super majority approval' (index of 0)
  // FIXME: How do we provide the minimum funding to start a public referendum?
  const referendumPublicId = await api.tx.democracy.startReferendum(proposalSubmitted, 0);
  console.log(`Public Proposed Referendum with ID started: ${referendumPublicId}`);

  const [referendumCount, referendumInfo, votingPeriod] = Promise.all([
    api.query.chain.referendumCount(),
    api.query.democracy.referendumInfoOf(referendumPublicId),
    api.query.democracy.votingPeriod()
  ]);

  console.log(`Current amount of public referendums: ${referendumCount}`);
  console.log(`Info about public referendum ID ${referendumPublicId}: `, referendumInfo);
  console.log(`Voting period (frequency in blocks checking for new votes): `, votingPeriod);

  // Vote on a Referendum ID in the Proposed Public Referenda (before Voting Period expires)
  const voteYay = true;
  const votedProposedPublicReferendumHash = await api.tx.democracy.vote(referendumPublicId, voteYay);
  console.log(`Voted ${voteYay ? 'yay' : 'nay'} for Proposed Public Referendum ID ${referendumPublicId}`);

  // Wait unit the referendum becomes an Active Referendum
  const [launchPeriod, isActiveReferendum, activeReferendums] = Promise.all([
    api.query.democracy.launchPeriod(),
    api.query.democracy.isActiveReferendum(referendumPublicId),
    api.query.democracy.activeReferendums()
  ]);

  console.log(`Launch period (frequency in blocks new Proposed Public Referenda are launched active): `, launchPeriod);
  console.log(`Detected Referendum ID ${referendumPublicId} to be Active/Launched: `, isActiveReferendum);
  console.log(`Active Referendums (Launched Referenda on the Table of Referenda): `, activeReferendums);

  // Vote on the Referendum ID in the Active Referenda (before Launch Period expires)
  const votedActiveReferendumHash = await api.tx.democracy.vote(referendumPublicId, voteYay);
  console.log(`Voted ${voteYay ? 'yay' : 'nay'} for Active Referendum ID ${referendumPublicId}`);

  // View Substrate Node logs until it says 'Super majority approval' as confirmation that
  // change to runtime code was successfully approved and deployed
}

main().catch(console.error).finally(_ => process.exit());
