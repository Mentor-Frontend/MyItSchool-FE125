class Contacts {
  data;
  constructor(data) {
    if (data) {
      this.data = data;
    } else {
      this.data = [];
    }
  }
  addContact(obj) {
    return this.data.push(obj);
  }
  edit(id, newobj) {
    for (let i = 0; i < this.data.length; i++) {
      if (id == this.data[i].id) {
        this.data[i].name = newobj.name;
        this.data[i].email = newobj.email;
        this.data[i].adress = newobj.adress;
        this.data[i].phone = newobj.phone;
      }
    }
  }
  remove(id) {
    for (let i = 0; i < this.data.length; i++) {
      if (id == this.data[i].id) {
        this.data.splice(i, 1);
      }
    }
  }
  get(getContainer) {
    for (let i = 0; i < this.data.length; i++) {
      console.log("work");
      let id = document.createElement("p");
      let name = document.createElement("p");
      let email = document.createElement("p");
      let adress = document.createElement("p");
      let phone = document.createElement("p");
      getContainer.append(id);
      getContainer.append(name);
      getContainer.append(email);
      getContainer.append(adress);
      getContainer.append(phone);
      id.innerHTML = "id is: " + this.data[i].id;
      name.innerHTML = "name is: " + this.data[i].name;
      email.innerHTML = "email is: " + this.data[i].email;
      adress.innerHTML = "adress is: " + this.data[i].adress;
      phone.innerHTML = "phone is: " + this.data[i].phone;
    }
  }
}
let matches = document.cookie.match(new RegExp(
  "(?:^|; )" + 'StorageExpiration'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
));
if(!matches) localStorage.clear();
class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.email = userData.email;
    this.adress = userData.adress;
    this.phone = userData.phone;
  }
  edit(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.email = obj.email;
    this.adress = obj.adress;
    this.phone = obj.phone;
  }
  get info() {
    return this;
  }
}
let contactList = new Contacts();
class ContactsApp extends Contacts {
  constructor(data) {
    super(data);
    this.newField();
  }
  app = document.createElement("div");
  header = document.createElement("h1");
  addButton = document.createElement("button");
  editButton = document.createElement("button");
  removeButton = document.createElement("button");
  showListButton = document.createElement("button");
  showContacts = document.createElement("button");

  inputId = document.createElement("input");
  inputName = document.createElement("input");
  inputEmail = document.createElement("input");
  inputPhone = document.createElement("input");
  inputAdress = document.createElement("input");

