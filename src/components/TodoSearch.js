import React from "react";
import "./TodoSearch.css"
function TodoSearch(){
  const [searchValue, setSearchValue] = React.useState();
   return( 
    <input 
    className="TodoSearch" 
    placeholder="Chuparle el pelo a miko"
    onChange={(event)=>(
        console.log(event.target.value)
      )
    }
    />
  );
  
}
  
export { TodoSearch };