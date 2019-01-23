'use strict';

//Complete this algo
const isLoop = linkedlist => {
  let runner1 = linkedlist.head;
  let runner2 = runner1.next;

  while (runner1 !== null && runner2 !== null) {
    if (runner1.value === runner2.value) {
      return true;
    } else {
      runner1 = runner1.next;
      runner2 = runner2.next.next;
    }
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
