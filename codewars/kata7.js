//Very easy
//https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript
const boolToWord = bool => {
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
};

//or
function boolToWord( bool ){
  return bool ? 'Yes':'No'; //note the position of the return
}
