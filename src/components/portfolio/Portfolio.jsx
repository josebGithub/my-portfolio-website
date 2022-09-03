import React from 'react'
import '../../assets/css/portfolio.css'
import PortfolioData from "../../data/portfolio.json";
import {BsGithub} from 'react-icons/bs';
import {CgFileDocument} from 'react-icons/cg';
import {MdSmartDisplay} from 'react-icons/md';

const Portfolio = () => {
  return (
      <section id='portfolio'>
        <h5>My Portfolio</h5>
  
        <div className = "container portfolio__container">
          {
            PortfolioData.data.map((item) => {
              return (
                <article className='portfolio__item'>
                  <div className='portfolio__item-image'>
                    <img src={require(`../../assets/images/${item.image}`)} alt={item.title}/>
                  </div>
                
                  <h3>{item.title}</h3>
                  <div className='portfolio__item-description'>
                    <p>
                      {item.description}
                    </p>
                  </div>
                  <div className='portfolio__item-skills'>
                    {item.skills.map((skill) => <button class="small-circle">{skill}</button>
                    )}
                  </div>
                  <div className='portfolio__item-cta'>
                      { (item.github !="none") ?
                          <a href={item.github} className='btn btn-small' target='_blank'><BsGithub size={'1.1rem'}/> GITHUB</a> :null}
                    
                      { (item.docs !="none") ?
                          <a href={item.docs} className='btn btn-small' target='_blank'><CgFileDocument size={'1rem'}/> DOCS</a> : null}

                      { (item.demo !="none") ?
                          <a href={item.demo} className='btn btn-small' target='_blank'><MdSmartDisplay size={15}/> DEMO</a> : null}
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
