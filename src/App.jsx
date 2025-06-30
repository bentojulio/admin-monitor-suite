import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Routes from './routes';

function App() {
  return (
        <BrowserRouter>
              <Routes />
        </BrowserRouter>
  );
}

export default App;