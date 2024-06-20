import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Footer from "./layout/Footer/footer";
import Collection from "./pages/Collections";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/collections" element={<Collection />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
