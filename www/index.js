class Index {
  constructor() {
    this.person = {
      name: "",
      telephone: [],
      email: [],
      id: ""
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

  createDom = () => {
    let body = document.querySelector("body");
    this.bodyContainer = document.createElement("div");
    this.topWrap = document.createElement("div");
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
    this.contactClass = new Contacts();
  };

  setAttr() {
    //Placeholders
    this.newContactInputName.placeholder = "Skriv in namn";
    this.newContactInputTelephone.placeholder =
      "Skriv in telefonnr... minst 5 tecken";
    this.newContactInputEmail.placeholder = "Skriv in email";

    //Innehtml
    this.h1Text.innerHTML = "Dellas Kontakter";
    this.h3Text.innerHTML = "Skriv in uppgifter nedanför";
    this.addButton.innerHTML = "Skapa kontakt";
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
    window.addEventListener("keyup", e => {
      if (e.target.closest("#inputname")) {
        let val = this.newContactInputName.value;
        this.nameText.innerHTML = `👤` + "Namn: " + val;
      }
    });

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
        if (name.length > 2) {
          this.savePerson(name);
        } else {
          alert("Minst 3 tecken");
        }
      }

      let test = document.querySelectorAll(".contactDiv");
      for (let i of test) {
        if (e.target === i) {
          new Person(e.target.id);
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

  async savePerson(name) {
    this.person.name = name;
    this.person.id = name;
    this.contacts.push(this.person);
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
      id: ""
    };

    this.contactClass.renderContacts();
  }
}
