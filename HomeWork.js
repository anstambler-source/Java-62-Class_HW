const printArray = arr => {
    console.log('==========');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('==========');
}


const reverseArray = arr => {
    let temp
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp
    }
}


const search = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1
}


const bubbleSort = (arr, comparator) => {
    let temp
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}


const primes = [2, 3, 5, 7, 11, 13, 17, 19];
printArray(primes); // 2, 3, 5, 7, 11, 13, 17, 19
reverseArray(primes);
printArray(primes); // 19, 17, 13, 11, 7, 5, 3, 2
let index = search(primes, 11);
console.log(index); // 3
index = search(primes, 10);
console.log(index); // -1
const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];
printArray(arr);
bubbleSort(arr, (a, b) => b - a);
printArray(arr); // 9, 9, 5, 4, 2, 2, 2, 1, 1, 0
