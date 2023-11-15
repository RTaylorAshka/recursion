/** product: calculate the product of an array of numbers. */

function product(nums, idx = nums.length) {
  return idx <= 0 ? 1 : (nums[idx - 1] * product(nums, (idx - 1)))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, max = 0) {
  if (idx == words.length) { return max }
  if (words[idx].length > max) { max = words[idx].length }
  return longest(words, idx + 1, max)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, returnStr = '') {
  if (idx >= str.length) { return returnStr }
  returnStr += str[idx]
  return everyOther(str, idx + 2, returnStr)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, lidx = 0, ridx = (str.length - 1)) {
  if (lidx >= ridx) { return true }
  if (str[lidx] !== str[ridx]) { return false }
  return isPalindrome(str, lidx + 1, ridx - 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx == arr.length) { return -1 }
  return (arr[idx] === val) ? idx : findIndex(arr, val, idx + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = (str.length - 1), returnStr = '') {
  if (idx < 0) { return returnStr }
  returnStr += str[idx]
  return revString(str, idx - 1, returnStr)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strings = []) {
  for (let key in obj) {
    if (typeof obj[key] == 'string') { strings.push(obj[key]) }
    if (typeof obj[key] == 'object') { strings = gatherStrings(obj[key], strings) }
  }
  return strings
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, lidx = 0, ridx = (arr.length - 1)) {
  let midx = Math.floor((lidx + ridx) / 2)
  if (lidx > ridx) { return -1 }

  if (arr[midx] > val) { return binarySearch(arr, val, lidx, midx - 1) }
  if (arr[midx] < val) { return binarySearch(arr, val, midx + 1, ridx) }

  return midx
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
