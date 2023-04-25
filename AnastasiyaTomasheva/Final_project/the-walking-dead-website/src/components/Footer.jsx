import React from 'react'
import styled from 'styled-components'

const Info = styled.p`
font-weight: 600;
margin-bottom: 3%;
`
const Flex = styled.div`
display: flex;
width: 80%;
margin-right: auto;
margin-left: auto;
`
const Icons = styled.div`
width: 100%;
height: auto;
margin-bottom: 3%;
/* background-color: #fff; */
/* background-image: url('../../public/img/icon-skype.png'); */
`
const Social = styled(Info)`
font-weight: normal;
margin-bottom: 3%;
`
const Image = styled.img`
width: 30px;
height: 30px;
transition: transform .5s ease-out;
&:hover{
    transform: scale(1.5)
}
margin-bottom: 3%;
`
const Link = styled.a`
cursor: pointer;
`

export default function Footer() {
    return (
        <footer>
            <Info>Сделано с любовью и трепетом Анастасией Томашевой</Info>
            <Social>Контакты</Social>
            <Flex>
                <Icons>
                    <Link href='https://join.skype.com/invite/N2vogblGct94' target='_blank'><Image src='img/icon-skype.png'/></Link>
                </Icons>
                <Icons>
                    <Link href='https://t.me/Настюша)' target='_blank'><Image src='img/icon-telegram.png'/></Link>
                </Icons>
                <Icons>
                    <Link href='https://vb.me/letsChatOnViber' target='_blank'><Image src='img/icon-viber.png'/></Link>
                </Icons>
                <Icons>
                    <Link href='https://whatsapp.com/dl/' target='_blank'><Image src='img/icon-whatsapp.png'/></Link>
                </Icons>
                <Icons>
                    <Link href='mailto:Siha.sole@gmail.com' target='_blank'><Image src='img/icon-gmail.png'/></Link>
                </Icons>
                <Icons>
                    <Link href='https://github.com/S-Arashu' target='_blank'><Image src='img/icon-github.png'/></Link>
                </Icons>
            </Flex>
            <Social>Соцсети</Social>
            <Flex>
                <Icons>
                    <Link href='https://www.tiktok.com/@happyreading03?_t=8b1AlakRHIT&_r=1' target='_blank'><Image src='img/icon-tik-tok.png'/></Link>
                </Icons>
                <Icons>
                    <Link href='https://www.tiktok.com/@_arashu_?_t=8b1Ak8mhrKo&_r=1' target='_blank'><Image src='img/icon-tik-tok.png'/></Link>
                </Icons>
                <Icons>
                    <Link href='https://vk.com/arashu' target='_blank'><Image src='img/icon-vk.png'/></Link>
                </Icons>
                <Icons>
                    <Link href='https://www.instagram.com/_s_i_h_a_/?igshid=YmMyMTA2M2Y%3D' target='_blank'><Image src='img/icon-instagram.png'/></Link>
                </Icons>
            </Flex>
        </footer>
    )
}
