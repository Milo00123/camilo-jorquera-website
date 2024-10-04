import React from 'react';
import './About.scss';
import camilo from '../../Assets/Images/1727197352370.jpeg';
import js from '../../Assets/Icons/javascript-logo.4e8fda8d9b17dd9d4c30.png';
import reactIcon from '../../Assets/Icons/react-logo.bcab5c24998b4ff7ba93.png';
import node from '../../Assets/Icons/node.png';
import axiosIcon from '../../Assets/Icons/axios-axios_processed.png';
import htmlIcon from '../../Assets/Icons/html.png';
import cssIcon from '../../Assets/Icons/css-logo.8f6ff1def7513a644651.png';
import sassIcon from '../../Assets/Icons/sass.png';
import netlify from '../../Assets/Icons/netlify.png';
import reactIcon2 from '../../Assets/Icons/react-router.png';
import mysql from '../../Assets/Icons/mysql-logo.49776012f627ac4e42a9.png';
import postman from '../../Assets/Icons/postman_processed.png';
import git from '../../Assets/Icons/git_processed (1).png';
import jira from '../../Assets/Icons/jira_processed.png';
import heroku from '../../Assets/Icons/heroku_processed.png';
function About() {

  return (<>
  <div className='About-container'>
    <h1 className='title-about'>About Me</h1>
    <div className='camilo-container'>
    <img className='camilo-image' src={camilo} alt='camilo-image'/>
    <p className='p-about-me'>
    I am currently based in Whistler, Canada. Throughout my years here,
     I have refined my skills as both a mountain bike instructor at Whistler
      Bike Park and a snowboard instructor at Whistler Blackcomb. My passion 
      for guiding and teaching has been a significant part of my life - providing
       me valuable experiences with teamwork, leadership and communication. 
       As I transition into the world of software development, I offer a unique blend 
       of discipline, problem solving capabilities, and a proven ability to learn and
        adapt at a quick rate. These skills are essential in extreme sports and are equally 
        vital in tech. I am thrilled about the opportunities to blend my present
         background knowledge with new technologies, aiming to develop innovative 
         solutions that enhance user experiences.

</p>
    </div>
 
      <div className='my-skills'>
        <h2 className='title-about title-about__sub'>MY SKILLS</h2>
            <div className='skills-container'>
                    <div className='icon-container'>
                       <img src={js} className='icon icon__js'/>             
                       <div className='skills skills__js'>JavaScript</div>
                   </div>
                    <div className='icon-container'>
                        <img src={reactIcon} className='icon icon__js'/>    
                        <div className='skills skills__react'>REACT</div>
                    </div>

                    <div className='icon-container'>
                        <img src={node} className='icon icon__js'/>    
                        <div className='skills skills__node'>NODEJS</div>
                    </div>
                          <div className='icon-container'>
                              <img src={axiosIcon} className='icon icon__axios'/>
                              <div className='skills skills__axios'>AXIOS</div>
                        </div>

                          <div className='icon-container'>
                              <img src={htmlIcon} className='icon icon__js'/>
                              <div className='skills skills__html'>HTML</div>
                          </div>

                        <div className='icon-container'>
                              <img src={cssIcon} className='icon icon__js'/>
                              <div className='skills skills__css'>CSS</div>
                        </div>

                        <div className='icon-container'>
                            <img src={sassIcon} className='icon icon__js'/>      
                            <div className='skills skills__sass'>SASS</div>
                        </div>

                        <div className='icon-container'>
                            <img src={netlify} className='icon icon__netlify'/> 
                            <div className='skills skills__netlify'>NETLIFY</div>
                        </div>

                        <div className='icon-container'>
                            <img src={reactIcon2} className='icon icon__js'/> 
                            <div className='skills skills__router'>REACT ROUTER</div>
                        </div>

                        <div className='icon-container'>
                            <img src={mysql} className='icon icon__js'/> 
                            <div className='skills skills__mysql'>MYSQL</div>
                        </div>

                        <div className='icon-container'>
                            <img src={postman} className='icon icon__js'/> 
                            <div className='skills skills__postman'>POSTMAN</div>
                        </div>

                        <div className='icon-container'>
                            <img src={git} className='icon icon__git'/> 
                            <div className='skills skills__git'>GIT</div>
                        </div>

                        <div className='icon-container'>
                            <img src={jira} className='icon icon__js'/>
                            <div className='skills skills__jira'>JIRA</div>
                          </div>

                        <div className='icon-container'>
                            <img src={heroku} className='icon icon__heroku'/>
                            <div className='skills skills__heroku'>HEROKU</div>
                          </div>
    
                     
              </div>
       </div>

        <div className='my-education'>
            <h2 className='title-about title-about__sub'>MY EDUCATION</h2>
            <h3>Software Engineering Diploma</h3>
            <span>Nov 2023- Jul 2024 / BrainStation</span>
            <span>isnfis</span>
            <ul>
              <li>
                At BrainStation’s Software Engineering bootcamp,
                 I developed a solid understanding of the fundamentals
                  of software engineering and full-stack development. 
                  I learned how to build responsive websites with HTML, CSS,
                   and JavaScript while also working with robust back-end 
                   technologies to create functional web applications.
                </li>
                 <li> 
                    The journey began with mastering basic programming concepts,
                    markup languages, and setting up a self-sufficient development
                      environment. I gained practical experience by collaborating on 
                      software engineering projects, utilizing tools like HTML5, 
                      Visual Studio Code, and Jira to manage and develop code efficiently.
                  </li>
              <li>
                The bootcamp also focused on back-end development, equipping
                 me with the technical know-how required for full-stack development.
                  Additionally, I explored DevOps methodologies, which simplified
                   the process of deploying projects and provided insight into managing
                    deployments from start to finish.
                    </li>
            </ul>
        </div>





    </div>
    </> )
}

export default About