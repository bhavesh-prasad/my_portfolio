import React from 'react';

class Projects extends React.Component{
    render(){
        return(
            <div>
                <div class="container">
                    <h1>Animated</h1>
                    <p>
                    Anything is best understood if the information is presented along with a video. Creating a video is not an easy task.
This project simplifies the very same approach. The application can produce 2d videos for any given input. For
example if we input a novel to the application it will try to produce a 2d animation video describing the story of the
novel. Same also applies to any input science material.This project benefits in all the available fields . The video
produced is the result of a ML Model trained using a huge data set in order to produce accurate results . The videos
produced now is in the form of a simple block figures as the project is still in its prototype stage.
                    </p>
                </div>
                <div class="container">
                    <h1>Emergency Patient Record System</h1>
                    <p>
                    This project tries to create a universal database which contains all the medical information for any person. These
records can be used in cases whenever an unconscious patient needs to be treated during emergency and every
small medical records of the patient can help speed up the pre surgical procedures such as checking the blood
group or even some anesthetic reactions. The information can be accessed through any UID provided by Indian
government or even facial recognition using machine learning. For security upfront, the information will be
accessible only to licensed medical practitioners
                    </p>
                </div>
                <div class="container">
                    <h1>Drone Surveillance</h1>
                    <p>
                    This project focused on the surveillance features. A simple flight drone ran on Flytbase OS on RaspberryPi 3+ to
perform all it’s function. The drone was code framed to perform all the surveillance activities from tracking a human
or non-human object to remotely analysing land data of a remotely located area. The drone could perform
independently without any controller by using its operating system. The drone’s Raspberry pi was Iot enabled
,making it accessible remotely from anywhere around the world. 
                    </p>
                </div>
            </div>
        )
    }
}
export default Projects;