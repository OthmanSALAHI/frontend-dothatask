import { useState } from "react";
import { Navbar } from "./components/header/Navbar";
import Routers from "./components/routes/Routes";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Emailsent from "./components/pages/Emailsent";
import Homepage from "./components/pages/Homepage";
import SearchCategorie from "./components/areas/SearchCategorie";
import Footer from "./components/footer/Footer";
import ServiceDetails from "./components/pages/ServiceDetails";
import { Link } from 'react-router-dom';

export const App = () => {
  const [Auth, setAuth] = useState(false);
  return (
    <div>
      <div className="z-[1]">
        <Navbar />
      </div>
      <Routers />
      <Footer />
      ,<Link to="/details" className="bg-black w-[50px]"> Details </Link>
    </div>
  );
};
