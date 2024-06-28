import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const fetchWeatherDetails = async () => {
  const res = await fetch(import.meta.env.VITE_WEATHERAPI_KEY);
  if (!res.ok) {
    throw new Error('Network Response was not proper');
  }
  const data = await res.json();
  const weatherText = data.current.condition.text;
  const weatherIcon = data.current.condition.icon;
  return {
    weatherIcon,
    weatherText
  };
};
 

function Header() {
  const {currentUser} = useSelector((state)=>state.user)
  const [weatherStatus, setWeatherStatus] = useState('');
  const [weatherImage, setWeatherImage] = useState('');

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeatherDetails();
        setWeatherStatus(data.weatherText);
        setWeatherImage(data.weatherIcon);
      } catch (error) {
        console.error('Failed to fetch weather data', error);
      }
    };
    getWeather();
  }, []);

  return (
    <div className=' bg-slate-800 text-white'>
    <div className=' max-w-6xl mx-auto'>
    <div className='flex items-center justify-between p-3'>
      <Link to='/user'>
       {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              // <li className=' text-slate-700 hover:underline'> Sign in</li>
              <img className=' mx-1' src="../public/assets/MenuIcon.svg" alt="Menu" />
            )}
      </Link>
      <Link to='/'><h1 className='font-extrabold text-xl'>NexusNews</h1></Link>
      {weatherStatus && weatherImage && (
        <div className='flex items-center'>
          <img className=' h-8 w-8' src={weatherImage} alt="Weather Icon" />
          <span>{weatherStatus}</span>
        </div>
      )}
    </div>
    </div>
    </div>
  );
}

export default Header;
