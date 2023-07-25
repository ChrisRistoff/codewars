const dnaPairs = (dnaString) => {
  const dnaArray = dnaString.toUpperCase().split('');
  const dnaPairs = [];

  dnaArray.forEach((dna) => {
    if (dna === "G") {
      dna += "C";
      dnaPairs.push(dna);

    } else if (dna=== "C") {
      dna += "G";
      dnaPairs.push(dna);

    } else if (dna === "T") {
      dna += "A";
      dnaPairs.push(dna);

    } else if (dna === "A") {
      dna += "T";
      dnaPairs.push(dna);
    }

  });

  return dnaPairs;
};

console.log(dnaPairs("GCG"));
console.log(dnaPairs("TAACG"));
console.log(dnaPairs("gtca"));
