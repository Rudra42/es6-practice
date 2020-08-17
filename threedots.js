const ages = [12,17,21,45,23];
const ages2 = [15,16,5];
const ages3 = [151,162,52];

const allAges = ages.concat(ages2).concat([34]).concat(ages3);
const allAges2 = [...ages,...ages2,...ages3];
console.log(allAges);

const business = 230;
const teacher = 120;
const boss = 90;
const taka = [340,230,333];

const maximum = Math.max(business,teacher,boss);
const maximum2 = Math.max(...taka);
console.log(maximum2);