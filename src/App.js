import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MobieNavigation from './components/MobieNavigation';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBannerData,setImageUrl } from './store/moviesSlice';

function App() {
  const dispatch = useDispatch()
  const fetchTrendingData = async()=>{
    try{
      const response = await axios.get('/trending/all/week')
      dispatch(setBannerData(response.data.results))
    }catch(e){
      console.log(e);
    }
  }
  const fetchConfiguration = async()=>{
    try{
      const response = await axios.get('/configuration')
      dispatch(setImageUrl(response.data.images.secure_base_url+"original"))
    }catch(e){
      console.log(e);
    }
  }
  useEffect(()=>{
    fetchTrendingData()
    fetchConfiguration()
  },[])
  return (
    <main className='pb-14 lg:pb-0'>
      <Header />
      <div className='min-h-[90vh]'>
        <Outlet />
      </div>
      <Footer />
      <MobieNavigation/>
    </main>
  );
}

export default App;
