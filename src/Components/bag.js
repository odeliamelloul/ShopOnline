import React,{useState} from 'react';
import Images from './Images';
import bin from '../bin.png';


function bag(props){
    
    var bag=props.location.state.addProduct
    var TotalPrice=0;

    function RemoveFromBag(key)
    {
        bag.filter((item)=>item.key!=key)
    }

    const PassToForm= (item,key)=> {props.history.push({ pathname: '/Form', data:TotalPrice })}
    if (bag)
    {
   return(

    <div  style={{textAlign:"center"} } className="produstWasSelect" >
            <h3 className="BagTitle"> תיק הקניות</h3>
            <h4>  {bag.length} : מספר המוצרים </h4>
            <br/>
            
            { 
            
            bag.map((item,key)=>

               <div >
                <p>{item.title}</p>
                <Images  product={item} num={key}/>
                <h5 >{item.price}:מחיר</h5>
                <img src={bin} onClick={RemoveFromBag(key)}/>
                
                <label>________________________________</label>
            </div>
            
            )
            }
           <div>
           <h5> סה"כ לתשלום</h5>
           <h5> {TotalPrice=bag.reduce((x,y) => parseInt(x)+ parseInt(y.price),0)} ש"ח  </h5>
           
           <button onClick={PassToForm}> מעבר לתשלום</button>
           </div>
      </div>
   )


   
}
else 
{
    return(
        <div>
        <h1 className="BagTitle"> תיק הקניות</h1>
        <p>ריק</p>
        </div>

    )
}


}

export default bag;