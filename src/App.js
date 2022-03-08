
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Router>
       <Routes>
         <Route path="/" element={<Signup/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
