function reverseString(str) {
    let s = str;
 let  ans = s.split('').reverse().join('');
 return ans ;
  }
  console.log(reverseString("hello"));