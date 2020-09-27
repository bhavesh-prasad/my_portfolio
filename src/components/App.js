// import { Component } from 'react';
import React from 'react';
import About from './about';
import Shop from './Shop';

class Application extends React.Component {
  render(){
    return(
      <div class="container">
        <div>
          <h1>Summary</h1>
        </div>
        <div>
        Engineering student studying computer science and engineering at BIT Bangalore.
Used highly efficient development techniques to build and lead a team of 6 to achieve both short term as well as
long term goals, strengthening my team player abilities.
Always keeping an inquisition to learn and my dynamic learning skills has help me gain up to par knowledge of
various latest technologies and frameworks including .NET, Python, Data Science, SQL, Java, Algorithm designing,
etc.
I was nominated the club presidentship for a year which has helped me train my leadership skills and be a mentor
for junior engineers motivating them in every aspect to be their own leader learn their role in building an
effective society that works well and grows in membership.
I’ve also managed all inbound and outbound relations with the concerned club stakeholders communicating all
the club needs.
Being a Fast Learner and Team player are some of my most contrasting personalities
        </div>
        <div>
          <h1> Career Objective</h1>
          <div>
          Up-to-date with changes in technology ; business implications / applications of new technologies aspire to
yearn my career in IT Industry with capabilities to generate innovative ideas and integrate them into desired results offering .
          </div>
        </div>
      </div>
    )
  }
}

// ReactDOM.render(temp,document.getElementById("root"));
export default Application;
