// write a function start the function name in caps
// return JSX
// Export the component

// Make sure that we export it
// MAke sure to import it in the parent component


//import useState
// initialize state using useState() const[stateVariable, stateSetterFunction] = useState()
// keep on changing state

// state variable to track total money in bank
// const[balance, setBalance] = useState(0)

import React, { useState } from "react"

function Availablehouses({myHouse}){
    const[likes, addLikes] = useState(0)   


    console.log(myHouse)

    function likeHouse(){
        addLikes((likes)=>likes+=1)
    }

    return(
        <>
        <h1>List of Available houses in Kinoo</h1>
        <img src={myHouse.image}></img>
        <h3> {myHouse.landlord} </h3>
        <button>{myHouse.price}</button>
        <button onClick={likeHouse}>{likes} Likes</button>
        </>
    )
}

let studentnames = ["Zakaria", "Batholomeo", "Ayubu","Yakubu","Zebedayo","Matheo","Timotheo","Mariko"]
let bankAccs = [4567000, 6789000, 987678, 789065]

// export default Availablehouses

export {studentnames, bankAccs, Availablehouses}

