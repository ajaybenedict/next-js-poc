import Image from "next/image";
import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer"
;

  const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;