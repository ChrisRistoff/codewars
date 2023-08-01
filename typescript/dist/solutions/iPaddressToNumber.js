"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numToIp = exports.ipToNum = void 0;
function ipToNum(ip) {
    const numbers = ip.split(".");
    let binary = "";
    const binaryArray = [128, 64, 32, 16, 8, 4, 2, 1];
    for (let i = 0; i < numbers.length; i++) {
        let num = parseInt(numbers[i]);
        for (let j = 0; j < binaryArray.length; j++) {
            if (num >= binaryArray[j]) {
                binary += "1";
                num -= binaryArray[j];
            }
            else {
                binary += "0";
            }
        }
    }
    return parseInt(binary, 2);
}
exports.ipToNum = ipToNum;
function decimalToBinary(x) {
    let binary = "";
    while (x > 0) {
        binary = (x % 2) + binary;
        x = Math.floor(x / 2);
    }
    return binary;
}
function padStart(value, length, padChar) {
    const str = String(value);
    if (str.length >= length) {
        return str;
    }
    else {
        const padding = Array(length - str.length + 1).join(padChar);
        return padding + str;
    }
}
function numToIp(x) {
    const binary = decimalToBinary(x);
    const binaryArray = binary.split("");
    // Pad the binary string with leading zeros to make it a multiple of 8 bits
    while (binaryArray.length % 8 !== 0) {
        binaryArray.unshift("0");
    }
    const binaryArrayLength = binaryArray.length;
    let ip = "";
    for (let i = 0; i < binaryArrayLength; i += 8) {
        let binarySlice = binaryArray.slice(i, i + 8);
        let binarySliceLength = binarySlice.length;
        let num = 0;
        for (let j = 0; j < binarySliceLength; j++) {
            if (binarySlice[j] === "1") {
                num += Math.pow(2, 7 - j);
            }
        }
        ip += padStart(num, 3, "0") + ".";
    }
    // Remove the extra dot at the end of the IP address
    ip = ip.slice(0, -1);
    return ip || "0.0.0.0"; // If the IP address is empty, return "0.0.0.0"
}
exports.numToIp = numToIp;
console.log(ipToNum("192.168.1.1"));
console.log(numToIp(3232235777));
console.log(numToIp(167772160));
