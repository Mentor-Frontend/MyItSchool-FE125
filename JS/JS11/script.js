'use strict'
class Contacts {
    constructor (data) {
       this.data = [];
    }

   add(obj) {
       let index = this.data.findIndex(n => n.id === obj.id);
       if (index === -1) this.data.push(obj);
   }

   edit(id,obj) {
       let ObjEdit= this.data.find(contact => contact.id === Number(id));
       ObjEdit.edit(obj);
   }
   find(id) {
       return this.data.find(x => x.id === Number(id));
  }

  remove(id) {
       let index = this.data.findIndex(contact => contact.id === id);
       if (index !== -1) {
       this.data.splice(index, 1);
    }
   }

   get() {
       return this.data;
   }

};

class User {
constructor (data) {
   // if (typeof data==='object') this.data=data;
   // this.data = {
   //    id: Number(data.id),
   //    email: data.email,
   // }
   this.id = Number(data.id),
   this.email = data.email,
   this.name = data.name,
   this.address =data.address,
   this.phone = data.phone
}

edit(obj) {
   this.id = obj.id,
   this.email = obj.email,
   this.name = obj.name,
   this.address =obj.address,
   this.phone = obj.phone;
}

get() {
   return this;
}

};

class ContactsApp extends Contacts {
constructor(data) {
   super(data);
   let div=document.createElement('div');
   div.innerHTML='Your Choose';
   div.classList.add('contacts')
   document.body.appendChild(div);
   this.app = div;
   this.localStorage=localStorage;
   this.createdocument();
}

createdocument() {
  
   let button=document.createElement('button');
   button.classList.add('button');
   // this.app.appendChild(button);

   let buttonAdd=button.cloneNode(true);
   buttonAdd.classList.add('class_add');
   buttonAdd.innerHTML="_Add";
   buttonAdd.onclick = this.onAdd;
   this.app.appendChild(buttonAdd);

   let buttonRemove=button.cloneNode(true);
   buttonRemove.classList.add('remove');
   buttonRemove.innerHTML='Remove';
   buttonRemove.onclick = this.onRemove;
   this.app.appendChild(buttonRemove);

   let buttonEdit=button.cloneNode(true);
   buttonEdit.classList.add('edit');
   buttonEdit.innerHTML='Edit';
   buttonEdit.onclick = this.onEdit;
   this.app.appendChild(buttonEdit);

   let my_form=document.createElement('Form');
   my_form.classList.add('my_form');
   my_form.name='myForm';
   my_form.method='POST';
   
   let doc_id=document.createElement('Input');
   doc_id.type='text';
   doc_id.name='id';
   doc_id.value='id';
   doc_id.setAttribute("id","doc_id");
   my_form.appendChild(doc_id);

   let doc_name=document.createElement('Input');
   doc_name.type='text';
   doc_name.name='name';
   doc_name.value='name';
   doc_name.setAttribute("id","doc_name");
   my_form.appendChild(doc_name);
   
   let doc_email=document.createElement('Input');
   doc_email.type='text';
   doc_email.name='email';
   doc_email.value='email';
   doc_email.setAttribute("id","doc_email");
   my_form.appendChild(doc_email);


   let doc_address=document.createElement('Input');
   doc_address.type='text';
   doc_address.name='address';
   doc_address.value='address';
   doc_address.setAttribute("id","doc_address");
   my_form.appendChild(doc_address);


   let doc_phone=document.createElement('Input');
   doc_phone.type='text';
   doc_phone.name='phone';
   doc_phone.value='phone';
   doc_phone.setAttribute("id","doc_phone");
   my_form.appendChild(doc_phone);

   document.body.appendChild(my_form);
   // my_form.submit();

   let style = document.createElement('style');
   style.innerHTML=`
   .button{
        font-size: 18px;
        color: green;
        width: 150px;
        height: 30px;
      }
   .add {
       text:'ADD';
   }
   .my_form {
       display: flex;
       flex-direction: column;
       width: 300px;
       gap: 5px;
       padding:10px;
   }
    `;
   document.head.appendChild(style);
}

onAdd() {
   let newUser=new User({id:document.getElementById('doc_id').value, 
   name:document.getElementById('doc_name').value,
    email: document.getElementById('doc_email').value, 
    address: document.getElementById('doc_address').value, 
    phone: document.getElementById('doc_phone').value });
      
   contactsapp.add(newUser);
   console.log('get', contactsapp.get());         
   contactsapp.Storage=contactsapp.get();
   console.log(contactsapp.get());         
}

onRemove() {
   contactsapp.remove(Number(document.getElementById('doc_id').value));
   console.log(contactsapp);    
   contactsapp.Storage=contactsapp.get();
}

onEdit() {
   let objEdit =contactsapp.find(Number(document.getElementById('doc_id').value)); 
   if (objEdit) {
   contactsapp.edit(objEdit.id,{id:Number(document.getElementById('doc_id').value), 
   name:document.getElementById('doc_name').value,
    email: document.getElementById('doc_email').value, 
    address: document.getElementById('doc_address').value, 
    phone: document.getElementById('doc_phone').value });
   console.log(contactsapp.get()); 
   contactsapp.Storage=contactsapp.get();
   
}    
}

get Storage() {
     let contactsStorage = (this.localStorage.getItem('contactsSt'));
     if (contactsStorage) {
      contactsStorage = JSON.parse(contactsStorage);
      
      if (contactsStorage.length>0) {
         for (let contactStorage of contactsStorage) {
            contactsapp.add(contactStorage);
         }
      return contactsapp;
      }
   }
}

set Storage(param) {
   this.localStorage.setItem('contactsSt', JSON.stringify(param));
   let ageSec = 60*60*24*14;
   //  60 sec*60 min*24hours*14days
   let ageMs = ageSec * 1000;
   //  document.addEventListener('unload', () => {
   //    if (!localStorage.getItem('expiresContacts')) {
   //       localStorage.setItem('expiresContacts', new Date().getTime() + ageMs)
   //    }
   //  })
    document.cookie="storageExpiration=true; max-age="+ageSec;
    console.log( getCookie('storageExpiration'));//I's working!
 }

};

