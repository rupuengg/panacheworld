import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Componets/Pages/Home/Home';
import NoMatch from './Componets/Pages/NoMatch';
import Project from './Componets/Common/Project';
import ProjectDetail from './Componets/Common/Project/ProjectDetail';
import store from './store/RootStore';
import { Provider } from 'react-redux';
import Contact from './Componets/Pages/Contact';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/projects/:id" component={ProjectDetail} />
            <Route exact path="/projects" component={Project} />
            <Route exact path="/contact" component={Contact} />
            <Route path="*"><NoMatch /></Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
