function sum_without_highest_and_lowest_value(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == Math.min(...nums) || nums[i] == Math.max(...nums)) {
      continue;
    }
    sum += nums[i];
  }
  return sum;
}

console.log(sum_without_highest_and_lowest_value([-15, 1, 2, 8]));
