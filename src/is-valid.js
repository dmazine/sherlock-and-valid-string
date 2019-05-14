'use strict'

function isValid(s) {
    const charsFrequency = new Array(26).fill(0);

    for (let index = 0; index < s.length; index++) {
        charsFrequency[s.charCodeAt(index) - 97]++;
    }

    const frequencies = [];

    for (let frequency of charsFrequency) {
        if (frequency > 0) {
            frequencies.push(frequency);
        }
    }

    frequencies.sort();

    if ((frequencies[0] == frequencies[frequencies.length - 1])
        || ((frequencies[0] == 1) && (frequencies[1] == frequencies[frequencies.length - 1]))
        || ((frequencies[0] == frequencies[frequencies.length - 2]) && (frequencies[frequencies.length - 1] - frequencies[frequencies.length - 2] == 1))) {
        return 'YES';
    }

    return 'NO';
}

module.exports = isValid;
