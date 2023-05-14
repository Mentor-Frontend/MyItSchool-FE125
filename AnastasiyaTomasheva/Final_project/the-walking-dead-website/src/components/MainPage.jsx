import React, { useState } from 'react';

function MainPage() {
    

const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
    setScroll(window.scrollY);
    };

    React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const animItems = document.querySelectorAll('.main-text');

    if(animItems.length > 0) {

        const animOnScroll = () => {
            for(let i=0; i<animItems.length; i++ ){
                const animItem = animItems[i];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if(animItemHeight > window.innerHeight){
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((scroll > animItemOffset - animItemPoint) && scroll < (animItemOffset + animItemHeight)){
                    animItem.classList.add('scrolling')
                } else {
                    animItem.classList.remove('scrolling')
                }
            }
        }
        window.addEventListener('scroll', animOnScroll);

        function offset(el){
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
        setTimeout(() => {
            animOnScroll()
        }, 300)
    }
    
    return (
        <>
        <h1 className='main-title'>The Walking Dead</h1>
        <div className='mainDescription'>
            <div className='main-text'>«Ходячие мертвецы» (англ: The Walking Dead) — американская медиафраншиза, начатая в далёком 2003 году художником Робертом Киркманом, создателем франшизы «Неуязвимый», спустя много лет тоже разжившимся телеадаптацией.</div>
            <div className='main-text'>«Ходячие» изначально были историей про обычного копа, спасающего свою семью в условиях внезапного апокалипсиса. Со временем это вылилось в эпическую сторону с войнами группировок, появлением чего-то вроде государства (Содружества) и сатирой под конец.</div>
            <div className='main-text' >Первый шаг к развитию франшизы из просто известной в суперпопулярную стал выход сериала, снятого известным режиссёром Фрэнком Дарабонтом («Зелёная миля», «Побег из Шоушенка», «Мажестик»). Точнее, снят был первый сезон, самый лучший. Дальше последовали хорошие второй и третий, а вот потом начался упадок и даже многие фанаты не выдержали. Всё это, правда, не помешало удержаться в статусе культового. Более того, именно этот сериал возродил в народе интерес к старым добрым медленным зомби (но ненадолго).</div>
            <div className='main-text'>В 2012-13 гг. началось уже официальное деление франшизы на комиксовую вселенную и сериальную. Сначала вышла одноимённая игра от Telltale, ныне не менее культовая чем сам комикс, во вселенной которого находится, а потом подоспел шутер по сериалу.</div>
            <div className='main-text'>Сегодня комикс-вселенная насчитывает довольно большое количество комиксов, видеоигр и, неожиданно, прозы. Причём последней вышло действительно много.</div>
            <div className='main-text'>Телевселенная кроме основного шоу насчитывает два полноценных спин-оффа, несколько игр и на подходе полнометражные фильмы.</div>
            <div className='main-text'>Что важно, обе подсерии и не думают заканчиваться, несмотря на выход финального сезона сериала и давно завершившегося комикса.</div>
            <div className='main-text'>Ещё нельзя не упомянуть тот факт, что изначально творение Киркмана было продолжением ромеровского фильма «Ночь живых мертвецов», пилотный выпуск происходил во вселенной Ромеро и даже включал камео телеведущего из классического ужастика. Точнее, Рик со своей женой Лори смотрел тот же выпуск новостей, что и герои фильма. Но эту идею отменили. Возможно причиной послужили авторские права, хотя скорее вероятен другой вариант — слова «Night of the Living Dead» давно уже превратили в непонятно что: в комиксах по этой вселенной есть зомби-слоны, вампиры и ещё куча всякого разного. Выпустить своё творение под таким названием, значит смешать историю о Рике с этим трешем. Именно поэтому в тираж вышла обособленная история.</div>
            <div className='main-text'>Впрочем, Роберт не забывает с чего всё началось. В 2020 он в Твиттере назвал причину эпидемии и она ожидаемо совпала с причиной из сами понимаете какого фильма: это нечто из космоса, попавшее на землю.</div>        
        </div>
        </>
    )
}

export default MainPage