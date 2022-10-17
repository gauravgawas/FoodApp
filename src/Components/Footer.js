import React from "react";
import States from "../States";
import Added from "./AddedCard";
import { Context } from "../App";
export default function Foot(){

const {state,dispatch}=React.useContext(Context);
const states=States.map((item)=>{
    return <option>{item}</option>
})

const added=state.arr.map((item)=>{
    return <Added i={{...item[0]}}/>;
})
let amt=0;
state.arr.map((item)=>{
 amt=amt+item[0].price;
});
    return(
        <div className="footer">
        
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Place Order</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Name" required></input>
    </div>
    <div class="form-group col-md-6">
      <label for="email">Email</label>
      <input type="email" class="form-control" id="email" placeholder="Email" required></input>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required></input>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" placeholder="City" required></input>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control" required>
        <option selected></option>
        {states}
      </select>
    </div>
  </div>
 <br></br>
  <button type="submit" class="btn btn-primary">Submit</button>
  <span className="itemcount"><button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Preview Order</button></span>
</form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
       
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Your Cart</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            {state.arr.length? <button type="button"  onClick={()=>dispatch({type:"RMA"})} class="btn btn-danger">Remove All</button>:"Empty"}
                {added}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
            <span className="itemcount"><button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Your cart: <span class="badge text-bg-dark">{state.arr.length} Items</span></button></span>
            <span className="amt">Total amount: <span class="badge text-bg-dark">Rs {amt}</span></span>
            <span className="orderbtn"><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal2">Place order</button></span>
        </div>
    );
}