'use strict';

//1. Создайте функцию, которая принимает неограниченное количество входящих данных, и возвращает количество строк, переданных ей в этом массиве. Решить с использованием стрелочных функций.

const numAndStr = (...numN) => numN.filter((number) => typeof number === 'string').length;
console.log(numAndStr('2', '6' , 59, '38' ,'4', 89));

//2. Создайте функцию продвинутого калькулятора. Он принимает знак, а  затем неограниченное количество чисел, над которыми проведет указанную операцию. 

const calc = function(sing, ...numbers) {
  switch(sing) {
    case '+': {
      return numbers.reduce((num1, num2) => num1 + num2);
    }
    case '-': {
      return numbers.reduce((num1, num2) => num1 - num2);
    }
    case '*': {
      return numbers.reduce((num1, num2) => num1 * num2);
    }
    case '/': {
      return numbers.reduce((num1, num2) => num1 / num2);
    }
    default: return NaN;
  }
}
console.log(calc('+', 3, 5, ));

//3. Имея массив чисел, найдите в нем самое большое. Не используйте циклы или методы перебора массива.

const arrow = [1, 58, 14, 35,];
Math.max(...arrow);