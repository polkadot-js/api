
export default class SimpleSigner{
  constructor(keyringPair){
    this.keyringPair = keyringPair;
  }

  async sign(extrinsic, opt) {
    if(!this.keyringPair || String(opt.from) !== this.keyringPair.address()){
      throw new Error('does not have the keyringPair');
    }
    extrinsic.sign(this.keyringPair, opt);
  }
}
