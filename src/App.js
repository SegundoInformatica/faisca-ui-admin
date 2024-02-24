import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import RoutesApp from './routes/routes'

function App() {
  return (
    <BrowserRouter>
      <RoutesApp />     
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
