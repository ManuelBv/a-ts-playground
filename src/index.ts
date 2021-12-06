// fn(num) => word, int
// 5 => five
// number to word converter
// 25 => twenty five
// 50, 100, 1000

// algo
// - create a simple map for bare minimum digit -> word
// - use that to combine for complex words

// tech hint: object
// 123, string; length; 

const minimumNumberToWordMap = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
  '20': 'twenty',
  '30': 'thirty',
  '40': 'fourty',
  '50': 'fifty',
  '60': 'sixty',
  '70': 'seventy',
  '80': 'eighty',
  '90': 'ninety',
  '100': 'hundred',
};

const convertNumberToWord = (num: number): string => {
  if (!minimumNumberToWordMap[num]) {
    const newNumArray = String(num).split('');
    const returnedWord = minimumNumberToWordMap[`${newNumArray[0]}0`] + ' ' + minimumNumberToWordMap[newNumArray[1]];
    return returnedWord;
  }

  return minimumNumberToWordMap[num];
}




console.clear();
console.log('minimumNumberToWordMap', convertNumberToWord(99));
