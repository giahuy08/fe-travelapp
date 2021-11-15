import React from 'react'
import '../../components/ListTour/ListTour.css'
import CardTour from '../../components/Card/CardTour'
import Head from '../../components/Head/Head'
import Foot from '../../components/Foot/Foot'


function Tour() {
   
    return (
        <div className="tours__container">
        <Head/>
        <h2 className='h2-detail'>Tour đi CHÂU ÂU</h2>  
        <div className='body'>
         
        <div className='card'>
        
           <div className='cards__container_tour'> 
                Tìm Kiếm
                    <div>
                    <input className='input-seach' type="text" name="search" placeholder="Nhập ký tự ..."/>
                    
                    <button class='tiktok'>Tìm</button>
                    </div>
               <div clss='cards__wrapper_tour'>
                   <div className='cards__items_tour'>
                   <CardTour
                    img='images/img-3.jpg'
                    text='Du Lịch Phú Quốc 3N2Đ [ Khởi hành từ Vinh]'
                    days='3 ngày 2 đêm'
                    price='5.100.000'>             
                   </CardTour>

                   <CardTour
                    img='images/img-3.jpg'
                    text='Du Lịch Phú Quốc 3N2Đ [ Khởi hành từ Vinh]'
                    days='3 ngày 2 đêm'
                    price='5.100.000'>             
                   </CardTour>

                   <CardTour
                    img='images/img-3.jpg'
                    text='Du Lịch Phú Quốc 3N2Đ [ Khởi hành từ Vinh]'
                    days='3 ngày 2 đêm'
                    price='5.100.000'>             
                   </CardTour>

                   <CardTour
                    img='images/img-3.jpg'
                    text='Du Lịch Phú Quốc 3N2Đ [ Khởi hành từ Vinh]'
                    days='3 ngày 2 đêm'
                    price='5.100.000'>             
                   </CardTour>

                   <CardTour
                    img='images/img-3.jpg'
                    text='Du Lịch Phú Quốc 3N2Đ [ Khởi hành từ Vinh]'
                    days='3 ngày 2 đêm'
                    price='5.100.000'>             
                   </CardTour>
                    
             
                   </div>
                   
            
               </div>
               <div class="quantity-input">
                <div class="add">
                    <i class="fa fa-plus"></i>
                </div>
                <input type="number" class="number" value="1"/>
                <div class="minus">
                    <i class="fa fa-minus"></i>
                </div>
            </div>
            </div>             
            
        </div>
        </div>      
        
        
        <Foot/>   
        </div>
    )
}

export default Tour
