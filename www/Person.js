let saveEditperson;

class Person extends Index {
  constructor(person) {
    super();

    this.singlePerson = person;
    for (let i of this.contacts) {
      if (person === i.id) saveEditperson = i;
    }
  }

  createDomer() {
    this.formWrap = document.querySelector("#wrapper");
    this.contactWrap = document.querySelector("#contactWrapper");
    this.contactWrap.innerHTML = "";
    this.topPersonWrap = document.createElement("div");
    this.secondPersonWrap = document.createElement("div");
    this.savebuttonwrap = document.createElement("div");
    this.bottomdiv = document.createElement("div");
    this.name = document.createElement("p");
    this.clickText = document.createElement("h1");
    this.editNameDiv = document.createElement("div");
    this.editTeleDiv = document.createElement("div");
    this.editEmailDiv = document.createElement("div");
    this.ullistTele = document.createElement("ul");
    this.ullistEmail = document.createElement("ul");
    this.lowerEditBox = document.createElement("div");
    this.editNameButton = document.createElement("div");
    this.saveEditButton = document.createElement("button");
    this.addTelephone = document.createElement("span");
    this.addEmail = document.createElement("span");
    this.addTele = document.createElement("span");
    this.goBack = document.createElement("span");
    this.formWrap.className = "editmode";

    this.holders = [this.editNameDiv, this.editTeleDiv, this.editEmailDiv];

    this.editNameDiv.id = "nameDiv";
    this.holders.map(i => {
      if (i === this.editNameDiv) {
        i.style.alignItems = "flex-start";
        i.style.display = "flex";
        i.style.flexDirection = "column";
        i.style.backgroundColor = "#6e6659";
        i.style.margin = "10px";
        i.style.padding = "20px";
      } else {
        i.style.display = "flex";
        i.style.flexDirection = "column";
        i.style.alignItems = "flex-end";
        i.style.backgroundColor = "#6e6659";
        i.style.margin = "10px";
        i.style.padding = "20px";
      }
    });

    this.goBack.id = "goBack";
    this.editNameButton.id = "editName";
    this.editNameButton.innerHTML = "✎";
    this.name.id = "nameTag";
    this.editEmailDiv.id = "emailDiv";
    this.editTeleDiv.id = "teleDiv";

    this.saveEditButton.innerHTML = "SPARA ÄNDRINGAR";
    this.addEmail.innerHTML = "+Lägg till email";
    this.goBack.innerHTML = "<----";
    this.addEmail.id = "addEmail";
    this.addTele.innerHTML = "+Lägg till nummer";
    this.addTele.id = "addTele";

    //APPEND
    this.formWrap.innerHTML = "";
    this.formWrap.appendChild(this.topPersonWrap);
    this.formWrap.appendChild(this.secondPersonWrap);
    this.formWrap.appendChild(this.savebuttonwrap);
    this.formWrap.appendChild(this.bottomdiv);
    this.topPersonWrap.appendChild(this.goBack);
    this.topPersonWrap.appendChild(this.clickText);
    this.clickText.innerHTML = "✎ Redigera kontakt";
    this.secondPersonWrap.appendChild(this.editNameDiv);
    this.secondPersonWrap.appendChild(this.editTeleDiv);
    this.secondPersonWrap.appendChild(this.editEmailDiv);
    this.secondPersonWrap.appendChild(this.name);
    this.secondPersonWrap.appendChild(this.ullistTele);
    this.editNameDiv.appendChild(this.name);
    this.editEmailDiv.appendChild(this.addEmail);
    this.editTeleDiv.appendChild(this.addTele);
    // this.editTeleDiv.appendChild(this.ullistTele);
    // this.editEmailDiv.appendChild(this.ullistEmail);
    this.editNameDiv.appendChild(this.editNameButton);
    this.savebuttonwrap.appendChild(this.saveEditButton);
    // editTeleButton.setAttribute("data", i);
    this.saveEditButton.id = "saveEditButton";
    this.bottomdiv.id = "bottomDiv";

    //STYLING
    this.topPersonWrap.style.textAlign = "center";
    this.secondPersonWrap.style.display = "flex";
    this.secondPersonWrap.style.flexDirection = "row";
    this.secondPersonWrap.style.flexWrap = "wrap";
    this.secondPersonWrap.style.justifyContent = "center";
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

  deleteTele(data) {
    let deleteitem = document.getElementsByClassName(`${data}`);
    deleteitem[0].innerHTML = "";
    saveEditperson.removedTelephone.push(data);
    // saveEditperson.telephone.splice(data,1)
    let a = saveEditperson.telephone.indexOf(data);
    saveEditperson.telephone.splice(a, 1);
  }

  deleteEmail(data) {
    let deleteitem = document.getElementsByClassName(`${data}`);
    deleteitem[0].innerHTML = "";
    saveEditperson.removedEmails.push(data);
    let a = saveEditperson.email.indexOf(data);
    saveEditperson.email.splice(a, 1);
  }

  editName(name) {
    let nameDiv = document.querySelector("#nameDiv");
    this.editInputName = document.createElement("input");
    this.editInputName.setAttribute("id", "inputName");
    this.editInputTelephone = document.createElement("input");
    this.editInputEmail = document.createElement("input");

    nameDiv.innerHTML = "";
    nameDiv.appendChild(this.editInputName);
    this.editInputName.placeholder = "Redigera namn";

    // let name = document.querySelector('p')
    // name.innerHTML=`👤` + "Namn:"
  }

  addInputFieldTele() {
    let selected = document.querySelector("#addTele");
    let teleDiv = document.querySelector("#teleDiv");
    this.editInputTelephone = document.createElement("input");
    this.editInputTelephone.setAttribute("class", "inputTelephone");
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
    let selected = document.querySelector("#addEmail");
    let emailDiv = document.querySelector("#emailDiv");
    this.editInputEmail = document.createElement("input");
    this.editInputEmail.setAttribute("class", "inputEmail");
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
        if (inputs.value !== saveEditperson.name && inputs.value.length > 2) {
          saveEditperson.oldNames.push(saveEditperson.name);
        }
        saveEditperson.name = inputs.value;
      }
      if (inputs.className === "inputTelephone" && inputs.value.length > 2) {
        saveEditperson.telephone.push(inputs.value);
        saveEditperson.addedTelephone.push(inputs.value);
      }
      if (inputs.className === "inputEmail" && inputs.value.length > 2) {
        saveEditperson.email.push(inputs.value);
        saveEditperson.addedEmail.push(inputs.value);
      }
    }

    this.saveEditedPerson(saveEditperson);
    new History().renderHistory(saveEditperson.id);
   
  
  }

  async setValues() {
    this.person;
    for (let i of this.contacts) {
      if (i.id === this.singlePerson.id || i.id===this.singlePerson) {
        this.person = i;
      }
    }
    let nametext = document.querySelector("#nameTag");
    let { name, telephone, email } = this.person;
    this.name.innerHTML = `👤` + "Namn:" + name;
    this.name.setAttribute("data", name);
    nametext.setAttribute("value", name);

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
    this.editTeleDiv.appendChild(this.ullistTele);
    this.editEmailDiv.appendChild(this.ullistEmail);
  }
}

//PLACEHOLDERS
// for (let i of this.contacts) {
//   if (i.id === this.singlePerson) {
//     this.editInputName.placeholder = i.name;
//   }
//   this.editInputTelephone.placeholder = i.telephone;

// }
