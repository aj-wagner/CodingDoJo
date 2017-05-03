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
    var searchFound = false;
    var searchIndex = arr.length / 2;

    while (!searchFound) {
        if (searchNm == arr[searchIndex]) {
            return searchIndex;
        } else if (searchNm > arr[searchIndex]) {
            searchIndex += searchIndex / 2;
        } else {
            searchIndex -= searchIndex / 2;
        }
    }
}