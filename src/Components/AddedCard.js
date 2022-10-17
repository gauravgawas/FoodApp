import React from "react";
import { Context } from "../App";
export default function Added(prop){
    const {dispatch}=React.useContext(Context);
    const style={
        width:150,
        height:150
    }
    return (
        <div className="card container">
            <div className="row">
            <div className="col-4">
            <span><img style={style} src={prop.i.img}></img><br></br>{prop.i.name}</span>
            </div>
            <div className="col-2">
            <span>Rs {prop.i.price}</span>
            </div>
            <div className="col-3">
            <span>{prop.i.restName}<br></br>Ratings: {prop.i.restRating}</span>
            </div>
            <div className="col-3">
            <span><button type="button"  onClick={()=>dispatch({type:"REMOVE",payload:prop.i.id})} class="btn btn-danger">Remove</button></span>
            </div>
            </div>
        </div>
    );
}