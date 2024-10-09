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
import git from '../../Assets/Icons/gitcat2.png';
import jira from '../../Assets/Icons/jira_processed.png';
import heroku from '../../Assets/Icons/heroku_processed.png';
import { Link } from 'react-router-dom';
import { GiClick } from "react-icons/gi";

function About() {

  return (<>
  <div className='About-container'>
    <h1 className='title-about'>About Me</h1>
    <div className='camilo-container'>
    <img className='camilo-image' src={camilo} alt='camilo-image'/>
    <p className='p-about-me'>
    As a software engineer, I believe human life 
    can be better by using technology to solve people’s necessities.
     I developed a love for programming through my journey studying 
     remotely at BrainStation, the idea that you can build anything
      with Javascript makes me reinforce my philosophy that NOTHING 
      IS IMPOSSIBLE. I used to enjoy building robots and spaceships
       with whatever I had in my hands when I was a kid and I see
        programming as "legos for adults". When I am not at my desk
         building or studying, I am mountain biking or snowboarding
          in Whistler where I also instruct these two disciplines.
           Being able to teach extreme sports and also use my brain 
           to solve problems keeps my body and mind sharp.

</p>
     

    </div>
    <div className='resume-btn-container' >
       <Link to='https://drive.google.com/file/d/1c3PNMD0Opz_BoeV40cSx0PvTMda0DvMC/view?usp=sharing'>
        <button className='resume-btn'>Resume<GiClick /></button>
        </Link>
        </div>
  <div className='skills-education-wrap'>
      <div className='my-skills'>
        <h2 className='title-about title-about__sub'>MY SKILLS</h2>
            <div className='skills-container'>
                    <div className='icon-container'>
                       <img alt='js' src={js} className='icon icon__js'/>             
                       <div className='skills skills__js'>JavaScript</div>
                   </div>
                    <div className='icon-container'>
                        <img alt='react-icon' src={reactIcon} className='icon icon__react'/>    
                        <div className='skills skills__react'>REACT</div>
                    </div>

                    <div className='icon-container'>
                        <img alt='node' src={node} className='icon icon__node'/>    
                        <div className='skills skills__node'>NODEJS</div>
                    </div>
                 

                          <div className='icon-container'>
                              <img alt='htmlicon' src={htmlIcon} className='icon icon__html'/>
                              <div className='skills skills__html'>HTML</div>
                          </div>

                          <div className='icon-container'>
                            <img alt='mysql' src={mysql} className='icon icon__mysql'/> 
                            <div className='skills skills__mysql'>MYSQL</div>
                        </div>

                        <div className='icon-container'>
                              <img alt='cssIcon' src={cssIcon} className='icon icon__css'/>
                              <div className='skills skills__css'>CSS</div>
                        </div>

                        <div className='icon-container'>
                            <img alt='sass' src={sassIcon} className='icon icon__sass'/>      
                            <div className='skills skills__sass'>SASS</div>
                        </div>

                        <div className='icon-container'>
                            <img alt='netlify' src={netlify} className='icon icon__netlify'/> 
                            <div className='skills skills__netlify'>NETLIFY</div>
                        </div>

                        <div className='icon-container'>
                            <img alt='router' src={reactIcon2} className='icon icon__router'/> 
                            <div className='skills skills__router'>REACT ROUTER</div>
                        </div> 

                        <div className='icon-container'>
                              <img alt='axios' src={axiosIcon} className='icon icon__axios'/>
                              <div className='skills skills__axios'>AXIOS</div>
                        </div>

                        <div className='icon-container'>
                            <img alt='postman' src={postman} className='icon icon__postman'/> 
                            <div className='skills skills__postman'>POSTMAN</div>
                        </div>

                        <div className='icon-container'>
                            <img alt='git' src={git} className='icon icon__git'/> 
                            <div className='skills skills__git'>GIT</div>
                        </div>

                        <div className='icon-container'>
                            <img alt='jira' src={jira} className='icon icon__jira'/>
                            <div className='skills skills__jira'>JIRA</div>
                          </div>

                        <div className='icon-container'>
                            <img alt='heroku' src={heroku} className='icon icon__heroku'/>
                            <div className='skills skills__heroku'>HEROKU</div>
                          </div>
    
                     
              </div>
       </div>

        <div className='my-education'>
            <h2 className='title-about title-about__sub'>EDUCATION</h2>
            <h3 >Software Engineering Diploma</h3>
            <span className='education-date'>Nov 2023- Jul 2024 / BrainStation</span>
            <ul className='p-about-me education-list-container'>
              <li className='education-list'>
                At BrainStation’s Software Engineering bootcamp,
                 I developed a solid understanding of the fundamentals
                  of software engineering and full-stack development. 
                  I learned how to build responsive websites with HTML, CSS,
                   and JavaScript while also working with robust back-end 
                   technologies to create functional web applications.
                </li>
                 <li className='education-list'> 
                    The journey began with mastering basic programming concepts,
                    markup languages, and setting up a self-sufficient development
                      environment. I gained practical experience by collaborating on 
                      software engineering projects, utilizing tools like HTML5, 
                      Visual Studio Code, and Jira to manage and develop code efficiently.
                  </li>
              <li className='education-list'>
                The bootcamp also focused on back-end development, equipping
                 me with the technical know-how required for full-stack development.
                  Additionally, I explored DevOps methodologies, which simplified
                   the process of deploying projects and provided insight into managing
                    deployments from start to finish.
                    </li>
            </ul>
        </div>

        </div>



    </div>
    </> )
}

export default About