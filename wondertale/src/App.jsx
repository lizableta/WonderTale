import "./app.scss"
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Homepage />
    </section>
  </div>
};

export default App;
