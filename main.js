const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

const getCharCount = (char, str) => {
  let acc = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      acc++
    }
  }
  return acc;
}

function getRow(firstRow, secondRow) {
  const char = prompt('Введите букву', 'а');
  let firstRes = getCharCount(char, firstRow);
  let secondRes = getCharCount(char, secondRow);
  let res;

  if (firstRes > secondRes) {
    res = firstRow;
  } else if (secondRes === secondRes) {
    res = 'Строки равны: ' + char;
  } else {
    res = secondRow;
  }

  alert(res);
};

console.log(getRow(firstRow, secondRow));