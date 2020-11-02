import './App.css';
import CakeContainer from './components/cakeContainer'
import {Provider} from 'react-redux';
import store from './redux/store'
import HooksCakeContainer from './components/hooksCakeContainer';
import IcecreamContainer from './components/icecreamContainer';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <IcecreamContainer />
        <CakeContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
