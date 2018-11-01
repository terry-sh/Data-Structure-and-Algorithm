#include <iostream>
#include "v1.h"

int main(int argc, char **args) {

    std::vector<int> list = {3, 9, -1, 1, 4, 2, 0, 5, -2, 6, 8, 7};
    std::function<bool(int, int)> isGreater = [] (int a, int b) {
        return a > b;
    };

    bubblesort(list, isGreater);

    for (auto &i: list) {
        std::cout << i << " ";
    }
    std::cout << std::endl;

    return 0;
}
