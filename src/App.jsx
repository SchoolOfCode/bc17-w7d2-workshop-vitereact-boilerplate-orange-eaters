import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <main className="site-main">
        <Main />
      
      </main>
      <Footer />
    </div>
  );
}

export default App;
