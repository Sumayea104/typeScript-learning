//array, object

let bazarList: string= ['eggs','milk','sugar', 'banana'];

bazarList.push(true);

let mixedArr: (string | number)[] = ['eggs',12, 'milk', 1, 'sugar', 2]

mixedArr.push(true);

//ts toople

let coordinates : [number,number]= [20, 30, 40];

let couple : string= ['husband', 'wife'];

let nameAndRoll = ['mezba', 79];

let mezbaNameAndRoll : [ string, number] = ['mezba', 79];

mezbaNameAndRoll[0] = 79

mezbaNameAndRoll[0] = 'mezba'

//toople can be 3 elements

let destination : [string, string, number]= ['dhaka', 'chattogram', 3]

// reference type : object

// const user: {
//     organization : "programming hero";//value k type hishabe use korteche - eta k bole literel type
//     firstName : string;
//     middleName? : string; // optional type
//     lastName : string;
//     isMarried : boolean;
// } =
// // { firstName : "mezba",
// //     middleName : "abedin",
// //     lastName : "forhan",
// //     isMarried : true,
// // };

// {   
//     organization : "programming hero",
//     firstName : "jhanker",
//     lastName : "mahabub",
//     iaMarried : true,
// };

// user.organization = "programming hero first";

// console.log(user);

const user: {
    readonly  organization : "string";//access modifier
    firstName : string;
    middleName? : string; // optional type
    lastName : string;
    isMarried : boolean;
} =
// { firstName : "mezba",
//     middleName : "abedin",
//     lastName : "forhan",
//     isMarried : true,
// };

{   
    organization : "programming hero",
    firstName : "jhanker",
    lastName : "mahabub",
    iaMarried : true,
};

user.organization = "programming hero first";

console.log(user);