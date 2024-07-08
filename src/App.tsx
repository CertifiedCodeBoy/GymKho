import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import './styles.css'

function App() {
  return (
    <div className="font-primary body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
