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
                <small> +3 Years</small>
            </article>

             <article className='about__card'>
                < LuFolderGit2 className='about__icon'/>
                <h5>Projects</h5>
                <small> +2 Completed Projects</small>
            </article>
          </div>
            <p>
            Hello, I'm Simintei Leon, a driven full-stack developer specializing in backend development. Proficient in Python, Ruby, and Node.js,
            I thrive on building robust and scalable solutions that power seamless user experiences.
            Despite being in the early stages of my career, I've already demonstrated my ability to architect efficient systems and optimize performance for diverse projects. 
            With a solid foundation in computer science and a passion for continuous learning, I'm eager to dive deeper into the industry and contribute to impactful projects. 
            Whether it's crafting APIs, optimizing database performance, or diving into server-side scripting, I'm ready to tackle any challenge head-on. 
            If you're in search of a dedicated backend developer who brings versatility, enthusiasm, and a strong technical skill set to the table, I'd love to connect. Whether it's discussing potential opportunities or simply exchanging insights about the industry, I'm ready to dive in and make a meaningful contribution. Thank you for considering me as a potential partner in your journey of innovation and growth!"
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>     
     </section>
  )
}

export default About