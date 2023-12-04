import Home from "./components/Home";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
import Premios from "./components/Premios";

const App = (): JSX.Element=> {
  return (
   <div>
    <Navbar />
    <Nav />
    <Home />
    <Premios />
   </div>
  )
};

export default App;