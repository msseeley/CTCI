/*
  PROMPT:
  write a method that returns all subsets of a set.
  A set is a distinct, unordered (order is arbitrary) collection of things(data)
*/

//recursive

function powerSet(set) {
  const subsets = []; //holds all subsets
  generateSets(0, set, [], subsets);
  return subsets
}

function generateSets(idx, nums, current, subsets) {
  subsets.push(current);//pushes the current subset, which is initially an empty array
  for (let i = idx; i < nums.length; i++) { // loops through the nums (initially the set that is given)
    current.push(nums[i]) // adding to current subset starting at the given index
    generateSets(i + 1, nums, current, subsets) // iterates to the next index
    current.pop()
  }
}

///iterative

function generatePowerSet(array) {
  const subsets = [[]]; //initializing empty array, bc that will always be part of the subsets
  let subsetLength = subsets.length
  for (let e of array) { //go through each element of the array
    for (let i = 0; i < subsetLength; i++) { //we iterate through the current subsets we have accumulated
      const currentSubset = subsets[i];
      subsets.push(currentSubset.concat(e)); // add to each subset, the concatenated element, and add that to the accumulated subsets
    }
  }
  return subsets;
}

// ^ as we loop over the array of values given to us, for each value we then loop over our subset array.
// the subset array values are then added to
// what we add is a modified version of the subsets value (subsetValue + the value of the array)
