function newUser(name, age, country) {
    var name = name || 'Luis';
    var age = age || 34
    var country = country || "Colombia";
    console.log(name, age, country);
}

newUser();
newUser('David',15,"Mexico");

function newAdmin(name = 'Luis', age = 27, country = "Cánada") {
    console.log(name, age, country);
}

newAdmin('Rafa', 29, 'USA');
newAdmin();