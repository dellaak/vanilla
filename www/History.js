class History extends Index {
  constructor() {
    super();
  }

  renderHistory(data) {
    this.contactWrap = document.querySelector("#contactWrapper");
    this.bottomDiv = document.querySelector("#bottomDiv");
    this.oldNameDiv = document.querySelector("#nameDiv");
    this.addedTeleDiv = document.createElement("div");
    this.removedTeleDiv = document.createElement("div");
    this.addedEmailDiv = document.createElement("div");
    this.removedEmailDiv = document.createElement("div");
    this.ul = document.createElement("ul");
    this.bottomDiv.appendChild(this.addedTeleDiv);
    this.bottomDiv.appendChild(this.removedTeleDiv);
    this.bottomDiv.appendChild(this.addedEmailDiv);
    this.bottomDiv.appendChild(this.removedEmailDiv);

    //STYLING
    this.bottomDiv.style.display = "flex";
    this.bottomDiv.style.width = "100%";
    this.bottomDiv.style.justifyContent = "space-around";

    //END

    for (let i of this.copyOfContacts) {
        this.versions = i.version
        
      if (i.id === data) {
        i.addedTelephone.map(i => {
          let addedTelephone = document.createElement("p");
          addedTelephone.innerHTML = "+ " + i;
          this.addedTeleDiv.append(addedTelephone);
        });
      }

      if (i.id === data) {
        i.removedTelephone.map(i => {
          let removedTelephone = document.createElement("p");
          removedTelephone.innerHTML = "- " + i;
          this.removedTeleDiv.append(removedTelephone);
        });
      }

      if (i.id === data) {
        i.addedEmail.map(i => {
          let addedEmail = document.createElement("p");
          addedEmail.innerHTML = "+ " + i;
          this.addedEmailDiv.append(addedEmail);
        });
      }

      if (i.id === data) {
        i.removedEmails.map(i => {
          let removedEmail = document.createElement("p");
          removedEmail.innerHTML = "- " + i;
          this.removedEmailDiv.append(removedEmail);
        });
      }
      //   if (i.id === data) {
      //     i.oldNames.map(i => {
      //       let oldName = document.createElement("p");
      //       oldName.innerHTML = i;
      //       this.oldNameDiv.append(oldName);
      //     });
      //   }


    this.activeContact;

      if (i.id === data) {
       this.activeContact=i
        };
      
      if (i.id === data) {
        i.version.reverse().map(i => {
            let nameDiv = document.createElement("div");
            let teleDiv = document.createElement("div");
            let emailDiv = document.createElement("div");
            nameDiv.appendChild(this.ul);
            teleDiv.appendChild(this.ul);
            emailDiv.appendChild(this.ul);
            let div = document.createElement("div");
            let textName = document.createElement("p");
            let textTele = document.createElement("p");
            let textEmail = document.createElement("p");
            let setActiveButton = document.createElement("button");
            let {name, telephone,email} = i[0]
            let b = this.versions.indexOf(i)
            
            let sameTele = (this.activeContact.telephone.length == telephone.length) && this.activeContact.telephone.every(function(element, index) {
                return element === telephone[index]; 
            });

            let sameEmail= (this.activeContact.email.length == email.length) && this.activeContact.email.every(function(element, index) {
                return element === email[index]; 
            });
           
        
          setActiveButton.style.width = "100px";
          setActiveButton.style.height = "30px";
          setActiveButton.innerHTML = "Sätt som primär";
          setActiveButton.className = "setActiveContact";
          textName.innerHTML = i[0].name;
          textTele.innerHTML = "✆" + i[0].telephone;
          textEmail.innerHTML = "&#128231;" + i[0].email;
          div.style.display = "flex";
          div.style.backgroundColor="#89bdbb"
          div.style.flexWrap="wrap"
          div.style.justifyContent = "space-between";
          div.style.alignItems = "center";
          div.style.padding = "20px";
          div.style.margin = "10px 0px";
          div.style.border = "1px solid black";
          if(name,sameEmail,sameTele){
            div.style.backgroundColor="#102d31"
            div.style.color="white"
           div.setAttribute('class','primary')
        }
          this.contactWrap.appendChild(div);
          div.appendChild(nameDiv);
          div.appendChild(teleDiv);
          div.appendChild(emailDiv);
          nameDiv.appendChild(textName);
          teleDiv.appendChild(textTele);
          emailDiv.appendChild(textEmail);
        if(div.className==="primary"){
            return
        }else{
          div.appendChild(setActiveButton);
        }

     
        });
      }
    }
  }
}
