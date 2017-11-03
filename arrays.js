var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, value){
  arr = [value, ...arr]
  return arr
}

function destructivelyAddElementToBeginningOfArray(arr, value){
  arr.unshift(value)
  return arr
}
