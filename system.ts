interface ISystem {
  returnBits: (valor: number) => number[];
  maskResult: (sIn: number, sOut: number) => [string, string, string, string];
}

class System implements ISystem {
  returnBits = (value: number): number[] => {
    const bitsString: string = value.toString(2).padStart(8, "0");
    const bitsArray: number[] = [...bitsString].map(Number);
    return bitsArray;
  };
  maskResult = (
    sIn: number,
    sOut: number
  ): [string, string, string, string] => {
    let maskOff: number = 0;
    let maskOn: number = 0;
    const bits_sIn: number[] = this.returnBits(sIn);
    const bits_sOut: number[] = this.returnBits(sOut);
    for (let i = 0; i <= 7; i++) {
      maskOff += bits_sIn[i] === 1 && bits_sOut[i] === 0 ? 0 : 2 ** (7 - i);
      maskOn += bits_sIn[i] === 0 && bits_sOut[i] === 1 ? 2 ** (7 - i) : 0;
    }
    return [
      maskOff.toString(2).padStart(8, "0"),
      maskOn.toString(2).padStart(8, "0"),
      maskOff.toString(16),
      maskOn.toString(16),
    ];
  };
}
const system = new System();
console.log(system.maskResult(0b11001111, 0b00111111));
