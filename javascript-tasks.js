//******************  First Task ************************

function sum(min, max) {
  let result = 0;
  if (max < min) {
    return "Invalid Input";
  }
  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
}

console.log(sum(9, 10));

// ***************** Second Task *************************

function occurence(str) {
  let arr = [];
  let result = {};
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  arr.forEach((el) => {
    result[el] = result[el] ? result[el] + 1 : 1;
  });
  return result;
}
console.log(occurence("samer"));
