/*
PROMPT:
  A child is running up a staircase with n steps and can hop either 1 step, 2 step, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.
*/

/*
My Solution
Time Complexity: O (3^n)

*/

function tripleStepRecursive(stairs) {
  let count = 0;
  for (let steps = 1; steps < 4; steps++) { //for-loop represents the number of possible hopped steps (1,2,3)
    let diff = stairs - steps; // diff represents the number of steps left after a hop
    if (diff === 0) return count + 1; //the hops have successfully climbed the stairs - possible way of moving up
    if (diff < 0) return count; //exceeded the number of stairs - not a possible way of moving up
    count += tripleStepRecursive(diff); //if there's left over path is incomplete and still might be possible -- recurse to calculate
  }
  return count; //return the final count after the loop has completely gone throug heach possibility
}


//Memoized Time commlexity: O (n)

function tripleStepMemoized(stairs, successful = {}) {
  if (successful[stairs]) return successful[stairs];//if count has already been memoized return that count
  for (let steps = 1; steps < 4; steps++) { //for-loop represents the number of possible hopped steps (1,2,3)
    let diff = stairs - steps; // diff represents the number of steps left after a hop
    if (diff === 0) successful[diff] += 1; //memoizes successful interval with the proper count
    if (diff < 0) return; // if we exceed the steps and the counter is going up we don't want to preserve the count or keep going with this itteration? Maybe we just want to return?
    successful[stairs] += tripleStepRecursiveMemoized(diff, successful);
  }
  return successful[stairs];
}



//Iterative
function tripleStepIterative(stairs) {

}


/*
CTCI Solution Brute Force:
Time Complexity: O (3^n)
*/

function countWays(n) {
  if (n < 0) return 0; //returns nothing if the steps have been exceeded, which results in a negative
  else if (n === 0) return 1; // returns 1 if the steps have been completed exactly, which results in 0
  else {
    return countWays(n - 1) + countWays(n - 2) + countWays(n - 3) // recursively calls each step possibility and aggregates the counts for each
  }
}

/*
CTCI Solution Memoized Solution:
Time Complexity: O (n)
*/

function countWays(n, memo = {}) {
  if (n < 0) return 0; //returns nothing if the steps have been exceeded, which results in a negative
  else if (n === 0) { // returns 1 if the steps have been completed exactly, which results in 0
    return 1;
  }
  else if (memo[n]) return memo[n]; //returns memoized value if there is one
  else {
    memo[n] = countWays(n - 1, memo) + countWays(n - 2, memo) + countWays(n - 3, memo); //inputs memoized values as sum of recursive call counts (or memoized return)
    return memo[n]; //returns memo value for the number of stairs
  }
}
