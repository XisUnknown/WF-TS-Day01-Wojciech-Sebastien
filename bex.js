var xs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var table = [[], [], [], [], [], [], [], [], [], []];
xs.forEach(function (n) { return xs.forEach(function (m) { return table[n - 1][m - 1] = n * m; }); });
console.log(table);
document.write("<table>");
for (var _i = 0, table_1 = table; _i < table_1.length; _i++) {
    var row = table_1[_i];
    document.write("<tr>");
    row.forEach(function (val) { return document.write("<td>" + val + "</td>"); });
    document.write("</tr>");
}
document.write("</table>");
