"use strict";
class User {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.address = data.address;
        this.phone = data.phone;
    }
    edit(newData) {
        let data = this.info;
        for (let i in newData) {
            for (let j in data) {
                if (i == j && newData[i] != '') {
                    data[j] = newData[i];
                }
            }
        }
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.address = data.address;
        this.phone = data.phone;
    }
    getInfo() {
        console.log(`ID: ${this.id}; name: ${this.name}; email: ${this.email}; address: ${this.address}; phone: ${this.phone}`);
    }
    get() {
        let data = {
            id: this.id,
            name: this.name,
            email: this.email,
            address: this.address,
            phone: this.phone
        }
        return data;
    }
};


class Contacts {
    constructor() {
        this.data = [];
    }
    add(data) {
        let index = this.data.findIndex(n => n.id === data.id);
        if (index === -1) {
            this.data.push(new User(data));
            return 1;
        }
        else return 0;
    }
    edit(id, newData) {
        let index = this.data.findIndex(item => item.id === id);
        if (index != -1) {
            this.data[index].edit(newData);
            return 1;
        }
        else return 0;
    }
    remove(id) {
        let index = this.data.findIndex(item => item.id === id);
        if (index != -1) {
            this.data.splice(index, 1);
            return 1;
        }
        else return 0;
    }
    get() {
        return this.data;
    }
};

class ContactsApp extends Contacts {
    constructor() {
        super();
        this.app = document.createElement('div');
        document.body.append(this.app);
        this.app.className = 'contacts';
        this.createDocument();
    }
    createDocument() {
        let block = document.createElement('div');
        this.app.append(block);
        block.className = 'block';

        let idInDoc = document.createElement('Input');
        idInDoc.type = 'text';
        idInDoc.name = 'id';
        idInDoc.setAttribute("id", "idInDoc");
        idInDoc.setAttribute("placeholder", "Id");
        block.appendChild(idInDoc);

        let nameInDoc = document.createElement('Input');
        nameInDoc.type = 'text';
        nameInDoc.name = 'name';
        nameInDoc.setAttribute("placeholder", "Name");
        nameInDoc.setAttribute("id", "nameInDoc");
        block.appendChild(nameInDoc);

        let emailInDoc = document.createElement('Input');
        emailInDoc.type = 'email';
        emailInDoc.name = 'email';
        emailInDoc.setAttribute("placeholder", "Email");
        emailInDoc.setAttribute("id", "emailInDoc");
        block.appendChild(emailInDoc);

        let addressInDoc = document.createElement('Input');
        addressInDoc.type = 'text';
        addressInDoc.name = 'address';
        addressInDoc.setAttribute("placeholder", "Address");
        addressInDoc.setAttribute("id", "addressInDoc");
        block.appendChild(addressInDoc);

        let phoneInDoc = document.createElement('Input');
        phoneInDoc.type = 'tel';
        phoneInDoc.name = 'phone';
        phoneInDoc.setAttribute("placeholder", "+12345678901");
        phoneInDoc.setAttribute("id", "phoneInDoc");
        block.appendChild(phoneInDoc);

        let buttonAdd = document.createElement('button');
        buttonAdd.classList.add('button');
        buttonAdd.innerHTML = 'Add';
        buttonAdd.onclick = this.onAdd;
        this.app.append(buttonAdd);

        let buttonEdit = document.createElement('button');
        buttonEdit.classList.add('button');
        buttonEdit.innerHTML = 'Edit';
        buttonEdit.onclick = this.onEdit;
        this.app.append(buttonEdit);

        let buttonRemove = document.createElement('button');
        buttonRemove.classList.add('button');
        buttonRemove.innerHTML = 'Remove';
        buttonRemove.onclick = this.onRemove;
        this.app.append(buttonRemove);

        let style = document.createElement('style');
        document.head.append(style);
        style.innerHTML = `
        * {
        margin: 0;
        padding: 0;
        }
        .contacts {
            display: flex;
            align-items: center;
            flex-direction: column;
        }
        .block {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-bottom: 10px;
            margin-top: 10px;
        }
        .button {
            width: 130px; 
            height: 40px;
            margin-bottom: 5px;
            background-color: #aea6e3;
            border: none;
            font-size: 16px;
        }
        input {
            width: 270px;
            height: 38px;
            margin-bottom: 3px;
            background-color: #e9e5ff;
            font-size: 16px;
            border:none;
        }`;

    }
    onAdd() {
        let data = {
            id: document.getElementById('idInDoc').value,
            name: document.getElementById('nameInDoc').value,
            email: document.getElementById('emailInDoc').value,
            address: document.getElementById('addressInDoc').value,
            phone: document.getElementById('phoneInDoc').value,
        }
        let check = contactsApp.add(data);
        document.getElementById('idInDoc').value = '';
        document.getElementById('nameInDoc').value = '';
        document.getElementById('emailInDoc').value = '';
        document.getElementById('addressInDoc').value = '';
        document.getElementById('phoneInDoc').value = '';
        if (check === 1) alert('The User has been added!');
        else alert('The User with this ID already exits!');
        consol.log(contactsApp.get());
    }
    onEdit() {
        let id = prompt('Enter the ID of the user you want to change...');
        let index = contactsApp.data.findIndex(item => item.id === id);
        if (index != -1) {
            alert(`Enter new user data, don't change the ID!`);
            let pushForEdit = document.createElement('button');
            pushForEdit.classList.add('button');
            pushForEdit.innerHTML = 'Push for edit';
            contactsApp.app.appendChild(pushForEdit);
            pushForEdit.addEventListener('click', function () {
                let data = {
                    id: id,
                    name: document.getElementById('nameInDoc').value,
                    email: document.getElementById('emailInDoc').value,
                    address: document.getElementById('addressInDoc').value,
                    phone: document.getElementById('phoneInDoc').value,
                }
                contactsApp.edit(id, data);
                document.getElementById('idInDoc').value = '';
                document.getElementById('nameInDoc').value = '';
                document.getElementById('emailInDoc').value = '';
                document.getElementById('addressInDoc').value = '';
                document.getElementById('phoneInDoc').value = '';
                alert('The User has been edited!');
                pushForEdit.remove();
            });
        }
        else {
            alert('The User with this ID is not exits!');
        }
        consol.log(contactsApp.get());
    }
    onRemove() {
        let id = prompt('Enter the ID of the user you want to change...');
        let index = contactsApp.data.findIndex(item => item.id === id);
        if (index == -1) {
            alert('The User with this ID is not exits!');
        }
        else {
            contactsApp.remove(id);
            alert('The User has been remove!');
        }
        consol.log(contactsApp.get());
    }

    //метод get() от родительского класса

    get storage() {
        //code
    }

    set storage(param) {
        //code
    }

};

let contactsApp = new ContactsApp();

