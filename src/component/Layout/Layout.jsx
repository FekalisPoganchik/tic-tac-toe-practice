import React from "react";
import { Outlet } from "react-router";
// import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import Navbar from "../Navbar/Navbar";
// import classes from "./Layout.module.scss";

const Layout = () => {
    return (
        <>
            <Navbar />
            <div style={{ width: "100%" }}>
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
