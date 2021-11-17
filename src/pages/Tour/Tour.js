import React, { SyntheticEvent, useEffect, useRef, useState } from 'react'
import '../../components/ListTour/ListTour.css'
import CardTour from '../../components/Card/CardTour'
import Header from '../../components/Header/Header'
import Foot from '../../components/Foot/Foot'
import { useLocation } from 'react-router-dom'


import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { LocationCityOutlined } from '@mui/icons-material'

function Tour() {
    const [allTour, setAllTour] = useState([]);
    const [wordSearch, setwordSearch] = useState('');
    const location = useLocation()

    //console.log('hello'+location.state.type)



    // const params = useParams<{ n: string }>();
    // const currentPage = parseInt(params.n);
    const [currentPage, setcurrentPage] = useState(1);

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };


    let defaultUrl = 'http://localhost:5000/tour/getAllTour?skip=' + page + '&limit=6'
    let defaultUrl1 = 'localhost:5000/tour/getPageNumbers?limit=6'

    useEffect(() => {
        (
            async () => {

                const response = await fetch(defaultUrl, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });

                const content = await response.json();
                console.log(content.data)
                if (content.message === 'Successfully Get All Tour') {
                    setAllTour(content.data)
                }
            }
        )();
    }, [page])

    useEffect(() => {
        (
            async () => {

                const response = await fetch(defaultUrl, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });

                const content = await response.json();
                console.log(content.data)
                if (content.message === 'Successfully Get All Tour') {
                    setAllTour(content.data)
                }
            }
        )();
    }, [page])

    const add = () => {
        setcurrentPage(currentPage + 1)
    }

    const minus = () => {
        setcurrentPage(currentPage - 1)
    }

    const search = async () => {
        if (!wordSearch) {
            setcurrentPage(1)
        } else {
            let link = 'http://localhost:5000/tour/findTourByName?name=' + wordSearch
            const response = await fetch(link, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },

            });
            const content = await response.json();
            console.log(content.data)
            if (content.message === 'Successfully Get One Tour') {
                setAllTour(content.data)
            }
            else {
                setAllTour()
            }
        }
    }

    return (
        <div className="tours__container">
            <Header />
            <h3 className='h3-detail'>Trước khi đặt phòng, hãy kiểm tra những địa điểm bị hạn chế du lịch trong thời gian này. Sức khỏe và sự an toàn của cộng đồng luôn được đặt hàng đầu. Vì vậy, vui lòng làm theo chỉ thị của chính phủ bởi điều đó thực sự cần thiết.</h3>
            <h2 className='h2-detail'>Các địa điểm du lịch nổi tiếng tại TRAVEL</h2>
            <div className='body'>

                <div className='card'>

                    <div className='cards__container_tour'>
                        Tìm Kiếm
                        <div>
                            <input className='input-seach' type="text" name="search" placeholder="Nhập ký tự ..." onChange={e => setwordSearch(e.target.value)} />

                            <button class='tiktok' onClick={search}>Tìm</button>
                        </div>
                        <div className='cards__wrapper_tour'>
                            <div className='cards__items_tour'>

                                {

                                    allTour && allTour.map((tour) => {
                                        return <CardTour
                                            img={tour.imagesTour[0]}
                                            text={tour.name}
                                            days={tour.time}
                                            price={tour.payment}>
                                        </CardTour>
                                    })
                                }

                            </div>


                        </div>
                        <div style={{ margin: 'auto' }}>
                            <Stack spacing={2} >
                                <Pagination count={10} variant="outlined" page={page} onChange={handleChange} />
                            </Stack>
                        </div>

                    </div>

                </div>
            </div>


            <Foot />
        </div>
    )
}

export default Tour
