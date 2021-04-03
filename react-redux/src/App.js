import './App.css';
import { Provider } from 'react-redux'
import generateStore from './redux/store'
import Pokes from './components/Pokes'

function App() {

  const store = generateStore()

  return (
    <Provider store={store}>
      <Pokes />
    </Provider>
  );
}

export default App;