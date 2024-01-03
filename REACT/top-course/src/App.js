import React, {useState, useEffect} from "react";


const App = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  
  // called on every rerender
  // useEffect(()=>{
  //     console.log("A repaint occured !")
  // });
  
  // called only once after first render
  // useEffect(()=>{
  //   console.log("A repaint occured !")
  // },[]);

  // renders whenever dependency changes
  // useEffect(()=>{
  //   console.log("repaint ! repaint ! repaint !");
  // },[name]);

  useEffect(()=>{
    console.log("added");

    return ()=>{
      console.log("listener removed")
    }

  },[text]);
  

  function inputHandler(event){
  setText(event.target.value);
  }

  return <div className="border">
    <input className="letsgo" type="text" onChange={(event)=>{inputHandler(event)}} />
  </div>;
};

export default App;
