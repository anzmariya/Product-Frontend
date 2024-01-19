import './App.css';
import Dashboard from './pages/Dashboard';
import { Route,Routes } from 'react-router-dom';
import Productdetails from './pages/Productdetails';

function App() {
  return (
  
    <div>
      <Routes>
        <Route path={'/'} element={<Dashboard/>}></Route>
        <Route path={'/productdetails'} element={<Productdetails/>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
