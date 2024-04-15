import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Details from './Pages/Details/Details'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Details' element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
