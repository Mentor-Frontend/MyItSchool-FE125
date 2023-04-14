import React from 'react';

const List = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <p>Информация не найдена</p>;
    return (
        <ul>
        <h2 className='list-head'>Персонажи</h2>
        <h4 className='list-head'>Кликни по картинке, и увидишь магию</h4>
        {repos.map((repo) => {
            return (
            <li key={repo.id} className='list'>
                <div className='repo-text'><img src={repo.img} /></div>
                <div className='repo-description'>{repo.description}</div>
            </li>
            );
        })}
        </ul>
    );
};
export default List;