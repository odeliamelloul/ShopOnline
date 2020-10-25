import React from 'react';
import {useHistory} from 'react-router-dom';



function Images(props) {

    
    return (
       
        <div id={"carouselExampleIndicators"+props.num} className="carousel slide"   data-ride="carousel" >
          
            <ol className="carousel-indicators">
                {
                  props.product.images && props.product.images.map((item, key) => {
                        return <li data-target={"#carouselExampleIndicators"+props.num} data-slide-to={key} className={key == 0 ? "active" : ""} key2={key}></li>
                    })
                    
                }
            </ol>
            <div className="carousel-inner">
                {props.product.images && props.product.images.map((item, key) => {return <div className={key == 0 ? "carousel-item active" : "carousel-item"} ><img key3={key} style={{ Width:'100%',height:'150px'}} src={item.url} /></div> }) }
                { <div ><img   src='/no-image.jpg' /></div>  }

            </div>
            <a className="carousel-control-prev" href={"#carouselExampleIndicators"+props.num} role="button" data-slide="prev">
                <span className="carousel-control-prev-icon"  aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href={"#carouselExampleIndicators"+props.num} role="button" data-slide="next">
                <span className="carousel-control-next-icon"  aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>


    );
}
export default Images;
