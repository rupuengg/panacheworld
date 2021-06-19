import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import NoMatch from './components/Pages/NoMatch';
import Projects from './components/Pages/Projects';
import Project from './components/Pages/Projects/Project';
import store from './store/RootStore';
import { Provider } from 'react-redux';
import Contact from './components/Pages/Contact';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/projects/:id" component={Project} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Route path="*"><NoMatch /></Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
