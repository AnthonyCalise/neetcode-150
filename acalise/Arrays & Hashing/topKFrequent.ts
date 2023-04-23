// O(n log n)
function topKFrequent(nums: number[], k: number): number[] {
  let countMap: { [key in number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    countMap[nums[i]] = countMap[nums[i]] ? countMap[nums[i]] + 1 : 1;
  }
  let numCounts: number[][] = [];
  for (const key in countMap) {
    numCounts.push([parseInt(key), countMap[key]]);
  }
  numCounts.sort((a, b) => b[1] - a[1]);
  const results = numCounts.map((numArr) => {
    return numArr[0];
  });
  return results.slice(0, k);
}
