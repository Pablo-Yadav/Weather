import "./App.css";
import HomePage from "./components/Landing/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./components/Results/Results";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/city/:cityName" element={<Results />} />
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
