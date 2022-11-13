import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="flex flex-col h-full">
      <NavBar />
      {/* Request Beta Access A super solution for your business. Our marketing and
      sales automations help you scale your outreach to get more leads for your
      company. Request Beta Access 2K+ Companies 8 Languages 1.2M Leads */}
      <Stats />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
