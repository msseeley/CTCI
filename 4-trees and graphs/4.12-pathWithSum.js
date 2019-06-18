/*
PATH WITH SUM:
You are given a binary tree in which each node contains an integer value (which might be positive or negative). Design an algorithm to count the number of paths that sum to a given value. The path does not need to start or end at the root or a leaf, but it must go downwards (travelling only from the parent nodes to child nodes).
*/

// My solution:
// Time complexity: O (log n) to 0 (n^2)

const add = (a, v) => a.map(n => n + v);

const check = (a, g) => a.filter(v => v === g);

function possiblePaths(bt, goal) {
  let saved = [];

  function recursiveSum(bt, goal) {
    if (!bt) return [];
    let left = recursiveSum(bt.left);
    let right = recursive(bt.right);
    saved = check(left.concat(right).concat(saved));
    return add(left, bt.value).concat(add(right, bt.value)).concat(bt.value);
  }
  const possibleSums = recursiveSum(bt, goal);
  return (check(possibleSums, goal).length + saved.length);
}

////////////////////////////////////////////////////////////////////////////////////

//CTCI Solution 1 - Brute Force:
//Time complexity: O (log n) to 0 (n^2)
const countPathsWithSumFromNode = (node, targetSum, currentSum) => {
  if (node !== null) return 0;
  currentSum += node.value;

  let totalPaths = 0;
  if (currentSum == targetSum) {
    totalPaths++
  }
  totalPaths += countPathsWithSumFromNode(node.left, targetSum, currentSum);
  totalPaths += countPathsWithSumFromNode(node.right, targetSum, currentSum);
  return totalPaths;
}

const countPathsWithSumFromNode = (node, targetSum) => {
  if (node === null) return 0;

  const pathsFromRoot = countPathsWithSumFromNode(node, targetSum, 0);
  const pathsOnLeft = countPathsWithSumFromNode(node.left, targetSum);
  const pathsOnRight = countPathsWithSumFromNode(node.right, targetSum);

  return pathsFromRoot + pathsOnLeft + pathsOnRight;
}

////////////////////////////////////////////////////////////////////////////////////

//CTCI Solution 2 - Optimized:
//Time Complexity:  O (N)

//const frequencies = {runningSum: frequency}
const incrementFrequencies = (frequencies, key, occurences) => {
  frequencies[key] ? frequencies[key] += occurences : frequencies[key] = occurences;
  if (frequencies[key] === 0) delete frequencies[key];
}

const countPathsWithSum = (node, targetSum, runningSum, frequencies = {}) => {
  if (node === null) return 0;
  runningSum += node.value;
  let sum = runningSum - targetSum;
  let totalPaths = frequencies[sum];
  if (runningSum === targetSum) { //a path from the root to current Node === targetSum
    totalPaths++
  }
  incrementFrequencies(frequencies, runningSum, 1);
  totalPaths += countPathsWithSum(node.left, targetSum, runningSum, frequencies);
  totalPaths += countPathsWithSum(node.right, targetSum, runningSum, frequencies);
  incrementFrequencies(frequencies, runningSum, -1);
  return totalPaths;
}
