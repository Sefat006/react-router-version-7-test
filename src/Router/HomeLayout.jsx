import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* This will expand to fill the available space */}
            <div className="flex-grow text-center">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default HomeLayout;