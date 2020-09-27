// import { Component } from 'react';
import React from 'react';
import home_content from './home';
import eaducation from './eaducation';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
class Application extends React.Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/" exact component={home_content}/>
          <Route path="/eaducation" exact component={eaducation}/>
          {/* <Route path="/projects" exact component={home_content}/> */}
          {/* <Route path="/work" exact component={home_content}/> */}
        </Switch>
      </Router>

    );
  }
}

// ReactDOM.render(temp,document.getElementById("root"));
export default Application;
