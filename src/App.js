import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Forms from './components/form';


function App() {
  return (
    <>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Forms />} />
      </Routes>
</>

  );
}

export default App;
