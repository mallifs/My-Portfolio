import React from 'react'
import "./about.css"
import AP from '../../assets/img1.jpg'
import {FaAward} from 'react-icons/fa'
import {LuFolderGit2} from 'react-icons/lu'

const About = () => {
  return (
     <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
              <img src={AP} alt='about-pic'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>Stilling Learning</small>
            </article>

             <article className='about__card'>
                < LuFolderGit2 className='about__icon'/>
                <h5>Projects</h5>
                <small>100+ Completed Projects</small>
            </article>
          </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quas modi ad odio quis esse perspiciatis odit adipisci nisi similique mollitia dolor, eius reprehenderit dolores, sapiente explicabo? Illum, maxime quos!
            </p>
            <a href='contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>     
     </section>
  )
}

export default About