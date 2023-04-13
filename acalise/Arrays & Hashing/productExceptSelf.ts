// O(n)
function productExceptSelf(nums: number[]): number[] {
  const answer: number[] = [];
  let product = 1;
  let productWithout0 = 1;
  let zeroesCount = 0;
  for (let i = 0; i < nums.length; i++) {
    zeroesCount = nums[i] == 0 ? zeroesCount + 1 : zeroesCount;
    product *= nums[i];
    productWithout0 =
      nums[i] !== 0 ? productWithout0 * nums[i] : productWithout0;
  }
  for (let i = 0; i < nums.length; i++) {
    if (zeroesCount > 1) {
      answer[i] = 0;
    } else {
      answer[i] = nums[i] !== 0 ? product * (1 / nums[i]) : productWithout0;
    }
  }
  return answer;
}
