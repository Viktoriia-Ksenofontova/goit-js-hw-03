const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  const arrays = Object.entries(employees);
  let bestEmployee = 0;
  let nameOfTheBestEmployee = '';

  for (const array of arrays) {
    if (array[1] > bestEmployee) {
      bestEmployee = array[1];
      nameOfTheBestEmployee = array[0];
    }
  }

  return nameOfTheBestEmployee;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
