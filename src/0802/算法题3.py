function flatArr(list) {
  if (list.constructor !== Array) {
    return []
  }
  let arr = []
  list.forEach(item => {
    if (item && typeof item === 'object') {
      arr.push(...flatArr(item))  // 或者 arr = arr.concat(flatArr(item)) 或者 arr = [...arr, ...flatArr(item)]
    } else {
      arr.push(item)
    }
  })
  return arr
}
const arr = [[1,2,2],[3,4,5,5],[6,7,8,9,[11,12,[12,13,[14]]]],10] 

let newArr = flatArr(arr)

resultArr = sorted(newArr)
console.log(resultArr）
