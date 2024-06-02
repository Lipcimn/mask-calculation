import System from "./system";
import prompt from "prompt-sync";

const system = new System();
const promptSync = prompt();

const sIn = promptSync("Enter the sIn value: ");
const sOut = promptSync("Enter the sOut value: ");

const result = system.maskResult(Number(`0b${sIn}`), Number(`0b${sOut}`));
console.log(result);
