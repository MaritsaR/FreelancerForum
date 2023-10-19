const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
  const root = document.getElementById("root");
  const siteTitle = document.createElement("h1");
  siteTitle.innerText = "FREELANCERS";
  root.appendChild(siteTitle);

  const siteList = document.createElement("ul");

  for (let i = 0; i < users.length; i++) {
    const nextUser = users[i];
    const nextItem = document.createElement("li");
    nextItem.innerText = `${nextUser.name} (${nextUser.age}) is a ${nextUser.occupation}`;
    siteList.appendChild(nextItem);
    console.log(nextItem.innerText);
  }
  root.appendChild(siteList);
}

// Call the main function
main();
