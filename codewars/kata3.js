//kata 3
//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
const descendingOrder = n => {
  if (n.length === 1) {
    return n;
  } else {
    let n2 = [...n.toString(10)];
    let n3 = n2.map(x => parseInt(x, 10));
    //the ellpsis syntax converts each element of the array into an argument
    //preventing us from having to split each elem apart and do JS magic with it
    n3.sort((a, b) => b - a);
    let n4 = n3.join("");
    let n5 = parseInt(n4, 10);
    return n5;
  }
};
descendingOrder(123456789);
