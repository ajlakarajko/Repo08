// Only change code below this line
var sum = 0;
function addThree() {
    return sum = sum + 3;
}
console.log(addThree()) // res will be modified but returned value is undefined
function addFive() {
    return sum = sum + 5;
}
console.log(addFive()) // res will be modified but returned value is undefined
// Only change code above this line
module.exports = {
    addThree,
    addFive
};
