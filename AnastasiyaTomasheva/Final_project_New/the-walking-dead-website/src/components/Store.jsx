import Item from './Item';

const Store = (props) => {
    const { items } = props;
    console.log(props)
    if (!items || items.length === 0) return <p>Информация не найдена</p>;
    return (
        
        <main className='list-head'>
        {items.map((data) => (
            // return (
            <>
                <Item onShowItem={props.onShowItem} item={data} onAdd={props.onAdd} storeState={props.storeState} />
            </>
            // );
        ))}
        </main>
        
    );
};
export default Store;