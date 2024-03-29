import React from 'react';
import Particle from '../../components/home/Particle'
import '../../assets/css/home.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


//library Creation
library.add(fas);

const Home = () => {
    return (
        <section id="home">
            <Particle/>
            <a href="#contact" className='scroll_down'>Scroll Down</a>
            <div className="my-logo">
                <a className="myname" href="#about">JosephineBut</a>
            </div> 
            
           
            <div className="container home__container">
                <p>Hello, I am Josephine But. Welcome to my website.</p>
                <h3>Explore</h3>
                <div className="menu-direction">
                    <div><FontAwesomeIcon icon={["fas", "angles-down"]} size="2x"/></div>
                </div>
            </div> 
            </section>

    )
}

export default Home