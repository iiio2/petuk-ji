import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/common/navbar";
import AboutUs from "./components/about";
import Vacancy from "./components/vacancy";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default App;
