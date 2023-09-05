class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodo
    #speak(){
        return 'Hello';

    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age = n;
    }
}
const newContent = new user('David', 15);
console.log(newContent.uAge);
console.log(newContent.uAge = 20);