  newField() {
    document.querySelector("body").append(this.app);
    this.app.classList.add("contacts");
    this.header.innerHTML = "Contacts List";
    this.app.append(this.header);
    this.addButton.classList.add("button");
    this.addButton.setAttribute("id", "addButton");
    this.addButton.innerHTML = "add";
    this.app.append(this.addButton);
    this.showListButton.classList.add("button");
    this.showListButton.setAttribute("id", "ShowList");
    this.showListButton.innerHTML = "Show Inputs";
    this.app.append(this.showListButton);
    this.editButton.classList.add("button");
    this.editButton.setAttribute("id", "editButton");
    this.editButton.innerHTML = "edit";
    this.app.append(this.editButton);
    this.removeButton.classList.add("button");
    this.removeButton.setAttribute("id", "removeButton");
    this.removeButton.innerHTML = "remove";
    this.app.append(this.removeButton);
    this.app.append(this.showContacts);
    this.showContacts.setAttribute("id", "ShowContacts");
    this.showContacts.innerHTML = "Show Contacts";
  }
  onAdd() {
    let containerContactsFields = document.createElement("div");
    this.app.append(containerContactsFields);
    containerContactsFields.classList.add("containerContacts");
    containerContactsFields.append(this.inputId);
    containerContactsFields.append(this.inputName);
    containerContactsFields.append(this.inputEmail);
    containerContactsFields.append(this.inputPhone);
    containerContactsFields.append(this.inputAdress);
    this.inputId.setAttribute("placeholder", "Enter ID");
    this.inputId.setAttribute("type", "text");
    this.inputName.setAttribute("placeholder", "Enter Name");
    this.inputName.setAttribute("type", "text");
    this.inputEmail.setAttribute("placeholder", "Enter Email");
    this.inputEmail.setAttribute("type", "text");
    this.inputPhone.setAttribute("placeholder", "Enter Phone");
    this.inputPhone.setAttribute("type", "text");
    this.inputAdress.setAttribute("placeholder", "Enter Adress");
    this.inputAdress.setAttribute("type", "text");
    const thisObj = this;
    this.addButton.addEventListener("click", function () {
      let obj = {
        id: thisObj.inputId.value,
        name: thisObj.inputName.value,
        email: thisObj.inputEmail.value,
        adress: thisObj.inputAdress.value,
        phone: thisObj.inputPhone.value,
      };
      console.log(obj);
      thisObj.addContact(obj);
      thisObj.inputId.value = "";
      thisObj.inputName.value = "";
      thisObj.inputEmail.value = "";
      thisObj.inputPhone.value = "";
      thisObj.inputAdress.value = "";
    });
  }
  onEdit() {
    let editField = document.createElement("div");
    let editFieldinput = document.createElement("input");
    let editFieldsSection = document.createElement("div");
    editField.classList.add("editField");

    this.app.append(editField);
    editField.append(editFieldsSection);
    editFieldsSection.append(editFieldinput);

    editFieldinput.setAttribute("placeholder", "Enter edit Id");

    const thisObj = this;
    editFieldinput.addEventListener("keydown", function (event) {
      if (event.keyCode == 13) {
        let saveButton = document.createElement("button");
        saveButton.innerHTML = "Save";

        let inputEditName = document.createElement("input");
        let inputEditEmail = document.createElement("input");
        let inputEditPhone = document.createElement("input");
        let inputEditAdress = document.createElement("input");

        editFieldsSection.append(inputEditName);
        editFieldsSection.append(inputEditEmail);
        editFieldsSection.append(inputEditPhone);
        editFieldsSection.append(inputEditAdress);
        editFieldsSection.append(saveButton);
        for (let i = 0; i < thisObj.data.length; i++) {
          if (thisObj.data[i].id == editFieldinput.value) {
            inputEditName.value = thisObj.data[i].name;
            inputEditEmail.value = thisObj.data[i].email;
            inputEditAdress.value = thisObj.data[i].adress;
            inputEditPhone.value = thisObj.data[i].phone;

            saveButton.addEventListener("click", function () {
              let obj = {
                name: inputEditName.value,
                email: inputEditEmail.value,
                adress: inputEditAdress.value,
                phone: inputEditPhone.value,
              };
              thisObj.edit(editFieldinput.value, obj);
              localStorage.setItem("contacts", JSON.stringify(thisObj.data));
              sessionStorage.setItem("contacts", JSON.stringify(thisObj.data));
              inputEditName.remove();
              inputEditEmail.remove();
              inputEditPhone.remove();
              inputEditAdress.remove();
              saveButton.remove();
            });
          }
        }
      }
      thisObj.editButton.addEventListener("click", function () {
        let saveButton = document.createElement("button");
        saveButton.innerHTML = "Save";

        let inputEditName = document.createElement("input");
        let inputEditEmail = document.createElement("input");
        let inputEditPhone = document.createElement("input");
        let inputEditAdress = document.createElement("input");

        editFieldsSection.append(inputEditName);
        editFieldsSection.append(inputEditEmail);
        editFieldsSection.append(inputEditPhone);
        editFieldsSection.append(inputEditAdress);
        editFieldsSection.append(saveButton);
        for (let i = 0; i < thisObj.data.length; i++) {
          if (thisObj.data[i].id == editFieldinput.value) {
            inputEditName.value = thisObj.data[i].name;
            inputEditEmail.value = thisObj.data[i].email;
            inputEditAdress.value = thisObj.data[i].adress;
            inputEditPhone.value = thisObj.data[i].phone;

            saveButton.addEventListener("click", function () {
              let obj = {
                name: inputEditName.value,
                email: inputEditEmail.value,
                adress: inputEditAdress.value,
                phone: inputEditPhone.value,
              };
              thisObj.edit(editFieldinput.value, obj);
              this.editFieldsSection.remove();
            });
          }
        }
      });
    });
  }
  onRemove() {
    let removeField = document.createElement("div");
    let removeFieldinput = document.createElement("input");
    let fieldsdiv = document.createElement("div");
    removeFieldinput.setAttribute("placeholder", "Enter Id Element");
    removeFieldinput.setAttribute("id", "remove");
    removeField.classList.add("removeField");
    this.app.append(removeField);
    removeField.append(removeFieldinput);
    const thisObj = this;
    removeField.append(fieldsdiv);
    this.removeButton.addEventListener("click", function () {
      if (!document.querySelector("#remove"))
        removeField.append(removeFieldinput);
    });
    removeFieldinput.addEventListener("keydown", function (event) {
      if (event.keyCode == 13) {
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        removeField.append(deleteButton);

        let removeEditName = document.createElement("input");
        let removeEditEmail = document.createElement("input");
        let removeEditPhone = document.createElement("input");
        let removeEditAdress = document.createElement("input");

        fieldsdiv.append(removeEditName);
        fieldsdiv.append(removeEditEmail);
        fieldsdiv.append(removeEditPhone);
        fieldsdiv.append(removeEditAdress);
        fieldsdiv.append(deleteButton);
        for (let i = 0; i < thisObj.data.length; i++) {
          if (thisObj.data[i].id == removeFieldinput.value) {
            removeEditName.value = thisObj.data[i].name;
            removeEditEmail.value = thisObj.data[i].email;
            removeEditAdress.value = thisObj.data[i].adress;
            removeEditPhone.value = thisObj.data[i].phone;
            deleteButton.addEventListener("click", function () {
              thisObj.remove(removeFieldinput.value);

              removeField.remove();
            });
          }
        }
      }
    });
  }
  onGet() {
    let getContainer = document.createElement("div");
    getContainer.classList.add("getContainer");
    this.app.append(getContainer);

    this.get(getContainer);
  }
  set storage(data) {
    const thisObj = this;

    this.addButton.addEventListener("click", function () {
      length = data.length;
      localStorage.setItem(
        data[length - 1].id,
        JSON.stringify(data[length - 1])
      );
      
      document.cookie = "StorageExpiration = true; max-age = 864000"; 

    });
  }
  get storage(){
    for(let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
      console.log(`${key}: ${localStorage.getItem(key)}`);
    }
  }
}

let contactsApp = new ContactsApp(contactList.data);
contactsApp.showListButton.addEventListener("click", function () {
  if (!document.querySelector(".containerContacts")) contactsApp.onAdd();
});
contactsApp.editButton.addEventListener("click", function () {
  if (!document.querySelector(".editField")) contactsApp.onEdit();
});
contactsApp.editButton.addEventListener("click", function () {
  if (!document.querySelector(".editField")) contactsApp.onEdit();
});
contactsApp.removeButton.addEventListener("click", function () {
  if (!document.querySelector(".removeField")) contactsApp.onRemove();
});
contactsApp.showContacts.addEventListener("click", function () {
  contactsApp.onGet();
});
contactsApp.showListButton.addEventListener("click", function () {
  contactsApp.storage = contactsApp.data;
});
contactsApp.showListButton.addEventListener("click", function () {
  contactsApp.storage;
});