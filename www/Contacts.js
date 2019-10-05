class Contacts extends Index {
    constructor() {
      super();
  
      this.createDom();
    }
  
    createDom = () => {
      this.contacts = JSON.parse(localStorage.contacts);
      let body = document.querySelector("body");
  
      this.contacts.reverse().map(i => {
          this.contactWrapper = document.createElement("div");
          this.ptag = document.createElement("p");
          this.ptag.innerHTML = i.name; 
          body.appendChild(this.contactWrapper);
          this.contactWrapper.appendChild(this.ptag)
  
        
      });
    };
  }
  