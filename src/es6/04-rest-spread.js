// expresiones de asignación de desestructuración

//array destructuring

let fruits = [ 'Apple', 'banana'];

let [a, b] = fruits;
console.log(a, b);

//object destructuring

let user = {
    userName: 'Luis', 
    age: 34 
}
let {userName, age} = user;
console.log(userName, age);

// spread operator

let person = {
    name: 'Luis',
    age: 27,
}
let country = 'CO';
let data = {...person, country};
console.log(data);

// rest

function sum( num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1, 1, 1, 3);