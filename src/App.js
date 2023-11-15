import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/HomePage.css'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ImagePage from './Pages/ImagePage';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUs from './Pages/ContactUs';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      

      <Routes>
      <Route path="/" element={<HomePage /> }/>
        <Route path="/Pages/ImagePage" element={<ImagePage /> }/>
        <Route path="/Pages/AboutUsPage" element={<AboutUsPage /> }/>
        <Route path="/Pages/ContactUs" element={<ContactUs /> }/>
      </Routes>
    </div>
  );
}

export default App;
