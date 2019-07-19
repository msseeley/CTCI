/*
  PROMPT:
    A magic index in an array [0...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers,write a method to find a magic index, if one exists, in array A.

    FOLLOW UP:
    what if the values are not distinct?
*/

//binary search w/pointers
function magicIdx(arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    const val = arr[mid];
    if (val === mid) return mid;
    if (val > mid) {
      right = mid - 1;
    }
    if (val < mid) {
      left = mid + 1
    }
    mid = Math.floor((left + right) / 2)
  }
  return null;
}
