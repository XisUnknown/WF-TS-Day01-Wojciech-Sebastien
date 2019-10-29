const xs: number[] = [1,2,3,4,5,6,7,8,9,10]

var table: Array<Array<number>> = [[],[],[],[],[],[],[],[],[],[]]
xs.forEach(n => xs.forEach(m => table[n-1][m-1] = n * m))

console.log(table)

document.write("<table>")
for(const row of table) {
  document.write(`<tr>`)
  row.forEach(val => document.write(`<td>${val}</td>`))
  document.write(`</tr>`)
}
document.write("</table>")
