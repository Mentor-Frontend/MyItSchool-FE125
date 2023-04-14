import Item from './Item';

const Store = (props) => {
    const { items } = props;
    // console.log(items)
    if (!items || items.length === 0) return <p>Информация не найдена</p>;
    return (
        
        <main className='list-head'>
        {items.map((data) => (
            // return (
            <>
                <Item item={data} onAdd={props.onAdd}/>
            </>
            // );
        ))}
        </main>
        
    );
};
export default Store;