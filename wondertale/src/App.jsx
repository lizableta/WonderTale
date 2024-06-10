import "./app.scss"
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Homepage />
    </section>
    <section id="Books">
      <Parallax type="books" />
    </section>
    <Portfolio />
    <section id="Contact">
      <Contact />
     </section>

  </div>
};

export default App;