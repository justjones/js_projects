const friends = ["Laurence", "John", "Steve", "Linda", "Jane"];

const friend1 = {name: 'Laurence'};
const friend2 = {name: 'John'};
const friendList = [friend1, friend2];
friendList[10] = {
    name : 'Jane'
};

document.querySelector('.output').textContent = friendList[1].name;

console.log(friendList);
console.log(friendList.length);