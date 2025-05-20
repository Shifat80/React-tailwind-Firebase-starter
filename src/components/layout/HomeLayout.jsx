import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import { Outlet } from "react-router";

const HomeLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center bg-repeat-y ">
            <header>
                <Nav />
            </header>
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default HomeLayout;