// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Blog from '../components/Blog.js'; // Import your BlogComponent

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="../data.json">
          <Blog posts={data} />
        </Route>
        <Route path="/post/:postId">
          <Blog posts={data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
