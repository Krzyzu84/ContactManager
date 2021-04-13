import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';

import {Provider} from './context';

function App() {
  return (
    <Provider>
    <div className="App">
      <Header/>
      <div className="container">
      <AddContact/>
      <Contacts/>
      </div>
    </div>
    </Provider>
  );
}

export default App;
