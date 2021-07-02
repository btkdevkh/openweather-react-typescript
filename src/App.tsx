import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Meteo from './pages/Meteo';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/meteo" component={Meteo} />
      </Switch>
    </div>
  );
}

export default App;
