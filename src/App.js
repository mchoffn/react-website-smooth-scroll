import Navbar from './components/NavBar';
import './App.css';
import {BrowserRouter as router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
