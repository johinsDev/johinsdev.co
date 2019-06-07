import * as React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';

class Home extends React.Component<any, any> {
  render() {
    return (
      <div>
        <div>HOME</div>
        <div><Link to='/one'>Goto Page One</Link></div>
        <div><Link to='/two'>Goto Page Two</Link></div>
      </div>);
  }
}

class One extends React.Component<any, any> {
  render() {
    return (
      <div>
        <div>ONE</div>
        <Link to='/'>Goto Home</Link>
      </div>
    );
  }
}

class Two extends React.Component<any, any> {
  render() {
    return (
      <div>
        <div>TWO</div>
        <Link to='/'>Goto Home</Link>
      </div>
    );
  }
}


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/one" component={One} />
        <Route exact path="/two" component={Two} />
      </div>
    </Router>
  );
}

export default App;
