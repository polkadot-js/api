
export default class SingleAccountSigner{
  constructor(keyringPair){
    this.keyringPair = keyringPair;
  }

  async sign(extrinsic, address, opt) {
    if(!this.keyringPair || String(address) !== this.keyringPair.address()){
      throw new Error('does not have the keyringPair');
    }
    extrinsic.sign(this.keyringPair, opt);
  }
}
