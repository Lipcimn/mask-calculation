type ReturnBits = (valor: number) => number[];
type MaskResult = (
  sIn: number,
  sOut: number
) => {
  maskOff: string;
  maskOffHex: string;
  maskOn: string;
  maskOnHex: string;
};

class System {
  returnBits: ReturnBits = (value: number) => {
    const bitsString: string = value.toString(2).padStart(8, "0");
    const bitsArray: number[] = [...bitsString].map(Number);
    return bitsArray;
  };
  maskResult: MaskResult = (sIn: number, sOut: number) => {
    let maskOff: number = 0;
    let maskOn: number = 0;
    const bits_sIn: number[] = this.returnBits(sIn);
    const bits_sOut: number[] = this.returnBits(sOut);
    for (let i = 0; i <= 7; i++) {
      maskOff += bits_sIn[i] === 1 && bits_sOut[i] === 0 ? 0 : 2 ** (7 - i);
      maskOn += bits_sIn[i] === 0 && bits_sOut[i] === 1 ? 2 ** (7 - i) : 0;
    }
    return {
      maskOff: maskOff.toString(2).padStart(8, "0"),
      maskOffHex: `0x${maskOff.toString(16)}`,
      maskOn: maskOn.toString(2).padStart(8, "0"),
      maskOnHex: `Ox${maskOn.toString(16)}`,
    };
  };
}

export default System;
