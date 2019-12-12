let a = [1,2,3452]
let b = a.forEach(function(item, i) { if (item == 3452) a[i] = 1010; });
console.log(a)
