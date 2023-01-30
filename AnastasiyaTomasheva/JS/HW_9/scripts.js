'use strict';

function toDoList() {
    
    let div = document.createElement('div');
    div.innerHTML = '<strong>Let`s go!</strong>';
    document.body.append(div);
    div.classList.add('titleOfList')

    let fieldForTasks = document.createElement('div');
    fieldForTasks.innerHTML = '<input type = "text"  placeholder = "What do you want to do?" value = " " id = info size = 30>';
    document.body.append(fieldForTasks);
    fieldForTasks.classList.add('whatToWrite');

    let whatToWrite;

    function text () {
        document.querySelector('input').addEventListener('keydown', function(e) {
            if (e.keyCode === 13) {
                whatToWrite = this.value;
                addField()
            }
        })
    }

    text();

    function addField () {
        let field = document.createElement('div');
        field.innerHTML = `
        <div class = check>
        <form>
        <label>
        <input type = 'checkbox'>
        <em>whatToWrite</em>
        </label>
        </form>
        </div>
        `;
        // 
        document.body.after(field);
        
        
        document.getElementById('info').value = '';
        let em = document.querySelector('em');
        em.innerHTML = whatToWrite;
    }

    function del() {
        document.querySelectorAll('div')[2].remove();
    }
    

    let button = document.createElement('div');
    
    button.innerHTML = `<p><input type="button" value="Delete all"></p>`;

    document.body.after(button);

    button.onclick = del;

    function del() {
        
            let a = document.querySelectorAll('.check');
            console.log(a)
            for (let i = 0; i < a.length; i++) {
                console.log(i)
                a[i].remove();
            }
    } 

    let style = document.createElement('style');
    style.innerHTML = `
    .titleOfList {
        background-color: #21b1c4;
        width: 25%;
        padding: 5px 0 5px 0;
        text-align: center;
        border-radius: 7px;
        margin-bottom: 10px;
        box-shadow: 0 0 10px rgb(0 0 0 / 50%);
    }

    .whatToWrite {
        margin-left: 3px;
    }

    p {

        width: 25%;
        text-align: center;
    }

    .check {

        margin-left: 10px;
        width: 25%;
        background-color: beige;
        overflow:hidden;
    }

    input:checked + em {
        
        text-decoration: line-through;
    }
    `

    document.head.append(style);
}

toDoList();