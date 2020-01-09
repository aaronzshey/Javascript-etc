//https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript
isTriangle = (a, b, c) => {
  if (a + b < c || b + c < a || a + c < b || a == 0 || b == 0 || c == 0) {
    return false;
  } else {
    return true;
  }
};
