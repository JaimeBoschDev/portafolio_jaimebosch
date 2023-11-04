import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import MainContent from "./Components/MainContent";
import Nav from "./Components/Nav";
import SideContent from "./Components/SideContent";
import "./Styles/page.css";

function App() {
  return (
    <>
      <section className="container">
        <Nav />
        <MainContent />
        <SideContent />
        <Footer />
      </section>
      <Loader />
    </>
  );
}

export default App;
