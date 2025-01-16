const friend = {
  name: "Laurence Svekis",
  age: 40,
  gender: "male",
  location: {
    city: "Toronto",
    country: "Canada",
    address: "100 Main St.",
  }
}

console.log(friend);
console.log(friend.name);
console.log(friend['name']);

document.querySelector('.output').textContent = friend.location.country;
