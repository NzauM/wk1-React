import React from "react";

// function Shoplist({shopname,location,tillNumber}){
//     return(
//         <>
//         <h1>Shop's name {shopname}</h1>
//         <h3>Shop Location {location}</h3>
//         <button>Till number {tillNumber}</button>
//         </>
//     )
// }

function Shoplist({shop:{shopName, location, tillNumber}}){
    // console.log(shopName)
    // console.log(location)
    console.log(tillNumber)
    // {condition ? "if true": "if not true"}
    return(
        <>
        <h1>Shop's name {shopName}</h1>
        <h3>Shop Location {location}</h3>
        {/* {tillNumber !== undefined ? <button>Till number {tillNumber}</button> : ""} */}
        
        <button onClick={()=>alert(`Lipa na Mpesa to ${tillNumber}`)}>Till number {tillNumber}</button>
        </>
    )
}

export default Shoplist