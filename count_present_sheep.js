function count_present_sheep(sheeps) {
  // let count = 0;
  // if (!sheeps) return count;
  // for (let i = 0; i < sheeps.length; i++) {
  //   if (sheeps[i]) ++count;
  // }
  // return count;

  return sheeps.filter((x) => x).length;
}

console.log(count_present_sheep([false, true, true, true, false]));
