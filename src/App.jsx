import { useState } from "react";
import { Navbar } from "./components/Navbar";
import Routers from "./components/routes/Routes";
import Signin from "./components/Signin";

export const App = () => {
  const { Auth, setAuth } = useState(false);
  return (
    <div>
      <Navbar />
      <Routers />
    </div>
  );
};
