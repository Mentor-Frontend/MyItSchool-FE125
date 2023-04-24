import Item from './Item';

const Store = (props) => {
    const { items } = props;
    console.log(props)
    if (!items || items.length === 0) {return (
        <main className='list-head'>
        {props.itemsStore.map(data => (

            <>
                <Item onShowItem={props.onShowItem} item={data} onAdd={props.onAdd} storeState={props.itemsStore} />
            </>
            // );
        ))}
        </main>
        )} else
    return (
        
        <main className='list-head'>
        {items.map(data => (
            <>
                <Item onShowItem={props.onShowItem} item={data} onAdd={props.onAdd} storeState={props.itemsStore} />
            </>
            // );
        ))}
        </main>
        
    );
};
export default Store;