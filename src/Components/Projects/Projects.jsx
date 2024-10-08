import React from 'react'
import './Projects.scss';
import findyourbuddy from '../../Assets/Images/Find your Buddy (6).bd7a2fe91af7905cfd3f.png';
import jsicon from '../../Assets/Icons/javascript-logo.4e8fda8d9b17dd9d4c30.png';
import reactIcon from '../../Assets/Icons/react-logo.bcab5c24998b4ff7ba93.png';
import mysql from '../../Assets/Icons/mysql-logo.49776012f627ac4e42a9.png';
import Sass from '../../Assets/Icons/sass.png';
import node from '../../Assets/Icons/node.png';
import knexIcon from '../../Assets/Icons/knex-js.svg';
import { GiClick } from "react-icons/gi";


import { Link } from 'react-router-dom';
function Projects() {
  return (<>
  <div className='projects-wrap'>
    <h1 className='projects-title'>Projects</h1>
    <div className='project-container'>
      <Link className='logo-findyourbuddy' to='https://67006afc58a34936a8cb76e7--findyourbuddy.netlify.app/' >
        <img  className='logo-findyourbuddy' src={findyourbuddy} alt='findyourbuddy'/>
    </Link>
    <span className='date-project'>Sep 27 2024</span>
   <Link className='date-project' to='https://67006afc58a34936a8cb76e7--findyourbuddy.netlify.app/'><span>Go to app<GiClick />

</span></Link> 
    <ul className='project-description-container'>
      <li className='project-description'>
      FindYourBuddy is an app designed to connect riders
       visiting the Sea to Sky area who are looking to meet
        others for mountain biking or skiing/snowboarding.
         As both a Mountain Bike and Snowboard Instructor, 
         I’ve seen many visitors come to this beautiful place,
          excited to ride, but not knowing anyone to join them.
           That’s why I created this app — to help people find 
           riding buddies and make the most of their experience
      </li>
      <li className='project-description'>
      After signing up, you can log in and start exploring. 
      The first section you'll see is the "Pool," where all 
      user posts are displayed. Each post has its own chat feature,
       which you can join by clicking the "Join" button. 
       This allows you to chat with the host of the post and 
       others who are interested in the same activity.
      </li>
      <li className='project-description'>
      You can filter posts, chats you're part of, 
      and your own posts. Additionally, you have
       the ability to edit or delete posts, chats,
        and update your profile as needed. If you'd 
        like to host your own event, simply click the 
        "Keen for a Plan" button, where you can add a 
        location, title, and details of your plan.
      </li>
    </ul>
    <span className='project-description project-description__sub'>I’m also working on developing
       this app for both iOS and Android platforms in the near future.
       </span>
       <div className='app-technologies-container'>
       <h2 className='sub-title-project'>What I used </h2>
           <div className='app-tenchnologies-container'>
              <p className='app-technologies'> 
                Front end built using JavaScript, React,
                    and Sass for styling.
              </p>
              <div className='cube-container'>
        <div className='cube'>
              <div className='face front'><img className='icon-technologies' src={jsicon} alt='JavaScript icon' /></div>
              <div className='face back'><img className='icon-technologies' src={reactIcon} alt='React icon' /></div>
              <div className='face left'><img className='icon-technologies' src={Sass} alt='Sass icon' /></div>
              <div className='face right'><img className='icon-technologies' src={jsicon} alt='JavaScript icon' /></div> 
              <div className='face top'><img className='icon-technologies' src={reactIcon} alt='React icon' /></div>
              <div className='face bottom'><img className='icon-technologies' src={Sass} alt='Sass icon' /></div>
          </div>
          </div>
          </div>
          <div className='app-tenchnologies-container'>
          <p className='app-technologies'>
              On the back end, I used Node.js
                  with an Express server, MySQL for the database,
                  and Knex.js as the query builder.
              </p>
           <div className='cube-container'>
              <div className='cube cube__two'>
                  <div className='face front'><img className='icon-technologies' src={node} alt='node icon' /></div>
                  <div className='face back'><img className='icon-technologies' src={mysql} alt='mysql icon' /></div>
                  <div className='face left'><img className='icon-technologies' src={knexIcon} alt='knex icon' /></div>
                  <div className='face right'><img className='icon-technologies' src={node} alt='node icon' /></div> 
                  <div className='face top'><img className='icon-technologies' src={mysql} alt='mysql icon' /></div>
                  <div className='face bottom'><img className='icon-technologies' src={knexIcon} alt='knex icon' /></div>
              </div>
          </div>
          </div>
        </div>
   
         </div>
    </div>
    </>)
}

export default Projects