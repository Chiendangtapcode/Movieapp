import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../components/Card'

function SearchPage() {
  const location = useLocation()
  const [data,setData] = useState([])
  const [page,setPage] = useState(1)
  const navigate = useNavigate()
  const query = location?.search?.slice(3)
  const fetchData = async () => {
    try {
      const response = await axios.get(`/search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: page
        }
      })
      setData((pre) => {
        return [
          ...pre,
          ...response.data.results
        ]
      })
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(()=>{
    if(query){
      setPage(1)
      setData([])
      fetchData()
    }
  },[location?.search])

  const handScroll = () =>{
    if((window.innerHeight + window.scrollY)>= document.body.offsetHeight){
      setPage(pre => pre +1)
    }
  }
  useEffect(()=>{
    if(query){
      fetchData()
    }
  },[page])

  useEffect(()=>{
    window.addEventListener('scroll', handScroll)
  },[])
  return (
    <div className='pt-16'>
      <div className='lg:hidden my-2 sticky top-[70px] z-30'>
        <input className='px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-900' type='text' placeholder='Search here ...' onChange={(e)=> navigate(`/search?q=${e.target.value}`)} value={query?.split("%20")?.join(" ")} />
      </div>
      <div className='container mx-auto'>
        <h3 className=' capitalize text-lg lg:text-xl font-semibold my-3'>Search Results</h3>
        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
          {
            data.map((searchData,index)=>{
              return(
                <Card data={searchData} key={searchData.id+'search'} media_type={searchData.media_type}/>
              )
            })
          }
        </div>
      </div>
      
    </div>
  )
}

export default SearchPage
