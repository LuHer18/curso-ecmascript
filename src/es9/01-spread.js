const user = { 
    userName: 'Luher',
    age: 27,
    country:'CO', 
}
const {userName, ...values} = user;
console.log (userName);
console.log(values);