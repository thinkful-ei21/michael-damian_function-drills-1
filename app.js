function whoAmI(name, age) {
    console.log(`Hi, my name is ${name} and I'm ${age} `);
    var yob = yearOfBirth(age);
}

function yearOfBirth(age) {
    var yearOfBirth = 2018 - age; 
    console.log(`I was born in ${yearOfBirth} `)  
}
whoAmI('Mike', 39); 
