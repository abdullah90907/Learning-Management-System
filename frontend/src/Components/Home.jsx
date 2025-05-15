import React from "react";
import { useUserContext } from "./UserContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "./images/logo.jpg";
import c1 from "./images/c1.jpg";
import c2 from "./images/html.png";
import c3 from "./images/sql.jpg";
import c4 from "./images/python.jpg";
import c5 from "./images/java.png";
import c6 from "./images/css.png";
import "./css/style.css";
import {
  faGraduationCap,
  faAward,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import Footer from "./header and footer/Footer";

function Home() {
  const navigate = useNavigate();
  const authToken = localStorage.getItem("token");
    // Define courses without IDs
  const courses = [
    { img: c1, title: "JavaScript Beginner Course", imageAlt: "JavaScript Course" },
    { img: c2, title: "HTML Complete Course", imageAlt: "HTML Course" },
    { img: c3, title: "SQL Beginner Course", imageAlt: "SQL Course" },
    { img: c4, title: "Python Master Course", imageAlt: "Python Course" },
    { img: c5, title: "Java Essentials", imageAlt: "Java Course" },
    { img: c6, title: "CSS Complete Course", imageAlt: "CSS Course" },
  ];
  return (
    <div>
      <Navbar page={"home"} />
      <div>
        <section id="home">
          <h2>Enhance your future with EduVerse Academy</h2>
          <p>
            {" "}
            OneYes Academy is a massive open online course provider, and its
            learning experience arranges coursework into a series of modules and
            lessons that can include videos, text notes, and assessment tests.
          </p>
          <div className="btn">
            <a className="blue" href="http://localhost:3000/login">
              Learn More
            </a>
            <a className="yellow" href="http://localhost:3000/courses">
              Visit Courses
            </a>
          </div>
        </section>
        <section id="features">
          <h1>Awesome Features</h1>
          <p>Chance to enhance yourself</p>
          <div className="fea-base">
            <div className="fea-box">
              <FontAwesomeIcon icon={faGraduationCap} className="i" />
              <h3>Scholarship Facility</h3>
              <p>Originality is the essence of true scholarship. </p>
            </div>
            <div className="fea-box">
              <FontAwesomeIcon icon={faStar} className="i" />
              <h3>Valuable Courses</h3>
              <p>
                Online education is like a rising tide, it's going to lift all
                boats.{" "}
              </p>
            </div>
            <div className="fea-box">
              <FontAwesomeIcon icon={faAward} className="i" />
              <h3>Global Certification</h3>
              <p>
                A certificate without knowledge is like a gun without bullets in
                your hand.{" "}
              </p>
            </div>
          </div>
        </section>
        <section id="course">
          <h1>Our Popular Courses</h1>
          <p>10,000+ enrolled</p>
          <div className="course-box">
            {courses.map((course, index) => (
              <Link key={index} to="/courses" style={{ textDecoration: 'none' }}>
                <div className="courses">
                  <img src={course.img} alt={course.imageAlt} />
                  <div className="details">
                    <p>Updated 12/08/23</p>
                    <h6>{course.title}</h6>
                    <div className="star">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="i" />
                      ))}
                      <p>(239)</p>
                    </div>
                  </div>
                  <div className="cost">$49.99</div>
                </div>
              </Link>
            ))}
            {/* <div className="courses">
              <img src={c2} alt="" />
              <div className="details">
                <p>Updated 12/08/23</p>
                <h6>HTML Complete Course</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">$49.99</div>
            </div>
            <div className="courses">
              <img src={c3} alt="" />
              <div className="details">
                <p>Updated 12/08/23</p>
                <h6>SQL Beginner Course</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">$49.99</div>
            </div>
            <div className="courses">
              <img src={c4} alt="" />
              <div className="details">
                <p>Updated 12/08/23</p>
                <h6>Python Master Course</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">$49.99</div>
            </div>
            <div className="courses">
              <img src={c5} alt="" />
              <div className="details">
                <p>Updated 12/08/23</p>
                <h6>Java Essentials</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">$49.99</div>
            </div>
            <div className="courses">
              <img src={c6} alt="" />
              <div className="details">
                <p>Updated 12/08/23</p>
                <h6>CSS Complete Course</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">$49.99</div>
            </div> */}
          </div>
        </section>
        <section id="registration">
          <div className="reminder">
            <p>Get 100 Online Courses for Free</p>
            <h1>Register to get it</h1>
            <div className="time">
              <div className="date">
                18
                <br /> Days
              </div>
              <div className="date">
                23
                <br /> Hours
              </div>
              <div className="date">
                06
                <br /> Minutes
              </div>
              <div className="date">
                58
                <br /> Seconds
              </div>
            </div>
          </div>
          {!authToken ? (
            <div className="form">
              <h3>Create Free Account NOW!</h3>
              <input type="text" placeholder="Name" name="" id="" />
              <input type="text" placeholder="Email" name="" id="" />
              <input type="password" placeholder="Password" name="" id="" />
              <input type="number" placeholder="Phone Number" name="" id="" />
              <div className="btn">
                <a className="yellow" href="#">
                  Submit Form
                </a>
              </div>
            </div>
          ) : (
            <></>
          )}
        </section>
        <Footer />
      </div>
    </div>
  );
}
export default Home;
