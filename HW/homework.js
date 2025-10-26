// Homework: doesn't use const, let and setTimeout must be call 10 times
// Problem -> console 10 times 10

for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i++)
    }, 1000);
}
i = 0;


// Solution 1 -> use let
// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }
