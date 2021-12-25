import React from 'react';
import Carousel from '../../Carousel/Carousel';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import Shop from '../../Shop/Shop';
import Banner from '../Banner/Banner';
import Follow from '../Follow/Follow';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Shop></Shop>
            <Follow></Follow>
            <Footer></Footer>
        </div>
    );
};

export default Home;