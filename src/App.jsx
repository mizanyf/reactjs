import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Mizan from './pages/mizan';
import Aditya from './pages/aditya';
import Ali from './pages/ali';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mizan />} />
        <Route path="/mizan" element={<Mizan />} />
        <Route path="/aditya" element={<Aditya />} />
        <Route path="/ali" element={<Ali />} />
      </Routes>
    </Router>
  );
}

export default App;