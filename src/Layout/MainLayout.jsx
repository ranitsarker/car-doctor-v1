import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <>  <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />

        </>
    );
};

export default MainLayout;