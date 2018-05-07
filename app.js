function whoAmI(name, age) { 

    try {
        var yearOfBirth = 2018 - age;
    }
    catch(e) {
        console.error(e);
    }
    if (age <= 0) {
        throw "Age can not be negative";
    }
    if(name === undefined && age === undefined) {
        throw "Arguments not valid";
    }
    else if (typeof name != 'string') {
        throw "Name must be a string";
    } 
    else if (!isNaN(age)) {
        throw " Age must be a valid number";
    }
    console.log( `Hi, my name is ${name} and I'm ${age}` ); 
    var yob = yearOfBirth(age); 
}

function yearOfBirth(age) { 
    console.log( `I was born in ${yearOfBirth}` )
} 
whoAmI(12, 'mike');
