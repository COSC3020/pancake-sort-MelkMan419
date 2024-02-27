function flip(array, n) {
    if (n > array.length) {
        n = array.length;
    }
    var left = 0;
    var right = n - 1;
    while (left < right) {
        var temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
    }
    return array;
}

function pancakeSort(array) {
    var end = array.length;
    while (end > 1) {
        // Find the index of the maximum element in the current unsorted portion
        var maxIndex = 0;
        for (var i = 1; i < end; i++) {
            if (array[i] > array[maxIndex]) {
                maxIndex = i;
            }
        }
        // If the maximum element is not already at the end, flip to move it to the end
        if (maxIndex !== end - 1) {
            // First, flip to move the maximum element to the top
            flip(array, maxIndex + 1);
            // Then, flip to move it to the end
            flip(array, end);
        }
        // Move to the next unsorted portion
        end--;
    }
    return array;
}
