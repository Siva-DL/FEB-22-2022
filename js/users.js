var users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
];

// console.log(users);

// console.log(users[0].name);
// console.log(users[1].name);
// console.log(users[2].name);

let tableDataInfo = "";
for (var user of users) {
  tableDataInfo += "<tr><td>" + user.name + "</td>";
  tableDataInfo += "<td> " + user.email + "</td>";
  tableDataInfo += "<td> " + user.phone + " </td></tr>";
}

console.log(tableDataInfo);
const userRecordsData = document.querySelector("#userRecordsData");

userRecordsData.innerHTML = tableDataInfo;

// let appendedDataRecord =
//   "<tr><td>appendedUserName</td><td>appended@gmail.com</td><td> 123-343-545 </td></tr>";

//Create Element TR:

document.querySelector("#btn").addEventListener("click", addNewTD, false);

document.querySelector("header").addEventListener(
  "click",
  function () {
    alert(1);
  },
  false
);
function addNewTD() {
  alert(0);
  let TR = document.createElement("tr");
  console.log(TR);

  // Create Element #3-TD:
  // add Dummy Text into TD
  // append TD to TR

  let nameTD = document.createElement("td");
  nameTD.innerText = "appended Name";
  let emailTD = document.createElement("td");
  emailTD.innerText = "appended@ymail.com";
  let phoneTD = document.createElement("td");
  phoneTD.innerText = "123-234-456";

  console.log(nameTD);

  TR.appendChild(nameTD);
  TR.appendChild(emailTD);
  TR.appendChild(phoneTD);

  console.log(TR);

  userRecordsData.appendChild(TR);
}
