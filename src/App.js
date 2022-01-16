import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './Component/Header';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/profile" element={<Profile />} ></Route>
        <Route component={ErrorPage}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
