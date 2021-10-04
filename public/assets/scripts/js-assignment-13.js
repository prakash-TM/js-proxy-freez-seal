// Input
const obj = { f_name: "Prakash", l_name: "TM", edu: "ece", age: 21 };


// Not allowing someone to modify

Object.freeze(obj);
obj.f_name = "Praveen";
delete obj.f_name;


// Not allowing someone to add new details but modify

Object.seal(obj);
obj.gender = "Male";
obj.f_name = "Praveen";
delete obj.f_name;

// Object.preventExtensions(obj);

//console.log( "f_name" in obj);

// function obj(f_name, l_name, edu, age) {
//     this.firstName = f_name;
//     this.lastName = l_name;
//     this.age = age;
//     this.education = edu;
//     this.nationality = "Indian";
//   }

// const obj = { f_name: "Prakash", l_name: "TM", edu: "ece", age: 21 };

// console.log()


// Output
console.log(obj);