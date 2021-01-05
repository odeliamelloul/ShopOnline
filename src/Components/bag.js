import React,{useState} from 'react';
import Images from './Images';
import bin from '../bin.png';


function Bag(props){

    const MyBag=props.location.state.addProduct;
    
    var TotalPrice=0;

    const RemoveFromBag=(key)=> {
    MyBag.filter((item)=>item.key!=key);
    }

    
    const click=()=>{
        if(TotalPrice)
            PassToForm()
        else
        {
            if (window.confirm('תיק הקניות שלך ריק אנא חזור לעמוד הבית בכדי לבחור מוצרים'))
            {
                this.props.history.push(''); 
            }
        } 
    }
    const PassToForm= ()=> {props.history.push({ pathname: '/Form', data:MyBag})}
    if (MyBag)
    {
   return(

    <div  style={{textAlign:"center"} } className="produstWasSelect" >
            <h3 className="BagTitle"> תיק הקניות</h3>
            <h4>  {MyBag.length} : מספר המוצרים </h4>
            <br/>
            
            { 
            
            MyBag.map((item,key)=>

               <div className="col-md card">
                <p className="title">{item.title}</p>
                <Images  product={item} num={key}/>
                <h6>{item.price}:מחיר</h6>
            </div>)
            }
           <div>
           <h4> סה"כ לתשלום</h4>
           <h5 dir="rtl" >
              {TotalPrice=MyBag.reduce((x,y) => parseInt(x)+ parseInt(y.price),0)}  <h5>ש"ח</h5>
              </h5>
           
           <button className="buy" onClick={click}>להזמנה</button>
           </div>
      </div>
   )   
}
else 
{
    return(
        <div>
        <h1 className="BagTitle"> תיק הקניות ריק</h1>
        </div>

    )
}


}

export default Bag;