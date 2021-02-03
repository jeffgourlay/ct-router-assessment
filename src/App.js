import React, { Component } from 'react';
import { Route,
         Switch,
         useParams
       } from 'react-router-dom';
import NoMatch from 'react-router-nomatch';
import './App.css';
//*** Import the Welcome component ***//
import Welcome from './components/Welcome/Welcome';
//*** Import the clock */
import Clock from './components/Clock/Clock';
//*** Import the contact component */
import Contact from './components/Contact/Contact';
//*** Import the navigation component */
import Navigation from './components/Navigation/Navigation';
//*** Import the 404 component */
import NotFound from './components/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* Adding the Welcome component and passing the value "Eric" to the "name" prop */}
          <Navigation />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Welcome {...props} name="Jeff" />}
            />
            <Route 
              path="/welcome/:name" 
              render={(props) => <Welcome {...props} name={props.match.params.name}/>}
            />
            <Route path="/clock" component={Clock} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }

}

function GetName() {
  let {name} = useParams();
  return (
    {name}
  );
}

export default App;