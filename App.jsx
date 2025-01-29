import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
/*import Home from "./components/FunctionalComponents/Home";
import NavBar from "./components/FunctionalComponents/NavBar";
import About from "./components/FunctionalComponents/About";
import Contact from "./components/FunctionalComponents/Contact";
import Footer from "./components/FunctionalComponents/Footer";
import SignUp from "./components/Signup";
//import Login from "./components/FunctionalComponents/Login";
import Gallery from "./components/FunctionalComponents/Gallery";
import ClassCompExe from "./components/classComponents/ClassCompExe";
import UseState from "./components/FunctionalComponents/Hooks/UseState";
import UseEffect from "./components/FunctionalComponents/Hooks/UseEffect";
import UseEffectAPI from "./components/FunctionalComponents/Hooks/UseEffectAPI";
import UseReducer from "./components/FunctionalComponents/Hooks/UseReducer";
import UseRef from "./components/FunctionalComponents/Hooks/UseRef";
import UseMemo from "./components/FunctionalComponents/Hooks/UseMemo";
import UseCallback from "./components/FunctionalComponents/Hooks/UseCallback";
import ReactLifeCyleMethods from "./components/classComponents/ReactLifeCyleMethods";
import UseContext from "./components/FunctionalComponents/Hooks/UseContext";
import Memo from "./components/FunctionalComponents/Memoization/Memo";
import FunctionInsideClass from "./components/classComponents/FunctionInsideClass";
import  LazyLoadingWithSuspense from "./components/FunctionalComponents/Memoization/LazyLoadingWithSuspense";
import UseLocalStorage from "./components/FunctionalComponents/Hooks/CustomHooks/UseLocalStorage";
import HoC from "./components/FunctionalComponents/Hoc/HoC";
import DarkModeToggle from "./components/FunctionalComponents/Hooks/CustomHooks/DarkModeToggle";*/
import Home from "./components/FunctionalComponents/Home";
import Login from "./components/Login";
import SignUp from "./components/Signup";

function App() {
  /*const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  
  };*/

  return (
    <BrowserRouter>
      {/*isAuthenticated && <NavBar onLogout = {handleLogout}/>*/}
      <Routes>
        {/*!isAuthenticated ? (
          <>
            <Route path="/" element={<SignUp onLogin={handleLogin} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery image="chocolate" page="gallery" />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/use-state" element={<UseState />} />
            <Route path="/use-effect" element={<UseEffect />} />
            <Route path="/useeffect-api" element={<UseEffectAPI />} />
            <Route path="/use-reducer" element={<UseReducer />} />
            <Route path="/use-ref" element={<UseRef />} />
            <Route path="/use-memo" element={<UseMemo />} />
            <Route path="/use-callback" element={<UseCallback />} />
            <Route path="/use-context" element={<UseContext />} />
            <Route path="/reactlm" element={<ReactLifeCyleMethods />} />
            <Route path="/memo" element={<Memo />} />
            <Route path="/function-class" element={<FunctionInsideClass />} />
            <Route path="/lazy-loading" element={<LazyLoadingWithSuspense />} />
            <Route path="/custom-hooks" element={<UseLocalStorage />} />
            <Route path="/hoc" element={<HoC />} />
            <Route path="/custom-hooks2" element={<DarkModeToggle />} />  
        )} */}
        <Route path="/" element={<SignUp/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
