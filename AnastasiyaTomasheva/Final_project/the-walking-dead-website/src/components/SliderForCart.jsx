import React from 'react';

import Slider from 'react-slick';

function SliderForCart(props) {
    
    const settings = {
        dots: true,
        accessibility: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    if(props.item.length <= 2){
        
        return (
        <Slider {...settings} className='slider' >
            <div>
                <img src={props.item[0]} alt='slide-1' />
            </div>
            <div>
                <img src={props.item[1]} alt='slide-2' />
            </div>
        </Slider>
    )
    } else {
        return (
        <Slider {...settings} className='slider' >
            <div>
                <img src={props.item[0]} alt='slide-1' />
            </div>
            <div>
                <img src={props.item[1]} alt='slide-2' />
            </div>
            <div className='thirdSlide'>
                <img src={props.item[2]} alt='slide-3' />
            </div>
        </Slider>
        )
    }
}

export default SliderForCart