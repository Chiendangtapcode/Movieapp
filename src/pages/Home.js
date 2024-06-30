import React, { useEffect, useState } from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import HorizontalScrollCard from '../components/HorizontalScrollCard'
import useFetch from '../hooks/useFetch'


function Home() {
  const trendingData = useSelector(state => state.moviesData.bannerData)
  const {data : nowPlayingData} = useFetch('/movie/now_playing')
  const {data : popularData} = useFetch('/tv/popular')
  const {data : topRate} = useFetch('/movie/top_rated')
  const {data : upcoming} = useFetch('/movie/upcoming')
  

  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard data = {trendingData} heading={"Trending"} trending={true}/>
      <HorizontalScrollCard data = {nowPlayingData} heading={"Now Playing"} media_type={"movie"}/>
      <HorizontalScrollCard data = {popularData} heading={"Popular"} media_type={"tv"}/>
      <HorizontalScrollCard data = {topRate} heading={"Top rate"} media_type={"movie"}/>
      <HorizontalScrollCard data = {upcoming} heading={"Up Coming"} media_type={"movie"}/>
      
    </div>
  )
}

export default Home
