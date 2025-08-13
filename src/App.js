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
        </p>
      </header>

      {/* Personal Summary */}
      <section className="resume-section">
        <h2>Personal Summary</h2>
        <p>
          Efficiency-driven Full Stack Developer with 3 years of experience designing and implementing secure,
          scalable financial solutions and hands-on expertise in payment gateways, transaction systems, and API integrations.
          Skilled in Agile methodologies, Test-Driven Development (TDD), and performance optimization under high traffic.
        </p>
      </section>

      {/* Professional Experience - Timeline */}
      <section className="resume-section">
        <h2>Professional Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">Jan 2025 – Present</div>
            <div className="timeline-content">
              <h3>Capital One| Chicago, IL</h3>
              <ul>
                <li>Collaborated with cross-functional teams via Jira, and Scrum, improving project efficiency by 20%.</li>
                <li>Gained experience with CI/CD workflows for automated build, test, and deployment processes.</li>
                <li>Developed a high-performance API that enabled seamless onboarding of 100,000 new customers.</li>
                <li>Developed and executed unit and integration tests using Jest and React Testing Library to validate component behavior and UI functionality.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">April 2023 – March 2025</div>
            <div className="timeline-content">
              <h3>Discover Financial Service  | Riverwoods, IL</h3>
              <ul>
                <li>Managed version control for 32 services using Git with staging and stashing strategies.</li>
                <li>Fixed 1100+ failing Selenium test cases and configured Datadog, reducing downtime by 35%.</li>
                <li>Optimized a SPA in React.js by implementing lazy loading to reduce page load time by 15%.</li>
                <li>Configured Nginx to disable frontend caching, decreasing client-side issues by 25%.</li>
                <li>Built dynamic, state-driven UI components using React Hooks (useState, useEffect, useContext) to improve code reusability and maintainability.</li>

              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">May 2022 – Dec 2022</div>
            <div className="timeline-content">
              <h3>eMeasurematic, Inc | Chicago, USA</h3>
              <ul>
                <li>Used gRPC and Protocol Buffers for structured communication between the client and server.</li>
                <li>Integrated server responses to dynamically generate a login page in the UI based on user-specific data.</li>
                <li>Enhanced the existing UI in Visual Studio using JavaScript ES6, HTML5, and CSS by adding interactive button functionality and a map feature to generate a 2D yard layout.</li>

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
            <span>Java 21</span>
            <div className="skill-bar"><div className="skill-bar-fill" style={{"--skill-level":"95%"}}></div></div>
          </div>
          <div className="skill-item">
            <span>React JS</span>
            <div className="skill-bar"><div className="skill-bar-fill" style={{"--skill-level":"80%"}}></div></div>
          </div>
          <div className="skill-item">
            <span>Spring Boot</span>
            <div className="skill-bar"><div className="skill-bar-fill" style={{"--skill-level":"85%"}}></div></div>
          </div>
          <div className="skill-item">
            <span>CSS</span>
            <div className="skill-bar"><div className="skill-bar-fill" style={{"--skill-level":"80%"}}></div></div>
          </div>
          <div className="skill-item">
            <span>GIT</span>
            <div className="skill-bar"><div className="skill-bar-fill" style={{"--skill-level":"90%"}}></div></div>
          </div>
        </div>
      </section>
    </div>
  );
}
