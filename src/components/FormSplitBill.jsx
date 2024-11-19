import { useState } from "react";
import Button from "./Button";
 export default function FormSplitBill({selectedFriend, onSpLitBill}) {
 const[bill,setBill] =useState("")
 const[paidByUser,setPaidByUser] = useState("")
 const paidByFriend = bill ? bill - paidByUser : ""
 const[whoIsPaying,setWhoIsPaying] = useState("user")

   //   function handleSubmit(e) {
   //       e.preventDefault();
   //       if (!bill || !paidByUser) return;
   // onSpLitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser )
   //   }

      function handleSubmit(e) {
          e.preventDefault();
          if (!bill || !paidByUser) return;
          onSpLitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser)
      }
 return <form className='form-split-bill' onSubmit={handleSubmit}
  >
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill value</label>
      <input type='text' value={bill} onChange={(e) =>setBill(Number(e.target.value))}/>

      <label>🧍‍♀️ {selectedFriend.name} Your expense</label>
      <input type="text" value={paidByUser} onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}/>

      <label>🧍‍♀️ {selectedFriend.name} Your expense</label>
      <input type="text" disabled value={paidByFriend}/>

 <label> 🤑 who is paying the bill</label>

 <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
  <option value="user">You</option>
  <option value="friend">{selectedFriend.name}</option>
 </select>
      <Button>Split bill</Button>
    </form>
  }

