class Person extends Index {
    constructor(person) {
      super();
  
      this.singlePerson = person;
  
      this.createDomer();
    }
  
    createDomer() {
      this.formWrap = document.querySelector("#wrapper");
      this.contactWrap = document.querySelector("#contactWrapper");
      this.contactWrap.innerHTML = "";
  
      this.name = document.createElement("p");
      this.ullistTele = document.createElement("ul");
      this.ullistEmail = document.createElement("ul");
  
      //APPEND
      this.formWrap.innerHTML = "";
      this.formWrap.appendChild(this.name);
      this.formWrap.appendChild(this.ullistTele);
      this.formWrap.appendChild(this.ullistEmail);
  
      //STYLING
      this.formWrap.style.display = "flex";
      this.formWrap.style.backgroundColor= "#264e58"
      this.formWrap.style.justifyContent = "space-around";
      this.formWrap.style.alignItems = "baseline";
      this.formWrap.style.textShadow = "0.07em 0.07em 0 rgba(0,0,0,.1)"
      this.formWrap.style.textTransform = "uppercase"
      this.formWrap.style.letterSpacing = ".1em"
      this.formWrap.style.color = "#eefceb";
      this.formWrap.style.fontSize = '16px'
      this.ullistTele.style.listStyle = "none";
      this.ullistTele.style.padding = "0";
      this.ullistEmail.style.listStyle = "none";
      this.ullistEmail.style.padding = "0";
      //END STYLING
  
      this.setValues();
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
  
      telephone.map(i => {
        let list = document.createElement("li");
        let text = document.createElement("p");
        text.innerHTML = "✆ " + i;
        list.appendChild(text);
        this.ullistTele.appendChild(list);
      });
  
      email.map(i => {
        let list = document.createElement("li");
        let text = document.createElement("p");
        text.innerHTML = `&#128231; ` + i;
        list.appendChild(text);
        this.ullistEmail.appendChild(list);
      });
    }
  }
  // this.editHolders = [
  //   (this.inputHolder = document.createElement("div")),
  //   (this.inputHolderTele = document.createElement("div")),
  //   (this.inputHolderEmail = document.createElement("div"))
  // ];
  // this.editInputs = [
  //   (this.editInputName = document.createElement("input")),
  //   (this.editInputTelephone = document.createElement("input")),
  //   (this.editInputEmail = document.createElement("input"))
  // ];
  
  //PLACEHOLDERS
  // for (let i of this.contacts) {
  //   if (i.id === this.singlePerson) {
  //     this.editInputName.placeholder = i.name;
  //   }
  //   this.editInputTelephone.placeholder = i.telephone;
  
  // }
  