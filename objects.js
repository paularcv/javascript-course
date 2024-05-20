var firstName = "Jamila";
var age = 21;
var isFemale = true;
var balance = 123.45;
var dob = new Date(2000,1,28);
var person = {
    firstName: firstName,
    age: age,
    isFemale: isFemale,
    balance: balance,
    dob: dob.toJSON,
    address: {
        city: "London",
        postCode: "SW9"
    }
};

console.log(person);
console.log(person.firstName);
console.log(person.address);