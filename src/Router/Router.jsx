import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../Components/Home';
import HomeLayout from './HomeLayout';
import About from '../Components/About';

const Router = () => {
    return (
        <Routes>
            {/* home layout routes, it will include outlet on it */}
            <Route path='/' element={<HomeLayout></HomeLayout>}>
            {/* children components of home layout */}
                <Route index element={<Home />} />
                <Route path='about' element={<About />} />
            </Route>


        {/* 👇fully new page,These are standalone pages — no layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Optional: 404 Not Found page */}
        <Route path="*" element={<NotFound />} />
            
        </Routes>
    );
};

export default Router;