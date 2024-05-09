import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BoardPage from './components/BoardPage';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/board' element={<BoardPage/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;