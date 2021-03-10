#include <vector>
#include <functional>

#include <iostream>

template<typename T>
void bubblesort(std::vector<T> &list, std::function<bool(T, T)> compare) {
    int n = list.size();
    bool swapped = true;

    do {
        swapped = false;
        for (int i = 1; i <= n - 1; i++) {
            if (!compare(list[i - 1], list[i])) {
                T temp = list[i - 1];
                list[i - 1] = list[i];
                list[i] = temp;
                swapped = true;
            }
        }
        
        n = n - 1;
    } while (swapped);

}
