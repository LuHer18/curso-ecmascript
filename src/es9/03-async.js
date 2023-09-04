async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();

other.next().then(resolve => console.log(resolve.value));
other.next().then(resolve => console.log(resolve.value));
other.next().then(resolve => console.log(resolve.value));
console.log("Hello");


async function arrayOfNames(array){
   for await (let value of array){
    console.log(value);
   } 
}

const name = arrayOfNames( ['Oscar','David', 'Ana'] );
console.log('After');