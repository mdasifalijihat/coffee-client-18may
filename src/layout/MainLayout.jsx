import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/fixedPgaes/Navbar';
import Footer from '../components/fixedPgaes/Footer';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;