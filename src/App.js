import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import Home from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/login" component={SignIn} />
       <Route path="/register" component={SignUp} />
      </Switch>
      
    </div>
  );
}

export default App;
