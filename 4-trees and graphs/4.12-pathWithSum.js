/*
PATH WITH SUM:
You are given a binary tree in which each node contains an integer value (which might be positive or negative). Design an algorithm to count the number of paths that sum to a given value. The path does not need to start or end at the root or a leaf, but it must go downwards (travelling only from the parent nodes to child nodes).
*/

// My solution:

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
