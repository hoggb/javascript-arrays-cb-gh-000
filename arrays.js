var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, value){
  arr = [value, ...arr]
  return arr
}

function destructivelyAddElementToBeginningOfArray(arr, value){
  arr.unshift(value)
  return arr
}

function addElementToEndOfArray(arr, value){
  arr = [...arr, value]
  return arr
}

function destructivelyAddElementToEndOfArray(arr, value){
  arr.push(value)
  return arr
}

function accessElementInArray(arr, index){
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
}
