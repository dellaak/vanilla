

let body = document.querySelector("body");
let CreateWrapper = document.createElement("div");
let inputHolder = document.createElement("div");
let inputHolderTele = document.createElement("div");
let inputHolderEmail = document.createElement("div");
let newContactInputName = document.createElement("input");
let newContactInputTelephone = document.createElement("input");
let newContactInputEmail = document.createElement("input");
let plusTele = document.createElement("span");
let plusEmail = document.createElement("span");
let h1Text = document.createElement("h1");
let h3Text = document.createElement("h3");
let addButton = document.createElement("button");
let ullist = document.createElement("ul");

h1Text.innerHTML = "Dellas Kontakter";
h3Text.innerHTML = "Skriv in uppgifter nedanför";
newContactInputName.placeholder = "Skriv in namn";
newContactInputTelephone.placeholder = "Skriv in telefonnr... minst 5 tecken";
newContactInputEmail.placeholder = "Skriv in email";
addButton.innerHTML = "Lägg till";

let inputs = [
  newContactInputName,
  newContactInputTelephone,
  newContactInputEmail
];

let holders = [inputHolder,inputHolderTele, inputHolderEmail ];

newContactInputName.id = "inputname";
newContactInputTelephone.id = "inputtele";
newContactInputEmail.id = "inputemail";
plusTele.id = "plusTele";
plusEmail.id = "plusEmail";

body.appendChild(CreateWrapper);
CreateWrapper.appendChild(h1Text);
CreateWrapper.appendChild(h3Text);


holders.map((i, k) => {
  let input = inputs[k];
  i.appendChild(input);
  CreateWrapper.appendChild(i);
  input.style.border = "1px solid black";
  input.style.minHeight = "40px";
  input.style.width = "300px";
  input.style.margin = "10px";
});

plusTele.innerHTML = "+";
plusEmail.innerHTML = "+";
inputHolderTele.appendChild(plusTele);
inputHolderTele.appendChild(ullist);
inputHolderEmail.appendChild(plusEmail);
inputHolderEmail.appendChild(ullist);

let person = {
  name: "",
  telephone: [],
  email: []
};

window.addEventListener("mousedown", e => {
  if (e.target.closest("#plusTele")) {
    let val = newContactInputTelephone.value;
    if (val.match(/^\d+$/) && val.length > 4) {
      addTele(val);
      newContactInputTelephone.value = "";
    } else {
      alert("Minst 5 nummer och inga bokstäver.");
    }
  }



  if (e.target.closest("#plusEmail")) {
    let emailval = newContactInputEmail.value;
    if (emailval.length > 4) {
      addEmail(emailval);
      newContactInputEmail.value = "";
    } else {
      alert("Minst 5 tecken");
    }
  }


  if (e.target.closest("button")) {
    let name = newContactInputName.value;
    if (name.length > 2) {

      savePerson(name);
    } else {
      alert('Fyll i ett namn');
    }
  }
});

function addTele(val) {
  person.telephone.push(val);
  renderTelList();
}


function addEmail(val) {
  person.email.push(val);
  renderEmailList();
}

function renderTelList() {
  console.log(person)
  let list = document.createElement("li");
  let text = document.createElement("p");
  person.telephone.map(i => {
    text.innerHTML = i;
    list.appendChild(text);
    ullist.appendChild(list);
  });

}


function renderEmailList() {
  let list = document.createElement("li");
  let text = document.createElement("p");
  person.email.map(k => {
    text.innerHTML = k;
    list.appendChild(text);
    ullist.appendChild(list);
  });

}


CreateWrapper.appendChild(addButton)



let contacts;
try {
 contacts = JSON.parse(localStorage.contacts);
}
catch(e){
 contacts = [];
}

contacts.save = function(){
  localStorage.contacts = JSON.stringify(this);
};

async function savePerson(name){
  person.name = name
  contacts.push(person)
  await contacts.save()
  


  newContactInputName.value = '';
  newContactInputEmail.value = '';
  newContactInputTelephone.value = '';
  let text = document.querySelectorAll('p')
  for(let i of text){
    i.innerHTML = '';
  }

  person = {
    name: "",
    telephone: [],
    email: []
  };


}



