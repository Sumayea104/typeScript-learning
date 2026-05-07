//alias= name of type
type User = {
    id: number,
    name:{
        firstName: string,
        middleName: string,
        lastName: string,
    };
    gender  : "male" | "female";
    age: number;
    profession: string;
    contactNo: string;
    address: {
        city: string;
        division: string;
        country: string;
    };
};
        
const user1: User = {
    id: 123,
    name:{
        firstName: "mezba",
        middleName: "abedin",
        lastName: "forhan",
    }   ,
    gender  : "male",
    age: 30,
    profession: "Software Engineer",
    contactNo: "1234567890",
    address: {
        city: "Dhaka",
        division: "Dhaka",
        country: "Bangladesh",
    }
};

const user2: User = {
    id: 124,
    name: {
        firstName: "john",
        middleName: "doe",
        lastName: "forhan",
    },
    gender: "male",
    age: 30,
    profession: "Software Engineer",
    contactNo: "1234567890",
    address: {
        city: "Dhaka",
        division: "Dhaka",
        country: "Bangladesh",
    }
};

type IsAdmin = true | false ;   
const isAdmin: IsAdmin = true;

type ID = number | string;
const userID: ID = 123; 
const adminID: ID = "admin123";

type Name = string;
const userName: Name = "mezba"; 

//function type alias
const add = (num1: number, num2: number) => num1 + num2;

type AddFunction = (num1: number, num2: number) => number;

const addNumbers: AddFunction = (num1, num2) => num1 + num2;



