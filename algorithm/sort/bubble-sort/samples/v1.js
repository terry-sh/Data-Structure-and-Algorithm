
function swap(list, i, j) {
    let temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

function bubbleSort(list, compare) {
    let size = list.length;
    let swapped = true;
    do {
        swapped = false;
        for (let i = 1; i <= size - 1; i++) {
            if (!compare(list[i - 1], list[i])) {
                swap(list, i - 1, i);
                swapped = true;
            }
        }
        // size = size - 1;
    } while (swapped);
}

