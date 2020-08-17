const person = { name: 'Jack William', age:17, job:'nothing', gfName:'Emma',address:'Kochukhet',phone:'01711345756',friends:['Karim','Rahm','Jarim']};

const {phone,gfName,address}=person;
// const gfName = person.gfName;
// const phone = person.phone;

const complexObject = {
    name: 'abc'
    info:{
        address:'kolabagan'
        leader:'Tiger'
    }
}
const {leader} = complexObject.info;

console.log(person.gfName,phone,address);
console.log(person.gfName,phone);
// console.log(person.gfName);
// console.log(person.gfName);

const friends = ['Rajib','Sajib','Najib','Kazib'];
const [first,...restOfFriends] = friends;
console.log(restOfFriends);