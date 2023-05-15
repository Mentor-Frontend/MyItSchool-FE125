import React from "react";
import UseGlobalStyles from "../../styles/global";
import Header from "../Header/Header";
import { Outlet } from 'react-router-dom';
import Footer from "../Footer";

import { Provider } from "react-redux";
import store from "../Store/store";

export default function Layout() {
   
    return (
        <>
        <UseGlobalStyles />
        <Provider store={store}> 
             <Header />
                <main>
                    <Outlet />
                </main>
               
               <Footer />
        </Provider>
       
        </>
    );
}