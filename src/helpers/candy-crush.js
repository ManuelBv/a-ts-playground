// @ts-nocheck (or nocheck)

var textArray = 'abbffffbaaac'.split('');

var currentLetter = textArray[0];
var i = 0;

const removeDuplicates = (index) => {
  for (j = index; j < textArray.length; j++) {
    if (textArray[j] === currentLetter) {
      textArray[j] = '';
      if (j === textArray.length - 1) {
        textArray = textArray.join('').split('');
      }
    } else {
      currentLetter = textArray[j];
      textArray = textArray.join('').split('');
      return;
    }
  }
}

while (i < textArray.length) {
  if (textArray[i + 1] === currentLetter && textArray[i + 2] === currentLetter) {
    removeDuplicates(i);
    if (i === 0 || i === 1) {
      i = 0;
    } else {
      i -= 2;
    }
    continue;
  }
  i++;
  currentLetter = textArray[i];
}

console.clear();
console.log('Final', textArray.join(''));





// ----------- result below ------

// console.clear();
// console.log('booo');
