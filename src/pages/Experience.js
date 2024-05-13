import React from "react";
import './../App.css';
import Navbar from './Navbar.js';
import './../index.css';

export default function Experience() {

    return (
        <div className="App">
            <Navbar />

            <div className="App-header">
            
            <h2>Professional Experience</h2>

            <p className="role">Technical Support Engineer, International Business Machines(IBM), Costa Mesa, CA — 2021-Present</p>
                <ul class="resp">
                    <li>Identify and quickly resolve issues impacting client business systems that are integrated with platforms and services found in IBM Cloud.</li>
                    <li>Enhance the client experience while minimizing critical business impact.</li>
                    <li>Triage complex system issues across various technology stacks and network configurations.</li>
                    <li>Review given logs, monitoring data, and network details for problem-solving.</li>
                    <li>Recreate complex technical issues to troubleshoot, debug, and implement alternative strategies to achieve client goals where practical.</li>
                    <li>Collaborate with Development, Service, and Field teams to address code-related failures and drive product quality and functionality improvements through support data and client feedback.</li>
                </ul>

            <p className="role">Retail Sales Consultant, AT&T Mobility, Azusa, CA - 2011-2020</p>
                <ul class="resp">
                    <li>First point of contact for customers to assist by listening to customer needs and recommend appropriate products and services to meet their requirements.</li>
                    <li>Meet or exceed sales targets and quotas by promoting and selling AT&T products as well upsell and cross-sell additional products and services to maximize revenue and enhance the customer experience.</li>
                    <li>Conduct product demonstrations and explain product features, specifications, and functionalities to customers.</li>
                    <li>Analyze technical issues in relation to mobile devices and operating systems to provide basic technical support and troubleshooting assistance to customers for device setup, activation, and usage issues.</li>
                    <li>Build and maintain positive relationships with customers to encourage repeat business and promote brand loyalty.</li>
                    <li>Collaborate with store management and fellow team members to achieve store goals and objectives.</li>
                </ul>


            <h2>Projects</h2>
            <p className="role">Blackhouse Label - 2020-2021</p>

            <p className="role">Aquila(Process Management System) - 2017-2018</p>

             
            </div>
        </div>
);
}