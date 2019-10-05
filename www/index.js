class Index {
  constructor() {

    this.person = {
      name: "",
      telephone: [],
      email: []
    };

    this.contacts;
    try {
      this.contacts = JSON.parse(localStorage.contacts);
    } catch (e) {
      this.contacts = [];
    }

    this.contacts.save = function() {
      localStorage.contacts = JSON.stringify(this);
    };


    
   
  }

  createDom = ()=> {
    let body = document.querySelector("body");
    let CreateWrapper = document.createElement("div");
    let inputHolder = document.createElement("div");
    let inputHolderTele = document.createElement("div");
    let inputHolderEmail = document.createElement("div");
    this.newContactInputName = document.createElement("input");
    this.newContactInputTelephone = document.createElement("input");
    this.newContactInputEmail = document.createElement("input");
    let plusTele = document.createElement("span");
    let plusEmail = document.createElement("span");
    let h1Text = document.createElement("h1");
    let h3Text = document.createElement("h3");
    let addButton = document.createElement("button");
    this.ullist = document.createElement("ul");

    this.inputs = [
      this.newContactInputName,
      this.newContactInputTelephone,
      this.newContactInputEmail
    ]

    this.holders = [inputHolder, inputHolderTele, inputHolderEmail];

    h1Text.innerHTML = "Dellas Kontakter";
    h3Text.innerHTML = "Skriv in uppgifter nedanför";
    this.newContactInputName.placeholder = "Skriv in namn";
    this.newContactInputTelephone.placeholder =
      "Skriv in telefonnr... minst 5 tecken";
    this.newContactInputEmail.placeholder = "Skriv in email";
    addButton.innerHTML = "Lägg till";

    this.newContactInputName.id = "inputname";
    this.newContactInputTelephone.id = "inputtele";
    this.newContactInputEmail.id = "inputemail";
    plusTele.id = "plusTele";
    plusEmail.id = "plusEmail";

    body.appendChild(CreateWrapper);
    CreateWrapper.appendChild(h1Text);
    CreateWrapper.appendChild(h3Text);

   this.holders.map((i, k) => {
      let input = this.inputs[k];
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
    inputHolderTele.appendChild(this.ullist);
    inputHolderEmail.appendChild(plusEmail);
    inputHolderEmail.appendChild(this.ullist);

    CreateWrapper.appendChild(addButton);

    this.storage = new Contacts()
    this.eventListners()
  }

  eventListners() {
    window.addEventListener("mousedown", e => {
      if (e.target.closest("#plusTele")) {
        let val = this.newContactInputTelephone.value;
        if (val.match(/^\d+$/) && val.length > 4) {
         this.addTele(val);
         this.newContactInputTelephone.value = "";
        } else {
          alert("Minst 5 nummer och inga bokstäver.");
        }
      }

      if (e.target.closest("#plusEmail")) {
        let emailval = this.newContactInputEmail.value;
        if (emailval.length > 4) {
          this.addEmail(emailval);
          this.newContactInputEmail.value = "";
        } else {
          alert("Minst 5 tecken");
        }
      }

      if (e.target.closest("button")) {
        let name = this.newContactInputName.value;
        if (name.length > 1) {
          this.savePerson(name);
        } else {
          alert("Fyll i ett namn på minst 2 tecken");
        }
      }
    });
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
      text.innerHTML = i;
      list.appendChild(text);
      this.ullist.appendChild(list);
    });
  }

  renderEmailList() {
    let list = document.createElement("li");
    let text = document.createElement("p");
    this.person.email.map(k => {
      text.innerHTML = k;
      list.appendChild(text);
      this.ullist.appendChild(list);
    });
  }


  async savePerson(name) {
    this.person.name = name;
    this.contacts.push(this.person);
    await this.contacts.save();

    this.newContactInputName.value = "";
    this.newContactInputEmail.value = "";
    this.newContactInputTelephone.value = "";
    let text = document.querySelectorAll("p");
    for (let i of text) {
      i.innerHTML = "";
    }

    this.person = {
      name: "",
      telephone: [],
      email: []
    };

    this.storage = new Contacts()
  }
}
