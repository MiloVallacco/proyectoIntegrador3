import './App.css';
import { Switch, Route } from 'react-router-dom';

// aca abajo traemos todo lo que hicimo con esos 3 js para que nlo renderize el app
import Home from './Screens/Home/Home';
import NotFound from './Screens/NotFound/NotFound';
import Detalle from './Screens/Detalle/Detalle';
import Header from './Components/header/header';
import Footer from './Components/footer/footer';



function App() {
  return (
    <div className='App'>
      <Header/>
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/detalle/:id' component={Detalle} exact={true} />
        <Route component={NotFound} />
      </Switch>
      <Footer/>
    </div>
    
  );
}

export default App;
