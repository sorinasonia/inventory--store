import React from 'react';
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import './App.css';
import Footer from './components/Footer';

const options = [
  "",'Dresses','Shirts', 'Pants', 'Accessories'
];

let dis;

class App extends React.Component {

  state = {
    page: 0,
    storeItems: [],
    currentItem : {
      category : "...",
      productNumber:"",
      productName : "",
      productPrice : "",
      ImageURL: "http://via.placeholder.com/200x200"
    },
  }

  constructor(props)
  {
    super(props)
    dis = this;
  }

 renderTableData() {
    return dis.state.storeItems.map((list, index) => {
       const { productNumber,productName, productPrice, category, ImageURL } = list //destructuring

      //  dis.debugger(ImageURL);
       return (

          <tr>
             <td>{productNumber}</td>
             <td>{productName}</td>
             <td>{productPrice}</td>
             <td>{category}</td>
             <td><a target="new" href={ImageURL}>View</a></td>
          </tr>
       )
    })
 }

  header() 
  {
    return <div className="App-header">
        <h1>SorinaSonia Store</h1>
    </div>
  }

 sideBar()
  {
    return <div className="App-side-bar">
      <button onClick={()=> dis.setState({page:0})} className="App-avialable-product">Show All Product</button>
      <button onClick={()=> dis.setState({page:1})} className="App-add-product">Add Product</button>
      <button onClick={()=> dis.setState({page:2})} className="App-remove-product">Remove Product</button>
      <button onClick={()=> dis.setState({page:3})} className="App-account">Account</button>
  </div>
  }

 availableProduct() 
 {
   return <div>
    <h1 className='title'>Store</h1>
    <table className='list'>
        <tbody>
          <tr>
          <th>No.</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          </tr>
          {dis.renderTableData()}
        </tbody>
    </table>
  </div>

 }

//  debugger(logTxt)
//  {
//    console.log("HERE IS THE LOG ", logTxt);
//  }

 
 updateCategory(value)
 {
   let _currentItem = dis.state.currentItem;
   _currentItem.category = value;
  dis.setState({currentItem:_currentItem})
 }

 updateProductName(name)
{
  let _currentItem = dis.state.currentItem;
   _currentItem.productName = name;
  dis.setState({currentItem:_currentItem})
  // dis.debugger(name);
}

updateProductPrice(price)
{
  let _currentItem = dis.state.currentItem;
   _currentItem.productPrice = price;
  dis.setState({currentItem:_currentItem})
}

updateProductNumber(Number)
{
  let _currentItem = dis.state.currentItem;
   _currentItem.productNumber = Number;
   dis.setState({currentItem:_currentItem})
  //  dis.debugger(Number);
}

updateImageURL(URL)
{
  let _currentItem = dis.state.currentItem;
   _currentItem.ImageURL = URL;
  dis.setState({currentItem:_currentItem})
}

 addProduct()
 {
  let defaultOption = options[0];
   return <div className="add-product-view">
     
            <div className="main">
               <h1 className="h11">Add A New Item</h1>
                <form className="form">
                  <label>Categories</label>
                  <Dropdown onChange={(item)=> dis.updateCategory(item.value) } className="drop-down" options={options} value={defaultOption} placeholder={dis.state.currentItem.category} />
                    <label>Product Name</label>
                    <input type="text" onChange={(event)=> dis.updateProductName(event.target.value)} value={dis.state.currentItem.productName} />
                    <label>Product Price</label>
                    <input type="number" onChange={(event)=> dis.updateProductPrice(event.target.value)} value={dis.state.currentItem.productPrice}/>
                    <label>Product Number</label>
                    <input type="number" onChange={(event)=> dis.updateProductNumber(event.target.value)} value={dis.state.currentItem.ProductNumber}/>
                    <label>Image URL</label>
                    <input type="text" onChange={(event)=> dis.updateImageURL(event.target.value)} value={dis.state.currentItem.ImageURL}/>
                </form>
                <button onClick={()=> dis.addToProductList()} className="btn">Add Product</button>
                
            </div>
            
            <div className ="preview">
              <h1 className="h11">Preview</h1>
                <div className ="picture">
                  <p class="Categories">Product: {dis.state.currentItem.category} </p>
                  <p class="name">Name: {dis.state.currentItem.productName}</p>
                  <img src={dis.state.currentItem.ImageURL} alt="demo pic" />
                  <div className="no-p">
                  <p className="no"> No: {dis.state.currentItem.productNumber} </p>
                  <p className="price">Price: {dis.state.currentItem.productPrice}</p>
                  </div>
                </div>
            </div>
   </div>
 }

 addToProductList()
 {

  let clearCurrentItem = {
    category : "...",
    productName : "",
    productNumber:"",
    productPrice : "",
    ImageURL: "http://via.placeholder.com/200x200"
  }
 
  let _storeItems = dis.state.storeItems;
  _storeItems.push(dis.state.currentItem);

  dis.setState({storeItems : _storeItems, currentItem : clearCurrentItem});

  // dis.debugger(dis.state.storeItems);

 }

 removeProduct()
 {
   return <div>
     <h1>REMOVE PRODUCT</h1>
   </div>
 }

 account()
 {
   return <div>
    
      <h1>MONEY MACHINE</h1>

       
    </div>
    
 }

 mainBody()
 {
   return <div className ="App-main">
      {
    
        dis.state.page === 0 ? <dis.availableProduct/> : dis.state.page === 1 ? <dis.addProduct/> : dis.state.page === 2 ? <dis.removeProduct/> : <dis.account/>
      }
    </div>
 }

 
  render() {
    return (
      <div className="App">
        <this.header/>

          <div className="App-body">
            <this.sideBar/>
            <this.mainBody/>
          </div>
          <Footer/>
      </div>
    );
  }

}

export default App;