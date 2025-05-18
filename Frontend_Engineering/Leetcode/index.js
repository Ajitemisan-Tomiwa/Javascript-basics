// two some calculation
var twoSum = function (nums, target) {
  //    create an object to store numbers and their corresponding indices
  let numToIndexMap = {};
  console.log(numToIndexMap);

  // loop through the arrays

  for (let i = 0; i < nums.length; i++) {
    // storing the index/indices of each element in the array
    numToIndexMap[nums[i]] = i;
    console.log(i);
    console.log(nums[i]);

    console.log([(numToIndexMap[nums[i]] = i)]);
    console.log(numToIndexMap);
    console.log(numToIndexMap[nums[i]]);

    console.log([numToIndexMap[nums[i]]]);
  }

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    console.log(current);

    //calculate the difference bwteeen the target and the current number
    let diff = target - current;
    console.log(diff);

    console.log(numToIndexMap[diff]);

    if (numToIndexMap.hasOwnProperty(diff)) {
      console.log(i, numToIndexMap[diff]);
      return [i, numToIndexMap[diff]];
    }

    // If it doesn't exist, add the current number and its index to the object
    numToIndexMap[nums[i]] = i;
  }

  // if the 2 numbers add up to the target
  return [];
};

twoSum([2, 7, 11, 15], 9);
