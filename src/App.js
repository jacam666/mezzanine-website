import MainNavbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/HomePage.css'
import './App.css';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      < MainNavbar/>
      <div className="row d-flex justify-content evenly">
        <div className="col-md-4">
          <img className='home-page-image img-fluid ' src='/OIP.jpeg' alt='mezzanine flooring' />
        </div>
        <div className="col-md-4">
          <img className='home-page-image img-fluid ' src='/OIP.jpeg' alt='mezzanine flooring' />
        </div>
        <div className="col-md-4">
          <img className='home-page-image img-fluid ' src='/OIP.jpeg' alt='mezzanine flooring' />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
