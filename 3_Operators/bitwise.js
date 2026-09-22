const read = 1<<0;
const write = 1<<1;
const del = 1<<2;

user1per = read | write;

user2per = read | write | del;

user3per = read | del;

if(user1per & read) {
    console.log(`user read permission granted`);
}

console.log(user1per);
console.log(user2per);
console.log(user3per);