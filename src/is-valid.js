'use strict'

function isValid(s) {
    const arr = new Array(26).fill(0);

    for (let index = 0; index < s.length; index++) {
        arr[s.charCodeAt(index) - 97]++;
    }

    let count = 0;
    let sum = 0;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index]) {
            count++;
            sum += arr[index];
        }
    }
    
    return (sum % count <= 1) ? 'YES' : 'NO';
}

module.exports = isValid;
