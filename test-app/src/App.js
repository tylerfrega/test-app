// import React, { Component } from 'react';

// import './App.css';
// import Button from './components/Button'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Button />
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import HomePage from './components/Pages/HomePage';
import LoginPage from './components/Pages/LoginPage';

const App = () => 
<BrowserRouter>
  <div className="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
  </div>
</BrowserRouter>
export default App;

