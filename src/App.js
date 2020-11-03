import './App.css';
import CakeContainer from './components/cakeContainer'
import {Provider} from 'react-redux';
import store from './redux/store'
import HooksCakeContainer from './components/hooksCakeContainer';
import IcecreamContainer from './components/icecreamContainer';
import MultipleNumberCakeContainer from './components/multipleNumberCakeContainer';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <IcecreamContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <MultipleNumberCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
