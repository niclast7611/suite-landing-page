import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import HeroImageAndIntro from "./components/HeroImageAndIntro";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex flex-col min-h-full">
      <NavBar />
      <HeroImageAndIntro />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
