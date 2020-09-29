import React ,{useEffect} from 'react';
import photo from './(5).jpg';
import home from './home.css';
import gsap from 'gsap';
import ScriptTag from 'react-script-tag';
function Home_contents() {
  useEffect(() => {
    const t = gsap.timeline({dafaults : {ease : "power1.out"}});
    t.to('.mainPagePhoto' , { y:"0%" , duration : 1,delay:2.5});
    t.to('.text1' , { x:"0%" , duration : 1}, "-=1");
    t.to('.text2' , { x:"0%" , duration : 1});

  })
    return (
      <div id = "mainDivElement">
        <ScriptTag isHydrating ={true} type="text/javascript" src="HomeScript" />
        <link rel="stylesheet" href={home}/>
        <div className="startingAnimationElement" class="container">
          <img src={photo} className="mainPagePhoto"/>
          <div id="verticalBar"></div>
          <div id ="createdText"><h1 class="text1">Created By </h1>
          <br/><h2 class="text2">Bhavesh Prasad</h2>
        </div>
        </div>
        {/* <div>
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
        </div> */}
      </div>
    )
}
export default Home_contents;