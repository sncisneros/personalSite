import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import './../App.css';
import './../index.css';

export default function Skills() {

    return (
        <div className="App">
            <Navbar />

            <div className="App-header">
            <h2>My Qualifications</h2>

            <ul class="resp">
                <li>6 years of experience in backend software development </li>
                <li>Advanced proficiency in Javascript, Java, Node.JS and Python</li>
                <li>Proven experience in RESTful API design, development, and implementation</li>
                <li>Understanding and Strong Experience in backend frameworks such as Spring, Spring Boot and Express</li>
                <li>Experience with JSON datasets, manipulation, and data handling</li>
                <li>Knowledge of Cloud services including API Management Systems, Container Application Deployment, Continuous Integration/Continuous Delivery, and Logging and Monitoring systems</li>
                <li>Deep understanding of version control tools such as Git, GitHub, and GitLab. Familiarity with Linux/Unix commands</li>
                <li>Experience with frontend technologies such as React and Angular. Familiar with HTML and CSS</li>
                <li>Knowledge of Relational and Non-Relational databases such as MySQL, MongoDB, CouchDB, and PostgreSQL</li>
                <li>Experience in container technologies such as Docker and Kubernetes</li>
                <li>Passion for solving complex problems and critical thinking. Experience debugging and troubleshooting</li>
                <li>Team collaborator. Excellent interpersonal, communication and time management skills</li>
                <li>Proficiency in MS Visual Studio, Eclipse, and Postman</li>
            </ul>


            </div>
        </div>
    );
}
