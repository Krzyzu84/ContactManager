import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Contact from './components/Contact';
import Contacts from './components/Contacts';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
      <Contacts/>
      </div>
    </div>
  );
}

export default App;
