import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// COMPONENTS
import Directory from './components/directory'
import Admin from './components/admin/admin'
import NewPost from './components/admin/newPost'
import Posts from './components/admin/posts'
import Dashboard from './components/admin/dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Directory} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/new" component={NewPost} />
            <Route exact path="/admin/posts" component={Posts} />
            <Route exact path="/admin/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
