import { CartProvider } from "./CartContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MenuPage from "./pages/MenuPage";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Header />
      <HomePage />
      <Footer />
    </CartProvider>
  );
}

export default App;
