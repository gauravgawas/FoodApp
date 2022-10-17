import React from "react";
import Item from "./Card";
import Data from "../FoodData";
import { Context } from "../App";

export default function List(){
    const {state,searchRef}=React.useContext(Context);
    const list=Data.filter((item)=>{
       if(!state.input){
        return item;
       }
       else if(item.name.toLowerCase().includes(searchRef.current.value.toLowerCase())){
        return item;
       }
    }).map((item)=>{
        return <Item i={{...item}}/>;
    })
    return(
        <div>
        {list}
        </div>
    );
}