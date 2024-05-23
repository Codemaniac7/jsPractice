let info = { name: '민수' };
info.change = function (a, b) {
    this.age = a + b;
};

let change2 = info.change;

console.log(change2 === info.change);

change2(3, 4);
console.log(info);
console.log(age);

// console.log(info);
