// import { Component } from 'react';
import React ,{useEffect}from 'react';
import home_content from '../Home/home';
import eaducation from '../Eaducation/eaducation';
import Projects from '../Projects/projects'
import work from '../Work/work';
import gsap from 'gsap';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
function Application() {
  useEffect( ()=> {
    const t = gsap.timeline({dafaults : {ease : "power1.out"}});
    console.log("Done");
    t.to('.textspan1' , { y:"0%" , duration : 0.5 , stagger:0.25});
    t.to('.textspan2', {y:"0%" , duration : 0.5 , stager :0.25});
    t.to('.helperSplashWindow', {y:"-100%" , duration :1.3 , delay : 0.5 });
    t.to('.initialSplashWindow',{ y:"-100%" , duration:1.5} , "-=1");

  });
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

// ReactDOM.render(temp,document.getElementById("root"));
export default Application;
