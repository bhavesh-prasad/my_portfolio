// import { Component } from 'react';
import React from 'react';
import home_content from '../Home/home';
import eaducation from '../Eaducation/eaducation';
import Projects from '../Projects/projects'
import work from '../Work/work';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
class Application extends React.Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/" exact component={home_content}/>
          <Route path="/eaducation" exact component={eaducation}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/work" exact component={work}/>
        </Switch>
      </Router>

    );
  }
}

// ReactDOM.render(temp,document.getElementById("root"));
export default Application;
