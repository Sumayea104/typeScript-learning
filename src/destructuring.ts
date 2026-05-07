//object destructuring
//array destructuring

const user = {
    id : 123,
    name: 
    {firstName: "mezba",
    middleName: "abedin",
    lastName: "forhan",
    },
    gender: "male",
    favouriteColor: "blue",
    age: 24,
    profession: "web developer",
};
// const myfavouriteColor = user.favouriteColor;
// const myAge = user.age;

//object destructuring
const {favouriteColor, age} = user;

const {favouriteColor: myfavouriteColor, age: myAge} = user;//object destructuring with nested object- dak name dear moto
// console.log(myfavouriteColor, myAge);

    
//array destructuring
const myFriends = ["abul", "babul", "kabul", "dabul"];
const [a, secondFriend, c] = myFriends;
//const [, secondFriend,] = myFriends; //array destructuring with skiping element
console.log( secondFriend);