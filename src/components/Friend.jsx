import Button from "./Button"
 export default function Friend({friend,onSelection,selectedFriend}) {

   const isSelected = selectedFriend?.id === friend.id
    return(
      <li className={isSelected ? "selected" : ""}>
  <img 
  src={friend.image} alt={friend.name}/>
  <h3>{friend.name}</h3>
      {friend.balance < 0 && (<p className='red'>You owe
      {friend.name} {Math.abs(friend.balance) }€
      </p>)}

      {friend.balance > 0 && (<p className='green'>
      {friend.name} You owe{Math.abs(friend.balance) }€
      </p>)}

      {friend.balance === 0 && (<p>
      {friend.name} you are even
      </p>)}
      <Button onClick={() => onSelection(friend)}>{isSelected ? "Close" : "Select"}</Button>
      </li>
    )
  }