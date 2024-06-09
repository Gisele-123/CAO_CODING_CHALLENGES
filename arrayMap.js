function hasSubarrayWithTargetSum(arr, target) {
    let left = 0;
    let right = 0;
    let currentSum = 0;

    while (right < arr.length) {
        currentSum += arr[right];

        while (currentSum > target) {
            currentSum -= arr[left];
            left++;
        }

        if (currentSum === target) {
            return true;
        }

        right++;
    }

    return false;
}

// getting input for array and target from the user
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the array elements separated by space: ', (inputArray) => {
    const arr = inputArray.split(' ').map(Number);
    rl.question('Enter the target sum: ', (inputTarget) => {
        const target = parseInt(inputTarget);
        console.log('Input Array:', arr);
        console.log('Target Sum:', target);
        console.log('Output:', hasSubarrayWithTargetSum(arr, target));
        rl.close();
    });
});
