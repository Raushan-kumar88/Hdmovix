import React from 'react'
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import "./style.scss";
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import Upcoming from './upcoming/Upcoming';

// HeroBanner;
function Home() {
  return (
    <div>
    <HeroBanner/>
    <Trending/>
    <Popular/>
    <Upcoming/>
    <TopRated/>
    </div>
  )
}

export default Home