class Slider {
    constructor(element) {
        this.element = element
    }

    create() {
        let slideMain = document.querySelector('.main')

        let wrapper = document.createElement('section')
        wrapper.classList.add('slider-wrapper')
        slideMain.insertBefore(wrapper, slideMain.firstElementChild)

        let slider = document.createElement('ul')
        slider.classList.add('slider-container')
        slider.id = 'slider-container'
        wrapper.appendChild(slider)

        let buttonPrev = document.createElement('div')
        buttonPrev.classList.add('slide-arrow', 'slide-arrow-prev')
        buttonPrev.id = 'slide-arrow-prev'
        wrapper.appendChild(buttonPrev)

        let arrowPrevImg = document.createElement('img')
        arrowPrevImg.classList.add('arrow_prew_img')
        arrowPrevImg.src = './img/arrow-left-white.svg'
        buttonPrev.appendChild(arrowPrevImg)

        let buttonNext = document.createElement('div')
        buttonNext.classList.add('slide-arrow', 'slide-arrow-next')
        buttonNext.id = 'slide-arrow-next'
        wrapper.appendChild(buttonNext)

        let arrowNextImg = document.createElement('img')
        arrowNextImg.classList.add('arrow_next_img')
        arrowNextImg.src = './img/arrow-right-white.svg'
        buttonNext.appendChild(arrowNextImg)

        let slideFirst = document.createElement('li')
        slideFirst.classList.add('first_slide', 'slide')
        slider.appendChild(slideFirst)

        let slideSecond = document.createElement('li')
        slideSecond.classList.add('second_slide', 'slide')
        slider.appendChild(slideSecond)

        let slideThird = document.createElement('li')
        slideThird.classList.add('third_slide', 'slide')
        slider.appendChild(slideThird)

        let slideFour = document.createElement('li')
        slideFour.classList.add('fourth_slide', 'slide')
        slider.appendChild(slideFour)

        buttonNext.addEventListener("click", () => {
            const slideWidth = slider.clientWidth;
            slider.scrollLeft += slideWidth;
          })

          buttonPrev.addEventListener("click", () => {
            const slideWidth = slider.clientWidth;
            slider.scrollLeft -= slideWidth;
          })
    }
    init() {
        this.create()
        return this.element
    }
}

const slider = new Slider().init();
export {slider};
