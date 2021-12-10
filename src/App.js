import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
import { ContextProvider } from "./context";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <ContextProvider>
        <div className="content">
          <Shop />
        </div>
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;

// fb990dd2-85b9bb3-6ad5e1b3-6f77b6e5
