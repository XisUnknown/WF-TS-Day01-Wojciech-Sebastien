function showthetext() {
    var list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var list1 = [1, 3, 5, 7, 11, 13, 17, 19, 23, 27];
    for (var value1 in list1) {
        for (var _i = 0, list2_1 = list2; _i < list2_1.length; _i++) {
            var value2 = list2_1[_i];
            console.log(list1[value1] * value2);
        }
    }
}
