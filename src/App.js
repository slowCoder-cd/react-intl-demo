import './App.css';
import { ContextProvider } from './reducer'
import Inter from './locale/intl'
import View from './views'

function App() {
  return (
    <ContextProvider>
      <Inter>
        <View />
      </Inter>
    </ContextProvider>
  );
}
export default App;
