import React from 'react'
import "./portfolio.css"
import PP1 from '../../assets/img8.jpg'
import PP2 from '../../assets/img9.jpg'

const data =[
  {
    id:1,
    image: PP1 ,
    title: "Nike-Hub",
    github: "https://github.com/mallifs/Nike-Hub",
    demo: "https://nike-hub.onrender.com"
  },

  {
    id:1,
    image: PP2 ,
    title: "Stella-Space",
    github: "https://github.com/mallifs/Stellar-Space",
    demo: "https://stella-space.onrender.com"
  }
]



const Portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h5>my Recent Work</h5> 
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

         {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key ={id} className='portfolio__item'> 

              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>

                <h3> {title}</h3>
                
              <div className="portfolio__item-cta">
                    <a href= {github} className='btn' target='_blank'>Github</a>
                    <a href= {demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>

               </article>
            )
          })
         }
 
      </div>
    </section>
  )
}

export default Portfolio