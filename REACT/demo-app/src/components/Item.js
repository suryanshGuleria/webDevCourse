import './Item.css';

function Item(){
    let name = "iphone ";
    let price = "$1000";
    
    return(
        <div className='rendered'>
            {name}
            {price}
        </div>
    );
}

export default Item;
