function showthetext() {
    let list2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let list1: Array<number> = [1, 3, 5, 7, 11, 13, 17, 19, 23, 27]

    for (var value1 in list1) {
        for (var value2 of list2) {
            console.log(list1[value1] * value2);
        }
    }
}