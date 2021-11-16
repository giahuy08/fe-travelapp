import React, { useEffect,  useState} from 'react'
import '../../components/ListTour/ListTour.css'
import CardTour from '../../components/Card/CardTour'
import Foot from '../../components/Foot/Foot'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Header from '../../components/Header/Header'

function Tour() {
    const [allTour, setAllTour] = useState([]);
    const [wordSearch, setwordSearch] = useState('');

    
    

    // const params = useParams<{ n: string }>();
    // const currentPage = parseInt(params.n);
    const [currentPage, setcurrentPage] = useState(1);

    const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

    
    let defaultUrl = 'http://localhost:5000/tour/getAllTour?skip='+page+'&limit=6'

    useEffect(() => {
        (       
                async () => {

                const response = await fetch(defaultUrl,{
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'}
                });
                
                const content = await response.json();
                console.log(content.data)
                if(content.message === 'Successfully Get All Tour')
                {
                    setAllTour(content.data)                                  
                }
          }    
        )();
    },[page])

    const add = () =>{
        setcurrentPage(currentPage+1)
    }

    const minus = () =>{
        setcurrentPage(currentPage-1)
    }

    const search = async ()=>{
        if(!wordSearch)
        {
            setcurrentPage(1)
        }else{
            let link = 'http://localhost:5000/tour/findTourByName?name='+ wordSearch
        const response = await fetch(link,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            
        });
        const content = await response.json();
                console.log(content.data)
                if(content.message === 'Successfully Get One Tour')
                {
                    setAllTour(content.data)                                  
                }
                else{
                    setAllTour()
                }
        }                  
    }
   
    return (
        <div className="tours__container">
        {/* <Head/> */}
        <Header/>
        <h2 className='h2-detail'>Tour đi CHÂU ÂU</h2>  
        <div className='body'>
         
        <div className='card'>
        
           <div className='cards__container_tour'> 
                Tìm Kiếm
                    <div>
                    <input className='input-seach' type="text" name="search" placeholder="Nhập ký tự ..." onChange = {e => setwordSearch(e.target.value)}/>
                    
                    <button class='tiktok' onClick={search}>Tìm</button>
                    </div>
               <div className='cards__wrapper_tour'>
                   <div className='cards__items_tour'>
                   
                      {
                           
                           allTour&&allTour.map((tour)=>{
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
                <div style={{margin: 'auto'}}>
                <Stack spacing={2} >
                    <Pagination count={10} variant="outlined" page={page} onChange={handleChange}/>
                </Stack>
                </div>
                
            </div>            
            
        </div>
        </div>      
        
        
        <Foot/>   
        </div>
    )
}

export default Tour
