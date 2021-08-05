import './App.css';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import './css/style.css'

import Demo from './components/Demo'
import List from './components/List'
import ButtonTest from './components/ButtonTest'

import HomePage from './views/HomePage'
import TutorialTreePage from './views/TutorialTreePage'

var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/tutorial_tree_page" component={TutorialTreePage} />
        <Route path="/demo" component={Demo} />
      </Switch>
    </Router>
  );
}

export default App;
