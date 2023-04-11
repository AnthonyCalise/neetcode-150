// O(n^2)
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) return [i, j];
    }
  }
  return [];
}

// O(n)
function twoSum2(nums: number[], target: number): number[] {
  let values = {};
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let matchingIndex = values[target - currentNum];
    if (matchingIndex !== undefined) {
      return [i, matchingIndex];
    }
    values[currentNum] = i;
  }
  return [];
}
