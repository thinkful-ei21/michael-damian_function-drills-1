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
    console.log( `Hi, my name is ${name} and I'm ${age}` ); 
    var yob = yearOfBirth(age); }

function yearOfBirth(age) { 
    console.log( `I was born in ${yearOfBirth}` )
} whoAmI('Mike', -5);
