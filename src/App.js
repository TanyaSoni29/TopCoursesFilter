import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {apiUrl, filterData} from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {

const[courses, setCourses] = useState(null);
const[loading, setLoading] = useState(true);
const[category, setCategory] = useState(filterData[0].title);

const fetchData = async() => {
  setLoading(true);
  try{
   const response = await fetch(apiUrl);
   const output =  await response.json();
   setCourses(output.data);

  }
  catch(error){
   toast.error("Something Went Wrong.");
  }
  setLoading(false);
}

  useEffect( () =>{
    fetchData();
  },[]);

  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <div><Navbar />
      </div>
      <div>
         <div><Filter filterData={filterData} category={category} setCategory={setCategory} />
         </div>
      
         <div className="w-11/12 max-w-[1200] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] ">
         {
          loading ? (<Spinner />): (<Cards courses={courses} category={category}/>)
         }
      </div>


      </div>
      
      
    </div>
  );
};

export default App;
