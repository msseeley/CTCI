/*
Parens Permutations:
Implement an algorithm to print all valid (e.g. properly opened and closed combinations of n pairs of parentheses)

EXAMPLE:
Input: 3
Output: ((())), (()()), (())(), ()(()), ()()()
*/
function generatePerms(perms, openNum, closedNum, model, idx) {
  if (openNum < 0 || closedNum < openNum) return;
  if (openNum === 0 && closedNum === 0) {
    return perms.push(model);
  }
  model[idx] = '(';
  generatePerms(perms, openNum - 1, closedNum, model, idx + 1);
  model[idx] = ')';
  generatePerms(perms, openNum, closedNum - 1, model, idx + 1)
}

function parensPermutations(n) {
  const mockUp = [];
  const permutations = [];
  generatePerms(permutations, n, n, mockUp, 0)
  return permutations;
}


