function factoral(x) {
    if (x == 1) {
        return 1;
    } else return x * factoral(x - 1);
}

function sigma(y) {
    if (y == 1) {
        return 1;
    } else return y + sigma(y - 1);
}

function fibonacci(z) {
    if (z < 2) {
        return 1;
    } else {
        return fibonacci(z - 1) + fibonacci(z - 2);
    }
}

// divideNconquer receives 2 parameters
// an order list - arr a item to search for
//return the arr index to where the item is found
function divideNconquer(arr, searchNm) {
    var start = 0;
    var endPt = arr.length - 1;
    var midIndex;

    while (start <= endPt) {
        midIndex = Math.floor((start + endPt) / 2);

        if (searchNm == arr[midIndex]) {
            return midIndex;
        } else if (searchNm < arr[midIndex]) {
            endPt = midIndex - 1;
        } else {
            start = midIndex + 1;
        }
    }
    console.log(`Search is out of range`)
    return -1;
}

function nthLargest(arr, fromEnd) {
    if (fromEnd > arr.length) {
        return console.log(`position from end is greater than the length of the array provide`);
    }

    var tempArr = arr.sort();
    var counter = 1;

    for (var i = arr.length - 1; i >= 0; i--) {
        if (counter == fromEnd) {
            return arr[i];
        } else {
            counter++;
        }
    }
}

console.log(nthLargest([1, 30, 20, 40, 0, 3], 2));

function nthLargest(arr, fromEnd) {
    if (fromEnd > arr.length) {
        return console.log(`position from end is greater than the length of the array provide`);
    }

    var currentLargest;
    var largestIndex;

    for (var c = 0; c < fromEnd; c++) {
        currentLargest = arr[0];
        largestIndex = 0;

        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > currentLargest) {
                currentLargest = arr[i];
                largestIndex = i;
            }
        }
        arr[largestIndex] = null;
    }
    return currentLargest;
}
console.log(nthLargest([1, 30, 20, 40, 0, 3], 3));