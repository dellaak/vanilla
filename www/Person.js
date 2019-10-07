class Person extends Index {
  constructor(person) {
    super();

    this.singlePerson = person;
    this.saveEditperson = {
      name: "",
      telephone: [],
      email: [],
      removedEmails: [],
      removedTelephone: [],
      addedEmail: [],
      addedTelephone: [],
      id: "",
      version: []
    };
  }

  createDomer() {
    this.formWrap = document.querySelector("#wrapper");
    this.contactWrap = document.querySelector("#contactWrapper");
    this.contactWrap.innerHTML = "";
    this.name = document.createElement("p");
    this.clickText = document.createElement("h1");
    this.ullistTele = document.createElement("ul");
    this.ullistEmail = document.createElement("ul");
    this.editNameDiv = document.createElement("div");
    this.editTeleDiv = document.createElement("div");
    this.editEmailDiv = document.createElement("div");
    this.lowerEditBox = document.createElement("div");
    this.editNameButton = document.createElement("div");
    this.saveEditButton = document.createElement("button");
    this.addTelephone = document.createElement("span");
    this.addEmail = document.createElement("span");
    this.addTele = document.createElement("span");
    this.formWrap.className = "editmode";

    this.holders = [this.editNameDiv, this.editTeleDiv, this.editEmailDiv];

    this.holders.map(i => {
      i.style.display = "flex";
      i.style.flexDirection = "column";
      i.style.justifyContent = "space-between";
      i.style.alignItems = "center";
      i.style.backgroundColor = "#6e6659";
      i.style.margin = "10px";
      i.style.padding = "20px";
    });

    this.editNameButton.id = "editName";
    this.editNameButton.innerHTML = "✎";
    this.editEmailDiv.id = "emailDiv";
    this.editTeleDiv.id = "teleDiv";
    this.editNameDiv.id = "nameDiv";
    this.saveEditButton.innerHTML = "SPARA ÄNDRINGAR";
    this.addEmail.innerHTML = "+Lägg till email";
    this.addEmail.id = "addEmail";
    this.addTele.innerHTML = "+Lägg till nummer";
    this.addTele.id = "addTele";

    //APPEND
    this.formWrap.innerHTML = "";
    this.formWrap.appendChild(this.clickText);
    this.clickText.innerHTML = "✎ Klicka på elementet som du vill redigera";
    this.formWrap.appendChild(this.editNameDiv);
    this.formWrap.appendChild(this.editTeleDiv);
    this.formWrap.appendChild(this.editEmailDiv);

    this.formWrap.appendChild(this.name);
    this.formWrap.appendChild(this.ullistTele);
    this.editNameDiv.appendChild(this.name);
    this.editEmailDiv.appendChild(this.addEmail);
    this.editTeleDiv.appendChild(this.addTele);
    this.editTeleDiv.appendChild(this.ullistTele);
    this.editEmailDiv.appendChild(this.ullistEmail);
    this.editNameDiv.appendChild(this.editNameButton);
    this.formWrap.appendChild(this.saveEditButton);
    // editTeleButton.setAttribute("data", i);
    this.saveEditButton.id = "saveEditButton";

    //STYLING
    this.formWrap.style.display = "flex";
    this.formWrap.style.flexDirection = "column";
    this.formWrap.style.backgroundColor = "#264e58";
    this.formWrap.style.justifyContent = "space-around";
    this.formWrap.style.alignItems = "center";
    this.formWrap.style.textShadow = "0.07em 0.07em 0 rgba(0,0,0,.1)";
    this.formWrap.style.textTransform = "uppercase";
    this.formWrap.style.letterSpacing = ".1em";
    this.formWrap.style.color = "#eefceb";
    this.formWrap.style.fontSize = "16px";
    this.clickText.style.display = "flex";
    this.clickText.style.width = "100%";
    this.clickText.style.justifyContent = "center";
    this.clickText.style.fontSize = "20px";
    this.ullistTele.style.listStyle = "none";
    this.ullistTele.style.padding = "0";
    this.ullistTele.style.display = "flex";
    this.ullistTele.style.flexDirection = "column";
    this.ullistTele.style.alignItems = "flex-end";
    this.ullistEmail.style.listStyle = "none";
    this.ullistEmail.style.padding = "0";
    this.ullistEmail.style.display = "flex";
    this.ullistEmail.style.flexDirection = "column";
    this.ullistEmail.style.alignItems = "flex-end";
    let editButtonStyle = document.querySelector("#editName");
    editButtonStyle.style.display = "flex";
    editButtonStyle.style.alignItems = "center";
    editButtonStyle.style.fontSize = "30px";
    editButtonStyle.style.marginLeft = "10px";
    editButtonStyle.style.color = "orange";
    editButtonStyle.style.cursor = "pointer";
    this.saveEditButton.style.width = "30vw";
    this.saveEditButton.style.height = "50px";
    this.editNameDiv.style.display = "flex";
    this.editNameDiv.style.flexDirection = "row";

    this.spans = [this.addEmail, this.addTele];

    for (let k of this.spans) {
      k.style.alignItems = "center";
      k.style.display = "flex";
      k.style.justifyContent = "center";
      k.style.fontSize = "16px";
      k.style.color = "#eefceb";
      k.style.backgroundColor = "#4e4a41";
      k.style.padding = "10px";
      k.style.borderRadius = "10px";
      k.style.marginBottom = "2px";
      k.style.marginTop = "10px";
    }

    //END STYLING

    this.setValues();
  }

  deleteItems() {}

  editName(name) {
    let nameDiv = document.querySelector("#nameDiv");
    this.editInputName = document.createElement("input");
    this.editInputName.setAttribute("id", "inputName");
    this.editInputTelephone = document.createElement("input");
    this.editInputEmail = document.createElement("input");

    nameDiv.innerHTML = "";
    nameDiv.appendChild(this.editInputName);
    this.editInputName.placeholder = "Redigera " + name;

    // let name = document.querySelector('p')
    // name.innerHTML=`👤` + "Namn:"
  }

  addInputFieldTele() {
    let selected = document.querySelector("#addTele");
    let teleDiv = document.querySelector("#teleDiv");
    this.editInputTelephone = document.createElement("input");
    this.editInputTelephone.setAttribute("id", "inputTelephone");
    this.editInputTelephone.style.border = "1px solid none";
    this.editInputTelephone.style.borderWidth = "0 0 2px";
    this.editInputTelephone.style.backgroundColor = "rgba(255,255,255,0.6";
    this.editInputTelephone.style.color = "black";
    this.editInputTelephone.style.outline = "0";
    this.editInputTelephone.style.padding = "5px";
    this.editInputTelephone.style.margin = "10px 0 ";
    this.editInputTelephone.style.fontSize = "14px";
    teleDiv.appendChild(this.editInputTelephone);
    this.editInputTelephone.placeholder = "Skriv telefonnummer";
  }

  addInputFieldEmail() {
    let selected = document.querySelector("#addTele");
    this.editInputEmail = document.createElement("input");
    this.editInputEmail.setAttribute("id", "inputEmail");
    this.editInputEmail.style.border = "1px solid none";
    this.editInputEmail.style.borderWidth = "0 0 2px";
    this.editInputEmail.style.backgroundColor = "rgba(255,255,255,0.6";
    this.editInputEmail.style.color = "black";
    this.editInputEmail.style.outline = "0";
    this.editInputEmail.style.padding = "5px";
    this.editInputEmail.style.margin = "10px 0 ";
    this.editInputEmail.style.fontSize = "14px";
    emailDiv.appendChild(this.editInputEmail);
    this.editInputEmail.placeholder = "Skriv Email";
  }

  saveEditFields(data) {
    this.editThisPerson;
    for (let i of this.contacts) {
      if (data === i.id) this.editThisPerson = i;
    }

    let selected = document.querySelectorAll("input");
    for (let inputs of selected) {
      if (inputs.id === "inputName") {
        this.editThisPerson.name = inputs.value;
      }
      if (inputs.id === "inputTelephone") {
        this.editThisPerson.telephone.push(inputs.value);
        this.editThisPerson.addedTelephone.push(inputs.value);
      }
      if (inputs.id === "inputEmail") {
        console.log(inputs.value, "e");
      }
    }
    console.log(this.editThisPerson);
  }

  async setValues() {
    this.person;
    for (let i of this.contacts) {
      if (i.id === this.singlePerson) {
        this.person = i;
      }
    }

    let { name, telephone, email } = this.person;
    this.name.innerHTML = `👤` + "Namn:" + name;
    this.name.setAttribute("data", name);
    this.editNameButton.setAttribute("data", name);

    telephone.map(i => {
      let list = document.createElement("li");
      list.style.display = "flex";
      list.style.alignItems = "center";
      let text = document.createElement("p");
      let deleteTeleButton = document.createElement("div");
      deleteTeleButton.innerHTML = "X";
      deleteTeleButton.className = "deleteTele";
      deleteTeleButton.setAttribute("data", i);
      deleteTeleButton.style.marginLeft = "10px";
      deleteTeleButton.style.color = "red";
      deleteTeleButton.style.cursor = "pointer";
      deleteTeleButton.style.fontSize = "25px";
      text.innerHTML = "✆ " + i;
      list.className = i;
      list.appendChild(text);
      list.appendChild(deleteTeleButton);
      this.ullistTele.appendChild(list);
    });

    email.map((i, k) => {
      let list = document.createElement("li");
      list.style.display = "flex";
      list.style.alignItems = "center";
      let editEmailButton = document.createElement("div");
      let text = document.createElement("p");
      let deleteEmailButton = document.createElement("div");
      deleteEmailButton.innerHTML = "X";
      deleteEmailButton.className = "deleteEmail";
      deleteEmailButton.setAttribute("data", i);
      deleteEmailButton.style.marginLeft = "10px";
      deleteEmailButton.style.color = "red";
      deleteEmailButton.style.cursor = "pointer";
      deleteEmailButton.style.fontSize = "25px";
      text.innerHTML = `&#128231; ` + i;
      text.style.margin = "2px";
      list.className = i;
      list.appendChild(text);
      list.appendChild(deleteEmailButton);
      list.appendChild(editEmailButton);
      this.ullistEmail.appendChild(list);
    });
  }
}

//PLACEHOLDERS
// for (let i of this.contacts) {
//   if (i.id === this.singlePerson) {
//     this.editInputName.placeholder = i.name;
//   }
//   this.editInputTelephone.placeholder = i.telephone;

// }
