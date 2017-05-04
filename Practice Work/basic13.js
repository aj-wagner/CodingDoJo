//Print 1 - 255
function Print1To255() {
    for (var i = 1; i <= 255; i++) {
        console.log(i);
    }
}

//Print Ints and Sum 0 - 255
function PrintIntsAndSum0To255() {
    var sum = 0;

    for (var i = 0; i <= 255; i++) {
        sum += i;
        console.log(i);
        console.log(sum);
    }
}

//Find and Print Max
// Given an array, find and print its largest element.
function PrintMaxOfArray(arr) {
    var maxVal = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (maxVal < arr[i]) {
            maxVal = arr[i];
        }
    }

    console.log(maxVal);
}



//Array with Odds
//Create an array with all the odd integers between 1 and 255(inclusive). 
function ReturnOddsArray1To255() {
    var arr = [];
    var index = 0;

    for (var i = 1; i <= 255; i++) {
        if (i % 2 != 0) {
            arr[index] = i;
            index++;
        }
    }
    return arr;
}

//Greater than Y
//Given an array and a value Y, count and print the number of array values greater than Y.
function ReturnArrayCountGreaterThanY(arr, y) {
    var count = 0;
    var returnArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            returnArr[count] = arr[i];
            count++;
        }
    }

    console.log(count);
    console.log(returnArr);
}


//Max, Min, Average
//Given an array, print the max, min and average values for that array.
function PrintMaxMinAverageArrayVals(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    console.log(max);
    console.log(min);
    console.log(sum / arr.length);
}


//Swap String For Array Negative Values
//Given an array of numbers, replace any negative values with the string 'Dojo'.
function SwapStringForArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "DoJo";
        }
    }
    return arr;
}


//Print Odds 1 - 255
//Print all odd integers from 1 to 255.
function PrintOdds1To255()
for (var i = 1; i <= 255; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

//Iterate and Print Array
//Iterate through a given array, printing each value.
function PrintArrayVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

//Get and Print Average
//Analyze an array’ s values and print the average.
function PrintAverageOfArray(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum / arr.length);
}

//Square the Values
//Square each value in a given array, returning that same array with changed values.
function SquareArrayVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }

    return arr;
}

//Zero Out Negative Numbers
//Return the given array, after setting any negative values to zero.
function ZeroOutArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }

    return arr;
}

//Shift Array Values
//Given an array, move all values forward(to the left) by one index, dropping the first value and leaving a 0(z
function ShiftArrayValsLeft(arr) {
    for (var i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }

    return arr;
}