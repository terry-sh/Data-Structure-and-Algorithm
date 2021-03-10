
function bubbleSort(list, compare) {
    let size = list.length;
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size - i; j++) {
            if (!compare(list[j - 1], list[j])) {
                let temp = list[j - 1];
                list[j - 1] = list[j];
                list[j] = temp;
            }
        }
    }
    size = size - 1;
}

module.exports = bubbleSort;
