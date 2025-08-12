import React from "react";
import "./App.css";

export default function Resume() {
  return (
    <div className="resume-container">
      {/* Header */}
      <header className="resume-header">
        <h1>Siddharth Malhotra</h1>
        <p>
          <a href="mailto:siddharthmalhotra2170@gmail.com">siddharthmalhotra2170@gmail.com</a> | 312-358-7656 | Chicago, IL | 
          <a href="#"> LinkedIn</a>
        </p>
      </header>

      {/* Personal Summary */}
      <section className="resume-section">
        <h2>Personal Summary</h2>
        <p>
          Efficiency-driven Full Stack Developer with 4 years of experience designing and implementing secure,
          scalable financial solutions and hands-on expertise in payment gateways, transaction systems, and API integrations.
          Skilled in Agile methodologies, Test-Driven Development (TDD), and performance optimization under high traffic.
        </p>
      </section>

      {/* Professional Experience - Timeline */}
      <section className="resume-section">
        <h2>Professional Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">Apr 2023 – Present</div>
            <div className="timeline-content">
              <h3>Discover Financial Service | Riverwoods, IL</h3>
              <ul>
                <li>Fixed 1100 failing Selenium test cases for regression tests on the UI side.</li>
                <li>Implemented JWT with Spring Boot & Spring Security for security layer & role control.</li>
                <li>Upgraded 22 services from JDK 8 to JDK 17 and migrated from PCF to VMs.</li>
                <li>Optimized AWS infrastructure (EC2, S3, Lambda), improving scalability.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">May 2022 – Feb 2023</div>
            <div className="timeline-content">
              <h3>eMeasurematic, Inc | Chicago, USA</h3>
              <ul>
                <li>Developed persistence layer using Hibernate, increasing query performance by 30%.</li>
                <li>Created and maintained web pages using Angular 11, HTML5, CSS3, JS & Bootstrap.</li>
                <li>Built logging service using Singleton pattern & Log4j.</li>
                <li>Performed RDBMS implementation using Oracle, MySQL, MSSQL, and DB2.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Oct 2020 – July 2021</div>
            <div className="timeline-content">
              <h3>Infosys Technologies | Chandigarh, India</h3>
              <ul>
                <li>Built Maven project using Spring Framework (MVC, IOC, AOP) & Microservices.</li>
                <li>Implemented Singleton Java EE design pattern and RESTful APIs.</li>
                <li>Worked in Agile environment, attending daily scrums and bi-weekly sprints.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Skills */}
      <section className="resume-section grid-two">
        <div>
          <h2>Education</h2>
          <p><strong>Master of Science</strong> | University of Illinois, Chicago, USA<br/>Management Information Systems (Jun 2021 – Dec 2022)</p>
          <p><strong>Bachelor of Technology</strong> | Thapar University, India<br/>Electronics & Computer (Aug 2016 – Jun 2020)</p>
        </div>

        <div>
          <h2>Skills</h2>
          <div className="skill-item">
            <span>Java 17</span>
            <div className="skill-bar"><div className="skill-bar-fill" style={{"--skill-level":"95%"}}></div></div>
          </div>
          <div className="skill-item">
            <span>React JS</span>
            <div className="skill-bar"><div className="skill-bar-fill" style={{"--skill-level":"90%"}}></div></div>
          </div>
          <div className="skill-item">
            <span>Spring Boot</span>
            <div className="skill-bar"><div className="skill-bar-fill" style={{"--skill-level":"85%"}}></div></div>
          </div>
          <div className="skill-item">
            <span>Node JS</span>
            <div className="skill-bar"><div className="skill-bar-fill" style={{"--skill-level":"80%"}}></div></div>
          </div>
          <div className="skill-item">
            <span>AWS</span>
            <div className="skill-bar"><div className="skill-bar-fill" style={{"--skill-level":"75%"}}></div></div>
          </div>
        </div>
      </section>
    </div>
  );
}
