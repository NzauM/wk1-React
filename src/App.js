import logo from './logo.svg';
import './App.css';
// import Availablehouses from './Availablehouses';
import { studentnames, Availablehouses } from './Availablehouses';
import Shoplist from './Shoplist';

// display a list of available shops
// make sure we have the list of shops
// iterate through the list of shops and render each shop in the list// 
// call the output in the final JSX


function App() {
  let avHouses = [
    {landlord: "Mr Maploti",price: 9000, image:"https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {landlord: "Mr Makumi",price: 5500, image:"https://images.unsplash.com/photo-1568369366985-373beced16ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {landlord: "Mr Zakayo",price: 7000, image:"https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {landlord: "Mr Ayubu",price: 8000, image:"https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {landlord: "Mr Yusufu",price: 19000, image:"https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
  ]

  let myShops = [
    {shopName: "Belsa", location: "Kahawa"},
    {shopName: "KWa Michael", location: "Kinoo", tillNumber: 909800},
    {shopName: "Jiji", location: "CBD", tillNumber: 56800},
    {shopName: "Riggy G", location: "Kenya Kwanza", tillNumber: 7000},

  ]

  let myShopRet = myShops.map((shop,ind)=>{
    return(
      // <Shoplist shopname={shop.shopName} location={shop.location} tillNumber={shop.tillNumber}></Shoplist>
      <Shoplist shop={shop}></Shoplist>
    )
  })


  

  let myList = avHouses.map((house, ind)=>{
    return(
      <Availablehouses myHouse = {house}></Availablehouses>
    )
  })

  
  return (
   <>
   <h1>Niaje Bro, Qaribu Qejani</h1>
   <img width={'70%'} height={'70%'} src='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'></img>
    {myList}
    {myShopRet}    
   </>
  );
}

export default App;





