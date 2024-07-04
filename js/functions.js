function lengthCheck (input, maxLength) {
  return input.length <= maxLength;
}
lengthCheck('проверяемая строка', 20);
lengthCheck('проверяемая строка', 18);
lengthCheck('проверяемая строка', 10);

function palyndromeCheck (input) {
  input = input.replaceAll(' ', '').toUpperCase();
  return input.split('').reverse().join('') === input;
}
palyndromeCheck ('ДовОд');
palyndromeCheck ('Кекс');
palyndromeCheck ('Лёша на полке клопа нашёл ');

function numberReturn (input) {
  input = input.toString().split('');
  let inputNumber = [];
  for (let i = 0; i < input.length; i++) {
    if(!isNaN(parseInt(input[i], 10))) {
      inputNumber[i] = input[i];
    }
  }
  inputNumber = inputNumber.join('');
  if(inputNumber.length > 0) {
    return inputNumber;
  } else {
    return NaN;
  }
}
numberReturn('2023 год');
numberReturn('ECMAScript 2022');
numberReturn('1 кефир, 0.5 батона');
numberReturn('агент 007');
numberReturn('а я томат');
numberReturn(2023);
numberReturn(-1);
numberReturn(1.5);
