import Home from "./components/Home";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";

const App = (): JSX.Element=> {
  return (
   <div>
    <Navbar />
    <Nav />
    <Home /> 
   </div>
  )
};

export default App;