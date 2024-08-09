import logo from './logo.svg';
import './App.css'
import ImageGrid from './components/ImageGrid';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='app'>
       <Header/>
    <div className="header-image ">Header Image</div>
    <ImageGrid/>
    </div>
  );
}

export default App;
