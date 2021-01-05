import React,{Fragment,useState,useEffect} from 'react';
import axios from 'axios';
import Images from './Images';
import FreeSolo from './FreeSolo';
import bag from '../bag.png'; 

function FrontPage(props) {
    const[products,setProducts]=useState([]);
    const[search, setSearch] = useState([]);
    const[NumOfItem,setNumOfItem]=useState([]);
    const[addProduct,setAddProduct]=useState([]);
    
    useEffect(() => {
      const fetchData=async ()=>
       {
        const result= await axios('https://api.konimbo.co.il/v1/items?token=9c1a92bf8cefc59e4ec9fa7c53bba0f90dd8b15850bef1062dbf32c5e8fd3a08');
        setProducts(result.data);
        setSearch(result.data);
       
      }
        fetchData();
      }, [])

      const Search = (event, value) => {
      var searchResult = products.filter((p) => p.title.includes(value));
      setSearch(searchResult);  }
      
      const PathToBag=()=>{props.history.push({ pathname:'/bag',state:{addProduct:addProduct}}) }

      function addToBag(item){
        setAddProduct([...addProduct,item])
        setNumOfItem(addProduct.length+1)
        alert('המוצר התווסף בהצלחה')
        }

      return (
        <div className="FrontPage" style={{alignContent:"center"} }>
        <view className="container">
         <img src={bag} onClick={PathToBag} />
         <h7 className="tel">שרות לקוחות 09-8320004</h7>
         <text className="centered">{NumOfItem}</text>
        </view> 
          <div className="FreeSolo">
          <h1 className="GlabalTitle">Best Products</h1>
          <FreeSolo  id='search' Search={Search} product={products.map((t) => t.title)}  />
          </div>
            <div  style={{textAlign:"center"} } className="row" >
              {    
               search.map((item,key)=>
                <Fragment> 
                  <div className="col-md-4 card">
                         <h15 className="title"  title={item.title} >{item.title}</h15>
                         <Images  product={item} num={key}/>
                         <p className="price" >{item.price}:מחיר</p>
                         <button className="buy" onClick={() => addToBag(item)}>הוסף לסל</button>
                         </div>
                </Fragment>
                 )
              }
            
              </div>
      </div>
         
    );
  
}

export default FrontPage;