document.addEventListener('load', () => {
   !getCookie('storageExpiration') && localStorage.removeItem('contactsSt')
})



const contact = new User({id:1, name:"Vasya", email: "11@rwf.yh", address: "Adddddrrrress", phone: "348484" })
const contact2 = new User({id:2, name:"Petya", email: "23781@rwf.yh", address: "Adddddrrrress", phone: "46457" })
const contact3 = new User({id:3, name:"Gena", email: "2342@rwf.yh", address: "Adddddrrrress", phone: "7979" })

console.log('contact1',contact);
// const contacts = new Contacts();
// console.log(contacts);

const contactsapp = new ContactsApp();
contactsapp.add(contact);
contactsapp.add(contact2);
contactsapp.add(contact3);
console.log(contactsapp);
function getCookie(name) {
   const value = `; ${document.cookie}`;
   const parts = value.split(`; ${name}=`);
   if (parts.length === 2) return parts.pop().split(';').shift();
}

contact = new User({id:1, name:"Vasya", email: "11@rwf.yh", address: "Adddddrrrress", phone: "348484" })
contact2 = new User({id:2, name:"Petya", email: "23781@rwf.yh", address: "Adddddrrrress", phone: "46457" })
contact3 = new User({id:3, name:"Gena", email: "2342@rwf.yh", address: "Adddddrrrress", phone: "7979" })

contactsapp = new ContactsApp();
contactsapp.Storage;
// contactsapp.add(contact);
// contactsapp.add(contact2);
// contactsapp.add(contact3);
console.log(contactsapp.get());


