import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/nav/nav';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import Catalogue from './components/catalogue/catalogue';
import Productcreation from './components/productcreation/productcreation';
import CatalogueExport from './components/catalogueexport/catalogueexport';
import ErrorPage from './components/error/errorpage';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/catalogue" exact component={Catalogue}/>
        <Route path="/new-product" exact component={Productcreation}/>
        <Route path="/export" exact component={CatalogueExport}/>
        <Route path="/404" exact component={ErrorPage}/>
        <Redirect from='*' to='/404' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;