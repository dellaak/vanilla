class Index {
  constructor() {
    this.person = {
      name: "",
      telephone: [],
      email: [],
      oldNames: [],
      removedEmails: [],
      removedTelephone: [],
      addedEmail: [],
      addedTelephone: [],
      id: "",
      version: []
    };
    this.eventon;
    this.contacts;
    try {
      this.contacts = JSON.parse(localStorage.contacts);
    } catch (e) {
      this.contacts = [];
    }

    this.contacts.save = function() {
      localStorage.contacts = JSON.stringify(this);
    };

    this.copyOfContacts = [...this.contacts];

 
   
  }
  

  createDom = () => {
    this.copyOfContacts = [...this.contacts];
    let body = document.querySelector("body");
    this.bodyContainer = document.createElement("div");
    this.topWrap = document.createElement("div");
    let infoTextHolder = document.createElement("div");
    let inputHolder = document.createElement("div");
    let inputHolderTele = document.createElement("div");
    let inputHolderEmail = document.createElement("div");
    this.newContactInputName = document.createElement("input");
    this.newContactInputTelephone = document.createElement("input");
    this.newContactInputEmail = document.createElement("input");
    this.plusTele = document.createElement("span");
    this.plusEmail = document.createElement("span");
    this.h1Text = document.createElement("h1");
    this.h3Text = document.createElement("h3");
    this.addButton = document.createElement("button");
    this.ullistTele = document.createElement("ul");
    this.ullistEmail = document.createElement("ul");
    this.formDiv = document.createElement("div");
    this.resultDiv = document.createElement("div");
    this.nameText = document.createElement("p");


    this.inputs = [
      this.newContactInputName,
      this.newContactInputTelephone,
      this.newContactInputEmail
    ];

    this.holders = [inputHolder, inputHolderTele, inputHolderEmail];

    body.append(this.bodyContainer);
    this.bodyContainer.append(this.topWrap);
    this.topWrap.appendChild(this.formDiv);
    this.topWrap.appendChild(this.resultDiv);
    this.formDiv.appendChild(this.h1Text);
    this.formDiv.appendChild(this.h3Text);
   

    this.holders.map((i, k) => {
      let input = this.inputs[k];
      i.appendChild(input);
      this.formDiv.appendChild(i);
      input.style.border = "1px solid black";
      input.style.minHeight = "40px";
      input.style.width = "250px";
      input.style.margin = "10px";
      i.style.display = "flex";
      i.style.flexDirection = "row";
      i.style.alignItems = "center";
      i.style.flexWrap = "wrap";
    });

    inputHolderTele.appendChild(this.plusTele);
    inputHolderEmail.appendChild(this.plusEmail);
    this.resultDiv.appendChild(this.nameText);
    this.resultDiv.appendChild(this.ullistTele);
    this.resultDiv.appendChild(this.ullistEmail);
    this.formDiv.appendChild(this.addButton);

    this.eventListners();
    this.setAttr();
    new Contacts().renderContacts(this.copyOfContacts);
    new Style();
  };


 

  setAttr() {
    //Placeholders
    this.newContactInputName.placeholder = "Namn, Minst 2 tecken";
    this.newContactInputTelephone.placeholder = "Telefonnr... minst 5 numer";
    this.newContactInputEmail.placeholder = "Email.. Minst 5 tecken";

    //Innehtml
    this.h1Text.innerHTML = "Dellas Kontakter";
    this.h3Text.innerHTML = "Klicka på + för att lägga till uppgifter";
    this.addButton.innerHTML = "Skapa kontakt";
    this.addButton.setAttribute('disabled','disabled')
    this.plusTele.innerHTML = "+";
    this.plusEmail.innerHTML = "+";
    this.nameText.innerHTML = `👤` + "Namn:";
    

    //IDS
    this.plusTele.id = "plusTele";
    this.plusEmail.id = "plusEmail";
    this.newContactInputName.id = "inputname";
    this.newContactInputTelephone.id = "inputtele";
    this.newContactInputEmail.id = "inputemail";
    this.resultDiv.id = "resultdiv";
    this.topWrap.id = "wrapper";
    this.ullistTele.id = "listTele";
    this.ullistEmail.id = "listEmail";
    this.bodyContainer.id = "bodycontainer";
  }

  eventListners() {
    if (this.eventon === true) {
      return;
    }

    this.selectedPerson;

  
  

    window.addEventListener("resize", function() {
      let div = document.querySelectorAll(".contactDiv");
      for (let i of div) {
        if (window.innerWidth < 700) {
          i.style.flexDirection = "column";
        } else {
          i.style.flexDirection = "row";
        }
      }
    });

    window.addEventListener("keyup", e => {
      let button = document.querySelector("#saveEditButton")
      let nameInput = document.querySelector("#inputName")
      let inputTelephone = document.querySelector(".inputTelephone")
      let inputEmail = document.querySelector(".inputEmail")


      if(e.target.closest('.inputEmail')){
        if (inputEmail.value.length<3) {
          button.setAttribute('disabled','disabled')
        }else{
          button.removeAttribute('disabled')
        }
      }


      if(e.target.closest('.inputTelephone')){
      if (inputTelephone.value.length<3) {
        button.setAttribute('disabled','disabled')
      }else{
        button.removeAttribute('disabled')
      }
    }

    if(e.target.closest('.inputName')){
      if (nameInput.value.length<2) {
        button.setAttribute('disabled','disabled')
      }else{
        button.removeAttribute('disabled')
      }
    }
      

      if (e.target.closest("#inputname")) {
        let val = this.newContactInputName.value;
        this.nameText.innerHTML = `👤` + "Namn: " + val;
        if(val.length<2){
          this.addButton.setAttribute('disabled','disabled')
        }else{
          this.addButton.removeAttribute('disabled','disabled')
        }
      }
      
    })

    window.addEventListener("click", e => {
      if (e.target.closest(".contactDiv")) {
        let persondiv = e.target.closest(".contactDiv");
        if (persondiv.id) {
          this.selectedPerson = persondiv.id;
          window.history.pushState('','', '/person/'+this.selectedPerson)
          new Person(this.selectedPerson).createDomer();
          new History().renderHistory(this.selectedPerson);
          new History().renderAddedandRemoved(this.selectedPerson);
        }
      }

      if (e.target.closest(".not-active")) {
        let persondiv = e.target.closest(".not-active");
        persondiv = persondiv.getAttribute("data");
        let persondiv2 = e.target.closest(".not-active");
        persondiv2 = persondiv2.getAttribute("value");
        if (persondiv) {
          new History().addActive(persondiv2, persondiv);
        }
      }

      if (e.target.closest("#goBack")) {
        window.history.pushState('','', '/')
        this.resetDom();
      }

      if (e.target.closest("#plusTele")) {
        let val = this.newContactInputTelephone.value;
        if (val.match(/^\d+$/) && val.length > 4) {
          this.addTele(val);
          this.newContactInputTelephone.value = "";
        }else{
          alert('Minst 5 nummer')
        }
      }

      if (e.target.closest("#plusEmail")) {
        let emailval = this.newContactInputEmail.value;
        if (emailval.length > 4) {
          this.addEmail(emailval);
          this.newContactInputEmail.value = "";
        }else{
          alert('Minst 5 tecken')
        }
      }

      if (e.target.closest("button")) {
        let name = this.newContactInputName.value;
        let teleInput= this.newContactInputTelephone.value
        let emailInput = this.newContactInputEmail.value

       
        if (teleInput.length > 5) {
          this.person.telephone.push(teleInput)
          this.person.addedTelephone.push(teleInput)
       
        }
        if (emailInput.length > 5) {
          this.person.email.push(emailInput)
          this.person.addedEmail.push(emailInput)
        }
        if (name.length > 2) {
          this.savePerson(name);
        }

        if (e.target.closest("#saveEditButton")) {
          new Person().saveEditFields(this.selectedPerson);
          return;
        }
      }

      if (e.target.closest(".deleteContact")) {
        this.deleteContact(e.target.getAttribute("data"));
        this.resetDom();
      }

      if (e.target.closest(".deleteTele")) {
        new Person().deleteTele(e.target.getAttribute("data"));
      }

      if (e.target.closest(".deleteEmail")) {
        new Person().deleteEmail(e.target.getAttribute("data"));
      }

      if (e.target.closest("#editName")) {
        this.editPerson(e.target.getAttribute("data"));
      }

      if (e.target.closest("#addTele")) {
        new Person().addInputFieldTele();
      }

      if (e.target.closest("#addEmail")) {
        new Person().addInputFieldEmail();
      }
    });
    this.eventon = true;
  }

 



  async deleteContact(data) {
    let id;
    this.contacts.map(i => {
      if (i.id === data) return (id = this.contacts.indexOf(i));
    });



    this.contacts.splice(id, 1);
    this.copyOfContacts = [...this.contacts];
    await this.contacts.save();

    let contactwrap = document.querySelector("#contactWrapper");
    contactwrap.outerHTML = "";
    new Contacts().renderContacts(this.copyOfContacts);
  }

 

  addTele(val) {
    this.person.telephone.push(val);
    this.renderTelList();
  }

  addEmail(val) {
    this.person.email.push(val);
    this.renderEmailList();
  }

  renderTelList() {
    let list = document.createElement("li");
    let text = document.createElement("p");
    this.person.telephone.map(i => {
      text.innerHTML = "✆ " + i;
      list.appendChild(text);
      this.ullistTele.appendChild(list);
    });
  }

  renderEmailList() {
    let list = document.createElement("li");
    let text = document.createElement("p");
    this.person.email.map(k => {
      text.innerHTML = `&#128231; ` + k;
      list.appendChild(text);
      this.ullistEmail.appendChild(list);
    });
  }

  editPerson(name) {
    new Person().editName(name);
  }

  async saveActivePerson(data) {
    data.version = data.version.reverse();
    this.person = { ...data };

    let id;
    this.contacts.map(i => {
      if (i.id === this.person.id) return (id = this.contacts.indexOf(i));
    });

    this.contacts.splice(id, 1);
    this.contacts.push(data);
    this.copyOfContacts = [...this.contacts];
    await this.contacts.save()
    new Person(this.person.id).createDomer()
    new History().renderHistory(this.person.id);
    new History().renderAddedandRemoved(this.person.id);
    
  }

  async saveEditedPerson(data) {
    let version = [
      { name: data.name, email: data.email, telephone: data.telephone }
    ];
    this.person = { ...data };
    this.person.version.push(version);

    let id;
    this.contacts.map(i => {
      if (i.id === this.person.id) return (id = this.contacts.indexOf(i));
    });

    this.contacts.splice(id, 1);
    this.contacts.push(data);

    await this.contacts.save();
    this.copyOfContacts = [...this.contacts];
    new Person(this.person.id).createDomer();
    new History().renderHistory(this.person.id);
    new History().renderAddedandRemoved(this.person.id);
  }

  async savePerson(name) {
    let contactwrap = document.querySelector("#contactWrapper");
    contactwrap.outerHTML = "";
    let version = [
      { name: name, email: this.person.email, telephone: this.person.telephone }
    ];

  
    this.person.name = name;
    this.person.id = name;
    this.person.version.push(version);
    this.contacts.push(this.person);
    this.copyOfContacts = [...this.contacts];

    await this.contacts.save();

    this.newContactInputName.value = "";
    this.newContactInputEmail.value = "";
    this.newContactInputTelephone.value = "";
    this.nameText.innerHTML = `👤` + "Namn: ";
    this.ullistEmail.innerHTML = "";
    this.ullistTele.innerHTML = "";
    this.person = {
      name: "",
      telephone: [],
      email: [],
      oldNames: [],
      removedEmails: [],
      removedTelephone: [],
      addedEmail: [],
      addedTelephone: [],
      id: "",
      version: []
    };

    new Contacts().renderContacts(this.copyOfContacts);
  }

  resetDom() {
    let body = document.querySelector("body");
    body.innerHTML = "";
    this.createDom();
    this.copyOfContacts.reverse();
    this.copyOfContacts = [...this.contacts];
  }

}
