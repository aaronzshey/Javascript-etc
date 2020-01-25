//kata 3
//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
descendingOrder = n => {
  if ((n.length = 1)) {
    return n;
  } else {
    let n2 = n.toString();
    let n3 = n2.split("");
    //parseInt?
    let n4 = n3.map(x => parseInt(x,10))
    n4.sort((a, b) => {
      return b - a;
    });
  }
};
