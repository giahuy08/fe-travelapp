import React, { useEffect,  useState } from 'react'
import '../../components/ListTour/ListTour.css'
import CardTour from '../../components/Card/CardTour'
import Header from '../../components/Header/Header'
import Foot from '../../components/Foot/Foot'



import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function AllTour() {
    const [allTour, setAllTour] = useState([]);
    const [wordSearch, setwordSearch] = useState('');
  
    const [all, setAll] = useState([]);


    const [pageNumbers, setPageNumbers] = useState(1);

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

   
    let defaultUrl1 = 'http://localhost:5000/tour/getPageNumbers'
    useEffect(() => {
        (          
            async () => {               
                const response = await fetch(defaultUrl1, {
                    method: 'GET',
                    params: { 'limit': 6 },
                    headers: { 'Content-Type': 'application/json' },

                });

                const content = await response.json();
                console.log(content.data)
                if (content.message === 'Successfully Get Page Numbers') {
                    setPageNumbers(content.data)
                }
            }
        )();
    }, [wordSearch === ''])
    
    
    useEffect(() => {
        (
            
            async () => {
                const response = await fetch('http://localhost:5000/tour/getAllTour?skip=' + page + '&limit=6', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });
                
                
               

                const content = await response.json();
                console.log(content.data)
                if (content.message === 'Successfully Get All Tour') {                
                    setAllTour(content.data)           
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
                                            id={tour._id}
                                            price={tour.payment}>
                                                
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
            <Foot />
        </div>
    )
}

export default AllTour
