// smallestUnusedID.js
// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and
// non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for
// your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons
// there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!
// nextId([0,1,2,3,5]), 4);
// nextId([0,1,2,3,4,5,6,7,8,9,10]), 11);

function nextId(ids) {
  //this will be awesome!
  let nId = ids[0];
  for (let i = 0; i < ids.length; i++) {
    if (ids[i + 1] - ids[i] > 1) {
      if (nId <= ids[i]) {
        nId = ids[i] + 1;
        break;
      }
    } else if (nId <= ids[i]) {
      nId = ids[i] + 1;
    }
  }
  return nId;
}
console.log(nextId([0, 1, 2, 3, 5]));
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
