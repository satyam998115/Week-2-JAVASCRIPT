function isElementPresent(arr, num) {
    for(let i=0;i<arr.length;i++){
    if(arr[i]==num){return true;
  }
  }
  return false;
  }
  console.log(isElementPresent([1, 2, 3, 4], 3));  // Output: true
  console.log(isElementPresent([1, 2, 3, 4], 5));