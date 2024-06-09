function transformString(input) {
    const length = input.length;
    const isDivisibleBy3 = length % 3 === 0;
        const isDivisibleBy5 = length % 5 === 0;
    const isDivisibleBy15 = isDivisibleBy3 && isDivisibleBy5;
    let transformedString = '';
    if (isDivisibleBy15) {
        transformedString = input.split('').reverse().join('');
    } else {
        if (isDivisibleBy3) {
            transformedString = input.split('').reverse().join('');
        }
        if (isDivisibleBy5) {
            for (let char of input) {
                transformedString += char.charCodeAt(0) + ' ';
            }
            transformedString = transformedString.trim(); 
        }
    }
    return transformedString;
}
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter the input string: ', (input) => {
    const inputString = input.trim();
    console.log('Input:', inputString);
    const output = transformString(inputString);
    console.log('Output:', output);
    rl.close();
});
