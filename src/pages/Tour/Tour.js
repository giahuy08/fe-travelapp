import React, { useEffect, useState } from "react";
import "../../components/ListTour/ListTour.css";
import CardTour from "../../components/Card/CardTour";
import Header from "../../components/Header/Header";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function Tour() {
    const [allTour, setAllTour] = useState([]);
    const [wordSearch, setwordSearch] = useState('');

    const [all, setAll] = useState([]);


    const [pageNumbers, setPageNumbers] = useState(1);

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    const GetURLParameter = (sParam) =>{

        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                return (sParameterName[1].toString());
            }
        }
      
    }
    const category = GetURLParameter('category')
    console.log(category)   
    let defaultUrl = 'http://localhost:5000/tour/findTourByCategory?category='+category+'&skip=' + page + '&limit=6'
    useEffect(() => {
        (
            
            async () => {               
                
                const response = await fetch(defaultUrl, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });
               

                const content = await response.json();
                console.log(content.data)
               
                    if (content.message === 'Successfully Get List Tour') {
                    setAllTour(content.data)
                    setPageNumbers((all.length/6+0.5).toFixed())
                }else{
                    setAllTour([])
                    setPageNumbers(1)
                }
            }
        )();
    }, [page, wordSearch === ''])


    const search = async () => {
        if (!wordSearch) {
            setPage(1)
            setwordSearch('')
        } else {
            let link = 'http://localhost:5000/tour/findTourByName?name=' + wordSearch
            const response = await fetch(link, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },

            });
            const content = await response.json();
            console.log(content.data)
            if (content.message === 'Successfully Get Tour') {
                setAllTour(content.data)
                setPageNumbers((all.length/6+0.5).toFixed())
            }
            else {
                setAllTour([])
                setPageNumbers(1)
            }
        }
    }

    return (
        <div className="tours__container">
            <Header />
            
            <div className='body'>

                <div className='card'>
                

                    <div className='cards__container_tour'>
                    <div style={{marginTop: '10px'}} className='h3-detail'>Tr?????c khi ?????t ph??ng, h??y ki???m tra nh???ng ?????a ??i???m b??? h???n ch??? du l???ch trong th???i gian n??y. S???c kh???e v?? s??? an to??n c???a c???ng ?????ng lu??n ???????c ?????t h??ng ?????u. V?? v???y, vui l??ng l??m theo ch??? th??? c???a ch??nh ph??? b???i ??i???u ???? th???c s??? c???n thi???t.</div>
                    <h2 style={{textAlign: 'center', margin: 'auto'}} className='h2-detail'>C??c ?????a ??i???m du l???ch n???i ti???ng t???i TRAVEL</h2>
                        T??m Ki???m
                        <div>
                            <input className='input-seach' type="text" name="search" placeholder="Nh???p k?? t??? ..." onChange={e => setwordSearch(e.target.value)} />

                            <button className='tiktok' onClick={search}>T??m</button>
                        </div>
                        <div className='cards__wrapper_tour'>
                            <div className='cards__items_tour'>

                                {

                                    allTour && allTour.map((tour,index) => {
                                        return <CardTour
                                        key={index}
                                            img={tour.imagesTour[0]}
                                            text={tour.name}
                                            days={tour.time}
                                            price={tour.payment}
                                            id={tour._id}
                                            >
                                        </CardTour>
                                    })
                                }

                            </div>
                        </div>
                        <div style={{ margin: 'auto' }}>
                            <Stack spacing={2} >
                                <Pagination count={pageNumbers} variant="outlined" page={page} onChange={handleChange} />
                            </Stack>
                        </div>

                    </div>
                </div>
            </div>
          </div>
       
  );
}

export default Tour;
