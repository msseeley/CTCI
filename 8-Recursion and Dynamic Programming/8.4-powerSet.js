/*
  PROMPT:
  write a method that returns all subsets of a set.
  A set is a distinct, unordered (order is arbitrary) collection of things(data)
*/

//recursive

function powerSet(set) {
  const subsets = [];
  generateSets(0, set, [], subsets);
  return subsets
}

function generateSets(idx, nums, current, subsets) {
  subsets.push(current);
  for (let i = idx; i < nums.length; i++) {
    current.push(nums[i]) // adding to current subset
    generateSets(i + 1, nums, current, subsets)
    current.pop()
  }
}

///iterative

function generatePowerSet(array) {
  var subsets = [[]]; //initializing empty array, bc that will always be part of the subsets
  for (let e of array) { //go through each element of the array
    for (let i = 0; i < subsets.length; i++) { //we iterate through the current subsets we have accumulated
      const currentSubset = subsets[i];
      subsets.push(currentSubset.concat(e)) // add to each subset, the concatenated element, and add that to the accumulated subsets
    }
  }
  return subsets
}
