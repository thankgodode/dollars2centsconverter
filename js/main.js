// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// console.log(ctx);

// let x = 5;
// let y = 6;
// let hue = 0;
// class MouseClass {
//   drawCursor() {
//     ctx.beginPath();
//     ctx.arc(x, y, 10, 25, 10, 10);
//     ctx.fillStyle = "hsl(" + hue + ",100%, 50%)";

//     ctx.fill();
//   }
//   drawSquare() {
//     ctx.beginPath();
//     ctx.rect(canvas.width / 2, canvas.height / 2, 50, 50);
//     ctx.fillStyle = "brown";
//     ctx.fill();
//   }
// }

// const obj = new MouseClass();
// obj.drawSquare();

// addEventListener("mousemove", function (e) {
//   x = e.clientX;
//   y = e.clientY;
//   hue++;

//   requestAnimationFrame(obj.drawCursor);
// });

// // let arr = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// // ];

// // let empty1 = [];
// // let empty2 = [];
// // let empty3 = [];

// // let allInOne = [];

// // function transpose(matrix) {
// //   matrix.forEach((list) => {
// //     empty1.push(list[0]);
// //     empty2.push(list[1]);
// //     empty3.push(list[2]);
// //   });

// //   allInOne.push(empty1, empty2, empty3);
// //   console.log(allInOne);
// // }

// // transpose(arr);

// //Easily Format
// let existingArr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// let saveArr = "[[a,a],[a,a],[a,a]]";

// function transpose(matrix) {
//   for (items of existingArr) {
//     for (item of items) {
//       saveArr = saveArr.replace("a", item);
//     }
//   }
// }

// transpose(existingArr);
// console.log(JSON.parse(saveArr));

// return masked string
// return masked string
// const num = 1234345454323234234234232;
// let check = "####aaaa";

// function maskify(cc) {
//   let masked = num.toString();
//   for (let i = masked.length - 4; i < masked.length; i++) {
//     check = check.replace("a", masked[i]);
//     console.log(check);
//   }
// }

// maskify(num);

//RETURN MASKED STRING

// let str = new String("kjksjfdjfsldfs");

// function maskify(cc) {
//   cc = cc.split("");
//   for (i = 0; i < cc.length - 4; i++) {
//     cc[i] = "#";
//   }
//   cc = cc.join("");
//   return cc;
// }

// console.log(maskify(str));

let str = new String("kjksjfdjfsldfs");

const maskify = (cc) => "#".repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);
console.log(maskify(str));

let myName = "ThankGod Ode";
console.log("*".repeat(Math.max(0, myName.length - 3)) + myName.substr(-3));
