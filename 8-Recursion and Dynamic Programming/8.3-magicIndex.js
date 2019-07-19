/*
  PROMPT:
    A magic index in an array [0...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers,write a method to find a magic index, if one exists, in array A.

    FOLLOW UP:
    what if the values are not distinct?
*/

//binary search w/pointers -- unique integers
// Time Complexity: O (log n)
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

//My solution

function magicIdxDup(arr, start = 0, end = arr.length - 1) {
  if (end < start) return null;
  let mid = Math.floor((start + end) / 2);
  let midVal = arr[mid];
  if (midVal === mid) return mid;
  if (midVal < mid) {
    return magicIdx(arr, start, midVal) || magicIdx(arr, mid + 1, end)
  }
  if (midVal > mid) {
    return magicIdx(arr, midVal, end) || magicIdx(arr, start, mid)
  }
  return null;
}

//CTCI solution : potential for duplicates
function magicIdxDuplicates(arr, start = 0, end = arr.length - 1) {
  if (end < start) return -1
  const midIdx = Math.floor((start + end) / 2);
  const midVal = arr[midIdx];

  if (midVal === midIdx) return midIdx;

  const leftIdx = Math.min(midIdx - 1, midVal);
  const left = magicIdxDuplicates(arr, start, leftIdx);
  if (left >= 0) return left

  const rightIdx = Math.max(midIdx + 1, midVal);
  const right = magicIdxDuplicates(arr, rightIdx, end);
  return right;
}
