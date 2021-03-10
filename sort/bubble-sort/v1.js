
function bubbleSort(list, compare) {
    let size = list.length;
    let swapped = true;
    do {
        swapped = false;
        for (let i = 1; i <= size - 1; i++) {
            if (!compare(list[i - 1], list[i])) {
                let temp = list[i - 1];
                list[i - 1] = list[i];
                list[i] = temp;

                swapped = true;
            }
        }
        size = size - 1;
    } while (swapped);
}

module.exports = bubbleSort;
