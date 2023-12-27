import './PropItem.css';


function PropItem(props){
    let name = props.name;
    let price = props.price;
      return(
        <div>
         <p>{name} {price}</p>
      </div>
      )
}

export default PropItem;