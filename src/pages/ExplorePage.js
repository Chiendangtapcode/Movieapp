import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'

function ExplorePage() {
  const params = useParams()
  const [pageNo, setpageNo] = useState(1)
  const [data, setData] = useState([])
  const [totalPageNo, setTotalPageNo] = useState(0)

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo
        }
      })
      setData((pre) => {
        return [
          ...pre,
          ...response.data.results
        ]
      })
      setTotalPageNo(response.data.total_pages)
    } catch (e) {
      console.log(e)
    }
  }
  const handScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setpageNo(pre => pre + 1)
    }
  }
  useEffect(() => {
    fetchData()
  }, [pageNo])

  useEffect(()=>{
    setpageNo(1)
    setData([])
    fetchData()
  },[params.explore])
  useEffect(() => {
    window.addEventListener("scroll", handScroll)
  }, [])

  return (
    <div className='pt-16'>
      <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>{params.explore}</h3>
      <div className=' grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-center'>
        {
          data.map((exploreData,index)=>{
            return (
              <Card data={exploreData} key={exploreData.id+"exploreSection"} media_type={params.explore}/>
            )
          })
        }

      </div>

    </div>
  )
}

export default ExplorePage
