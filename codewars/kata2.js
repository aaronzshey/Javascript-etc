//kata 2
//https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
//https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
countBits = n => {
  //convert to binary
  let a = n.toString(2);
  //convert to array for easy looping
  let b = a.split("");
  //have empty array ready
  let c = [];
  //loop through array
  for (i = 0; i < b.length; i++) {
    if (b[i] == "1") {
      c.push(b[i]);
    }
  }
  //return how many ones there are
  return c.length;
};
