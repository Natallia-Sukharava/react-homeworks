import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={
        <ProtectedRoute>
          <MenuPage />
        </ProtectedRoute>} />
        <Route path="/login" element={<LoginPage />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;