var text = 'aaaaabbcccddeee'.split('');

var current = text[0];
var i = 0;

const checkNext = (letter, index, array) => {
    for(j = index; j < array.length; j++) {
        if (text[j] === letter) {
            text[j] = '';
        } else {
            return j;
        }
    }
}

while(i < text.length) {
    if (text[i+1] === current && text[i+2] === current){
        i = checkNext(current, i, text);
        continue;
    }
    i++;
    current = text[i];
}

console.log('Final', text.join(''));