import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import "./styles.css";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="font-primary body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
