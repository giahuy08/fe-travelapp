import React from 'react'
// import 'https://fonts.googleapis.com/css?family=Arvo'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Page404.css'
import Foot from '../../components/Foot/Foot'
function Page404() {
    
   
    return (
      
      <div className=''>
        <div className='cards__404'>
        <section class="page_404">
      <div class="container">
        <div class="row"> 
        <div class="col-sm-12 ">
        <div style={{width: "100%"}}class="col-sm-10 col-sm-offset-1  text-center">
        <div class="four_zero_four_bg">
          <h1 class="text-center " style={{textAlign: 'center'}}>404</h1>
        
        
        </div>
        
        <div class="contant_box_404">
        <h3 class="h2" style={{textAlign: 'center'}}>
        Look like you're lost
        </h3>
        
        <p style={{textAlign: 'center'}}>the page you are looking for not avaible!</p>
        
        <a href="/" class="link_404" >Go to Home</a>
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
