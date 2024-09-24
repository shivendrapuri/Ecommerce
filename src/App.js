import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
