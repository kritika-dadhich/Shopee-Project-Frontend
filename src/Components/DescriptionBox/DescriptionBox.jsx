import React from 'react';
import './DescriptionBox.css'

const DescriptionBox = ()=>{
    return(
        <div className='descriptionbox'>
          <div className="descriptionbox-navigator">
             <div className="descriptionbox-nav-box">Description</div>
             <div className="descriptionbox-nav-box fade">Reviews (122)</div>
          </div>
           <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that allows businesses to sell physical goods, digital products, or services directly to customers over the internet. Key features of an e-commerce website include a product catalog, a shopping cart for selecting items, and a secure payment processing system to complete purchases.</p>
            <p>It encompasses all online commercial transactions, enabling businesses and consumers to conduct sales remotely and providing convenient access to a wide range of products and services 24/7.</p>
            
           </div>
        </div>
    )
}
export default DescriptionBox