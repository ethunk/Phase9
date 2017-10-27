removeWithoutCopy = (arr, item) => {
  let index = arr.indexOf(item);
  while (index >= 0) {
    arr.splice(index, 1);
    index = arr.indexOf(item);
  }
    return arr;
};

append = (arr, item) => {
  arr.push(item);
  return(arr);
};

truncate = (arr) => {
  arr.pop();
  return(arr);
};

prepend = (arr, item) => {
  arr.splice(0,0,item);
  return arr;
};

curtail = (arr) => {
  arr.splice(0,1);
  return arr;
};

concat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

insert = (arr, item, index) => {
  arr.splice(index,0,item);
  return arr;
};

count = (arr, item) => {
  let count = 0;
  arr.forEach (function(element) { if(element === item) {count += 1;}});
  return(count);
};

duplicates = (arr) => {
  let arrSorted = arr.sort();
  let duplicateArr = [];
  arrSorted.forEach(function(element, index, arr) {
    if (element == arr[index+1] && duplicateArr.indexOf(element)==-1) {
      duplicateArr.push(element);
    }
  });
  return duplicateArr;
};

square = (arr) => {
  results = arr.map( function(element) {
    return (element*element);
  });
  return results;
};

findAllOccurrences = (arr, item) => {
  results = [];
  for(let i in arr) {if (arr[i] === item) {results.push(i);}}
  return results;
};
