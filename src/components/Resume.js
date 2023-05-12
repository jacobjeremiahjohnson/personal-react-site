import React from "react"
import pdf from "../assets/images/Jacob Johnson Resume (2).pdf"

export default function Resume(){

    return (

        <main className="resume">
            <div id="rb" className="resume--body">
                <div className="rb--title">
                    Jacob Johnson
                </div>
                <div className="rb--links">
                    jacobjeremiah42@gmail.com | 302.415.9662 | LinkedIn | GitHub
                </div>
                <div className="rb--exp">
                <div className="rb--exp--name">J.P Morgan Chase and Co. </div> <div className="rb--exp--time">June - August 2022</div>
                </div>
                <div className="rb--loc">
                    Wilmington, Delaware
                </div>
                <div className="rb--body">
                Develop software solutions to support corporate functions within J.P Morgan Chase. Working as a full-time intern on a team of software engineers, I developed an automated graphical report used by multiple teams of financial analysts. The application I developed increased efficiency by approximately 1.5 full time employees per month. Worked with Grafana, Java, Springboot, and Oracle SQL to make commits to existing code bases using Jira. Overall developed proficiency in Java Spring Boot, Apache Airflow/Python, Kubernetes, and SQL.
                </div>
                <div className="rb--exp">
                <div className="rb--exp--name">Code Differently </div> <div className="rb--exp--time">October 2021 - August 2022</div>
                </div>
                <div className="rb--loc">
                    Wilmington, Delaware
                </div>
                <div className="rb--body">
                Work with software professionals to develop personal skills. Learned Agile frameworks, Java, Android Studio, SQL, React, HTML, CSS, JavaScript, and presentation skills.
                </div>
                <div className="line" />
                <div className="rb--exp">
                <div className="rb--exp--name">Delaware Technical Community College </div> 
                <div className="rb--exp--time">September 2022 - December 2023</div>
                </div>
                <div className="rb--loc">
                    Wilmington, Delaware
                </div>
                <div className="rb--body">
                Working towards an Associates in Applied Science to eventually transfer to University of Delaware for a Bachelors of Science in Computer Science.
                </div>

                <div className="rb--exp--name cert">
                    Certifications
                </div>
                <div className="rb--loc--noit">
                Oracle Certified Foundations Associate, Java Certified in Java Fundamentals
                </div>
                <div className="rb--exp--name cert">
                Skills
                </div>
                <div className="rb--loc--noit">
                Java, Spring Boot Framework, JavaFX <br/>
                JavaScript, Node.js, React.js <br/>
                HTML, CSS <br/>
                Python, Apache Airflow <br/>
                SQL, MySQL, Grafana <br/>
                C++ <br/>
                Git, BitBucket <br/>

                </div>

            </div>
            <div className="resume--link">
                <a href={pdf}>View as pdf</a>
            </div>
        </main>
    )
}