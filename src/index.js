
// You should implement your task here.

module.exports = function towelSort(matrix) {

  if (!matrix) {
    return []
  }

  const sort = matrix.map((el, i) => {
    if (i % 2 !== 0) {
      return el.reverse()
    } return el
  })

  const newArr = sort.flat(Infinity)

  return newArr;
}
