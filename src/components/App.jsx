//sections:
import {Provider} from 'react-redux';
import CartIcon from './Cart-icon';
import Main from './Main';
import Cards from './Cards';
import Footer from './Footer';
import store from '../slices/store';
import Bag from "./Bag";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CartIcon />
        <Main />
        <Cards />
        <Footer />
        <Bag/>
      </div>
    </Provider>
  );
}

export default App;
