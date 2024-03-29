
class Contacts {
    constructor (data) {
       this.data = [];
    }

   add(obj) {
       let index = this.data.findIndex(n => n.id === obj.id);
       if (index === -1) this.data.push(obj);
   }

   edit(id,obj) {
       let ObjEdit= this.data.find(x => x.id === Number(id));
       ObjEdit.edit(obj);
   }
   find(id) {
       return this.data.find(x => x.id === Number(id));
  }

  remove(id) {
       let index = this.data.findIndex(n => n.id === id);
       if (index !== -1) {
       this.data.splice(index, 1);
    }
   }

   get() {
       return this.data;
   }

};
contacts = new Contacts();

class User {
constructor (data) {
   // if (typeof data==='object') this.data=data;
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
   return this;
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
   document.body.appendChild(div);
   this.app = div;
   this.localStorage=localStorage;
   this.createdocument();
   this.getData();
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
      return contactsStorage;
      // if (contactsStorage.length>0) {
      //    for (let contactStorage of contactsStorage) {
      //       contactsapp.add(contactStorage);
      //    }
      // return contactsapp;
      // }
   }
}

set Storage(param) {
    localStorage.setItem('contactsSt', JSON.stringify(param));
    let age = 10;
    document.cookie="storageExpiration=true; max-age="+age;
 }


 getData() {
   let contactsStorage = this.Storage;
   console.log('contactsStorage from localStorage',contactsStorage);
   if (contactsStorage) return console.log('Not empty localStorage');

   (async function() {
  
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) return

      let data = response.json();
      // data - тип promise, поэтому:
         data.then(function(users) {
            users.forEach(function(user,index,users){
            contacts.add(user);
            this.Storage=users;
   //  localStorage.setItem('contactsSt', JSON.stringify(users));
            console.log('contacts after fetch ',contacts.get());  
          })
               
      });
      })();
   }     
};

document.addEventListener('load', ()=>{
   !getCookie('storageExpiration') && localStorage.removeItem('contactsSt')
})

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
// console.log(contactsapp.get());


// console.log("contactsapp: ",contactsapp.get());
console.log("local storage : ",contactsapp.Storage);
console.log('contacts ',contacts.get());         
