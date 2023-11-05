import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import MainContent from "./Components/MainContent";
import Nav from "./Components/Nav";
import SideContent from "./Components/SideContent";
import SocialMedia from "./Components/SocialMedia";
import "./Styles/page.css";

function App() {
  return (
    <>
      <section className="container">
        <Nav />
        <MainContent />
        <SideContent />
        <Footer />
        <SocialMedia />
      </section>
      <Loader />
    </>
  );
}

export default App;
