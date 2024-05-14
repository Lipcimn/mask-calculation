interface ISystem {
  returnBit: (valor: number, bitPosition: number) => number;
  maskResult: (
    maskDesligada: number,
    maskLigada: number
  ) => [number, number, string, string];
}

class System implements ISystem {
  returnBit = (valor: number, bitPosition: number): number => {
    const mask: number = 1 << bitPosition;
    return (valor & mask) !== 0 ? 1 : 0;
  };
  maskResult = (
    sIn: number,
    sOut: number
  ): [number, number, string, string] => {
    let maskOff: number = 0;
    let maskOn: number = 0;
    const bits_sIn: number[] = [
      this.returnBit(sIn, 7),
      this.returnBit(sIn, 6),
      this.returnBit(sIn, 5),
      this.returnBit(sIn, 4),
      this.returnBit(sIn, 3),
      this.returnBit(sIn, 2),
      this.returnBit(sIn, 1),
      this.returnBit(sIn, 0),
    ];
    const bits_sOut: number[] = [
      this.returnBit(sOut, 7),
      this.returnBit(sOut, 6),
      this.returnBit(sOut, 5),
      this.returnBit(sOut, 4),
      this.returnBit(sOut, 3),
      this.returnBit(sOut, 2),
      this.returnBit(sOut, 1),
      this.returnBit(sOut, 0),
    ];
    for (let i = 0; i <= 7; i++) {
      maskOff += bits_sIn[i] === 1 && bits_sOut[i] === 0 ? 0 : 2 ** (7 - i);
      maskOn += bits_sIn[i] === 0 && bits_sOut[i] === 1 ? 2 ** (7 - i) : 0;
    }
    return [
      Number(maskOff.toString(2)),
      Number(maskOn.toString(2)),
      maskOff.toString(16),
      maskOn.toString(16),
    ];
  };
}
const system = new System();
console.log(system.maskResult(0b11001111, 0b00111111));
