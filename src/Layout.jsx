import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function Layout(){
    return(
        <>
        <ScrollToTop/>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout