import "./App.css";
import Featured from "./Components/Featured/Featured";
import Footer from "./Components/Footer/Footer";

import NavBar from "./Components/Navbar/NavBar";
import NewArrival from "./Components/Newrrival/NewArrival";
import Top from "./Components/Top/Top";

function App() {
  return (
    <>
      <NavBar />
      <Top />
      <NewArrival />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
