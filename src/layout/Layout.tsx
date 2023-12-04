import Nav from "@/components/common/nav";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "@components/common/footer"

const Layout:FC = () => {
    return (
        <>
            <Nav />
            <Outlet/>
            <Footer />
        </>
    )
}

export default Layout;