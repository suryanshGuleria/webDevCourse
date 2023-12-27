import './App.css';
import Item from './components/Item.js';
import Card from './components/Card.js';
import PropItem from './components/PropItem.js';

function App() {
  let response = [
    {
      name:"Amrut",
      price:"$50"
    },
    {
      name:"100 Piper",
      price:"$30"
    },
    {
      name:"Black Dog",
      price:"$25"
    }
  ]
  return (
    <div>
      <Card>
      <Item></Item>
      <PropItem name="Fire Cracker" price="$100"></PropItem>
      <PropItem name="Pizza" price="$10"></PropItem>
      <PropItem name="Zeher" price="$1"></PropItem>
      <PropItem name={response[0].name} price={response[0].price}></PropItem>
      <PropItem name={response[1].name} price={response[1].price}></PropItem>
      <PropItem name={response[2].name} price={response[2].price}></PropItem>
      <div className="App">
      Hello React;
      </div>  
      </Card>
    </div>
  );
}

export default App;
