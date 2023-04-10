// O(n^2)
function containsDuplicate(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) return true;
    }
  }
  return false;
}

// O(n)
function containsDuplicate2(nums: number[]): boolean {
  let numMap = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!numMap[num]) {
      numMap[num] = true;
    } else {
      return true;
    }
  }
  return false;
}

// O(n)
function containsDuplicate3(nums: number[]): boolean {
  let uniqueNums = new Set([...nums]);
  return uniqueNums.size != nums.length;
}
