window.addEventListener('load', function () {
    // console.log('Страница загружена');
   
    let itemList = document.querySelector('.item-list');
    let input = document.querySelector('.task-input');
    let button = document.querySelector('.button');
   
    
    

    button.addEventListener('click', function () {
        if (button.innerHTML == 'open task list') {
            button.innerHTML = 'Close tasks list';
            button.style.backgroundColor = 'orange';
            button.style.fontSize = '16px';
        } else {
            button.innerHTML = 'open task list';
            button.style.backgroundColor = 'green';
        }
        
        itemList.classList.toggle('hidden');
        input.classList.toggle('hidden');
    })

    input.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            let item = document.createElement('li');
            itemList.append(item);
            item.classList.add('item');
            
            let checkBox = document.createElement('div');
            checkBox.classList.add('checkbox');
            item.append(checkBox);
           
            let taskName = document.createElement('p');
            taskName.innerHTML = this.value;
            item.append(taskName);
            this.value = '';

            let clear = document.querySelector('#clear-list');
            clear.classList.remove('hidden');

            clear.addEventListener('click', function () {
                itemList.innerHTML = '';
                clear.classList.add('hidden');
            })

            checkBox.addEventListener('click', function () {                 
                if (checkBox.style.backgroundColor === 'green') {
                    checkBox.style.backgroundColor = 'yellow'; 
                } else checkBox.style.backgroundColor = 'green';              
                taskName.classList.toggle('decorline');               
            })

            taskName.addEventListener('click', function () {
                let newText = prompt('Введите правки в задачу');
                taskName.innerHTML = newText;
            })

            taskName.addEventListener('mouseover', function () {
                taskName.style.fontWeight = 'bold';
            })

            taskName.addEventListener('mouseout', function () {
                taskName.style.fontWeight = 'normal';
            })
        }
    })
    
    

})