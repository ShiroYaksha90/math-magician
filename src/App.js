import './App.css';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import RandomQuotes from './components/qoutes';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<RandomQuotes />} />
      </Routes>
    </div>
  );
}

export default App;
