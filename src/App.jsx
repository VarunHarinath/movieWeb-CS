import Footer from "./components/Footer";
import Header from "./components/Header";
import Moviegrid from "./components/Moviegrid";

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <Header />
          <Moviegrid />
        </div>

        <div className="container">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
