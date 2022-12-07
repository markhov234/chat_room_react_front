import './App.css';
import Navigation from "./components/Navigation"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './pages/Login';
import Chat from './pages/Chat';
import Home from './pages/Home';
import Signup from './pages/Signup';
function App() {
  return (
    <BrowserRouter>
     <Navigation />
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/chat" element={<Chat />}/>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
