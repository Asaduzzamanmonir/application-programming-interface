// JavaScript Object
const user = { id: 121, name: 'Amir Khan', job: 'Actor' }
const stringlified = JSON.stringify(user)
console.log(user);
console.log(stringlified);


const shop = {
    profit: 15000,
    name: 'Bismillah Store',
    address: 'Savar, Dhaka',
    product: ['Laptop', 'Fan', 'Mobile'],
    owner: {
        name: 'Alia Bhatt',
        propiter: 'Ranvir'
    },
    isExpensive: false
};

const shopStringlified = JSON.stringify(shop);
console.log(shopStringlified);
// console.log(shop);
const converted = JSON.parse(shopStringlified)
console.log(converted);