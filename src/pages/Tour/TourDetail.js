import React from 'react'
import '../../components/ListTour/TourDetail.css';
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
function TourDetail() {
    return (
        <>
        <Header/>
        <div className='hero-container-tourdetail'>
        <img src='images/img-3.jpg' className="hero-bg-detail" alt="img"/>
        <h1>Du Lịch Phú Quốc 3N2Đ [ Khởi hành từ Vinh]</h1>
          
      </div>    
         
        <div className='cards-detail'>
        
           <div className='cards__container_tour'>
            <div class='price' data-category='5.000.000 đ'/>
            <button className='button-oder' href='#'>Đặt Tour</button>
            <h4>Đánh giá: 4/5 sao</h4>
            <h4>Địa điểm: PHÚ QUỐC</h4>
            <h4>Thời gian: 3 NGÀY 2 ĐÊM</h4>
            <h4>Nội dung:</h4>
            <div>Đi chơi phải có tiền</div>           
            <div className='list-img'>
            <div class="cards-detail-1">
        <a href="images/img-3.jpg" target="_blank">
           <img class="img-detail" src="images/img-3.jpg"/>
        </a>
        <div class="desc">Đặt tiêu đề cho hình ảnh tại đây</div>
    </div>
    <div class="cards-detail-1">
        <a className='link-card' href="images/img-3.jpg" target="_blank">
           <img class="img-detail" src="images/img-3.jpg"/>
        </a>
        <div class="desc">Đặt tiêu đề cho hình ảnh tại đây</div>
    </div>
    <div class="cards-detail-1">
        <a href="images/img-3.jpg" target="_blank">
           <img class="img-detail" src="images/img-3.jpg"/>
        </a>
        <div class="desc">Đặt tiêu đề cho hình ảnh tại đây</div>
    </div>
    <div class="cards-detail-1">
        <a href="images/img-3.jpg" target="_blank">
           <img class="img-detail" src="images/img-3.jpg"/>
        </a>
        <div class="desc">Đặt tiêu đề cho hình ảnh tại đây</div>
    </div>
            </div>
                <h3>Đánh Giá: </h3>
                <button className='button-cmt'>Gữi đánh giá</button>
                <input type='text' className='input-cmt' placeholder='Viết đánh giá ở đây ....'></input>                  
               

                <h3 className='cmt'>Huy</h3>             
                <div>Đi mà không có tiền đi làm gì :(</div>
                <div className='list-img-cmt'>
                    <img className='cmt-img'src="images/img-3.jpg"/>
                    <img className='cmt-img'src="images/img-3.jpg"/>
                </div>
                
                
                <h3 className='cmt'>Thiên</h3>             
                <div>Đi chơi nữa đường hết tiền !</div>
                <h3 className='cmt'>Thiện chó điên</h3>             
                <div>Lừa đảo đó mọi người ơi</div>
            </div>

           
        </div>
      <Footer/> 
      </>
    )
}

export default TourDetail
