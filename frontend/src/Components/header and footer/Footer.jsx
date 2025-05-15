import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../css/style.css'

function Footer(){
  return(
  <section id='footer'>
     <footer>
        <div className="footer-col">
          <h3>Master Courses</h3>
          <li>Web Development</li>
          <li>Programming</li>
          <li>Machine Learning</li>
          <li>Project Fundamentals</li>
        </div>
        <div className="footer-col">
          <h3>Intermediate Courses</h3>
          <li>OOP in Java</li>
          <li>Web Development with MERN</li>
          <li>Building RESTful APIs with Spring Boot</li>
          <li>Git & Version Control with GitHub</li>
        </div>
        <div className="footer-col">
          <h3>Beginner Courses</h3>
          <li>Introduction to Programming with Python</li>
          <li>Java Fundamentals for Beginners</li>
          <li>HTML & CSS Basics</li>
          <li>C++ Programming Essentials</li>
        </div>
        <div className="copyright">
          <p>Copyright ©2025 All rights reserved .</p>
          <div className="pro-links">
            <FontAwesomeIcon icon={faFacebookF} className="i"/>
            <FontAwesomeIcon icon={faInstagram} className="i"/>
            <FontAwesomeIcon icon={faLinkedinIn} className="i"/>
          </div>
        </div>
        </footer>
      </section>
  )
}
export default Footer;