import React from "react";
import { Context } from "../App";
export default function Item(prop){
const {dispatch}=React.useContext(Context);

    return(
        <div className="card container">
            <div className="row">
            <div className="col-2">
            <span><img src={prop.i.img}></img><br></br>{prop.i.name}</span>
            </div>
            <div className="col-4">
            <span>{prop.i.info}</span>
            </div>
            <div className="col-2">
            <span>Rs {prop.i.price}</span>
            </div>
            <div className="col-2">
            <span>{prop.i.restName}<br></br>Ratings: {prop.i.restRating}</span>
            </div>
            <div className="col-2">
            <span><button type="button"  onClick={()=>dispatch({type:"ADD",payload:prop.i.id})} class="btn btn-success">Add to cart</button></span>
            </div>
            </div>
        </div>
    );
}