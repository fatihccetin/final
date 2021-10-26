import Routes from './routes/index';
import Main from './pages/Main/index';
import './components/Header/header.scss';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';

function App() {
  return (
    <div className="App">
    <Main />
    {Routes}

    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </div>
  );
}

export default App;
