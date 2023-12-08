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
  {
    vardas: "Jonas",
    amzius: 27,
    miestas: "Vilnius",
  },
  {
    vardas: "Ona",
    amzius: 32,
    miestas: "Kaunas",
  },
  {
    vardas: "Ramunas",
    amzius: 37,
    miestas: "Panevezys",
  },
  {
    vardas: "Edgaras",
    amzius: 42,
    miestas: "Marijampole",
  },
  {
    vardas: "Jone",
    amzius: 47,
    miestas: "Klaipeda",
  },
  {
    vardas: "Jonas",
    amzius: 25,
    miestas: "Jonava",
  },
  {
    vardas: "Ona",
    amzius: 30,
    miestas: "Kedainiai",
  },
  {
    vardas: "Ramunas",
    amzius: 35,
    miestas: "Raseiniai",
  },
  {
    vardas: "Edgaras",
    amzius: 40,
    miestas: "Prienai",
  },
  {
    vardas: "Jone",
    amzius: 45,
    miestas: "Kybartai",
  },
  {
    vardas: "Bobis",
    amzius: 25,
    miestas: "Vilnius",
  },
  {
    vardas: "Dzejus",
    amzius: 30,
    miestas: "Kaunas",
  },
  {
    vardas: "Brusas",
    amzius: 35,
    miestas: "Panevezys",
  },
  {
    vardas: "Silvestras",
    amzius: 40,
    miestas: "Marijampole",
  },
  {
    vardas: "Arnoldas",
    amzius: 45,
    miestas: "Klaipeda",
  },
];
let body = document.querySelector("body");
let form = document.createElement("form");
body.appendChild(form);
let inputName = document.createElement("input");
inputName.classList.add("name");
inputName.setAttribute("placeholder", "Choose name, age or city");
inputName.setAttribute("list", "name");
let datalistName = document.createElement("datalist");
datalistName.setAttribute("id", "name");
// let inputAge = document.createElement("input");
// inputAge.classList.add("age");
// inputAge.setAttribute("placeholder", "Choose age");
// let inputCity = document.createElement("input");
// inputCity.classList.add("city");
// inputCity.setAttribute("placeholder", "Choose city");
form.appendChild(inputName);
form.appendChild(datalistName);
// form.appendChild(inputAge);
// form.appendChild(inputCity);
let ulSupreme = document.createElement("ul");
ulSupreme.setAttribute("id", "supreme");

for (let i = 0; i < duomenys.length; i++) {
  // console.log(duomenys[i]);
  let option = document.createElement("option");
  // option.value = `Vardas: ${duomenys[i].vardas}, amžius: ${duomenys[i].amzius}, miestas: ${duomenys[i].miestas}`;
  // datalistName.appendChild(option);
  let ul = document.createElement("ul");
  let liName = document.createElement("li");
  liName.textContent = duomenys[i].vardas;
  let liAge = document.createElement("li");
  liAge.textContent = duomenys[i].amzius;
  let liCity = document.createElement("li");
  liCity.textContent = duomenys[i].miestas;
  ul.appendChild(liName);
  ul.appendChild(liAge);
  ul.appendChild(liCity);
  ulSupreme.appendChild(ul);
  body.appendChild(ulSupreme);
}
inputName.addEventListener("change", (e) => {
  // let ul = document.createElement("ul");
  // let li = document.createElement("li");
  // let x = e.target.value;
  // x.toUpperCase();
  // console.log(x);
  // li.textContent = x;
  // ul.appendChild(li);
  // body.appendChild(ul);
  let input = e.target.value.toLowerCase();
  for (let i = 0; i < ulSupreme.childNodes.length; i++) {
    console.log(ulSupreme.childNodes[i].firstChild.textContent);
    let vardasFiltered = ulSupreme.childNodes[i].textContent.toLowerCase();
    if (vardasFiltered.includes(input)) {
      ulSupreme.childNodes[i].style.display = "block";
    } else {
      ulSupreme.childNodes[i].style.display = "none";
    }
  }
});
