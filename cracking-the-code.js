'use strict';

function decode(sentence) {
  let words = sentence.split(' ');
  // console.log(`Words: ${words}`);
  let decodedWord = '';
  for (let i=0; i<words.length; i++) {
    let word = words[i];
    // console.log(`Word: ${word}`);
    let firstLetter = word.charAt(0);
    // console.log(`First char ${firstLetter}`);

    let charcterNumber = 0;
    switch(firstLetter) {
    case 'a' :
      charcterNumber = word.charAt(1);
      break;
    case 'b' :
      charcterNumber = word.charAt(2);
      break;
    case 'c' :
      charcterNumber = word.charAt(3);
      break;
    case 'd' :
      charcterNumber = word.charAt(4);
      break;
    default : 
      charcterNumber = ' ';
      break;
    }
    // console.log(charcterNumber);
    decodedWord += charcterNumber;
  }
  console.log(decodedWord);
  return decodedWord;
}

decode('craft block argon meter bells brown croon droop');