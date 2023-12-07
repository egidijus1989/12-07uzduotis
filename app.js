duomenys = [
  {
    vardas: "Jonas",
    amzius: 25,
    miestas: "Vilnius",
  },
  {
    vardas: "Ona",
    amzius: 30,
    miestas: "Kaunas",
  },
  {
    vardas: "Ramunas",
    amzius: 35,
    miestas: "Panevezys",
  },
  {
    vardas: "Edgaras",
    amzius: 40,
    miestas: "Marijampole",
  },
  {
    vardas: "Jone",
    amzius: 45,
    miestas: "Klaipeda",
  },
];
let body = document.querySelector("body");
let form = document.createElement("form");
body.appendChild(form);
let selectName = document.createElement("select");
selectName.classList.add("name");
let selectAge = document.createElement("select");
selectAge.classList.add("age");
let selectCity = document.createElement("select");
selectCity.classList.add("city");
form.appendChild(selectName);
form.appendChild(selectAge);
form.appendChild(selectCity);

let option1 = document.createElement("option");
option1.setAttribute("hidden", "");
option1.innerHTML = "Choose by name";
selectName.appendChild(option1);
let option2 = document.createElement("option");
option2.setAttribute("hidden", "");
option2.innerHTML = "Choose by age";
selectAge.appendChild(option2);
let option3 = document.createElement("option");
option3.setAttribute("hidden", "");
option3.innerHTML = "Choose by city";
selectCity.appendChild(option3);
for (const data of duomenys) {
  console.log(data);
  let optionName = document.createElement("option");
  optionName.textContent = data.vardas;
  selectName.appendChild(optionName);
  let optionAge = document.createElement("option");
  optionAge.textContent = data.amzius;
  selectAge.appendChild(optionAge);
  let optionCity = document.createElement("option");
  optionCity.textContent = data.miestas;
  selectCity.appendChild(optionCity);
}
