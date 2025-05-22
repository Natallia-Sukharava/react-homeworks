import { CartProvider } from "./CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuPage from "./pages/MenuPage";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Header />
      <MenuPage />
      <Footer />
    </CartProvider>
  );
}

export default App;