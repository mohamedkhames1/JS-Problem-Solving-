function sum(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      sum += nums[i];
    }
  }
  return sum;
}

console.log(sum([1, -1, 4, -8, 5]));
