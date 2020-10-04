'use strict'
    let word;
    let i = 0;
    while (i<10) {
        word = prompt('Enter your word');
        if(word.length === 0 || word.trim() === ''){
            alert('Invalid value');
            continue;
        }
        if(word.length % 2 === 0){ 
            let firstMiddleIndex = word.length/2 - 1;
            let secondMiddleIndex = firstMiddleIndex + 1; 
            alert(word[firstMiddleIndex] + word[secondMiddleIndex]);
        }else{
                let middleCharacterIndex = Math.floor(word.length / 2);
                alert(word[middleCharacterIndex]);
            }
            
        }
    