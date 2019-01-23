'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  let midPoint = Math.floor(array.length / 2);
  let currentValue = array[midPoint];
  if (currentValue === target) {
    return true;
  }

  if (currentValue < target && array.length > 1) {
    return binarySearch(array.slice(midPoint), target);
  } else if (currentValue > target && array.length > 1) {
    return binarySearch(array.slice(0, midPoint), target);
  } else {
    return false;
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
