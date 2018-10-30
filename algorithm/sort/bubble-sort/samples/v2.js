
function swap(list, i, j) {
    let temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

function bubbleSort(list, compare) {
    let n = list.length;
    let newn;
    do {
        newn = 0
        for (let i = 1; i <= n - 1; i++) {
            if (!compare(list[i - 1], list[i])) {
                swap(list, i - 1, i);
                newn = i;
            }
        }
        n = newn
    } while (n > 1);
}
