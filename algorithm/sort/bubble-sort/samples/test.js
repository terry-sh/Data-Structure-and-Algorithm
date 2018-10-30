var bubbleSort = require("./v1.js");

function isGreater(i, j) {
    if (i > j) {
        return true;
    } else {
        return false;
    }
}

// test:
const list = [1, 4, 2, 9, 0, 10, 4, 8, -4, 9];
bubbleSort(list, isGreater);
console.log(list);
