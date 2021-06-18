import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../Pages/Home/Home';
import NoMatch from '../Pages/NoMatch';
import Project from '../Common/Project';
import ProjectDetail from '../Common/Project/ProjectDetail';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/projects/:id" component={ProjectDetail} />
          <Route exact path="/projects" component={Project} />
          <Route path="*"><NoMatch /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
