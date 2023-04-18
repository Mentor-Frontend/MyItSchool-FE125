import React from 'react';
import styled from 'styled-components';

const Description = styled.p`
padding: 1%;
font-size: 1.1rem;
`
const Title = styled.h2`
text-align: center;
font-size: 2rem;
margin: 2%;
`
const ListCharacterContainer = styled.div`

`
const ListCharacter = styled.div`

` 
const Front = styled.div`

`
const Img = styled.img`
`
const Back = styled.div`

`
const RepoText = styled

let rep;

const List = (props) => {
    let { repos } = props;
    // const apiUrl = `http://localhost:3001/characters`;
    // repos = fetch(apiUrl)
    //     .then((res) => res.json())
    //     .then((repos) => {
    //         rep = repos
    //         });
    // const characters = (type) => {
        console.log(repos)
    
        // repos = repos.filter(el => el.type === "сериал")
    // }
    if (!repos || repos.length === 0) return <p>Информация не найдена</p>;
    return (
        <>
        <Description>Экранизация комикса. В центре внимания всё тот же Рик Граймс и его поиски семьи, а потом строительство общины выживших. В целом сюжет следует первоисточнику почти что с идеальной точностью, но вот в деталях рознится. Введено немало новых героев, добавлены персонажи книг, а кто-то убран, некоторым изменяют судьбу, пол, характеры. Часто сериал критикуется за любовь превращать любую интересную идею в очередное противостояние риковцев с бесконечными группами выживших, заваливать зрителей болтовнёй или любовными линиями. Особенно этим печально прославились сезоны 4-8, отталкивающие почти всех зрителей, кроме совсем уж фанатов, несмотря на то, с началом войны против Шепчущихся качество заметно вырастет.</Description>
        
        <Title>Персонажи</Title>
        {/* <h4 className='list-head'>Кликни по картинке, и увидишь магию</h4> */}
        {repos.map((repo) => {
            return (
                <ListCharacterContainer>
                    <ListCharacter key={repo.id}>
                        <Front>
                            <Img src={repo.img} />
                        </Front>
                        <Back>
                            <Img />
                        </Back>
                        {/* <div className='repo-text'><img src={repo.img} /></div> */}
                        <div className='repo-description'>{repo.description}</div>
                    </ListCharacter>
                </ListCharacterContainer>
            );
        })}
        
        </>
    );
};
export default List;