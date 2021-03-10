
function bubbleSort(list, compare) {
    let n = list.length;
    let newn;
    do {
        newn = 0
        for (let i = 1; i <= n - 1; i++) {
            if (!compare(list[i - 1], list[i])) {
                let temp = list[i - 1];
                list[i - 1] = list[i];
                list[i] = temp;

                newn = i;
            }
        }
        n = newn
    } while (n > 1);
}

module.exports = bubbleSort;
