// no 1
const reverseString = (data) => {
  let reverseData = data
    .split(" ")
    .map((value) => value.split("").reverse().join(""));
  return reverseData.join(" ");
};

console.log(reverseString("NEGIE1"));

console.log("=============================");

// no 2
const searchLength = (value) => {
  let sentence = value;
  sentence = sentence.split(" ");
  sentence = sentence.sort((a, b) => b.length - a.length);

  return sentence[0];
};

console.log(searchLength("Saya sangat senang mengerjakan soal algoritma"));

console.log("=============================");

// no 3
const arrayCheckQty = (arr1, arr2) => {
  let INPUT = arr1;
  let QUERY = arr2;
  let result = [];

  QUERY.map((query) => {
    let buffer = [];
    INPUT.map((input) => {
      if (query === input) {
        buffer.push(query);
      }
    });
    result.push(buffer.length);
  });

  return result;
};

const array1 = ["xc", "dz", "bbb", "dz"];
const array2 = ["bbb", "ac", "dz"];

console.log(arrayCheckQty(array1, array2));

console.log("=============================");

// no 4
const arrayMatrixMin = (arr1, arr2, arr3) => {
  let data = [];
  data = [...data, arr1, arr2, arr3];

  let buffer1 = 0;
  let buffer2 = 0;
  let result = 0;

  for (let i = 0; i < data.length; i++) {
    for (let y = 0; y < data[i].length; y++) {
      if (i == y) {
        buffer1 += data[i][y];
      }

      if (i + y === data[i].length - 1) {
        buffer2 += data[i][y];
      }
    }
  }

  result = buffer1 - buffer2;

  return result;
};

const arr1 = [1, 2, 0];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

console.log(arrayMatrixMin(arr1, arr2, arr3));
