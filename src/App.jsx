import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/navbar";
import AboutUs from "./components/about";
import Vacancy from "./components/vacancy";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default App;
