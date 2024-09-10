function countSheeps(sheep) {
  let sum = 0;
  for (let i = 0; i < sheep.length; i++) {
    if (i === true) {
      sum += 1;
    } else {
      sum;
    }
  }
  return sum;
}

sheep = [true];
//console.log(countSheeps(sheep));

function digitize(n) {
  let arr = Array.from(n);
  let reverseArr = arr.reverse;
  return reverseArr;
}
n = 68797;
//console.log(digitize(n));

n = 56575;
let array1 = Array.from(String(n), Number);
let tyru = array1.reverse();
//console.log(tyru);

function makeString(s) {
  let str = s.split(' ');
  let str2 = str.map((word) => word[0]).join('');
  return str2;
}

s = 'tg jj tt jj';
console.log(makeString(s));

//let str = s.split(' ');
// console.log(str);
