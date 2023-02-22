'use strict';

let WhatToSee = function(){

        this.genre = prompt('Укажите жанр', 'Ужасы, Комедия, Мультфильм'),
        this.genreHorror = 'Ужасы',
        this.checkGenreHorror = /Ужас/i,
        this.checkGenreComedy = /Комед/i,
        this.checkGenreCartoon = /Мульт/i,
        this.genreComedy = 'Комедия',
        this.genreCartoon = 'Мультфильм'
}

        let letSee = new WhatToSee();

        letSee.horror = ['Сияние', 'Кошмар на улице Вязов', 'Кэрри', 'Проклятие', 'Восставший из ада'];
        letSee.comedy = ['Очень страшное кино', 'Убойные каникулы', 'Джуманджи', 'Добро пожаловать в Zомбилэнд', 'Полицейская академия'];
        letSee.cartoon = ['Тайная жизнь домашних животных', 'Монстры на каникулах', 'Семейка Аддамс', 'Кот в сапогах', 'Семейка Крудс'];

        function choose () {

        if (letSee.checkGenreHorror.test(letSee.genre) == true) {
            letSee.horrorRek = letSee.horror[Math.floor(Math.random() * letSee.horror.length)];
            alert(`Посмотрите "${letSee.horrorRek}"`);    
            }
            
        else if (letSee.checkGenreComedy.test(letSee.genre) == true) {

            letSee.comedyRek = letSee.comedy[Math.floor(Math.random() * letSee.comedy.length)]
            alert(`Посмотрите "${letSee.comedyRek}"`);

        } else if (letSee.checkGenreCartoon.test(letSee.genre) == true) {

            letSee.cartoonRek = letSee.cartoon[Math.floor(Math.random() * letSee.cartoon.length)]
            alert(`Посмотрите "${letSee.cartoonRek}"`);

}
}

let movies = Object.create(letSee);

choose();

alreadySaw ()

function alreadySaw () {
    movies.choise = confirm ('Уже смотрели?');
    if (movies.choise) {
        choose();
        alreadySaw ();
    } else {
        alert ('Приятного просмотра!');
    }
}



