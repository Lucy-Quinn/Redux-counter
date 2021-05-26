import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import Counter from './components/Counter';
const store = createStore(rootReducer);



function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
