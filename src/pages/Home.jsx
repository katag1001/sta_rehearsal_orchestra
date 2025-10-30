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
            <h1>Welcome to the Evening Rehearsal Orchestra of St Albans</h1>
            <img className="slash_img" src={orchestra} alt="orchestra" />
        </div>
        <div className="main_text">
<p>           
Conductor: Darren Bloom
</p><p>   
The orchestra is a group of around 35 players that meets in St Albans on Monday evenings during term time. Subscriptions are paid termly.
</p><p>  
We work on a set repertoire for a term and cater for players with a range of abilities. No auditions are required although an ability to sight read will help.
</p><p>  
We do not give concerts, thus giving players an opportunity to tackle substantial works from the classical repertoire without the pressure of public performance. Members are also welcome to play solo pieces, such as movements from concertos, with the orchestra.
</p><p>  
Although we don’t give concerts, at the end of each term we do have a formal play through of the pieces that we have been rehearsing to which friends and family are invited.
</p><p>  
Please use the Contact Us option to make an enquiry. String players are always welcome, as are additional brass.
</p><p>  
The Orchestra is a member of STARTS (St Albans Arts) and is affiliated to Making Music.
</p><p>  
See the Programme Section for term dates and programme.
</p>
        </div>
        
    
    </div>
  )
}

export default Home;
