// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

function nextId(ids){
    //this will be awesome!
    let usedIdSet = new Set(ids);
    let id = 0

    while(usedIdSet.has(id)) {
        id++
    }
    return id;
  }

  console.log(nextId([0,1,2,3,4,5,6,7]))
  console.log(nextId([0,1,2,3,0,5,6,8]))
  console.log(nextId([0,1,2,3]))
  console.log(nextId([0,1,4,5,6,7]))
  console.log(nextId([0,2,3,4,5,6,7]))