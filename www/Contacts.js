class Contacts extends Index {
  constructor(contacts) {
    super();
    this.contacts = contacts;

    this.bodyContainer = document.querySelector("#bodycontainer");
    this.contactWrapper = document.createElement("div");
    this.contactWrapper.id = "contactWrapper";

    this.renderContacts();

  }



  renderContacts = async (newContacts) => {
    if(newContacts){
      this.contacts=newContacts
    }

    

    this.bodyContainer.appendChild(this.contactWrapper);
    this.contactWrapper.innerHTML = "";
    this.contacts.reverse().map(i => {
      this.singleContact = document.createElement("section");
      this.contactTeleDiv = document.createElement("div");
      this.contactEmailDiv = document.createElement("div");
      this.ContactName = document.createElement("p");
      this.ContactTelephone = document.createElement("p");
      this.ContactEmail = document.createElement("p");

      //Styling contactDiv
      this.singleContact.className = "contactDiv";
      this.singleContact.style.backgroundColor = "#264e58";
      this.singleContact.style.height = "auto";
      this.singleContact.style.display = "flex";
      this.singleContact.style.alignItems = "flex-start";
      this.singleContact.style.margin = "20px";
      this.singleContact.style.justifyContent = "space-between";
      this.singleContact.style.padding = "10px 50px";
      this.singleContact.style.color = "#eefceb";
      this.singleContact.style.textShadow = "0.07em 0.07em 0 rgba(0,0,0,.1)";
      this.singleContact.style.textTransform = "uppercase";
      this.singleContact.style.letterSpacing = ".1em";
      this.singleContact.style.fontSize = "14px";

      this.contactTeleDiv.style.display = "flex";
      this.contactTeleDiv.style.flexDirection = "column";
      this.contactTeleDiv.style.alignItems = "center";
      this.contactTeleDiv.style.Width = "100px";

      this.contactEmailDiv.style.display = "flex";
      this.contactEmailDiv.style.Width = "100px";
      this.contactEmailDiv.style.flexDirection = "column";
      this.contactEmailDiv.style.alignItems = "flex-end";
      //End Styling

      this.singleContact.setAttribute("id", i.id);

      this.ContactName.innerHTML = `👤` + "Namn: " + i.name;
      if (i.telephone.length > 1) {
        i.telephone.map(k => {
          this.ContactTelephone = document.createElement("p");
          this.ContactTelephone.innerHTML = "✆ " + k;
          this.contactTeleDiv.appendChild(this.ContactTelephone);
        });
      } else {
        this.ContactTelephone.innerHTML = "✆" + i.telephone;
      }

      this.ContactEmail.innerHTML = `&#128231;` + i.email;
      if (i.email.length > 1) {
        i.email.map(k => {
          this.ContactEmail = document.createElement("p");
          this.ContactEmail.innerHTML = "&#128231; " + k;
          this.contactEmailDiv.appendChild(this.ContactEmail);
        });
      } else {
        this.ContactEmail.innerHTML = "&#128231;" + i.email;
      }

      this.contactWrapper.append(this.singleContact);
      this.singleContact.appendChild(this.ContactName);
      this.singleContact.appendChild(this.contactTeleDiv);
      this.singleContact.appendChild(this.contactEmailDiv);
      this.contactTeleDiv.appendChild(this.ContactTelephone);
      this.contactEmailDiv.appendChild(this.ContactEmail);
    });
  };
}
