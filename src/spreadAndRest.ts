// spread operator

const friends = ['rahim', 'karim'];

const schoolFriends = ['pintu', 'rintu', 'chintu'];


const collegeFriends = ['bunty', 'aunty', 'monty'];

//friends.push(schoolFriends);

friends.push(...schoolFriends);// ...spread operator
friends.push(...collegeFriends);

//console.log(friends);

const user = { name: "mezba", phoneNo: "01010101"};


const otherInfo = {hobby: 'outing', favouriteColor: "black"};

const userInfo = {...user, ...otherInfo};

//console.log(userInfo);



//rest operator

// const sendInvite = (friend1: string, friend2: string, friend3: string) =>{
//     console.log(`send invitation to ${friend1}`);
//     console.log(`send invitation to ${friend2}`);
//     console.log(`send invitation to ${friend3}`);
// }
//foreach korbo- rest operator

const sendInvite = (...friends: string[]) => {
friends.forEach((friend: string) =>
    console.log(`send invitation to ${friend}`)
);

};


sendInvite('pintu', 'chintu', 'bulbul')



















