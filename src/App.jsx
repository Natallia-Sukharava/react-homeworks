import { CartProvider } from "./CartContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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