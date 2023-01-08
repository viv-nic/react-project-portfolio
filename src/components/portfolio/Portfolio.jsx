import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

 const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Building Website using HTML & CSS',
    github: 'https://github.com/viv-nic/CLG-Foundation-of-Web-Dev-Project-1 ',
    demo: 'https://clg-foundation-web-dev-project-1.netlify.app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Building Website using React',
    github: 'https://github.com/viv-nic/CLG-React-Assignments',
    demo: 'https://viv-nic-clg-react-assignments.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Weather App using JavaScript',
    github: 'https://github.com/viv-nic/JavaScript-Project-2',
    demo: 'https://viv-nic-js-project-2.netlify.app'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Rock, Paper & Scissors using JavaScript',
    github: 'https://github.com/viv-nic/JavaScript-Project-2',
    demo: 'https://viv-nic-js-project-2.netlify.app'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Simple TODO List using React',
    github: 'https://github.com',
    demo: 'https://viv-nic-clg-react-assignments.netlify.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Book Search App using React/API',
    github: 'https://github.com',
    demo: 'https://viv-nic-clg-react-assignments.netlify.app/'
  },
 ]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
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