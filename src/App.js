import './App.css';
import { BrowserRouter  as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import WorkPage from './Work/WorkPage';
import AboutPage from './About/AboutPage';
import ImageDetail from './Work/ImageDetail';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<WorkPage />} />
        <Route path="/Work" element={<WorkPage />} />
        <Route path='/About' element={<AboutPage/>}/>
        <Route path="/image/:id" element={<ImageDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
