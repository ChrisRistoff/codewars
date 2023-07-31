function getCellAdresses(range) {
    const [start, end] = range.split(":");
    if (start === end) {
        return [];
    }
    const startCol = start[0];
    const startRow = Number(start.slice(1));
    const endCol = end[0];
    const endRow = Number(end.slice(1));
    const cellAddresses = [];
    for (let row = startRow; row <= endRow; row++) {
        for (let col = startCol.charCodeAt(0); col <= endCol.charCodeAt(0); col++) {
            cellAddresses.push(String.fromCharCode(col) + row);
        }
    }
    return cellAddresses;
}
console.log(getCellAdresses("A1:A10")); // ["A1", "A2", "B1", "B2"]
console.log(getCellAdresses("A1:A1")); // []
console.log(getCellAdresses("A1:Z9")); // ["A1", "A2", ..., "Z9"]
