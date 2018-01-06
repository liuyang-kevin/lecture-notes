//http://uule.iteye.com/blog/1158829

function add(a, b) {
  console.log(a + b);
  console.log(121);
}

function sub(a, b) {
  console.log(a - b);
  console.log(323232);
}

add.call(sub, 3, 1);
