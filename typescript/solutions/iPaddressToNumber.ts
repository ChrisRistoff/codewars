export function ipToNum(ip: string): number {
  const numbers = ip.split(".")
  let binary = ""
  const binaryArray = [128, 64, 32, 16, 8, 4, 2, 1]


  for (let i = 0; i < numbers.length; i++) {
    let num = parseInt(numbers[i])

    for (let j = 0; j < binaryArray.length; j++) {
      if (num >= binaryArray[j]) {
        binary += "1"
        num -= binaryArray[j]
      } else {
        binary += "0"
      }
    }
  }

  return parseInt(binary, 2)
}

function decimalToBinary(x: number): string {
  let binary = ""

  while (x > 0) {
    binary = (x % 2) + binary
    x = Math.floor(x / 2)
  }

  return binary
}

export function numToIp(x: number): string {
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

    ip += num + ".";
  }

  return ip.slice(0, -1);
}


console.log(ipToNum("192.168.1.1"))
console.log(numToIp(3232235777))
console.log(numToIp(167772160))
