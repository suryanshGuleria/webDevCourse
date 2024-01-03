import React, {useState, useEffect} from "react"
import {apiUrl, filterData} from "./data"
import {toast} from "react-toastify"
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"

const App = () => {
  
  const [courses, setCourses] = useState('')

  useEffect( ()=> {
    const fetchData = async() =>{
      try{
           const res = await fetch(apiUrl);
           const output = await res.json();
          //saving data into a variable
          setCourses(output.data);
      }
      catch(error){
          toast.error()
      }
    }
    fetchData();
  },[])

  return <div>
        <Navbar></Navbar>
        <Filter filterData={filterData}></Filter>
        <Cards courses={courses}></Cards>
  </div>;
};

export default App;
