// process.argv[0] === node executable files
// process.argv[1] === whatever file you are currently in
// process.argv[params] === whatever parameter I am adding in the function

let a = process.argv[2];
let b = process.argv[3];

console.log(a, typeof(b));
// undefined null and undefined typeof datatype

// if (a === b){
//     console.log("Equal!")

// }else{
//     console.log("Not Equal!")
// }

function addition(a,b){
    console.log(parseInt(a) + parseInt(b));

}
addition(a,b);