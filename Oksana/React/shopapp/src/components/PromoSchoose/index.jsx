import coffeeCup  from '../../img/coffee-cup.png'
import donut  from '../../img/donut.png'
import coffeBeens  from '../../img/coffee-beans.png'
import { PromoSchooseStyled,PromoSchoosesSpanStyled } from '../../styledComponents/PromoSchoose'
import { useDispatch } from 'react-redux'
import {  setFilter } from '../../actions/reducer/index';
import { Link } from 'react-router-dom';

export default function PromoSchoose() {

    const dispatch = useDispatch()
    

   return (
    <>
            
            <PromoSchoosesSpanStyled>            
                <p>Что ты можешь у нас найти?</p>
            </PromoSchoosesSpanStyled>

            <PromoSchooseStyled >  
                <Link  onClick={()=>(dispatch(setFilter('Coffee')))} to={'/products'} >
                <div className='PromoBlock'>
                    <img className='FirstImg' src={coffeeCup} />
                    <div>
                        <span>Карта напитков</span>    
                        <span>Большой выбор вкусного кофе и натурального чая</span>    
                    </div>
                </div>
                </Link>

                <Link  onClick={()=>(dispatch(setFilter('Sweet')))} to={'/products'} >
                <div className='PromoBlock'>
                    <img className='SecondImg' src={donut} />
                    <div>
                        <span>Свежая выпечка</span>    
                        <span>Воздушные пончики, круассаны и сендвичи</span>    
                    </div>
                </div>
                </Link>

                <Link  onClick={()=>(dispatch(setFilter('Beens')))} to={'/products'} >
                <div className='PromoBlock'>
                    <img className='ThirdImg' src={coffeBeens} />
                    <div>
                        <span>Кофе домой</span>    
                        <span>Кофейные зерна от лучших итальянских производителей</span>    
                    </div>
                </div>
                </Link>
    
            </PromoSchooseStyled>

       </>
);
}