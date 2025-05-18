function reversed_digit_array(num) {
  return num.toString().split("").reverse().map(Number);
}
console.log(reversed_digit_array(123456));
