import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponents from './Components/HeaderComponents';
import FooterComponent from './Components/FooterComponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponents />
          <div className="container">
            <Switch>
              <Route path='/' exact component={ListEmployeeComponent}></Route>
              <Route path='/employees' component={ListEmployeeComponent}></Route>
              <Route path='/add-employee' component={CreateEmployeeComponent}></Route>
            </Switch>
          </div>
          <FooterComponent />

      </Router>
    </div>

  );
}

export default App;
