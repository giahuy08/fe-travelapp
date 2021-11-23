import React from 'react'
// import 'https://fonts.googleapis.com/css?family=Arvo'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Page404.css'
import {Link} from "react-router-dom"
import Foot from '../../components/Foot/Foot'
function Page404() {
    
   
    return (
      
      <div className=''>
        <div className='cards__404'>
        <section className="page_404">
      <div className="container">
        <div className="row"> 
        <div className="col-sm-12 ">
        <div style={{width: "100%"}}className="col-sm-10 col-sm-offset-1  text-center">
        <div className="four_zero_four_bg">
          <h1 className="text-center " style={{textAlign: 'center'}}>404</h1>
        
        
        </div>
        
        <div className="contant_box_404">
        <h3 className="h2" style={{textAlign: 'center'}}>
        Look like you're lost
        </h3>
        
        <p style={{textAlign: 'center'}}>the page you are looking for not avaible!</p>
        
        <Link to="/" className="link_404" >Go to Home</Link> 
      </div>
        </div>
        </div>
        </div>
      </div>
    </section>
          </div> 
     
          <Foot/> 
      </div> 
        
    
      
    )
}

export default Page404
