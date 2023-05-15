import { AboutGridStyled, AboutUsBlockStyled, AboutUsStyled } from '../../styledComponents/AboutUs'
import ContainerStyled from '../../styledComponents/Container';



export default function AboutUs() {

    return (
    <>
    <ContainerStyled>

        <AboutUsBlockStyled>
            <AboutUsStyled>
                <span>O нас</span>
                <span>
                    Наша маленькая, но уютная и известная всему городу, кофейня в центре г. Минска готова радовать вас вкусными горячими напитками и воздушной выпечкой каждый день. В нашем меню вы можете найти напитки на любой вкус и на любую погоду. Внашей кофейне каждый найдет то, что по душе именно ему, ведь наша основная задача добавить приятных ощущений и капельку теплоты в ваш день
                </span>
            </AboutUsStyled>

            <div className='aboutBlock'>
                <div className='aboutImg1'></div>
                <div className='aboutImg2'></div>
                <div className='aboutEll2'></div>
                <div className='aboutEll3'></div>
                <div className='aboutEll4'></div>
                <div className='aboutEll5'></div>
            </div>
        </AboutUsBlockStyled>
        
        
        <AboutGridStyled>
            <div className='aboutGridImg1'></div>
            <div className='aboutGridImg2'></div>
            <div className='aboutGridImg3'></div>
            <div className='aboutGridImg4'></div>
            <div className='aboutGridImg5'></div>
            <div className='aboutGridImg6'></div>

        </AboutGridStyled>


    </ContainerStyled>
    </>
    )}