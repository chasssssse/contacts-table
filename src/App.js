import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContactsTableScreen from './screens/ContactTable';
import DetailScreen from './screens/ContactDetail';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ContactsTableScreen} />
        <Route path="/details/:userId" component={DetailScreen} />
      </Router>
    </div>
  );
}

export default App;