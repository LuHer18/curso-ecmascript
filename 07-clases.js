
//declarando
class User {
    greeting(){
        return 'Hello';
    }
};

//instancia de una clase
const newUser = new User ();
console.log(newUser.greeting());

const bebeLoper = new User();
console.log(bebeLoper.greeting());

//constructor 

class user {
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting(){
        return 'Hello';
    }
}

const david = new user();

//this

class user {
    constructor(name){
        this.name = name;
    }
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const luis = new user("Luis");
console.log(luis.greeting());

//setters and getters 

class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodo
    speak(){
        return 'Hello';

    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}
const newContent = new user('David', 15);
console.log(newContent.uAge);
console.log(newContent.uAge = 20);