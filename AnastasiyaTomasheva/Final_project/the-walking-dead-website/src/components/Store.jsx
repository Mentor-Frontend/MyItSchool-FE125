import Item from './Item';

const Store = (props) => {

    const { items } = props;
    if (!items || items.length === 0) {return (
        <>
        <main>
        
        {props.itemsStore.map(data => (

            <>
                <Item onShowItem={props.onShowItem} item={data} onAdd={props.onAdd} storeState={props.itemsStore} />
            </>
            // );
        ))}

        </main>
        </>
        )} else
    return (
        <>

        <main>
        
        {items.map(data => (
            <>
                <Item onShowItem={props.onShowItem} item={data} onAdd={props.onAdd} storeState={props.itemsStore} />
            </>

        ))}
        
        </main>
        </>
    );
};
export default Store;