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
                <small>5+ Completed Projects</small>
            </article>
          </div>
            <p>
               Hello, and welcome to my profile! My name is Leon Simintei, and I am a self-taught front-end and Back-end developer  with a passion for creating engaging and user-friendly web applications.
               Currently, i'm still in school, where I am also learning and expanding my knowledge in software development.
               As a self-taught developer, I have taken the initiative to learn the latest technologies and techniques for creating dynamic and engaging user interfaces.
               Through practice and experimentation, I have honed my skills in <em>HTML</em> , <em>CSS</em>, <em>JAVASCRIPT</em>, <em>REACT</em>, <em>RUBY ON RAILS</em>, <em>SINATRA</em>.
               My portfolio  reflects my dedication to constantly learning and improving as a developer. I am always on the lookout for new challenges that will push me out of my comfort zone and help me grow my skills.
               My ultimate goal is to create innovative and user-friendly web applications that provide real value to users.
               I am always open to new ideas and opportunities to collaborate with other passionate developers. If you're interested in discussing potential projects or just want to say hello, feel free to reach out to me.

              Thank you for visiting my profile, and I look forward to connecting with you!
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>     
     </section>
  )
}

export default About