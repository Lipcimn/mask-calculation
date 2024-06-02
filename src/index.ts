import System from "./system";
import prompt from "prompt-sync";

const system = new System();
const promptSync = prompt();

const stIn = promptSync("Enter the stIn value: ");
const stOut = promptSync("Enter the stOut value: ");

const result = system.maskResult(Number(`0b${stIn}`), Number(`0b${stOut}`));
console.log(result);
