"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatten = void 0;
function flatten(flatArray) {
    const unflatArray = [];
    for (let i = 0; i < flatArray.length; i++) {
        const path = flatArray[i].split('.');
        let current = unflatArray;
        for (let j = 0; j < path.length; j++) {
            if (j === path.length - 1) {
                current[path[j]] = flatArray[i];
            }
            else {
                if (!current[path[j]]) {
                    current[path[j]] = [];
                }
                current = current[path[j]];
            }
        }
    }
    return unflatArray;
}
exports.flatten = flatten;
console.log(flatten(['a.b.c', 'a.b.d', 'a.e.f', 'a.e.g', 'h.i.j']));
