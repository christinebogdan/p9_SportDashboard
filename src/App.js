import "./App.css";
import Nav from "./views/nav";
import Main from "./views/main";
import Aside from "./views/aside";
import Footer from "./views/footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <Main name="Thomas" />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
