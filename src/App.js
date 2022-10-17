
import './App.css';
import React from 'react';
import Nav from './Components/Navbar';
import Slide from './Components/Slider';
import List from './Components/ProductList';
import Foot from './Components/Footer';
import Data from './FoodData';
export const Context=React.createContext(null);

function App() {
  function reducer(state,action){
    switch(action.type){
      case "CHANGE":
        return {input:searchRef.current.value,arr:state.arr};
      case "ADD":
        const data1=Data.filter((item)=>{
          if(action.payload===item.id){
          return item;
          }
        });
        return {input:state.input,arr:[...state.arr,data1]};
      case "REMOVE":
        const data2=state.arr.filter((item)=>{
          if(item[0].id!==action.payload){
            return item;
          }
        });
        return {input:state.input,arr:[...data2],info:state.info};
      case "RMA":
        return {input:state.input,arr:[],info:state.info}
      case "RECORDS":
        return {input:state.input,arr:state.arr,info:{...state.info,[action.payload.target.name]:action.payload.target.value}}
      default:
        return state;
    }
  }
const searchRef=React.useRef(null);

const [state,dispatch]=React.useReducer(reducer,{input:"",arr:[],info:{cname:"",cemail:"",caddress:"",caddress2:"",ccity:"",cstate:""}})

  return (
    <div className="App">
    <Context.Provider value={{state , dispatch, searchRef}}>
     <Nav/>
     <Slide/>
     <List/>
     <Foot/>
     </Context.Provider>
    </div>
  );
}

export default App;
