function findEvenNumber(num) {
  let result = [];
  for (let i in num) {
    if (num[i] % 2 === 0) {
      result.push(num[i]);
    }
  }
  return result;
}
