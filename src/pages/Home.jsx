import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import orchestra from '../assets/orchestra.jpg' 
import './styles.css'

const Home = () => {
  return (
    <div>
    <Header />
        <div className="slash_screen">
            <h1 className="text_overlay">Welcome to the Evening Rehearsal Orchestra of St Albans</h1>
            <img className="slash_img" src={orchestra} alt="orchestra" />
        </div>
        <div className="main_text">

      <h2>Conductor: Darren Bloom</h2>

      <p>
        Our orchestra is a vibrant ensemble of around 35 musicians, gathering in St Albans on Monday evenings during term time. Subscriptions are paid on a termly basis.
      </p>

      <p>
        We work through a curated repertoire each term, welcoming players of all abilities. No auditions are required, though an ability to sight-read music will be beneficial.
      </p>

      <p>
        Unlike many orchestras, we do not give formal concerts. This allows our members to explore substantial works from the classical repertoire without the pressure of public performance. Members are also encouraged to perform solo pieces, such as movements from concertos, with the orchestra.
      </p>

      <p>
        At the end of each term, we host a formal play-through of the pieces rehearsed, inviting friends and family to share in the music.
      </p>

      <p>
        If you are interested in joining, please use the <Link to="/contact">Contact Us</Link> option to make an enquiry. String players are always welcome, as are additional brass musicians.
      </p>

      <p>
        Our orchestra is proud to be a member of STARTS (St Albans Arts) and is affiliated with Making Music.
      </p>

      <p>
        For term dates and repertoire, see the <Link to="/programme">Programme Section</Link>.
      </p>
    
        
        
        </div>
        
    
    </div>
  )
}

export default Home;
