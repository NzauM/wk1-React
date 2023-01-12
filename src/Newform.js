import { useState } from "react";

// create a function in the parent component => childData
// pass that function to the child as a prop => parentFunction = {childData}
// now in the child, you can invoke the prop, like a normal function => parentFunction()

function Newform({parentFunction, onAddHouse}) {
    const[landlordName, setLandlordname] = useState("")
    const[houseprice, sethouseprice] = useState("")
    const[houseimage, sethouseImage] = useState("https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
    const[finalData, setFinalData]= useState({})
    function handleClick(){
        parentFunction("Mercy")
    }

    function handleLandlord(e){
        setLandlordname(()=>e.target.value)
    }

    function handlePrice(e){
        sethouseprice(()=>e.target.value)
    }

    function handleImage(e){
        sethouseImage(()=>e.target.value)
    }

    console.log(landlordName);
    console.log(houseimage); 
    console.log(houseprice)

    function handleSubmit(e){
        e.preventDefault()
        let myData = {landlord: landlordName, image: houseimage, price: houseprice}
        // console.log(myData);
        setFinalData(()=>myData)
        onAddHouse(myData)
    }

    console.log(finalData);


    return (
        <>
            <button onClick={handleClick}>Call Parent</button>
            <form onSubmit={handleSubmit} style={{margin: 30}}>
                <label>
                    Landlord Name:
                    <input onChange={handleLandlord} value={landlordName} type="text" name="landlord" />
                </label>
                <label>
                    House Rent:
                    <input onChange={(handlePrice)} type="text" name="price" />
                </label>
                <label>
                    Image of your house:
                    <input onChange={handleImage} type="text" name="image" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Newform