import { ToastContainer } from 'react-toastify/dist/react-toastify.cjs.development';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Shop from './components/Shop';

function App() {
  return (
    <>
    <ToastContainer />
      <Header />
      <div className="content">
        <Shop />
      </div>
      <Footer />
    </>
  );
}

export default App;


// fb990dd2-85b9bb3-6ad5e1b3-6f77b6e5
