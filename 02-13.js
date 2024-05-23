let obj = { result: 0 };
console.log(obj.result);

obj.add = function (x, y) {
    function inner() {
        this.result = x + y;
    }
    inner();
    console.log(result);
};
obj.add(3, 4);
// console.log(obj.result);

// console.log(obj);
console.log(result);
