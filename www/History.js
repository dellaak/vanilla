class History extends Index {
  constructor() {
    super();
  }

  setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  addActive(value, data) {
    let name = data;
    let val = value
    let num = parseInt(val, 10);

    for (let i of this.contacts) {
      if (i.name === name) {
        this.activeVersion = i;
      }
    }
    let matchedPers;
    this.activeVersion.version.reverse().map(k => {
      let h = this.activeVersion.version.indexOf(k);
      if (h === num) {
        matchedPers = k;
      }
    });


    this.activeVersion.name = matchedPers[0].name;
    this.activeVersion.telephone = matchedPers[0].telephone;
    this.activeVersion.email = matchedPers[0].email;

    this.contactWrap = document.querySelector("#contactWrapper");
    this.formWrap = document.querySelector("#wrapper");
    this.contactWrap.innerHTML = "";
    new Index().saveActivePerson(this.activeVersion);
    new Person(this.activeVersion).createDomer();
    this.renderHistory(this.activeVersion.id);
    this.renderAddedandRemoved(this.activeVersion.id)
 
    
  }

  renderHistory(data) {
    this.contactWrap = document.querySelector("#contactWrapper");
    this.contactWrap.innerHTML=''
    this.oldNameDiv = document.querySelector("#nameDiv");
    this.nameUl=document.createElement("ul");
    this.ulTeleHistory = document.createElement("ul");
    this.ulEmailHistory = document.createElement("ul");
    this.infoText = document.createElement('p')
    this.infoText.innerHTML="Klicka på en kontakt för att göra den till primär. Är kontakten grå så är den aktiv! Du behöver inte spara.."
    this.infoText.style.textAlign="center"
    this.infoText.style.fontSize="20px"
    this.infoText.style.fontStyle="italic"
    this.infoText.style.color="white"
    this.infoText.style.backgroundColor="#6e6659"
    this.infoText.style.padding="20px"
    this.contactWrap.appendChild(this.infoText)

    this.activeContact;
    for (let i of this.copyOfContacts) {
      if (i.id === data) {
        this.activeContact = i;   
      }

      

      if (i.id === data) {
        i.version.reverse().map(i => {
          let nameDiv = document.createElement("div");
          let teleDiv = document.createElement("div");
          let emailDiv = document.createElement("div");
          nameDiv.appendChild(this.nameUl);
          teleDiv.appendChild(this.ulTeleHistory);
          emailDiv.appendChild(this.ulEmailHistory);
          let div = document.createElement("div");
          let textName = document.createElement("p");

          let { name, telephone, email } = i[0];


        
          let sameTele =
            this.activeContact.telephone.length === telephone.length &&
            this.activeContact.telephone.every(function(element, index) {
              return element === telephone[index];
            });

          let sameEmail =
            this.activeContact.email.length === email.length &&
            this.activeContact.email.every(function(element, index) {
              return element === email[index];
            });


       let activeName= i[0].name === this.activeContact.name
         
       telephone.map(k=>{
        this.telep = document.createElement("p");
        this.telep.innerHTML = "✆ " + k;
        teleDiv.appendChild(this.telep);
       })


       email.map(k=>{
        this.emailp = document.createElement("p");
        this.emailp.innerHTML = "&#128231;" + k;
        emailDiv.appendChild(this.emailp);
       })
     
          textName.innerHTML = i[0].name;
          div.style.display = "flex";
          div.style.backgroundColor = "#89bdbb";
          div.style.flexWrap = "wrap";
          div.style.justifyContent = "space-between";
          div.style.alignItems = "center";
          div.style.padding = "20px";
          div.style.margin = "10px 0px";
          div.style.border = "1px solid black";
          this.contactWrap.appendChild(div);
          div.appendChild(nameDiv);
          div.appendChild(teleDiv);
          div.appendChild(emailDiv);
          nameDiv.appendChild(textName);
          let objindex = this.activeContact.version.indexOf(i);

          if (activeName && sameTele && sameEmail) {
            (div.className = "active"),
              this.setAttributes(div, {
                value: `${objindex}`,
                data: `${this.activeContact.name}`
              });
            div.style.backgroundColor = "lightgrey";
          } else {
            div.className = "not-active";
            this.setAttributes(div, {
              value: `${objindex}`,
              data: `${this.activeContact.name}`
            });
            
          }
        });
      }
    }
 
  }

  renderAddedandRemoved(data) {
    this.bottomDiv = document.querySelector("#bottomDiv");
    this.bottomDiv.innerHTML = "";
    this.addedTeleDiv = document.createElement("div");
    this.removedTeleDiv = document.createElement("div");
    this.addedEmailDiv = document.createElement("div");
    this.removedEmailDiv = document.createElement("div");
    let atText = document.createElement("p");
    let rtText = document.createElement("p");
    let aeText = document.createElement("p");
    let reText = document.createElement("p");
    this.addedTeleDiv.appendChild(atText);
    this.removedTeleDiv.appendChild(rtText);
    this.addedEmailDiv.appendChild(aeText);
    this.removedEmailDiv.appendChild(reText);
    atText.innerHTML = "Tillagda Nummer";
    rtText.innerHTML = "Borttagna Nummer";
    aeText.innerHTML = "Tillagda Email";
    reText.innerHTML = "Borttagna Email";
    this.bottomDiv.appendChild(this.addedTeleDiv);
    this.bottomDiv.appendChild(this.removedTeleDiv);
    this.bottomDiv.appendChild(this.addedEmailDiv);
    this.bottomDiv.appendChild(this.removedEmailDiv);

    this.ul = document.createElement("ul");
    //STYLING
    this.bottomDiv.style.display = "flex";
    this.bottomDiv.style.flexWrap="wrap"
    this.bottomDiv.style.width = "100%";
    this.bottomDiv.style.justifyContent = "space-around";

    //END
    for (let i of this.copyOfContacts) {
      if (i.id === data) {
        i.addedTelephone.map(i => {
          let addedTelephone = document.createElement("p");
          let addedplusIcon = document.createElement("span");
          addedTelephone.innerHTML = "+ " + i;
          addedTelephone.style.color="lightgreen"
          this.addedTeleDiv.append(addedTelephone);
        });
      }

      if (i.id === data) {
        i.removedTelephone.map(i => {
          let removedTelephone = document.createElement("p");
          removedTelephone.innerHTML = "🗑" + i;
          removedTelephone.style.color="red"
          this.removedTeleDiv.append(removedTelephone);
        });
      }

      if (i.id === data) {
        i.addedEmail.map(i => {
          let addedEmail = document.createElement("p");
          addedEmail.innerHTML = "+ " + i;
          addedEmail.style.color="lightgreen"
          this.addedEmailDiv.append(addedEmail);
        });
      }

      if (i.id === data) {
        i.removedEmails.map(i => {
          let removedEmail = document.createElement("p");
          removedEmail.innerHTML = "🗑" + i;
          removedEmail.style.color="red"
          this.removedEmailDiv.append(removedEmail);
        });
      }
    }
  }
}
